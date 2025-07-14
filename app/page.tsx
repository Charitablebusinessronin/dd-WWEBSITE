import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSlider from "@/components/hero-slider"
import QuickLinks from "@/components/quick-links"
import SocialSidebar from "@/components/social-sidebar"
import { Users, Heart, BookOpen, Calendar, MapPin, Phone, Mail, ArrowRight, Star, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="relative">
        <HeroSlider />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Building Stronger Communities Together</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Empowering individuals and families through community ownership, shared prosperity, and collective care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-dark-gray text-lg px-8 py-3">
                <Link href="/register">Join Our Community</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-gray text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <QuickLinks />

      {/* Community Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Our Community Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we're making a difference in our community through programs, events, and services that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-dark-gray" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-2">500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-dark-gray" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-2">25+</h3>
              <p className="text-gray-600">Programs Offered</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-2">100+</h3>
              <p className="text-gray-600">Events This Year</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-dark-gray" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-2">1000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>

          {/* Community Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/community-celebration.png"
                  alt="Community members celebrating together"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Community Celebrations</h3>
                <p className="text-gray-600 mb-4">
                  Join us for regular community events that bring neighbors together and celebrate our shared
                  achievements.
                </p>
                <Button asChild variant="outline">
                  <Link href="/events">View Upcoming Events</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/wellness-meditation.png"
                  alt="Community wellness and meditation class"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Health & Wellness</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive wellness programs including fitness classes, meditation, and mental health support.
                </p>
                <Button asChild variant="outline">
                  <Link href="/programs/health-wellness">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/community-art-project.png"
                  alt="Community art project with adult and child painting mural"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Arts & Culture</h3>
                <p className="text-gray-600 mb-4">
                  Creative programs for all ages, from community murals to art workshops that express our shared
                  identity.
                </p>
                <Button asChild variant="outline">
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/health-services.png"
                  alt="Healthcare professionals providing community health services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">Health Services</h3>
                <p className="text-gray-600 mb-4">
                  Access to healthcare services, health screenings, and wellness education right in your community.
                </p>
                <Button asChild variant="outline">
                  <Link href="/programs/health-wellness">Get Health Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover programs designed to support your journey toward economic stability and community connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-dark-gray" />
                </div>
                <CardTitle className="text-dark-gray">Career Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Job training, resume building, interview preparation, and career counseling to help you achieve your
                  professional goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Job placement assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Skills training workshops
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional networking
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/programs/career-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-dark-gray" />
                </div>
                <CardTitle className="text-dark-gray">Housing Cooperatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn about cooperative housing models and get support in finding affordable, community-owned housing
                  options.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cooperative education
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Housing search assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community ownership support
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/housing-cooperatives">Explore Housing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-dark-gray">Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive health services including fitness classes, mental health support, and preventive care.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fitness and yoga classes
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mental health counseling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Health screenings
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/programs/health-wellness">Get Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Community Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from community members whose lives have been transformed through our programs and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The career development program helped me land my dream job. The support and training I received were
                  invaluable."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/testimonial-jasmine.png"
                    alt="Jasmine"
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-dark-gray">Jasmine Rodriguez</p>
                    <p className="text-sm text-gray-500">Program Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Finding affordable housing through the cooperative program changed my family's life. We finally have
                  a stable home."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/community-member-1.png"
                    alt="Marcus"
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-dark-gray">Marcus Johnson</p>
                    <p className="text-sm text-gray-500">Housing Cooperative Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The wellness programs have been amazing for my mental health. The community support makes all the
                  difference."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/community-member-2.png"
                    alt="Sarah"
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-dark-gray">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Wellness Program Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Take the first step toward building a stronger future for yourself and your family. Our community is here to
            support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/register">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-dark-gray text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3 text-primary" />
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-gray-300">123 Community Way, Charlotte, NC 28202</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3 text-primary" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-300">(704) 555-0123</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3 text-primary" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-300">info@differencedriven.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Sidebar */}
      <SocialSidebar />
    </div>
  )
}
