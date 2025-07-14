interface DynamicsTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

interface DynamicsContact {
  firstname: string
  lastname: string
  emailaddress1: string
  telephone1?: string
  address1_line1?: string
  address1_city?: string
  address1_stateorprovince?: string
  address1_postalcode?: string
  dd_membershiptype?: string
  dd_memberstatus?: string
}

export class DynamicsIntegrationService {
  private static async getAccessToken(): Promise<string> {
    const clientId = process.env.DYNAMICS_CLIENT_ID!
    const clientSecret = process.env.DYNAMICS_CLIENT_SECRET!
    const tenantId = process.env.DYNAMICS_TENANT_ID!
    const resource = process.env.DYNAMICS_BASE_URL!

    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/token`

    const params = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      resource: resource,
      grant_type: "client_credentials",
    })

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    })

    if (!response.ok) {
      throw new Error(`Failed to get Dynamics access token: ${response.statusText}`)
    }

    const data: DynamicsTokenResponse = await response.json()
    return data.access_token
  }

  static async syncMember(memberData: {
    first_name: string
    last_name: string
    email: string
    phone?: string
    address?: string
    membership_type: string
    membership_status: string
  }): Promise<string> {
    const accessToken = await this.getAccessToken()
    const baseUrl = process.env.DYNAMICS_BASE_URL!

    const contact: DynamicsContact = {
      firstname: memberData.first_name,
      lastname: memberData.last_name,
      emailaddress1: memberData.email,
      telephone1: memberData.phone,
      dd_membershiptype: memberData.membership_type,
      dd_memberstatus: memberData.membership_status,
    }

    // Parse address if provided
    if (memberData.address) {
      const addressParts = memberData.address.split(",")
      if (addressParts.length >= 3) {
        contact.address1_line1 = addressParts[0]?.trim()
        contact.address1_city = addressParts[1]?.trim()
        const stateZip = addressParts[2]?.trim().split(" ")
        if (stateZip.length >= 2) {
          contact.address1_stateorprovince = stateZip[0]
          contact.address1_postalcode = stateZip[1]
        }
      }
    }

    const response = await fetch(`${baseUrl}/api/data/v9.2/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0",
      },
      body: JSON.stringify(contact),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to sync member to Dynamics: ${response.statusText} - ${errorText}`)
    }

    const location = response.headers.get("OData-EntityId")
    const contactId = location?.split("(")[1]?.split(")")[0]
    return contactId || ""
  }

  static async syncRegistration(registrationData: {
    member_email: string
    event_title?: string
    program_title?: string
    registration_date: string
    amount_paid: number
  }): Promise<string> {
    const accessToken = await this.getAccessToken()
    const baseUrl = process.env.DYNAMICS_BASE_URL!

    // First, find the contact by email
    const contactResponse = await fetch(
      `${baseUrl}/api/data/v9.2/contacts?$filter=emailaddress1 eq '${registrationData.member_email}'&$select=contactid`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "OData-MaxVersion": "4.0",
          "OData-Version": "4.0",
        },
      },
    )

    if (!contactResponse.ok) {
      throw new Error("Failed to find contact in Dynamics")
    }

    const contactData = await contactResponse.json()
    if (!contactData.value || contactData.value.length === 0) {
      throw new Error("Contact not found in Dynamics")
    }

    const contactId = contactData.value[0].contactid

    // Create opportunity record for the registration
    const opportunity = {
      name: registrationData.event_title || registrationData.program_title || "Registration",
      dd_registrationdate: registrationData.registration_date,
      estimatedvalue: registrationData.amount_paid,
      "parentcontactid@odata.bind": `/contacts(${contactId})`,
    }

    const response = await fetch(`${baseUrl}/api/data/v9.2/opportunities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0",
      },
      body: JSON.stringify(opportunity),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to sync registration to Dynamics: ${response.statusText} - ${errorText}`)
    }

    const location = response.headers.get("OData-EntityId")
    const opportunityId = location?.split("(")[1]?.split(")")[0]
    return opportunityId || ""
  }

  static async bulkSyncMembers(members: any[]): Promise<{ success: number; failed: number; errors: string[] }> {
    let success = 0
    let failed = 0
    const errors: string[] = []

    for (const member of members) {
      try {
        await this.syncMember(member)
        success++
      } catch (error: any) {
        failed++
        errors.push(`${member.email}: ${error.message}`)
      }
    }

    return { success, failed, errors }
  }
}
