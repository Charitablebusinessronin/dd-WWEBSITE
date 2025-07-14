import { type NextRequest, NextResponse } from "next/server"
import { MicrosoftGraphService } from "@/lib/microsoft-graph"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, startDate, startTime, endDate, endTime, location, attendeeEmails, includeTeams } = body

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
      organizerEmail: "admin@work.capturefantasy.com",
    })

    // Send meeting invitation email
    const emailBody = `
      <h2>Meeting Invitation: ${title}</h2>
      <p><strong>Date:</strong> ${startDate} at ${startTime}</p>
      <p><strong>Duration:</strong> ${startTime} - ${endTime}</p>
      <p><strong>Location:</strong> ${location || (includeTeams ? "Microsoft Teams (link in calendar)" : "TBD")}</p>
      ${description ? `<p><strong>Agenda:</strong> ${description}</p>` : ""}
      <p>This meeting has been added to your calendar. ${includeTeams ? "Join the Teams meeting using the link in your calendar invitation." : ""}</p>
      <p>Best regards,<br>Difference Driven Community Center</p>
    `

    await MicrosoftGraphService.sendEmail({
      to: attendeeEmails,
      subject: `Meeting Invitation: ${title}`,
      body: emailBody,
      fromEmail: "admin@work.capturefantasy.com",
    })

    return NextResponse.json({
      success: true,
      eventId: event.id,
      message: "Meeting scheduled and invitations sent successfully",
    })
  } catch (error: any) {
    console.error("Meeting invitation error:", error)
    return NextResponse.json({ error: error.message || "Failed to schedule meeting" }, { status: 500 })
  }
}
