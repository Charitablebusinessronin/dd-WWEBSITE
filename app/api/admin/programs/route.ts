import { NextResponse } from "next/server"
import { DatabaseService } from "@/lib/database-service"

export async function GET() {
  try {
    const programs = await DatabaseService.getActivePrograms()
    return NextResponse.json({ programs })
  } catch (error: any) {
    console.error("Error fetching programs:", error)
    return NextResponse.json({ error: "Failed to fetch programs" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const programData = await request.json()
    const program = await DatabaseService.createProgram(programData)
    return NextResponse.json({ program })
  } catch (error: any) {
    console.error("Error creating program:", error)
    return NextResponse.json({ error: "Failed to create program" }, { status: 500 })
  }
}
