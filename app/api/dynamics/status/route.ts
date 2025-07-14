import { NextResponse } from "next/server"

export async function GET() {
  try {
    const requiredEnvVars = ["DYNAMICS_CLIENT_ID", "DYNAMICS_CLIENT_SECRET", "DYNAMICS_TENANT_ID", "DYNAMICS_BASE_URL"]

    const envStatus = requiredEnvVars.reduce(
      (acc, varName) => {
        acc[varName] = {
          configured: !!process.env[varName],
          value: process.env[varName] ? `${process.env[varName]?.substring(0, 8)}...` : "Not set",
        }
        return acc
      },
      {} as Record<string, { configured: boolean; value: string }>,
    )

    const allConfigured = requiredEnvVars.every((varName) => !!process.env[varName])

    return NextResponse.json({
      configured: allConfigured,
      environment: envStatus,
      setupComplete: allConfigured,
      nextSteps: allConfigured
        ? ["Test authentication", "Test member sync", "Begin using integration"]
        : ["Configure missing environment variables", "Deploy to Vercel", "Test integration"],
    })
  } catch (error: any) {
    console.error("Dynamics status check error:", error)
    return NextResponse.json(
      {
        configured: false,
        error: error.message || "Failed to check Dynamics 365 status",
      },
      { status: 500 },
    )
  }
}
