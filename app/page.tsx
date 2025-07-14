import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSlider from "@/components/hero-slider"
import QuickLinks from "@/components/quick-links"
import SocialSidebar from "@/components/social-sidebar"
import { strapi, getStrapiImageUrl, fallbackData } from "@/lib/strapi"

export default async function Home() {
  // Initialize with fallback data
  let featuredPrograms = fallbackData.programs.filter((program) => program.featured).slice(0, 3)
  let upcomingEvents = fallbackData.events.slice(0, 3)
  let testimonials = fallbackData.testimonials.filter((testimonial) => testimonial.featured).slice(0, 1)

  // Try to fetch from Strapi, but don't fail if it's unavailable
  try {
    const isHealthy = await strapi.isHealthy()
    if (isHealthy) {
      const [programs, events, testimonialData] = await Promise.allSettled([
        strapi.getPrograms(),
        strapi.getEvents(),
        strapi.getTestimonials(),
      ])

      // Use Strapi data if available, otherwise keep fallback data
      if (programs.status === "fulfilled" && programs.value.length > 0) {
        featuredPrograms = programs.value.filter((program) => program.featured).slice(0, 3)
      }

      if (events.status === "fulfilled" && events.value.length > 0) {
        upcomingEvents = events.value.slice(0, 3)
      }

      if (testimonialData.status === "fulfilled" && testimonialData.value.length > 0) {
        testimonials = testimonialData.value.filter((testimonial) => testimonial.featured).slice(0, 1)
      }
    }
  } catch (error) {
    console.warn("Using fallback data due to Strapi unavailability:", error)
    // Continue with fallback data
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SocialSidebar />

      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <HeroSlider />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/95 backdrop-blur-md rounded-lg p-6 text-center max-w-2xl shadow-lg border">
            <p className="text-dark-gray font-bold text-xl mb-3">
              Where Community Ownership Meets Personal Empowerment
            </p>
            <p className="text-dark-gray/80 text-base leading-relaxed">
              We're more than a community center—we're a movement. Through cooperative housing, transformative
              education, and comprehensive wellness programs, we're proving that when communities control their own
              resources, everyone thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <QuickLinks />

      {/* Housing Cooperative Highlight */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 rebel-border inline-block pb-4">
                Community-Owned Housing: Your Path to Affordable Homeownership
              </h2>
              <p className="text-lg mb-6 text-white/95 leading-relaxed">
                Imagine living in a home you can afford, surrounded by neighbors who share your values, with a voice in
                decisions that affect your daily life. Our housing cooperatives make homeownership accessible while
                building lasting community connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-accent px-8 py-6 text-lg font-semibold"
                >
                  <Link href="/housing-cooperatives">Learn More</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-6 text-lg bg-transparent font-semibold"
                >
                  <Link href="/housing-cooperatives#get-involved">Apply Now</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/community-family.png"
                alt="Community-Owned Housing"
                fill
                className="object-cover high-contrast-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Featured Programs
            </h2>
            <p className="mt-6 text-lg text-dark-gray/80 max-w-3xl mx-auto">
              Discover our most popular programs and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="program-card urban-card">
                <div className="relative h-80">
                  <Image
                    src={getStrapiImageUrl(program.image) || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover high-contrast-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 to-dark-gray/20"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-white/90">{program.description}</p>
                  </div>
                </div>
                <div className="program-overlay">
                  <p className="text-white mb-4">{program.longDescription}</p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray w-full font-semibold">
                    <Link href={`/programs/${program.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg text-dark-gray/80 max-w-3xl mx-auto">
              Join us for these exciting community events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
              >
                <CardContent className="p-6">
                  <p className="text-accent font-bold mb-2 event-date text-lg">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    • {event.startTime} - {event.endTime}
                  </p>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">{event.title}</h3>
                  <div className="relative h-40 w-full mb-4 overflow-hidden rounded">
                    <Image
                      src={getStrapiImageUrl(event.image) || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover high-contrast-image"
                    />
                  </div>
                  <p className="text-dark-gray/80 mb-4 leading-relaxed">{event.description}</p>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                    <Link href={`/events/${event.slug}`}>
                      {event.registrationRequired ? "Register Now" : "Learn More"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-dark-gray px-8 py-6 text-lg font-semibold"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Our Impact
            </h2>
            <p className="mt-6 text-lg text-dark-gray/80 max-w-3xl mx-auto">
              Making a difference in our community, one person at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">500+</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Families Building Brighter Futures</p>
              <p className="text-dark-gray/70">Through our comprehensive programs and services</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">25+</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Programs Designed by Community, for Community</p>
              <p className="text-dark-gray/70">Responsive to real community needs</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">150+</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Neighbors Supporting Each Other</p>
              <p className="text-dark-gray/70">Volunteers making a difference daily</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">85%</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Career Program Graduates Employed Within 6 Months</p>
              <p className="text-dark-gray/70">Proven pathways to economic opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={getStrapiImageUrl(testimonials[0]?.image) || "/placeholder.svg"}
                    alt="Community Member"
                    fill
                    className="object-cover high-contrast-image"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary h-24 w-24 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-serif text-dark-gray">"</span>
                </div>
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6 rebel-border pb-4">What Our Community Says</h2>
                <blockquote className="text-xl italic mb-6 text-white/95 leading-relaxed">
                  {testimonials[0]?.content}
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-semibold text-lg text-white">{testimonials[0]?.name}</p>
                    <p className="text-sm text-white/80">{testimonials[0]?.position || "Community Member"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-dark-teal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Community Today</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/95">
                Become a member of the Difference Driven Community Center and gain access to all our programs and
                facilities. Together, we can make a difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-dark-gray px-8 py-6 text-lg font-semibold"
              >
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-dark-gray px-8 py-6 text-lg font-semibold"
              >
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
