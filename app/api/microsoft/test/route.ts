import { NextResponse } from "next/server"

export async function POST() {
  try {
    const clientId = process.env.MICROSOFT_CLIENT_ID
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET
    const tenantId = process.env.MICROSOFT_TENANT_ID

    if (!clientId || !clientSecret || !tenantId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required environment variables",
        },
        { status: 400 },
      )
    }

    // Test getting an access token
    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json(
        {
          success: false,
          error: `Authentication failed: ${error}`,
        },
        { status: 400 },
      )
    }

    const tokenData = await response.json()

    // Test a simple Graph API call
    const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })

    if (graphResponse.ok) {
      return NextResponse.json({
        success: true,
        message: "Microsoft Graph API connection successful!",
      })
    } else {
      // This might fail if using application permissions instead of delegated
      // Let's try a different endpoint
      const usersResponse = await fetch("https://graph.microsoft.com/v1.0/users?$top=1", {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      })

      if (usersResponse.ok) {
        return NextResponse.json({
          success: true,
          message: "Microsoft Graph API connection successful!",
        })
      } else {
        return NextResponse.json(
          {
            success: false,
            error: "Graph API access denied - check permissions",
          },
          { status: 403 },
        )
      }
    }
  } catch (error) {
    console.error("Microsoft test error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Connection test failed",
      },
      { status: 500 },
    )
  }
}
