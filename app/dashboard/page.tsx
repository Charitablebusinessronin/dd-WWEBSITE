"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Users, BookOpen, Award, Bell, Settings, TrendingUp } from "lucide-react"

interface Program {
  id: number
  title: string
  status: "enrolled" | "completed" | "upcoming"
  progress: number
  nextSession: string
  image: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Mock user programs data
  const [userPrograms] = useState<Program[]>([
    {
      id: 1,
      title: "Career Development Workshop",
      status: "enrolled",
      progress: 65,
      nextSession: "Tuesday, Jan 16 at 6:00 PM",
      image: "/career-development.png",
    },
    {
      id: 2,
      title: "Financial Literacy Bootcamp",
      status: "completed",
      progress: 100,
      nextSession: "Completed Dec 15, 2024",
      image: "/event-financial.png",
    },
    {
      id: 3,
      title: "Digital Skills Training",
      status: "upcoming",
      progress: 0,
      nextSession: "Starts Feb 5, 2025",
      image: "/community-workshop.png",
    },
  ])

  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "Community Health Fair",
      date: "Jan 20, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Main Hall",
    },
    {
      id: 2,
      title: "Financial Planning Workshop",
      date: "Jan 25, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Room A",
    },
    {
      id: 3,
      title: "Youth Leadership Meeting",
      date: "Jan 30, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Youth Center",
    },
  ])

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("user")
      const loginStatus = localStorage.getItem("isLoggedIn")

      if (userData && loginStatus === "true") {
        setUser(JSON.parse(userData))
        setIsLoading(false)
      } else {
        // Redirect to login if not authenticated
        router.push("/login")
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "enrolled":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "upcoming":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "enrolled":
        return "In Progress"
      case "completed":
        return "Completed"
      case "upcoming":
        return "Upcoming"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-dark-gray">Welcome back, {user.name.split(" ")[0]}!</h1>
              <p className="text-gray-600 mt-1">Here's what's happening in your community center journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-dark-gray">3</p>
                      <p className="text-sm text-gray-600">Active Programs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-dark-gray">1</p>
                      <p className="text-sm text-gray-600">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-dark-gray">85%</p>
                      <p className="text-sm text-gray-600">Avg Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Programs */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-dark-gray">My Programs</CardTitle>
                  <Button asChild variant="outline">
                    <Link href="/programs/register">Browse Programs</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userPrograms.map((program) => (
                    <div key={program.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-dark-gray truncate">{program.title}</h3>
                          <Badge className={getStatusColor(program.status)}>{getStatusText(program.status)}</Badge>
                        </div>

                        {program.status === "enrolled" && (
                          <div className="mb-2">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{program.progress}%</span>
                            </div>
                            <Progress value={program.progress} className="h-2" />
                          </div>
                        )}

                        <p className="text-sm text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.nextSession}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-dark-gray">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-dark-gray">Completed Financial Literacy Bootcamp</p>
                      <p className="text-xs text-gray-500">December 15, 2024</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-dark-gray">
                        Attended Career Development Workshop - Session 5
                      </p>
                      <p className="text-xs text-gray-500">January 9, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-dark-gray">Registered for Digital Skills Training</p>
                      <p className="text-xs text-gray-500">January 5, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-dark-gray">Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="h-20 w-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="h-10 w-10 text-white">User</div>
                  </div>
                  <h3 className="font-semibold text-dark-gray">{user.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{user.email}</p>
                  <Badge className="bg-primary/20 text-primary">
                    {user.role === "admin" ? "Administrator" : "Member"}
                  </Badge>
                </div>
                <div className="mt-6 space-y-2">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/profile">Edit Profile</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/membership">Membership Info</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-dark-gray">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-l-4 border-accent pl-4">
                      <h4 className="font-medium text-dark-gray text-sm">{event.title}</h4>
                      <p className="text-xs text-gray-600 flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.date}
                      </p>
                      <p className="text-xs text-gray-600 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="/community/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-dark-gray">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/programs/register">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Register for Programs
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/community/events">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Events
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/contact">
                    <Users className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
