import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, Phone, Mail } from "lucide-react"

export default function ProgramSchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Program Schedule</h1>
            <p className="mt-6 text-lg">
              Find the perfect time to join our community programs and activities. All programs welcome new participants
              throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekday Programs */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Monday - Friday Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-dark-gray">Adult Education</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>9:00 AM - 11:00 AM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Learning Center</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">GED prep, ESL classes, basic computer skills</p>
                  <Badge className="mt-2 bg-primary text-dark-gray">Drop-in Welcome</Badge>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold text-dark-gray">Youth Programs</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>3:30 PM - 5:30 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Youth Center</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">After-school tutoring, leadership development, arts</p>
                  <Badge className="mt-2 bg-secondary text-dark-gray">Registration Required</Badge>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-dark-gray">Career Development</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6:00 PM - 7:30 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Conference Room A</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Job search, resume building, interview prep</p>
                  <Badge className="mt-2 bg-accent text-white">Ongoing Enrollment</Badge>
                </div>

                <div className="border-l-4 border-green pl-4">
                  <h3 className="font-semibold text-dark-gray">Community Wellness</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Various Times</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Wellness Center</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Fitness classes, support groups, health education</p>
                  <Badge className="mt-2 bg-green text-dark-gray">Check Weekly Schedule</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Weekend Programs */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-dark-gray">
                  <Users className="h-5 w-5 mr-2 text-secondary" />
                  Weekend Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-dark-gray">Saturday Community Events</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Main Hall</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Workshops, community meetings, special events</p>
                  <Badge className="mt-2 bg-primary text-dark-gray">Check Monthly Calendar</Badge>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold text-dark-gray">Family Programming</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Family Center</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Parent education, family activities, childcare</p>
                  <Badge className="mt-2 bg-secondary text-dark-gray">All Ages Welcome</Badge>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-dark-gray">Sunday Open Hours</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Community Spaces</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Study spaces, computer lab, community garden</p>
                  <Badge className="mt-2 bg-accent text-white">Drop-in Hours</Badge>
                </div>

                <div className="border-l-4 border-green pl-4">
                  <h3 className="font-semibold text-dark-gray">Community Arts</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Arts Studio</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Creative workshops, music, visual arts</p>
                  <Badge className="mt-2 bg-green text-dark-gray">Materials Provided</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
              Special Programs & Workshops
            </h2>
            <p className="mt-4 text-lg text-gray-600">Monthly and seasonal programs with specific schedules</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-dark-gray mb-2">Financial Literacy</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Bi-weekly workshops on budgeting, credit, and financial planning
                </p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2nd & 4th Tuesday</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3 bg-transparent">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-dark-gray mb-2">Housing Counseling</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Individual appointments and group workshops for housing support
                </p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>By Appointment</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Mon-Fri, 9 AM - 5 PM</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3 bg-transparent">
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-dark-gray mb-2">Community Organizing</h3>
                <p className="text-sm text-gray-600 mb-3">Monthly meetings for community advocacy and policy work</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>3rd Thursday</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>7:00 PM - 8:30 PM</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3 bg-transparent">
                  Join Movement
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">How to Register</h2>
              <p className="mt-4 text-lg text-gray-600">
                Getting started is easy - choose the method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-md">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-dark-gray mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak with our program coordinators</p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                    <Link href="tel:7045557764">(704) 555-PROG (7764)</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-dark-gray mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us your questions and interests</p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-dark-gray">
                    <Link href="mailto:programs@differencedriven.org">Send Email</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-dark-gray mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Stop by our front desk during business hours</p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                    <Link href="/contact">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-dark-gray mb-4 text-center">Important Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">Registration Requirements:</h4>
                  <ul className="space-y-1">
                    <li>• Most programs require advance registration</li>
                    <li>• Some programs have capacity limits</li>
                    <li>• Childcare available with 48-hour notice</li>
                    <li>• Sliding scale pricing available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">What to Bring:</h4>
                  <ul className="space-y-1">
                    <li>• Photo ID for first-time registration</li>
                    <li>• Notebook and pen for workshops</li>
                    <li>• Questions and enthusiasm to learn</li>
                    <li>• Open mind for community building</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-6 text-lg">
              Join thousands of community members who are building brighter futures together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                <Link href="/programs/register">Register for Programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white bg-transparent"
              >
                <Link href="/membership">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
