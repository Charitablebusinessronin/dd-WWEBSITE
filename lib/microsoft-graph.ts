interface GraphTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

interface CalendarEvent {
  subject: string
  body: {
    contentType: string
    content: string
  }
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  location?: {
    displayName: string
  }
  attendees: Array<{
    emailAddress: {
      address: string
      name?: string
    }
    type: string
  }>
  isOnlineMeeting?: boolean
  onlineMeetingProvider?: string
}

export class MicrosoftGraphService {
  private static async getAccessToken(): Promise<string> {
    const clientId = process.env.MICROSOFT_CLIENT_ID!
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET!
    const tenantId = process.env.MICROSOFT_TENANT_ID!

    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`

    const params = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
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
      throw new Error(`Failed to get access token: ${response.statusText}`)
    }

    const data: GraphTokenResponse = await response.json()
    return data.access_token
  }

  static async createCalendarEvent(eventData: {
    title: string
    description?: string
    startDateTime: string
    endDateTime: string
    location?: string
    attendeeEmails: string[]
    includeTeams?: boolean
    organizerEmail: string
  }): Promise<any> {
    const accessToken = await this.getAccessToken()

    const calendarEvent: CalendarEvent = {
      subject: eventData.title,
      body: {
        contentType: "HTML",
        content: eventData.description || "",
      },
      start: {
        dateTime: eventData.startDateTime,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: eventData.endDateTime,
        timeZone: "America/New_York",
      },
      attendees: eventData.attendeeEmails.map((email) => ({
        emailAddress: {
          address: email,
          name: email.split("@")[0],
        },
        type: "required",
      })),
    }

    if (eventData.location) {
      calendarEvent.location = {
        displayName: eventData.location,
      }
    }

    if (eventData.includeTeams) {
      calendarEvent.isOnlineMeeting = true
      calendarEvent.onlineMeetingProvider = "teamsForBusiness"
    }

    const response = await fetch(`https://graph.microsoft.com/v1.0/users/${eventData.organizerEmail}/events`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calendarEvent),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to create calendar event: ${response.statusText} - ${errorText}`)
    }

    return response.json()
  }

  static async sendEmail(emailData: {
    to: string[]
    subject: string
    body: string
    fromEmail: string
  }): Promise<any> {
    const accessToken = await this.getAccessToken()

    const message = {
      message: {
        subject: emailData.subject,
        body: {
          contentType: "HTML",
          content: emailData.body,
        },
        toRecipients: emailData.to.map((email) => ({
          emailAddress: {
            address: email,
          },
        })),
      },
    }

    const response = await fetch(`https://graph.microsoft.com/v1.0/users/${emailData.fromEmail}/sendMail`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to send email: ${response.statusText} - ${errorText}`)
    }

    return { success: true }
  }
}
