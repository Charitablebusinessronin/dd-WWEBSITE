import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Heart, Calendar } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/community-workshop.png" alt="Our Programs" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Programs</h1>
              <p className="mt-6 max-w-xl text-lg text-white">
                Discover the various ways we're empowering our community through education, engagement, and
                collaborative initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
              Empowering Through Education
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to equip community members with the knowledge, skills, and resources they need
              to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section id="career" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Career Development</h2>
              <p className="text-gray-600 mb-4">
                Our Career Development program provides participants with the skills, resources, and mentorship they
                need to advance their careers and achieve their professional goals.
              </p>
              <p className="text-gray-600 mb-6">
                Through workshops, one-on-one coaching, and networking opportunities, we help community members navigate
                the job market, develop their professional skills, and connect with potential employers.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Program Offerings:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Resume writing and interview preparation</li>
                <li>Professional skills development workshops</li>
                <li>Career counseling and planning</li>
                <li>Job search assistance</li>
                <li>Networking events and job fairs</li>
              </ul>

              <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                <Link href="/contact">Inquire About This Program</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-member-2.png" alt="Career Development Program" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Life Skills Training */}
      <section id="life-skills" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/youth-basketball.png" alt="Life Skills Training Program" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Life Skills Training</h2>
              <p className="text-gray-600 mb-4">
                Our Life Skills Training program equips participants with the essential skills they need to navigate
                daily life successfully and make positive choices for their future.
              </p>
              <p className="text-gray-600 mb-6">
                Through interactive workshops and hands-on activities, we cover a wide range of topics designed to
                promote independence, resilience, and personal growth.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Program Offerings:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Financial literacy and money management</li>
                <li>Communication and conflict resolution</li>
                <li>Time management and organization</li>
                <li>Decision-making and problem-solving</li>
                <li>Stress management and emotional well-being</li>
              </ul>

              <Button asChild className="bg-secondary hover:bg-secondary/90 text-dark-gray">
                <Link href="/contact">Inquire About This Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Education */}
      <section id="health" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Health Education</h2>
              <p className="text-gray-600 mb-4">
                Our Health Education program promotes wellness through education and resources for healthy living,
                addressing both physical and mental health needs.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that good health is the foundation for a fulfilling life, and we are committed to providing
                our community with the knowledge and resources they need to make informed health decisions.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Program Offerings:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Nutrition and healthy cooking workshops</li>
                <li>Physical fitness classes and activities</li>
                <li>Mental health awareness and support</li>
                <li>Preventive health screenings and resources</li>
                <li>Substance abuse prevention education</li>
              </ul>

              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Inquire About This Program</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-family.png" alt="Health Education Program" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-youth.png" alt="Community Building Events" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-12 w-12 rounded-full bg-green/20 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Community Building Events</h2>
              <p className="text-gray-600 mb-4">
                Our Community Building Events bring people together to foster connections, celebrate diversity, and
                strengthen the bonds that make our community resilient.
              </p>
              <p className="text-gray-600 mb-6">
                Through a variety of events and activities, we create opportunities for community members to connect
                with one another, share their experiences, and work together toward common goals.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Program Offerings:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Cultural celebrations and festivals</li>
                <li>Community service projects</li>
                <li>Neighborhood clean-up initiatives</li>
                <li>Intergenerational activities and programs</li>
                <li>Community forums and discussions</li>
              </ul>

              <Button asChild className="bg-green hover:bg-green/90 text-dark-gray">
                <Link href="/contact">Inquire About This Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Upcoming Events</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for these upcoming programs and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <p className="text-accent font-semibold mb-2">June 15, 2025 • 10:00 AM - 2:00 PM</p>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Career Fair</h3>
                <p className="text-gray-600 mb-4">
                  Connect with local employers and explore job opportunities in various industries.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Register</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <p className="text-accent font-semibold mb-2">June 22, 2025 • 6:00 PM - 8:00 PM</p>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Financial Literacy Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Learn essential money management skills and strategies for building financial security.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Register</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <p className="text-accent font-semibold mb-2">July 8, 2025 • 11:00 AM - 3:00 PM</p>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Community Health Fair</h3>
                <p className="text-gray-600 mb-4">
                  Access free health screenings, resources, and information from local health providers.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Register</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Involved?</h2>
            <p className="mt-6 text-lg">
              Whether you want to participate in our programs, volunteer your time, or support our work in other ways,
              we'd love to hear from you.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
