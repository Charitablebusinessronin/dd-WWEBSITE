import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Briefcase, FileText, Heart, BookOpen } from "lucide-react"

export default function CareerFairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/event-career-fair.png" alt="Career Fair 2025" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Career Fair - June 15, 2025
              </h1>
              <h2 className="text-2xl font-semibold text-primary mt-4 mb-6">
                Connect with Opportunities, Build Your Future
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Join us for our largest career fair of the year, featuring 40+ local employers actively hiring for
                positions across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-50 shadow-md">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark-gray mb-2">Date</h3>
                <p className="text-gray-600">June 15, 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 shadow-md">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-bold text-dark-gray mb-2">Time</h3>
                <p className="text-gray-600">10:00 AM - 2:00 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-bold text-dark-gray mb-2">Location</h3>
                <p className="text-gray-600">Main Community Hall</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <div className="bg-primary/10 p-6 rounded-lg inline-block">
              <p className="text-lg font-semibold text-dark-gray">
                <strong>Cost:</strong> Free for members, $10 for non-members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Employers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Featured Employers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark-gray mb-2">Healthcare</h3>
                <p className="text-gray-600 text-sm">Regional Medical Center, Community Health Partners</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-dark-gray mb-2">Technology</h3>
                <p className="text-gray-600 text-sm">Local Tech Startups, Government IT Contractors</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-dark-gray mb-2">Education</h3>
                <p className="text-gray-600 text-sm">City School District, Early Learning Centers</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green" />
                </div>
                <h3 className="font-bold text-dark-gray mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-sm">Green Energy Solutions, Advanced Manufacturing Corp</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark-gray mb-2">Service</h3>
                <p className="text-gray-600 text-sm">Financial Services, Customer Service Centers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">What to Bring</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Multiple copies of your updated resume</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional attire (dress clothing available if needed)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Questions about specific roles and companies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Open mind about new opportunities</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">On-Site Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Resume printing and last-minute edits</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional headshots (first 50 participants)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Childcare provided</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Light refreshments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Event Preparation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Pre-Event Preparation</h2>
            <p className="mt-4 text-lg text-gray-600">Get ready for success with our preparation workshops</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray">Resume Review Workshop</h3>
                  <p className="text-accent font-semibold">June 10, 6 PM</p>
                </div>
                <p className="text-gray-600 text-center">Perfect your resume with expert feedback and tips</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray">Interview Skills Practice</h3>
                  <p className="text-accent font-semibold">June 12, 5 PM</p>
                </div>
                <p className="text-gray-600 text-center">Practice common interview questions and build confidence</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray">Professional Attire Fitting</h3>
                  <p className="text-accent font-semibold">June 14, 10 AM</p>
                </div>
                <p className="text-gray-600 text-center">Free professional clothing for members</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-6xl text-primary font-serif mr-6">"</div>
                <div>
                  <blockquote className="text-xl italic text-gray-600 mb-4">
                    I attended the career fair not sure what to expect and left with three interviews scheduled and
                    renewed confidence in my abilities.
                  </blockquote>
                  <cite className="text-lg font-semibold text-dark-gray">
                    - Diana Rodriguez, Career Fair Participant
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Connect with Your Future?</h2>
            <p className="text-lg mb-8">
              Don't miss this opportunity to meet employers, make connections, and take the next step in your career
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg">
                <Link href="/contact">Register Now - Free</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/contact">View Employer List</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/contact">Preparation Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
