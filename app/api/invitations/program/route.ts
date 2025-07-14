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

    // Create calendar event for program kickoff
    const event = await MicrosoftGraphService.createCalendarEvent({
      title: `Program: ${title}`,
      description: `Program enrollment confirmation and kickoff meeting.\n\n${description}`,
      startDateTime,
      endDateTime,
      location,
      attendeeEmails,
      includeTeams,
      organizerEmail: "admin@work.capturefantasy.com",
    })

    // Send program enrollment confirmation email
    const emailBody = `
      <h2>Program Enrollment Confirmation: ${title}</h2>
      <p>Congratulations! You have been enrolled in our program.</p>
      <p><strong>Program Start:</strong> ${startDate} at ${startTime}</p>
      <p><strong>Location:</strong> ${location || "TBD"}</p>
      <p><strong>Program Details:</strong> ${description || "Details will be provided during orientation"}</p>
      <p>A calendar invitation has been sent for the program orientation. Please attend to learn more about the program structure and requirements.</p>
      <p>Best regards,<br>Difference Driven Community Center</p>
    `

    await MicrosoftGraphService.sendEmail({
      to: attendeeEmails,
      subject: `Program Enrollment Confirmation: ${title}`,
      body: emailBody,
      fromEmail: "admin@work.capturefantasy.com",
    })

    return NextResponse.json({
      success: true,
      eventId: event.id,
      message: "Program invitations sent successfully",
    })
  } catch (error: any) {
    console.error("Program invitation error:", error)
    return NextResponse.json({ error: error.message || "Failed to send program invitations" }, { status: 500 })
  }
}
