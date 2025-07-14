import { NextResponse } from "next/server"
import { DatabaseService } from "@/lib/database-service"

export async function GET() {
  try {
    const donations = await DatabaseService.getDonations(50)
    return NextResponse.json({ donations })
  } catch (error: any) {
    console.error("Error fetching donations:", error)
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const donationData = await request.json()
    const donation = await DatabaseService.createDonation(donationData)
    return NextResponse.json({ donation })
  } catch (error: any) {
    console.error("Error creating donation:", error)
    return NextResponse.json({ error: "Failed to create donation" }, { status: 500 })
  }
}
