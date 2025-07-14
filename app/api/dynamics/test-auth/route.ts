import { NextResponse } from "next/server"

export async function GET() {
  try {
    const clientId = process.env.DYNAMICS_CLIENT_ID
    const clientSecret = process.env.DYNAMICS_CLIENT_SECRET
    const tenantId = process.env.DYNAMICS_TENANT_ID
    const resource = process.env.DYNAMICS_BASE_URL

    // Check if all required environment variables are present
    if (!clientId || !clientSecret || !tenantId || !resource) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required environment variables",
          missing: {
            clientId: !clientId,
            clientSecret: !clientSecret,
            tenantId: !tenantId,
            resource: !resource,
          },
        },
        { status: 400 },
      )
    }

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
      const errorText = await response.text()
      return NextResponse.json(
        {
          success: false,
          error: `Authentication failed: ${response.statusText}`,
          details: errorText,
          status: response.status,
        },
        { status: response.status },
      )
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      message: "Authentication successful!",
      tokenType: data.token_type,
      expiresIn: data.expires_in,
      hasAccessToken: !!data.access_token,
    })
  } catch (error: any) {
    console.error("Dynamics authentication test error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to test Dynamics 365 authentication",
      },
      { status: 500 },
    )
  }
}
