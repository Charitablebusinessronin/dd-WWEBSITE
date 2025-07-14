import { NextResponse } from "next/server"
import { DynamicsIntegrationService } from "@/lib/dynamics-integration"

export async function GET() {
  try {
    // Test member data
    const testMember = {
      first_name: "Test",
      last_name: "Member",
      email: "test.member@example.com",
      phone: "555-0123",
      address: "123 Test St, Test City, NC 27701",
      membership_type: "basic",
      membership_status: "active",
    }

    // Attempt to sync the test member
    const dynamicsId = await DynamicsIntegrationService.syncMember(testMember)

    return NextResponse.json({
      success: true,
      message: "Test member successfully synced to Dynamics 365!",
      dynamicsId: dynamicsId,
      testData: testMember,
    })
  } catch (error: any) {
    console.error("Dynamics sync test error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to test member sync",
        details: "Check your Dynamics 365 configuration and custom fields",
      },
      { status: 500 },
    )
  }
}
