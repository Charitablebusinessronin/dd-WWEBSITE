import { NextResponse } from "next/server"

export async function GET() {
  try {
    const status = {
      clientId: !!process.env.MICROSOFT_CLIENT_ID,
      clientSecret: !!process.env.MICROSOFT_CLIENT_SECRET,
      tenantId: !!process.env.MICROSOFT_TENANT_ID,
      permissions: false, // We'll update this after testing
    }

    return NextResponse.json(status)
  } catch (error) {
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 })
  }
}
