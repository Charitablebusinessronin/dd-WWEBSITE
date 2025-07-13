import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, TrendingUp, Users, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/community-youth.png"
            alt="Together, We Plant Seeds of Promise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Together, We Plant Seeds of Promise That Blossom Into Positive Change
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-white">
                At Difference Driven Community Center, we believe every person deserves a foundation for success.
                Through community-owned housing, transformative education programs, and comprehensive wellness support,
                we're creating pathways to opportunity that strengthen not just individuals, but our entire community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6 rebel-border inline-block pb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We empower individuals and families to build brighter futures through:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Community-owned cooperative housing</strong> that provides stability and belonging
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Comprehensive education programs</strong> that develop skills for lifelong success
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Wellness and support services</strong> that nurture whole-person growth
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Economic justice initiatives</strong> that create sustainable pathways out of poverty
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-workshop.png" alt="Our Mission in Action" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-family.png" alt="Our Vision" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6 rebel-border inline-block pb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600">
                We envision thriving communities where every person has access to affordable housing, quality education,
                and the support needed to reach their full potential. Together, we're building a replicable model of
                community ownership and shared prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Warm & Welcoming</h3>
                <p className="text-gray-600">
                  Every person who walks through our doors finds a community that embraces them exactly as they are
                  while supporting their growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Empowerment Through Action</h3>
                <p className="text-gray-600">
                  We don't just provide services—we create opportunities for community members to develop skills, build
                  confidence, and become leaders themselves.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Authentic Relationships</h3>
                <p className="text-gray-600">
                  Our programs are built on genuine connections, honest communication, and mutual respect between staff,
                  volunteers, and community members.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green/20 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-green" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Inclusive Growth</h3>
                <p className="text-gray-600">
                  We celebrate the diverse backgrounds, experiences, and perspectives that make our community stronger
                  and more resilient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our History" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                The Difference Driven Community Center was founded in 2013 by a group of dedicated community leaders who
                recognized the need for a space where people could come together to learn, grow, and create positive
                change.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small grassroots initiative has grown into a vibrant community hub that serves thousands
                of individuals each year through a wide range of programs and services.
              </p>
              <p className="text-gray-600">
                Throughout our history, we have remained committed to our founding vision of empowering individuals and
                strengthening our community through education, engagement, and collaborative initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/community-member-1.png"
                  alt="Maya Johnson"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark-gray">Maya Johnson</h3>
              <p className="text-accent font-medium">Executive Director</p>
              <p className="mt-2 text-gray-600 px-4">
                With over 15 years of experience in community development, Maya leads our organization with passion and
                vision.
              </p>
            </div>

            <div className="text-center">
              <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/community-member-2.png"
                  alt="Marcus Williams"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark-gray">Marcus Williams</h3>
              <p className="text-accent font-medium">Program Director</p>
              <p className="mt-2 text-gray-600 px-4">
                Marcus oversees our programs and ensures they effectively serve the needs of our community.
              </p>
            </div>

            <div className="text-center">
              <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Sophia Rodriguez"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark-gray">Sophia Rodriguez</h3>
              <p className="text-accent font-medium">Community Outreach Manager</p>
              <p className="mt-2 text-gray-600 px-4">
                Sophia builds and maintains relationships with community partners and volunteers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Mission</h2>
            <p className="mt-6 text-lg">Be part of the change you want to see in our community. Get involved today!</p>
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
