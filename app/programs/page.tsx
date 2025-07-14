import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Mic, Users, Home } from "lucide-react"
import { strapi, getStrapiImageUrl, fallbackData } from "@/lib/strapi"

export default async function ProgramsPage() {
  let programs = fallbackData.programs

  try {
    const isHealthy = await strapi.isHealthy()
    if (isHealthy) {
      const strapiPrograms = await strapi.getPrograms()
      if (strapiPrograms.length > 0) {
        programs = strapiPrograms
      }
    }
  } catch (error) {
    console.warn("Using fallback programs data:", error)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/community-workshop.png" alt="Our Programs & Services" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Programs & Services</h1>
              <p className="mt-6 max-w-xl text-lg text-white">
                Discover the various ways we're empowering our community through creative expression, practical support,
                and collaborative growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      {programs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Our Programs</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive programs designed to empower and support our community members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={getStrapiImageUrl(program.image) || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-2 py-1 rounded text-sm font-semibold">
                        {program.category}
                      </span>
                    </div>
                    {program.price > 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-dark-gray px-2 py-1 rounded text-sm font-semibold">
                          ${program.price}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark-gray mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{program.description}</p>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span>{program.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span>
                          {program.enrolled}/{program.capacity}
                        </span>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                      <Link href={`/programs/${program.slug}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community Support Services */}
      <section id="community-support" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Empowering Daily Life</h2>
              <p className="text-gray-600 mb-4">
                Life can be challenging, but you don't have to face it alone. Our community support services provide
                practical assistance and resources to help you thrive.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Our Support Includes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Daily Life Skills Assistance</strong> - Practical support for everyday challenges like
                  budgeting, time management, and organization
                </li>
                <li>
                  <strong>Food Resource Help</strong> - Assistance accessing food vouchers, food banks, and nutrition
                  programs
                </li>
                <li>
                  <strong>Housing Assistance</strong> - Support finding affordable housing, understanding tenant rights,
                  and maintaining stable living situations
                </li>
                <li>
                  <strong>Personal Care Support</strong> - Help with daily living activities and connecting to care
                  resources
                </li>
                <li>
                  <strong>Resource Navigation</strong> - Connecting you to local services, government programs, and
                  community resources
                </li>
              </ul>

              <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray font-semibold">
                <Link href="/contact">Contribute to This Mission</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-member-2.png" alt="Community Support Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Creative & Media Services */}
      <section id="creative-media" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/youth-basketball.png" alt="Creative & Media Services" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">
                Your Creative Vision, Professional Results
              </h2>
              <p className="text-gray-600 mb-4">
                Turn your ideas into reality with our state-of-the-art creative facilities. Whether you're recording
                your first song or launching a podcast empire, we have the tools and space you need.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Creative Facilities:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Professional Recording Studio</strong> - Industry-standard equipment for music production,
                  voiceovers, and audio projects
                </li>
                <li>
                  <strong>Podcast Production Space</strong> - Dedicated podcast recording with acoustic treatment and
                  professional microphones
                </li>
                <li>
                  <strong>Broadcasting Equipment</strong> - Live streaming setup for social media, radio shows, and
                  online content
                </li>
                <li>
                  <strong>Content Creation Workshops</strong> - Learn production skills, marketing strategies, and
                  technical expertise
                </li>
              </ul>

              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
                <Link href="/contact">Contribute to This Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness & Development */}
      <section id="wellness" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Grow Mind, Body, and Spirit</h2>
              <p className="text-gray-600 mb-4">
                Personal growth happens when we nurture every aspect of ourselves. Our wellness and development programs
                support your journey to becoming your best self.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Programs Include:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Yoga and Meditation Space</strong> - Peaceful environment for physical fitness and mental
                  wellness
                </li>
                <li>
                  <strong>Career Development</strong> - Job skills training, resume building, interview preparation, and
                  job placement assistance
                </li>
                <li>
                  <strong>Life Skills Training</strong> - Financial literacy, communication skills, conflict resolution,
                  and personal development
                </li>
                <li>
                  <strong>Health Education</strong> - Wellness workshops, nutrition guidance, and mental health
                  resources
                </li>
              </ul>

              <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold">
                <Link href="/contact">Contribute to This Mission</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-family.png" alt="Wellness & Development Programs" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Community-Owned Housing Initiative */}
      <section id="housing" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/community-youth.png"
                alt="Community-Owned Housing Initiative"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-12 w-12 rounded-full bg-green/20 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-green" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">
                Your Path to Affordable Home Ownership
              </h2>
              <p className="text-gray-600 mb-4">
                Housing is a human right, and homeownership shouldn't be out of reach. Our community-owned housing
                initiative is working to create affordable pathways to homeownership in our neighborhood.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Our Housing Mission:</strong> We're developing innovative approaches to affordable housing that
                keep communities together while building wealth and stability for families. Through cooperative
                ownership models and community land trusts, we're making homeownership accessible.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>How You Can Help:</strong> This initiative is currently in development as we raise funds and
                build partnerships. Your contribution helps us research, plan, and implement housing solutions that
                serve our community's needs.
              </p>

              <Button asChild className="bg-green hover:bg-green/90 text-dark-gray font-semibold">
                <Link href="/contact">Contribute to Housing Justice</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Building Phase Notice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
              Currently in Building Phase
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We're actively building our Morii Community Center facility. Every contribution helps us move closer to
              opening our doors and serving our community with these amazing programs and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">$25</div>
                <p className="text-gray-600 text-sm">Funds community workshop materials for one session</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">$100</div>
                <p className="text-gray-600 text-sm">Supports equipment for our recording studio</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">$500</div>
                <p className="text-gray-600 text-sm">Sponsors a month of programming for community members</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green mb-2">$1,000</div>
                <p className="text-gray-600 text-sm">Helps build essential facility infrastructure</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold">
              <Link href="/contact">Contribute to This Mission</Link>
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
              Whether you want to support our mission, volunteer your time, or join our community, we'd love to hear
              from you.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white font-semibold">
                <Link href="/contact">Contribute to This Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
