import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, TrendingUp, Users, Award } from "lucide-react"

export default function CareerDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/community-member-2.png"
            alt="Career Development Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-gray/60" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Building Bridges to Meaningful Employment
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Our Career Development program meets you where you are and provides the tools, skills, and support
                needed to secure sustainable employment that aligns with your goals and values.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-dark-gray font-bold px-8 py-6 text-lg mr-4"
                >
                  <Link href="#apply">Apply for Career Program</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark-gray px-8 py-6 text-lg bg-transparent"
                >
                  <Link href="#success-stories">Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Skills Assessment & Career Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• One-on-one career counseling sessions</li>
                  <li>• Skills assessment and gap analysis</li>
                  <li>• Personalized career pathway development</li>
                  <li>• Goal setting and action planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Technical Skills Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer literacy and digital skills</li>
                  <li>• Industry-specific certifications (AI, HVAC, Healthcare)</li>
                  <li>• Financial literacy and workplace readiness</li>
                  <li>• Communication and leadership development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Job Search Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Resume writing and interview preparation</li>
                  <li>• Job search strategies and networking</li>
                  <li>• Professional wardrobe assistance</li>
                  <li>• Transportation support for interviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Ongoing Mentorship</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pairing with successful community members</li>
                  <li>• 90-day employment support and check-ins</li>
                  <li>• Workplace problem-solving assistance</li>
                  <li>• Career advancement planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Program Outcomes</h2>
            <p className="mt-4 text-lg text-gray-600">Real results that transform lives and strengthen communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-lg font-semibold text-dark-gray">of participants secure employment within 6 months</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">92%</div>
              <p className="text-lg font-semibold text-dark-gray">retention rate after one year</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-accent mb-2">40%</div>
              <p className="text-lg font-semibold text-dark-gray">average wage increase within two years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section id="success-stories" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Marcus's Transformation</h2>
              <div className="relative mb-6">
                <div className="text-4xl text-primary font-serif absolute -top-4 -left-4">"</div>
                <blockquote className="text-xl text-gray-600 italic pl-8">
                  The career program didn't just help me find a job—it helped me discover what I was truly capable of
                  achieving. They saw the leader in me before I saw it myself.
                </blockquote>
                <div className="text-4xl text-primary font-serif absolute -bottom-4 -right-4">"</div>
              </div>
              <p className="text-gray-600 mb-4">
                After spending eight years in and out of the criminal justice system, Marcus found himself at 29 with
                few job prospects and mounting pressure to support his family.
              </p>
              <p className="text-gray-600 mb-6">
                Through our Career Development program, Marcus completed his GED, earned HVAC certifications, and most
                importantly, connected with employers who valued his potential over his past. Now employed as a lead
                technician, Marcus has tripled his income and returned as a mentor for other program participants.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                <Link href="/stories">Read More Success Stories</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/community-member-1.png"
                alt="Marcus Thompson, Program Graduate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-600">Join our next Career Development cohort</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">Initial Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Meet with our career counselor to discuss your goals and interests
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">Skills Development</h3>
                <p className="text-gray-600 text-sm">
                  Participate in workshops and training tailored to your career path
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">Job Search</h3>
                <p className="text-gray-600 text-sm">
                  Get support with applications, interviews, and connecting with employers
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">Receive mentorship and career advancement support for 90+ days</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-dark-gray mb-4">Program Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">Schedule:</h4>
                    <p className="text-gray-600 mb-4">Ongoing enrollment with flexible scheduling options</p>

                    <h4 className="font-semibold text-dark-gray mb-2">Cost:</h4>
                    <p className="text-gray-600">Free for members, $50 for non-members</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">Requirements:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Commitment to program completion</li>
                      <li>• Willingness to participate in job search activities</li>
                      <li>• Open to feedback and coaching</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-dark-gray">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Schedule Information Session</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Career Journey Starts Here</h2>
            <p className="mt-6 text-lg">
              Join hundreds of community members who have transformed their careers and built brighter futures through
              our comprehensive career development program.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
