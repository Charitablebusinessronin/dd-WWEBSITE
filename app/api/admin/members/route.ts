import { NextResponse } from "next/server"
import { DatabaseService } from "@/lib/database-service"

export async function GET() {
  try {
    const members = await DatabaseService.getMembers()
    return NextResponse.json({ members })
  } catch (error: any) {
    console.error("Error fetching members:", error)
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const memberData = await request.json()
    const member = await DatabaseService.createMember(memberData)
    return NextResponse.json({ member })
  } catch (error: any) {
    console.error("Error creating member:", error)
    return NextResponse.json({ error: "Failed to create member" }, { status: 500 })
  }
}
