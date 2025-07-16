import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSlider from "@/components/hero-slider"
import QuickLinks from "@/components/quick-links"
import SocialSidebar from "@/components/social-sidebar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocialSidebar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Links */}
      <QuickLinks />

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Featured Programs
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular programs and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="program-card urban-card">
              <div className="relative h-80">
                <Image
                  src="/community-workshop.png"
                  alt="Career Development"
                  fill
                  className="object-cover high-contrast-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Career Development</h3>
                  <p className="text-sm opacity-90">Skills, resources, and mentorship for career advancement</p>
                </div>
              </div>
              <div className="program-overlay">
                <p className="text-white mb-4">
                  Our Career Development program provides participants with the skills, resources, and mentorship they
                  need to advance their careers and achieve their professional goals.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray w-full">
                  <Link href="/community/programs#career">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="program-card urban-card">
              <div className="relative h-80">
                <Image
                  src="/community-family.png"
                  alt="Health Education"
                  fill
                  className="object-cover high-contrast-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Health Education</h3>
                  <p className="text-sm opacity-90">Promoting wellness through education and resources</p>
                </div>
              </div>
              <div className="program-overlay">
                <p className="text-white mb-4">
                  Our Health Education program promotes wellness through education and resources for healthy living,
                  addressing both physical and mental health needs in our community.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray w-full">
                  <Link href="/community/programs#health">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="program-card urban-card">
              <div className="relative h-80">
                <Image
                  src="/community-youth.png"
                  alt="Community Events"
                  fill
                  className="object-cover high-contrast-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Community Events</h3>
                  <p className="text-sm opacity-90">Bringing people together to celebrate and connect</p>
                </div>
              </div>
              <div className="program-overlay">
                <p className="text-white mb-4">
                  Our Community Events bring people together to foster connections, celebrate diversity, and strengthen
                  the bonds that make our community resilient and vibrant.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray w-full">
                  <Link href="/community/events">View Events</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              <Link href="/community/programs">View All Programs</Link>
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
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">Join us for these exciting community events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <p className="text-accent font-semibold mb-2 event-date">June 15, 2025 • 10:00 AM - 2:00 PM</p>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Career Fair</h3>
                <div className="relative h-40 w-full mb-4 overflow-hidden rounded">
                  <Image
                    src="/event-career-fair.png"
                    alt="Career Fair"
                    fill
                    className="object-cover high-contrast-image"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Connect with local employers and explore job opportunities in various industries.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Link href="/community/events/career-fair">Register Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <p className="text-accent font-semibold mb-2 event-date">June 22, 2025 • 6:00 PM - 8:00 PM</p>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Financial Literacy Workshop</h3>
                <div className="relative h-40 w-full mb-4 overflow-hidden rounded">
                  <Image
                    src="/event-financial.png"
                    alt="Financial Literacy Workshop"
                    fill
                    className="object-cover high-contrast-image"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Learn essential money management skills and strategies for building financial security.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Link href="/community/events/financial-literacy">Register Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <p className="text-accent font-semibold mb-2 event-date">July 8, 2025 • 11:00 AM - 3:00 PM</p>
                <h3 className="text-xl font-bold text-dark-gray mb-2">Community Health Fair</h3>
                <div className="relative h-40 w-full mb-4 overflow-hidden rounded">
                  <Image
                    src="/event-health-fair.png"
                    alt="Community Health Fair"
                    fill
                    className="object-cover high-contrast-image"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Access free health screenings, resources, and information from local health providers.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Link href="/community/events/health-fair">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-dark-gray px-8 py-6 text-lg">
              <Link href="/community/events">View All Events</Link>
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
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Making a difference in our community, one person at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1K+</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Community Members</p>
              <p className="text-gray-600">Served through our programs and services</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Programs</p>
              <p className="text-gray-600">Designed to empower and educate</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">200+</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Volunteers</p>
              <p className="text-gray-600">Dedicated to making a difference</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">85%</span>
              </div>
              <p className="text-xl font-bold text-dark-gray mb-2">Success Rate</p>
              <p className="text-gray-600">Of career program participants finding employment</p>
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
                    src="/community-leader.png"
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
                <blockquote className="text-xl italic mb-6">
                  The Difference Driven Community Center changed my life. Through their career development program, I
                  gained the skills and confidence to pursue my dream job. The supportive community here truly empowers
                  everyone to reach their full potential.
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-semibold text-lg">Jasmine Williams</p>
                    <p className="text-sm opacity-80">Community Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 animated-bg text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Community Today</h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Become a member of the Difference Driven Community Center and gain access to all our programs and
              facilities. Together, we can make a difference.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg">
                <Link href="/membership/join">Become a Member</Link>
              </Button>
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-dark-gray px-8 py-6 text-lg">
                <Link href="/community/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
