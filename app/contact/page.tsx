import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/community-leader.png" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
              <p className="mt-6 max-w-xl text-lg text-white">
                We'd love to hear from you. Reach out with questions, feedback, or to learn more about our programs and
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-2">Visit Us</h3>
              <address className="not-italic text-gray-600">
                123 Community Way
                <br />
                Anytown, ST 12345
                <br />
                United States
              </address>
              <p className="mt-4 text-gray-600">
                <strong>Hours:</strong>
                <br />
                Monday-Friday: 9am-7pm
                <br />
                Saturday: 10am-4pm
                <br />
                Sunday: Closed
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">
                <strong>Main Office:</strong>
                <br />
                <a href="tel:+15551234567" className="hover:text-accent">
                  (555) 123-4567
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Program Information:</strong>
                <br />
                <a href="tel:+15551234568" className="hover:text-accent">
                  (555) 123-4568
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Volunteer Coordinator:</strong>
                <br />
                <a href="tel:+15551234569" className="hover:text-accent">
                  (555) 123-4569
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">
                <strong>General Inquiries:</strong>
                <br />
                <a href="mailto:info@differencedriven.org" className="hover:text-accent">
                  info@differencedriven.org
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Program Information:</strong>
                <br />
                <a href="mailto:programs@differencedriven.org" className="hover:text-accent">
                  programs@differencedriven.org
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Volunteer Opportunities:</strong>
                <br />
                <a href="mailto:volunteer@differencedriven.org" className="hover:text-accent">
                  volunteer@differencedriven.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
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
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                      <SelectItem value="donate">Donations</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" rows={6} required />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Find Us</h2>
              <p className="text-gray-600 mb-8">
                We're conveniently located in the heart of the community, easily accessible by public transportation.
              </p>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=400&width=600" alt="Map Location" fill className="object-cover" />
              </div>

              <div className="mt-6">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark-gray mb-2">How can I register for a program?</h3>
              <p className="text-gray-600">
                You can register for our programs by visiting our center during operating hours, calling our program
                information line at (555) 123-4568, or emailing programs@differencedriven.org. Some programs may also
                offer online registration through our website.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark-gray mb-2">Are your programs free?</h3>
              <p className="text-gray-600">
                Many of our programs are offered free of charge, while others may have a nominal fee to cover materials
                or other costs. We are committed to making our programs accessible to all community members, and
                financial assistance is available for those who need it.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark-gray mb-2">How can I volunteer with your organization?</h3>
              <p className="text-gray-600">
                We welcome volunteers of all backgrounds and skill sets! To get started, visit our Get Involved page to
                learn about volunteer opportunities and fill out our volunteer application form. You can also contact
                our Volunteer Coordinator at volunteer@differencedriven.org or (555) 123-4569.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-dark-gray mb-2">How can I make a donation?</h3>
              <p className="text-gray-600">
                You can make a donation online through our website, by mail, or in person at our center. We accept cash,
                checks, and credit card donations. For more information about donation options, including in-kind
                donations and planned giving, please visit our Get Involved page or contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Connected</h2>
            <p className="mt-6 text-lg">
              Subscribe to our newsletter to receive updates about our programs, events, and impact.
            </p>
            <div className="mt-10 max-w-md mx-auto">
              <form className="flex gap-2">
                <Input type="email" placeholder="Your email address" className="bg-white border-white" required />
                <Button type="submit" className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
