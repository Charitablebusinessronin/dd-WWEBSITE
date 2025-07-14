import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Heart, Mic, Radio, Headphones } from "lucide-react"

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/community-art-group.png"
            alt="Join the Difference Driven Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Join the Morii Community Center
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Membership isn't just about accessing our programs—it's about becoming part of a community committed to
                collective growth and creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Membership Options</h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the membership level that best fits your creative journey and community goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Membership */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">Start Your Journey - No Barriers</h3>
                  <div className="text-3xl font-bold text-primary mb-2">FREE</div>
                  <p className="text-gray-600">
                    Everyone deserves access to opportunity. Our free community membership opens doors to workshops,
                    resources, and connections that can change your life.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-dark-gray mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Monthly community workshops and events</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Access to resource library and information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Networking opportunities with community members</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Basic life skills support and guidance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Event notifications and community updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Career development seminars and job placement assistance</span>
                    </li>
                  </ul>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-dark-gray font-semibold">
                  <Link href="/contact">Join Free Today</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Part-Time Creator Membership */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow relative border-2 border-secondary">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Creator Access
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">Unleash Your Creative Potential</h3>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    $100<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">
                    Ready to take your creativity to the next level? Our Part-Time Creator Membership gives you
                    professional-grade access to recording facilities, broadcasting equipment, and wellness spaces.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-dark-gray mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Studio Time</strong> - Professional recording equipment and soundproof rooms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Recording Facilities</strong> - Full access to mixing boards, microphones, and
                        production tools
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Broadcasting Space</strong> - Live streaming capabilities and radio broadcasting
                        equipment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Podcast Recording Space</strong> - Dedicated podcast production with professional audio
                        quality
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Yoga Room Access</strong> - Wellness and meditation space for mental clarity and
                        physical health
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Part-Time Hours</strong> - Up to 20 hours monthly of facility access
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Priority booking for prime time slots</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Equipment training and technical support</span>
                    </li>
                  </ul>
                </div>

                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                  <Link href="/contact">Become a Creator Member</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-dark-gray mb-3">Currently in Building Phase</h3>
              <p className="text-gray-600">
                We're actively building our Morii Community Center facility. Join our community now to stay updated on
                our progress and be among the first to access our amazing spaces when we open!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Facilities Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Future Creative Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get a preview of the professional-grade facilities coming to our Morii Community Center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Recording Studio</h3>
              <p className="text-gray-600 text-sm">
                Professional-grade recording equipment with soundproof rooms for music production and voiceovers
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Podcast Studio</h3>
              <p className="text-gray-600 text-sm">
                Dedicated podcast production space with acoustic treatment and professional microphones
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Broadcasting Space</h3>
              <p className="text-gray-600 text-sm">
                Live streaming capabilities and radio broadcasting equipment for content creation
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Wellness Room</h3>
              <p className="text-gray-600 text-sm">
                Yoga and meditation space for mental clarity, physical health, and community wellness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8">
              Take the first step toward becoming part of a community committed to creative expression, collective
              growth, and mutual support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg font-semibold"
              >
                <Link href="/contact">Join Our Community</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent font-semibold"
              >
                <Link href="/contact">Contribute to This Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
