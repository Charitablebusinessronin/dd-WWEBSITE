import { type NextRequest, NextResponse } from "next/server"
import { MicrosoftGraphService } from "@/lib/microsoft-graph"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      attendeeEmails,
      includeTeams,
      itemId,
    } = body

    // Combine date and time
    const startDateTime = `${startDate}T${startTime}:00`
    const endDateTime = `${endDate}T${endTime}:00`

    // Create calendar event
    const event = await MicrosoftGraphService.createCalendarEvent({
      title,
      description,
      startDateTime,
      endDateTime,
      location,
      attendeeEmails,
      includeTeams,
      organizerEmail: "admin@work.capturefantasy.com", // Replace with actual organizer email
    })

    // Send confirmation email
    const emailBody = `
      <h2>Event Invitation: ${title}</h2>
      <p><strong>Date:</strong> ${startDate} at ${startTime}</p>
      <p><strong>Location:</strong> ${location || "TBD"}</p>
      <p><strong>Description:</strong> ${description || "No description provided"}</p>
      <p>This event has been added to your calendar. Please check your calendar for full details.</p>
      <p>Best regards,<br>Difference Driven Community Center</p>
    `

    await MicrosoftGraphService.sendEmail({
      to: attendeeEmails,
      subject: `Event Invitation: ${title}`,
      body: emailBody,
      fromEmail: "admin@work.capturefantasy.com",
    })

    return NextResponse.json({
      success: true,
      eventId: event.id,
      message: "Event invitations sent successfully",
    })
  } catch (error: any) {
    console.error("Event invitation error:", error)
    return NextResponse.json({ error: error.message || "Failed to send event invitations" }, { status: 500 })
  }
}
