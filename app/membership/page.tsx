import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Heart, Star } from "lucide-react"

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
                Join the Difference Driven Community
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Membership isn't just about accessing our programs—it's about becoming part of a community committed to
                collective growth and mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Membership Benefits
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              All members receive these core benefits as part of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Access to all programs and workshops</span>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Use of community spaces and facilities</span>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Invitation to member-only events</span>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Voting rights in community decisions</span>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Access to emergency support funds</span>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Discounted program fees and services</span>
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
              Choose the membership level that best fits your needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community Supporter */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">Community Supporter</h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    $25<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">
                    Perfect for community members who want to stay connected and support our mission
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to all workshops and events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Community newsletter and updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Volunteer opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to community garden plots</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                  <Link href="/contact">Choose This Plan</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Full Member */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow relative border-2 border-secondary">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">Full Member</h3>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    $50<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">
                    Ideal for individuals and families who want comprehensive program access
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Everything in Community Supporter</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority registration for limited-capacity programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to one-on-one counseling services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Childcare during programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to computer lab and study spaces</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/contact">Choose This Plan</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Family Membership */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">Family Membership</h3>
                  <div className="text-3xl font-bold text-accent mb-2">
                    $75<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">Designed for families who want to grow together</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Everything in Full Member for up to 4 family members</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Family-specific programming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Summer camp discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority consideration for housing cooperative applications</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">Choose This Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-dark-gray mb-3">Sliding Scale Available</h3>
              <p className="text-gray-600">
                We believe financial circumstances should never prevent community participation. Contact us to discuss
                income-based membership options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Getting Started
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Choose Your Membership Level</h3>
              <p className="text-gray-600 text-sm">Select the option that best fits your needs and budget</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Complete Membership Application</h3>
              <p className="text-gray-600 text-sm">
                Share a bit about yourself and your goals for community involvement
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Attend New Member Orientation</h3>
              <p className="text-gray-600 text-sm">Learn about our programs, meet other members, and get connected</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Begin Your Community Journey</h3>
              <p className="text-gray-600 text-sm">Start participating in programs and building relationships</p>
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
              Take the first step toward becoming part of a community committed to collective growth and mutual support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg">
                <Link href="/contact">Join Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/contact">Questions About Membership?</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
