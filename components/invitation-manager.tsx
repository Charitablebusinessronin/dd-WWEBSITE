"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Mail } from "lucide-react"

interface InvitationManagerProps {
  type: "event" | "program" | "meeting"
  itemId?: string
  itemTitle?: string
}

export function InvitationManager({ type, itemId, itemTitle }: InvitationManagerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [formData, setFormData] = useState({
    title: itemTitle || "",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
    attendees: "",
    includeTeams: false,
    sendReminder: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const endpoint = `/api/invitations/${type}`
      const payload = {
        ...formData,
        itemId,
        attendeeEmails: formData.attendees
          .split(",")
          .map((email) => email.trim())
          .filter(Boolean),
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to send invitation")
      }

      const result = await response.json()
      setSuccess(`${type === "meeting" ? "Meeting scheduled" : "Invitations sent"} successfully!`)

      // Reset form after success
      setTimeout(() => {
        setIsOpen(false)
        setSuccess("")
        setFormData({
          title: itemTitle || "",
          description: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
          location: "",
          attendees: "",
          includeTeams: false,
          sendReminder: true,
        })
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Failed to send invitation")
    } finally {
      setIsLoading(false)
    }
  }

  const getButtonText = () => {
    switch (type) {
      case "event":
        return "Send Event Invites"
      case "program":
        return "Send Program Invites"
      case "meeting":
        return "Schedule Meeting"
      default:
        return "Send Invitation"
    }
  }

  const getDialogTitle = () => {
    switch (type) {
      case "event":
        return `Send Event Invitations${itemTitle ? ` - ${itemTitle}` : ""}`
      case "program":
        return `Send Program Invitations${itemTitle ? ` - ${itemTitle}` : ""}`
      case "meeting":
        return "Schedule New Meeting"
      default:
        return "Send Invitation"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
          <Mail className="h-4 w-4 mr-2" />
          {getButtonText()}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            {getDialogTitle()}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertDescription className="text-red-800">{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder={`Enter ${type} title`}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                placeholder={`Describe the ${type}...`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="startTime">Start Time *</Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="endDate">End Date *</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="endTime">End Time *</Label>
                <Input
                  id="endTime"
                  name="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter location or 'Online' for virtual meetings"
              />
            </div>

            <div>
              <Label htmlFor="attendees">Attendee Email Addresses *</Label>
              <Textarea
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleInputChange}
                rows={3}
                placeholder="Enter email addresses separated by commas"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Separate multiple email addresses with commas</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="includeTeams"
                  checked={formData.includeTeams}
                  onCheckedChange={(checked) => handleCheckboxChange("includeTeams", checked as boolean)}
                />
                <Label htmlFor="includeTeams" className="text-sm">
                  Include Microsoft Teams meeting link
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sendReminder"
                  checked={formData.sendReminder}
                  onCheckedChange={(checked) => handleCheckboxChange("sendReminder", checked as boolean)}
                />
                <Label htmlFor="sendReminder" className="text-sm">
                  Send reminder 24 hours before the event
                </Label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? "Sending..." : getButtonText()}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
