"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Users, Calendar, BookOpen, DollarSign, Plus, Edit, Trash2, Mail, Phone, MapPin, Settings } from "lucide-react"
import { DatabaseService } from "@/lib/database-service"
import type { Member, Program, Event, Content, Donation } from "@/types/database"
import { InvitationManager } from "@/components/invitation-manager"

export default function AdminDashboard() {
  const [user, setUser] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [members, setMembers] = useState<Member[]>([])
  const [programs, setPrograms] = useState<Program[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [content, setContent] = useState<Content[]>([])
  const [donations, setDonations] = useState<Donation[]>([])
  const [stats, setStats] = useState({
    totalMembers: 0,
    activePrograms: 0,
    upcomingEvents: 0,
    totalDonations: 0,
  })
  const router = useRouter()

  // Form states
  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    category: "",
    start_date: "",
    end_date: "",
    capacity: 0,
    price: 0,
    status: "active" as const,
  })

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    event_date: "",
    location: "",
    capacity: 0,
    price: 0,
    status: "upcoming" as const,
  })

  const [newContent, setNewContent] = useState({
    title: "",
    content: "",
    content_type: "news" as const,
    status: "draft" as const,
    featured: false,
    author: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    const checkAuth = async () => {
      const userData = localStorage.getItem("user")
      if (userData) {
        const parsedUser = JSON.parse(userData)
        if (parsedUser.role !== "admin") {
          router.push("/dashboard")
          return
        }
        setUser(parsedUser)
        await loadData()
      } else {
        router.push("/login")
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [router])

  const loadData = async () => {
    try {
      const [membersData, programsData, eventsData, contentData, donationsData] = await Promise.all([
        DatabaseService.getMembers(),
        DatabaseService.getActivePrograms(),
        DatabaseService.getUpcomingEvents(),
        DatabaseService.getPublishedContent(),
        DatabaseService.getDonations(20),
      ])

      setMembers(membersData)
      setPrograms(programsData)
      setEvents(eventsData)
      setContent(contentData)
      setDonations(donationsData)

      setStats({
        totalMembers: membersData.length,
        activePrograms: programsData.length,
        upcomingEvents: eventsData.length,
        totalDonations: donationsData.reduce((sum, d) => sum + d.amount, 0),
      })
    } catch (err) {
      console.error("Error loading data:", err)
      setError("Failed to load dashboard data")
    }
  }

  const handleCreateProgram = async () => {
    try {
      await DatabaseService.createProgram(newProgram)
      setSuccess("Program created successfully!")
      setNewProgram({
        title: "",
        description: "",
        category: "",
        start_date: "",
        end_date: "",
        capacity: 0,
        price: 0,
        status: "active",
      })
      await loadData()
    } catch (err) {
      setError("Failed to create program")
    }
  }

  const handleCreateEvent = async () => {
    try {
      await DatabaseService.createEvent(newEvent)
      setSuccess("Event created successfully!")
      setNewEvent({
        title: "",
        description: "",
        event_date: "",
        location: "",
        capacity: 0,
        price: 0,
        status: "upcoming",
      })
      await loadData()
    } catch (err) {
      setError("Failed to create event")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-dark-gray">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your community center</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => router.push("/admin/microsoft-setup")}
                variant="outline"
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                <Settings className="h-4 w-4 mr-2" />
                Microsoft Setup
              </Button>
              <Button onClick={() => router.push("/dashboard")} variant="outline">
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">{success}</AlertDescription>
          </Alert>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-dark-gray">{stats.totalMembers}</p>
                  <p className="text-sm text-gray-600">Total Members</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-dark-gray">{stats.activePrograms}</p>
                  <p className="text-sm text-gray-600">Active Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-dark-gray">{stats.upcomingEvents}</p>
                  <p className="text-sm text-gray-600">Upcoming Events</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-dark-gray">${stats.totalDonations.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">Total Donations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="meetings">Meetings</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
          </TabsList>

          {/* Members Tab */}
          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle>Community Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-gray">
                          {member.first_name} {member.last_name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {member.email}
                          </span>
                          {member.phone && (
                            <span className="flex items-center">
                              <Phone className="h-4 w-4 mr-1" />
                              {member.phone}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge
                            className={
                              member.membership_status === "active"
                                ? "bg-green-100 text-green-800"
                                : member.membership_status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }
                          >
                            {member.membership_status}
                          </Badge>
                          <Badge variant="outline">{member.membership_type}</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Programs</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-accent hover:bg-accent/90">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Program
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create New Program</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <Input
                              value={newProgram.title}
                              onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <Textarea
                              value={newProgram.description}
                              onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Category</label>
                              <Input
                                value={newProgram.category}
                                onChange={(e) => setNewProgram({ ...newProgram, category: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Capacity</label>
                              <Input
                                type="number"
                                value={newProgram.capacity}
                                onChange={(e) =>
                                  setNewProgram({ ...newProgram, capacity: Number.parseInt(e.target.value) })
                                }
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Start Date</label>
                              <Input
                                type="date"
                                value={newProgram.start_date}
                                onChange={(e) => setNewProgram({ ...newProgram, start_date: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">End Date</label>
                              <Input
                                type="date"
                                value={newProgram.end_date}
                                onChange={(e) => setNewProgram({ ...newProgram, end_date: e.target.value })}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Price ($)</label>
                            <Input
                              type="number"
                              step="0.01"
                              value={newProgram.price}
                              onChange={(e) =>
                                setNewProgram({ ...newProgram, price: Number.parseFloat(e.target.value) })
                              }
                            />
                          </div>
                          <Button onClick={handleCreateProgram} className="w-full">
                            Create Program
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programs.map((program) => (
                      <div key={program.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-dark-gray">{program.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{program.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                            <span>Category: {program.category}</span>
                            <span>
                              Capacity: {program.current_enrollment}/{program.capacity}
                            </span>
                            <span>Price: ${program.price}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <InvitationManager type="program" itemId={program.id} itemTitle={program.title} />
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Events</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-accent hover:bg-accent/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New Event</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Title</label>
                          <Input
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Description</label>
                          <Textarea
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Date & Time</label>
                            <Input
                              type="datetime-local"
                              value={newEvent.event_date}
                              onChange={(e) => setNewEvent({ ...newEvent, event_date: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Location</label>
                            <Input
                              value={newEvent.location}
                              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Capacity</label>
                            <Input
                              type="number"
                              value={newEvent.capacity}
                              onChange={(e) => setNewEvent({ ...newEvent, capacity: Number.parseInt(e.target.value) })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Price ($)</label>
                            <Input
                              type="number"
                              step="0.01"
                              value={newEvent.price}
                              onChange={(e) => setNewEvent({ ...newEvent, price: Number.parseFloat(e.target.value) })}
                            />
                          </div>
                        </div>
                        <Button onClick={handleCreateEvent} className="w-full">
                          Create Event
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-gray">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(event.event_date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </span>
                          <span>
                            Registered: {event.current_registrations}/{event.capacity}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <InvitationManager type="event" itemId={event.id} itemTitle={event.title} />
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Meetings Tab */}
          <TabsContent value="meetings">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Schedule Meetings</CardTitle>
                  <InvitationManager type="meeting" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Community Meetings</h3>
                  <p className="text-gray-600 mb-4">
                    Create and send Microsoft Calendar invitations for staff meetings, member consultations, and
                    community gatherings.
                  </p>
                  <InvitationManager type="meeting" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {content.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-gray">{item.title}</h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{item.content_type}</Badge>
                          <Badge
                            className={
                              item.status === "published"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {item.status}
                          </Badge>
                          {item.featured && <Badge className="bg-blue-100 text-blue-800">Featured</Badge>}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donations.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-gray">
                          {donation.anonymous ? "Anonymous Donor" : donation.donor_name || "Unknown"}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>${donation.amount.toFixed(2)}</span>
                          <span>{donation.donation_type}</span>
                          <span>{new Date(donation.created_at).toLocaleDateString()}</span>
                        </div>
                        {donation.message && <p className="text-sm text-gray-600 mt-2 italic">"{donation.message}"</p>}
                      </div>
                      <Badge
                        className={
                          donation.payment_status === "completed"
                            ? "bg-green-100 text-green-800"
                            : donation.payment_status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {donation.payment_status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
