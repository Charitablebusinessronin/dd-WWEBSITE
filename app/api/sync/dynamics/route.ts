import { type NextRequest, NextResponse } from "next/server"
import { DynamicsIntegrationService } from "@/lib/dynamics-integration"
import { DatabaseService } from "@/lib/database-service"

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json()

    switch (type) {
      case "member":
        const dynamicsId = await DynamicsIntegrationService.syncMember(data)
        return NextResponse.json({
          success: true,
          dynamicsId,
          message: "Member synced to Dynamics 365",
        })

      case "registration":
        const opportunityId = await DynamicsIntegrationService.syncRegistration(data)
        return NextResponse.json({
          success: true,
          opportunityId,
          message: "Registration synced to Dynamics 365",
        })

      case "bulk-members":
        const members = await DatabaseService.getMembers()
        const result = await DynamicsIntegrationService.bulkSyncMembers(members)
        return NextResponse.json({
          success: true,
          ...result,
          message: `Bulk sync completed: ${result.success} successful, ${result.failed} failed`,
        })

      default:
        return NextResponse.json({ error: "Invalid sync type" }, { status: 400 })
    }
  } catch (error: any) {
    console.error("Dynamics sync error:", error)
    return NextResponse.json({ error: error.message || "Failed to sync with Dynamics 365" }, { status: 500 })
  }
}
