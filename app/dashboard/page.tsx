import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  User,
  Calendar,
  BookOpen,
  Users,
  Home,
  Heart,
  Award,
  Bell,
  Settings,
  MessageCircle,
  FileText,
  CreditCard,
  MapPin,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image src="/dd-logo.png" alt="Difference Driven" width={40} height={40} className="mr-3" />
              <div>
                <h1 className="text-xl font-bold text-dark-gray">Welcome back, Maria!</h1>
                <p className="text-sm text-gray-600">Full Member since March 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="bg-transparent">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge variant="secondary" className="ml-2">
                  3
                </Badge>
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <User className="h-5 w-5 mr-2 text-accent" />
                  Complete Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profile Completion</span>
                    <span className="text-sm font-medium text-dark-gray">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓ Basic Info
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓ Contact Details
                    </Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      Emergency Contact
                    </Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      Program Interests
                    </Badge>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-dark-gray">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-dark-gray">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button asChild variant="outline" className="h-20 flex-col bg-transparent hover:bg-primary/10">
                    <Link href="/programs/register">
                      <BookOpen className="h-6 w-6 mb-2 text-accent" />
                      <span className="text-sm">Register for Programs</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-20 flex-col bg-transparent hover:bg-secondary/10">
                    <Link href="/housing-cooperatives">
                      <Home className="h-6 w-6 mb-2 text-secondary" />
                      <span className="text-sm">Housing Info</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-20 flex-col bg-transparent hover:bg-accent/10">
                    <Link href="/events">
                      <Calendar className="h-6 w-6 mb-2 text-accent" />
                      <span className="text-sm">View Events</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-20 flex-col bg-transparent hover:bg-green/10">
                    <Link href="/get-involved">
                      <Users className="h-6 w-6 mb-2 text-green" />
                      <span className="text-sm">Get Involved</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events & Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <Calendar className="h-5 w-5 mr-2 text-accent" />
                  Your Upcoming Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-primary/10 rounded-lg">
                    <div className="bg-primary rounded-lg p-2">
                      <Calendar className="h-4 w-4 text-dark-gray" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-gray">Career Fair</h4>
                      <p className="text-sm text-gray-600">June 15, 2025 • 10:00 AM - 2:00 PM</p>
                      <p className="text-sm text-gray-500">Main Community Hall</p>
                      <Badge className="mt-2 bg-green text-white">Registered</Badge>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-secondary/10 rounded-lg">
                    <div className="bg-secondary rounded-lg p-2">
                      <BookOpen className="h-4 w-4 text-dark-gray" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-gray">Financial Literacy Workshop</h4>
                      <p className="text-sm text-gray-600">June 22, 2025 • 6:00 PM - 8:00 PM</p>
                      <p className="text-sm text-gray-500">Community Learning Center</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        Register Now
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-lg">
                    <div className="bg-accent rounded-lg p-2">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-gray">Community Health Fair</h4>
                      <p className="text-sm text-gray-600">July 8, 2025 • 11:00 AM - 3:00 PM</p>
                      <p className="text-sm text-gray-500">Main Hall & Outdoor Pavilion</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href="/events">View All Events</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <FileText className="h-5 w-5 mr-2 text-accent" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="h-2 w-2 bg-green rounded-full"></div>
                    <span className="text-gray-600">Completed Career Development Workshop</span>
                    <span className="text-gray-400">2 days ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-gray-600">Registered for Career Fair</span>
                    <span className="text-gray-400">1 week ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="h-2 w-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-600">Updated profile information</span>
                    <span className="text-gray-400">2 weeks ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Attended Community Meeting</span>
                    <span className="text-gray-400">3 weeks ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Membership Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge className="bg-primary text-dark-gray text-lg px-4 py-2">Full Member</Badge>
                    <p className="text-sm text-gray-600 mt-2">Active since March 2023</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Next Payment</span>
                      <span className="font-medium text-dark-gray">July 1, 2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly Amount</span>
                      <span className="font-medium text-dark-gray">$50.00</span>
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Manage Payment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Housing Cooperative Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <Home className="h-5 w-5 mr-2 text-secondary" />
                  Housing Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge className="bg-secondary text-dark-gray">Sunrise Cooperative</Badge>
                    <p className="text-sm text-gray-600 mt-2">Unit 15B • Resident since 2020</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly Payment</span>
                      <span className="font-medium text-dark-gray">$1,050</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Next Meeting</span>
                      <span className="font-medium text-dark-gray">June 20</span>
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    <MapPin className="h-4 w-4 mr-2" />
                    Cooperative Portal
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <Award className="h-5 w-5 mr-2 text-accent" />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-gray">Program Graduate</p>
                      <p className="text-xs text-gray-500">Career Development</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-gray">Community Leader</p>
                      <p className="text-xs text-gray-500">Volunteer Mentor</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <Home className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-gray">Cooperative Member</p>
                      <p className="text-xs text-gray-500">5 years strong</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <MessageCircle className="h-5 w-5 mr-2 text-green" />
                  Need Support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button size="sm" variant="outline" className="w-full justify-start bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Request
                  </Button>
                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-500">
                      Call:{" "}
                      <Link href="tel:7045553322" className="text-accent">
                        (704) 555-DDCC
                      </Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
