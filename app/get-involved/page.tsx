import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, DollarSign, Handshake, Heart } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/youth-community.png" alt="Get Involved" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Get Involved</h1>
              <p className="mt-6 max-w-xl text-lg text-white">
                Join us in making a difference in our community. There are many ways to get involved and support our
                mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Ways to Make a Difference</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you have time, skills, or resources to share, there's a place for you in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Share your time and talents to support our programs and make a direct impact in our community.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                  <Link href="#volunteer">Volunteer With Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Donate</h3>
                <p className="text-gray-600 mb-4">
                  Support our work financially and help us continue to provide vital programs and services.
                </p>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-dark-gray">
                  <Link href="#donate">Make a Donation</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Partner With Us</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate with us to create greater impact through shared resources and expertise.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Link href="#partner">Become a Partner</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Volunteer With Us</h2>
              <p className="text-gray-600 mb-4">
                Our volunteers are the heart of our organization. By sharing your time and talents, you can make a
                meaningful difference in the lives of community members and help us fulfill our mission.
              </p>
              <p className="text-gray-600 mb-6">
                We offer a variety of volunteer opportunities to match different interests, skills, and schedules.
                Whether you can volunteer regularly or for a one-time event, we welcome your contribution.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Volunteer Opportunities:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Program support (tutoring, mentoring, workshop facilitation)</li>
                <li>Administrative assistance</li>
                <li>Event planning and coordination</li>
                <li>Outreach and community engagement</li>
                <li>Facility maintenance and improvement</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                  <Link href="#volunteer-form">Apply to Volunteer</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-art-group.png" alt="Volunteer With Us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6 text-center">Volunteer Application</h2>
            <p className="text-gray-600 mb-8 text-center">
              Please fill out the form below to express your interest in volunteering with us. We'll contact you to
              discuss opportunities that match your interests and availability.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Areas of Interest</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Program Support</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Administrative Assistance</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Event Planning</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Outreach</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Facility Maintenance</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Availability</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Weekday Mornings</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Weekday Afternoons</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Weekday Evenings</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Weekends</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Why are you interested in volunteering with us?</Label>
                <Textarea id="message" placeholder="Please share your motivation for volunteering" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/art-workshop.png" alt="Support Our Work" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Support Our Work</h2>
              <p className="text-gray-600 mb-4">
                Your financial support helps us continue to provide vital programs and services that empower individuals
                and strengthen our community.
              </p>
              <p className="text-gray-600 mb-6">
                As a 501(c)(3) nonprofit organization, all donations are tax-deductible to the extent allowed by law.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Your Donation Supports:</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Program materials and resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Facility maintenance and improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Staff and volunteer training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Community events and outreach</span>
                </li>
              </ul>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Select Donation Amount</Label>
                  <RadioGroup defaultValue="50">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div>
                        <RadioGroupItem value="25" id="amount-25" className="peer sr-only" />
                        <Label
                          htmlFor="amount-25"
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                        >
                          $25
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="50" id="amount-50" className="peer sr-only" />
                        <Label
                          htmlFor="amount-50"
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                        >
                          $50
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="100" id="amount-100" className="peer sr-only" />
                        <Label
                          htmlFor="amount-100"
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                        >
                          $100
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="other" id="amount-other" className="peer sr-only" />
                        <Label
                          htmlFor="amount-other"
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                        >
                          Other
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-dark-gray">Donate Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Partner With Us</h2>
              <p className="text-gray-600 mb-4">
                We believe that collaboration is key to creating meaningful change in our community. By partnering with
                businesses, organizations, and institutions, we can leverage shared resources and expertise to maximize
                our impact.
              </p>
              <p className="text-gray-600 mb-6">
                We welcome partnerships of all kinds, from in-kind donations and sponsorships to collaborative
                programming and shared initiatives.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Partnership Opportunities:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Program sponsorship</li>
                <li>Event sponsorship</li>
                <li>In-kind donations</li>
                <li>Collaborative programming</li>
                <li>Employee volunteer programs</li>
              </ul>

              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Contact Us About Partnerships</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Partner With Us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Our Partners</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We're grateful for the support of these organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Make a Difference?</h2>
            <p className="mt-6 text-lg">Join us in our mission to empower individuals and strengthen our community.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                <Link href="#volunteer">Volunteer</Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-dark-gray">
                <Link href="#donate">Donate</Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="#partner">Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
