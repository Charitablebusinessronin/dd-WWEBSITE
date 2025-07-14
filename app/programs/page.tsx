import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Users, ArrowRight, CheckCircle, Clock, MapPin } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering our community through comprehensive programs designed to support your journey toward success
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our most popular programs and activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Career Development Card */}
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-64">
                <Image src="/career-development.png" alt="Career Development Program" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Career Development</h3>
                    <p className="text-white/90">Skills, resources, and mentorship for career advancement</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Comprehensive career services including job training, resume building, interview preparation, and
                  ongoing career counseling to help you achieve your professional goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Job placement assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Skills training workshops
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Professional networking
                  </li>
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/programs/career-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Health Education Card */}
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-64">
                <Image src="/health-education.png" alt="Health Education Program" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Health Education</h3>
                    <p className="text-white/90">Promoting wellness through education and resources</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Comprehensive health and wellness programs including fitness classes, nutrition education, mental
                  health support, and preventive care services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Fitness and yoga classes
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Mental health counseling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Health screenings
                  </li>
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/programs/health-wellness">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Community Events Card */}
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-64">
                <Image src="/community-events.png" alt="Community Events" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Community Events</h3>
                    <p className="text-white/90">Bringing people together to celebrate and connect</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Regular community events, celebrations, and gatherings that bring neighbors together and strengthen
                  our community bonds through shared experiences.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Monthly community celebrations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Cultural festivals and events
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Networking opportunities
                  </li>
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/programs/register">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">All Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of programs and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Youth Programs */}
            <Card className="h-full">
              <CardHeader>
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-dark-gray" />
                </div>
                <CardTitle className="text-dark-gray">Youth Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  After-school programs, summer camps, mentorship, and leadership development for young people.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Ages 6-18
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Main Center & Satellite Locations
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/programs/youth">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Adult Education */}
            <Card className="h-full">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-dark-gray" />
                </div>
                <CardTitle className="text-dark-gray">Adult Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  GED preparation, ESL classes, computer literacy, and continuing education opportunities.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Evening & Weekend Classes
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Education Center
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/programs/adult-education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Senior Services */}
            <Card className="h-full">
              <CardHeader>
                <div className="h-12 w-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-dark-gray">Senior Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Social activities, health screenings, transportation assistance, and support services for seniors.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Daily Programs Available
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Senior Center Wing
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/programs/senior-services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Family Support */}
            <Card className="h-full">
              <CardHeader>
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-dark-gray" />
                </div>
                <CardTitle className="text-dark-gray">Family Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Parenting classes, childcare assistance, family counseling, and emergency support services.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Flexible Scheduling
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Family Resource Center
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/programs/family-support">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Housing Assistance */}
            <Card className="h-full">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-dark-gray" />
                </div>
                <CardTitle className="text-dark-gray">Housing Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Housing search assistance, cooperative housing education, and homeownership preparation.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  By Appointment
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Housing Resource Office
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/housing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Arts & Culture */}
            <Card className="h-full">
              <CardHeader>
                <div className="h-12 w-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-dark-gray">Arts & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Art classes, music programs, cultural events, and creative workshops for all ages.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Various Times
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Arts Studio & Gallery
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/programs/arts-culture">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Registration CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our programs and become part of a community that supports your growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/programs/register">
                Register for Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
