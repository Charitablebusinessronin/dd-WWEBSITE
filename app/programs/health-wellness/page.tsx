import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Brain, Activity, Leaf, Shield } from "lucide-react"

export default function HealthWellnessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/community-family.png" alt="Health Education & Wellness" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/60" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Nurturing Whole-Person Wellness in Community
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white">
                True health happens in community. Our comprehensive wellness programs address physical, mental, and
                emotional health while building connections that support long-term wellbeing.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-dark-gray font-bold px-8 py-6 text-lg mr-4"
                >
                  <Link href="#programs">Explore Programs</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark-gray px-8 py-6 text-lg bg-transparent"
                >
                  <Link href="#testimonial">Read Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Wellness */}
      <section id="programs" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Physical Wellness</h2>
              <p className="text-gray-600 mb-6">
                Building healthy habits through community support and accessible programming that meets you where you
                are.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Programs Include:</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Community fitness classes (yoga, walking groups, strength training)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Nutrition education and healthy cooking classes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Chronic disease management support groups</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Access to affordable healthcare resources</span>
                </li>
              </ul>

              <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                <Link href="/contact">Join Physical Wellness Programs</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/youth-basketball.png" alt="Physical Wellness Programs" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-workshop.png" alt="Mental Health Support" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Mental Health Support</h2>
              <p className="text-gray-600 mb-6">
                Creating safe spaces for healing and growth while reducing stigma around mental health challenges.
              </p>

              <h3 className="text-xl font-bold text-dark-gray mb-4">Support Services:</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Individual and group counseling services</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Support groups for anxiety, depression, and trauma</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Stress management and mindfulness training</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Crisis intervention and safety planning</span>
                </li>
              </ul>

              <Button asChild className="bg-secondary hover:bg-secondary/90 text-dark-gray">
                <Link href="/contact">Access Mental Health Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Special Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600">Innovative approaches to community wellness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Healing Gardens</h3>
                <p className="text-gray-600 mb-4">
                  Therapeutic gardening program that combines stress relief with community building through shared
                  growing spaces and harvest celebrations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weekly gardening sessions</li>
                  <li>• Mindfulness in nature practices</li>
                  <li>• Community harvest events</li>
                  <li>• Herbal medicine workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Wellness Peer Support</h3>
                <p className="text-gray-600 mb-4">
                  Training community members to support each other's wellness journeys through peer mentorship and
                  shared experience.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Peer support specialist training</li>
                  <li>• Wellness buddy partnerships</li>
                  <li>• Recovery support circles</li>
                  <li>• Community wellness events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Family Wellness</h3>
                <p className="text-gray-600 mb-4">
                  Programs designed for parents and children to learn healthy habits together while strengthening family
                  bonds and communication.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Family fitness activities</li>
                  <li>• Healthy cooking for families</li>
                  <li>• Parent-child communication workshops</li>
                  <li>• Family stress management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Wellness Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Community Wellness Events</h2>
            <p className="mt-4 text-lg text-gray-600">
              Regular events that bring our community together for health and healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Monthly Health Fairs</h3>
              <p className="text-gray-600 text-sm">
                Free health screenings, resources, and information from local health providers
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Wellness Workshops</h3>
              <p className="text-gray-600 text-sm">
                Community-led workshops on topics like stress management and healthy living
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Family Fitness</h3>
              <p className="text-gray-600 text-sm">
                Fun, family-friendly fitness activities that get everyone moving together
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Mental Health Awareness</h3>
              <p className="text-gray-600 text-sm">
                Events focused on reducing stigma and promoting mental health resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Sarah's Wellness Journey</h2>
              <div className="relative mb-6">
                <div className="text-4xl text-accent font-serif absolute -top-4 -left-4">"</div>
                <blockquote className="text-xl text-gray-600 italic pl-8">
                  I never thought I could prioritize my health while juggling everything else. This program showed me
                  that taking care of myself makes me better for my family and community.
                </blockquote>
                <div className="text-4xl text-accent font-serif absolute -bottom-4 -right-4">"</div>
              </div>
              <p className="text-gray-600 mb-4">
                Sarah Martinez joined our wellness program while managing diabetes, caring for elderly parents, and
                working two part-time jobs. She felt overwhelmed and had neglected her own health for years.
              </p>
              <p className="text-gray-600 mb-6">
                Through our holistic approach to wellness, Sarah learned to manage her diabetes through nutrition
                education, found stress relief through our healing gardens program, and built a support network of other
                caregivers facing similar challenges.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/stories">Read More Wellness Stories</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/community-art-group.png"
                alt="Sarah Martinez, Wellness Program Participant"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Start Your Wellness Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">Multiple ways to get involved in community wellness</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-dark-gray mb-4">Program Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-dark-gray">Schedule:</h4>
                      <p className="text-gray-600">
                        Various times throughout the week to accommodate different schedules
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Cost:</h4>
                      <p className="text-gray-600">Free for members, sliding scale available for non-members</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">Childcare:</h4>
                      <p className="text-gray-600">Available during most programs with advance registration</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-gray mb-4">Getting Started</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-gray-600">Complete wellness assessment</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-gray-600">Choose programs that fit your goals</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-gray-600">Begin your wellness journey with community support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-dark-gray">
                    <Link href="/contact">Join Wellness Programs</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Schedule Health Screening</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Wellness Happens in Community</h2>
            <p className="mt-6 text-lg opacity-90">
              Join us in creating a community where everyone has access to the resources and support they need to thrive
              physically, mentally, and emotionally.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-accent">
                <Link href="/contact">Start Your Wellness Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
