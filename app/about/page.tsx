import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/community-youth.png"
            alt="About The Difference Driven Community Center"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
              <p className="mt-6 max-w-xl text-lg text-white">
                Learn about our mission, vision, values, and the people who make our work possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-8">
                "To be a beacon for transformative impact in our communities."
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600">
                "Empowering individuals through education, engagement, and collaborative initiatives."
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/community-workshop.png"
                alt="The Difference Driven Community Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We embrace diversity and create spaces where everyone feels welcome, respected, and valued. Our
                  programs and services are designed to be accessible to all members of our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Empowerment</h3>
                <p className="text-gray-600">
                  We believe in equipping individuals with the knowledge, skills, and resources they need to take
                  control of their lives and create positive change for themselves and their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  We recognize that meaningful change happens when we work together. We actively seek partnerships with
                  individuals, organizations, and institutions that share our vision for a better community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We are committed to honesty, transparency, and ethical conduct in all that we do. We hold ourselves
                  accountable to our community and strive to be worthy of the trust placed in us.
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
