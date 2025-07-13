import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Phone, Mail, MapPin, Calendar, AlertCircle } from "lucide-react"

export default function HoursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hours & Schedules</h1>
            <p className="mt-6 text-lg">
              Plan your visit to Difference Driven Community Center. We're here when you need us most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray text-2xl">
                  <Clock className="h-6 w-6 mr-3 text-primary" />
                  Community Center Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-dark-gray mb-4">Regular Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-dark-gray">Monday - Friday</span>
                        <span className="text-gray-600">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-dark-gray">Saturday</span>
                        <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-dark-gray">Sunday</span>
                        <span className="text-gray-600">12:00 PM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-dark-gray mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="font-medium text-dark-gray">Main Office</p>
                          <Link href="tel:7045553322" className="text-accent hover:text-accent/80">
                            (704) 555-DDCC (3322)
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-secondary mr-3" />
                        <div>
                          <p className="font-medium text-dark-gray">24/7 Crisis Line</p>
                          <Link href="tel:7045554357" className="text-accent hover:text-accent/80">
                            (704) 555-HELP (4357)
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-medium text-dark-gray">General Email</p>
                          <Link href="mailto:hello@differencedriven.org" className="text-accent hover:text-accent/80">
                            hello@differencedriven.org
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Holiday Hours Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Holiday Hours</h3>
                  <p className="text-yellow-700">
                    We are closed on major holidays. Modified hours are posted in advance on our website, social media,
                    and at our front desk. Emergency support remains available 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
                Department & Service Hours
              </h2>
              <p className="mt-4 text-lg text-gray-600">Specific hours for specialized services and departments</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Program Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <Phone className="h-4 w-4 inline mr-1" />
                      <Link href="tel:7045557764" className="text-accent">
                        (704) 555-PROG
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Housing Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Thursday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend</span>
                      <span className="font-medium">By Appointment</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <Phone className="h-4 w-4 inline mr-1" />
                      <Link href="tel:7045554663" className="text-accent">
                        (704) 555-HOME
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Wellness Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <Phone className="h-4 w-4 inline mr-1" />
                      <Link href="tel:7045554325" className="text-accent">
                        (704) 555-HEAL
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Computer Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">1:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Free for members • $5/hour for non-members</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Community Garden</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Daily Access</span>
                      <span className="font-medium">Dawn to Dusk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Work Days</span>
                      <span className="font-medium">Saturdays 9 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Workshops</span>
                      <span className="font-medium">Monthly</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Plot rental: $25/season for members</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Childcare Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">During Programs</span>
                      <span className="font-medium">As Scheduled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Drop-in Care</span>
                      <span className="font-medium">Limited Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Advance Notice</span>
                      <span className="font-medium">48 Hours</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Free for members during programs</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Hours & Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Extended & Special Hours</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-dark-gray">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Community Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    During special community events, we often extend our hours or open on different schedules.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Career Fair: Extended Saturday hours</li>
                    <li>• Community Celebrations: Evening events</li>
                    <li>• Emergency Response: 24/7 availability</li>
                    <li>• Holiday Programming: Special schedules</li>
                  </ul>
                  <Button asChild size="sm" className="mt-4 bg-primary hover:bg-primary/90 text-dark-gray">
                    <Link href="/events">View Upcoming Events</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-dark-gray">
                    <Phone className="h-5 w-5 mr-2 text-secondary" />
                    After-Hours Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Even when our building is closed, support is always available for community members in need.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-dark-gray">24/7 Crisis Line</p>
                      <Link href="tel:7045554357" className="text-accent hover:text-accent/80">
                        (704) 555-HELP (4357)
                      </Link>
                    </div>
                    <div>
                      <p className="font-medium text-dark-gray">Emergency Email</p>
                      <Link href="mailto:emergency@differencedriven.org" className="text-accent hover:text-accent/80">
                        emergency@differencedriven.org
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl mb-8">Visit Us Today</h2>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-accent mr-3" />
                  <div className="text-left">
                    <h3 className="font-bold text-dark-gray text-xl">Difference Driven Community Center</h3>
                    <p className="text-gray-600">123 Community Way, Charlotte, NC 28205</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-3">Public Transportation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• CATS Bus Routes: 9, 15, 27 (Community Way stop)</li>
                      <li>• LYNX Blue Line: Scaleybark Station (0.8 miles)</li>
                      <li>• Free shuttle available from station</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-3">Parking</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Free parking in community lot</li>
                      <li>• Entrance on Oak Street</li>
                      <li>• 8 accessible parking spaces</li>
                      <li>• Additional street parking available</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                    <Link href="/contact">Get Detailed Directions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
