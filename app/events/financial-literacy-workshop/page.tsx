import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, DollarSign, BookOpen, Award, CheckCircle } from "lucide-react"

export default function FinancialLiteracyWorkshopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/event-financial.png" alt="Financial Literacy Workshop" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/60" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Building Wealth Through Financial Literacy
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Join us for an intensive workshop designed to provide practical tools and strategies for building
                long-term financial security and generational wealth.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-dark-gray font-bold px-8 py-6 text-lg mr-4"
                >
                  <Link href="#register">Register Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark-gray px-8 py-6 text-lg bg-transparent"
                >
                  <Link href="#details">Event Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Workshop Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                This comprehensive financial literacy workshop is designed for community members who want to take
                control of their financial future. Whether you're just starting your financial journey or looking to
                build on existing knowledge, this workshop provides practical tools and strategies you can implement
                immediately.
              </p>

              <h3 className="text-2xl font-bold text-dark-gray mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Budgeting & Cash Flow</h4>
                    <p className="text-gray-600 text-sm">
                      Create realistic budgets that work for your lifestyle and income
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Award className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Credit Building</h4>
                    <p className="text-gray-600 text-sm">
                      Understand credit scores and develop strategies to improve them
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <BookOpen className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Debt Management</h4>
                    <p className="text-gray-600 text-sm">
                      Learn strategies to pay down debt and avoid future financial pitfalls
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 bg-green/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Investment Basics</h4>
                    <p className="text-gray-600 text-sm">Introduction to building wealth through smart investing</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-gray mb-4">Workshop Format</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-dark-gray">Interactive Learning</h4>
                  <p className="text-gray-600">Hands-on activities and real-world scenarios to practice new skills</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-dark-gray">Small Group Discussions</h4>
                  <p className="text-gray-600">Share experiences and learn from other community members</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-dark-gray">Take-Home Resources</h4>
                  <p className="text-gray-600">Workbooks, templates, and tools to continue your financial journey</p>
                </div>
                <div className="border-l-4 border-green pl-4">
                  <h4 className="font-semibold text-dark-gray">Follow-Up Support</h4>
                  <p className="text-gray-600">Access to ongoing financial counseling and support groups</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gray-50 shadow-lg sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-4">Event Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-dark-gray">Date</p>
                        <p className="text-gray-600">Saturday, June 22, 2024</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-dark-gray">Time</p>
                        <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-500">(Lunch provided)</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-dark-gray">Location</p>
                        <p className="text-gray-600">
                          Difference Driven Community Center
                          <br />
                          123 Community Way
                          <br />
                          Charlotte, NC 28205
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-green mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-dark-gray">Capacity</p>
                        <p className="text-gray-600">Limited to 30 participants</p>
                        <p className="text-sm text-gray-500">Register early to secure your spot</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-dark-gray">Cost</p>
                        <p className="text-gray-600">Free for members</p>
                        <p className="text-gray-600">$25 for non-members</p>
                        <p className="text-sm text-gray-500">Sliding scale available</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-dark-gray mb-2">What's Included</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Comprehensive workbook</li>
                      <li>• Budget planning templates</li>
                      <li>• Credit monitoring tools</li>
                      <li>• Lunch and refreshments</li>
                      <li>• Follow-up counseling session</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speaker */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/testimonial-jasmine.png"
                alt="Dr. Jasmine Williams, Workshop Facilitator"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Meet Your Facilitator</h2>
              <h3 className="text-xl font-bold text-primary mb-2">Dr. Jasmine Williams</h3>
              <p className="text-accent font-semibold mb-4">Certified Financial Planner & Community Advocate</p>

              <p className="text-gray-600 mb-4">
                Dr. Williams brings over 15 years of experience in financial planning and community development. As a
                first-generation college graduate who grew up in a low-income household, she understands the unique
                challenges facing our community members.
              </p>
              <p className="text-gray-600 mb-4">
                She holds a Ph.D. in Financial Planning from UNC Charlotte and is a Certified Financial Planner (CFP).
                Dr. Williams has helped hundreds of families build financial security and has been featured in local
                media for her work in financial literacy education.
              </p>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="relative">
                  <div className="text-2xl text-primary font-serif absolute -top-2 -left-2">"</div>
                  <blockquote className="text-gray-600 italic pl-4">
                    Financial literacy isn't just about numbers—it's about empowerment, dignity, and creating
                    opportunities for ourselves and our families. I'm passionate about making financial education
                    accessible and relevant to our community's real experiences.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
                Register for the Workshop
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Secure your spot in this transformative financial literacy experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-6">Registration Process</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">Complete Registration Form</h4>
                      <p className="text-gray-600">Fill out our online form or visit our community center in person</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">Payment (if applicable)</h4>
                      <p className="text-gray-600">Free for members, $25 for non-members, sliding scale available</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">Confirmation</h4>
                      <p className="text-gray-600">
                        Receive confirmation email with workshop details and preparation materials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-green rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">Attend Workshop</h4>
                      <p className="text-gray-600">
                        Join us for a full day of financial empowerment and community building
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dark-gray mb-3">What to Bring</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Recent bank statements (optional, for personal budgeting exercise)</li>
                    <li>• Credit report (we'll show you how to get a free one if you don't have it)</li>
                    <li>• Notebook and pen for taking notes</li>
                    <li>• Calculator or smartphone</li>
                    <li>• Questions about your specific financial situation</li>
                  </ul>
                </div>
              </div>

              <div>
                <Card className="bg-gray-50 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark-gray mb-4">Ready to Register?</h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-white p-4 rounded border-l-4 border-primary">
                        <h4 className="font-semibold text-dark-gray">Online Registration</h4>
                        <p className="text-gray-600 text-sm">Complete our secure online form</p>
                      </div>

                      <div className="bg-white p-4 rounded border-l-4 border-secondary">
                        <h4 className="font-semibold text-dark-gray">Phone Registration</h4>
                        <p className="text-gray-600 text-sm">Call (704) 555-PROG (7764)</p>
                      </div>

                      <div className="bg-white p-4 rounded border-l-4 border-accent">
                        <h4 className="font-semibold text-dark-gray">In-Person Registration</h4>
                        <p className="text-gray-600 text-sm">Visit our front desk Monday-Friday, 8 AM-8 PM</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                        <Link href="/contact">Register Online</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/membership">Become a Member (Free Workshop)</Link>
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-dark-gray mb-2">Questions?</h4>
                      <p className="text-gray-600 text-sm mb-2">Contact our Program Coordinator:</p>
                      <p className="text-gray-600 text-sm">
                        Email: programs@differencedriven.org
                        <br />
                        Phone: (704) 555-PROG (7764)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">What Past Participants Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative mb-4">
                <div className="text-2xl text-primary font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-gray-600 italic pl-4">
                  This workshop gave me the confidence to take control of my finances. I finally understand my credit
                  score and have a plan to improve it.
                </blockquote>
              </div>
              <cite className="text-gray-500 text-sm">- Maria S., Workshop Graduate</cite>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative mb-4">
                <div className="text-2xl text-secondary font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-gray-600 italic pl-4">
                  The budgeting tools I learned here helped me save enough for a down payment on my cooperative housing
                  unit. Life-changing!
                </blockquote>
              </div>
              <cite className="text-gray-500 text-sm">- James T., Cooperative Resident</cite>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative mb-4">
                <div className="text-2xl text-accent font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-gray-600 italic pl-4">
                  Dr. Williams made complex financial concepts easy to understand. I left with practical tools I could
                  use immediately.
                </blockquote>
              </div>
              <cite className="text-gray-500 text-sm">- Angela R., Small Business Owner</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Financial Future Starts Here</h2>
            <p className="mt-6 text-lg">
              Join us for this transformative workshop and take the first step toward building lasting financial
              security for yourself and your family.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white mr-4">
                <Link href="/contact">Register Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white bg-transparent"
              >
                <Link href="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
