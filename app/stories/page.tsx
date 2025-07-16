import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/youth-community.png" alt="Stories of Impact" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Stories of Impact</h1>
              <p className="mt-6 max-w-xl text-lg text-white">
                Real stories from community members whose lives have been transformed through our programs and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Meet Jasmine</h2>
              <div className="relative mb-6">
                <div className="text-4xl text-primary font-serif absolute -top-4 -left-4">"</div>
                <blockquote className="text-xl text-gray-600 italic">
                  The Difference Driven Community Center changed my life. Through their career development program, I
                  gained the skills and confidence to pursue my dream job. The supportive community here truly empowers
                  everyone to reach their full potential.
                </blockquote>
                <div className="text-4xl text-primary font-serif absolute -bottom-4 -right-4">"</div>
              </div>
              <p className="text-gray-600 mb-4">
                When Jasmine first came to the Difference Driven Community Center, she was struggling to find employment
                after being laid off from her job of 10 years. Through our Career Development program, she received
                resume assistance, interview coaching, and skills training that helped her secure a position in a
                growing field.
              </p>
              <p className="text-gray-600 mb-6">
                Today, Jasmine is not only employed but thriving in her new career. She regularly returns to the Center
                as a volunteer, helping others who are facing similar challenges.
              </p>

              <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                <Link href="/programs#career">Learn About Our Career Program</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-art-group.png" alt="Jasmine's Story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">More Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Each story represents a life changed and a community strengthened
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Marcus's Story"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-2">Marcus's Journey to Education</h3>
                  <p className="text-gray-600 mb-4">
                    "The mentorship program gave me the guidance I needed to navigate college applications and secure
                    scholarships. I'm the first in my family to attend college."
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="#">Read Full Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Mrs. Johnson's Story"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-2">Mrs. Johnson's Community Leadership</h3>
                  <p className="text-gray-600 mb-4">
                    "After retirement, I found purpose in volunteering. Now I lead a reading program for children that
                    has improved literacy rates in our neighborhood."
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="#">Read Full Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="The Rodriguez Family Story"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-2">
                    The Rodriguez Family's Health Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "The health education workshops taught our family how to cook nutritious meals on a budget. We've
                    all seen improvements in our health."
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="#">Read Full Story</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Video Testimonials</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from community members about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=315&width=560"
                alt="Video Testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-gray"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=315&width=560"
                alt="Video Testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-gray"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact in Numbers</h2>
            <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
              Behind every statistic are real people whose lives have been positively impacted
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">85%</p>
              <p className="text-lg">of career program participants secured employment</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">90%</p>
              <p className="text-lg">of youth participants improved academic performance</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">75%</p>
              <p className="text-lg">of health program participants reported improved well-being</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-lg">of participants would recommend our programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl mb-6">Share Your Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have you been impacted by the Difference Driven Community Center? We'd love to hear your story and
              possibly feature it on our website or in our communications.
            </p>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-dark-gray">
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Be Part of Our Story</h2>
            <p className="mt-6 text-lg">
              Join us in creating more success stories and making a positive impact in our community.
            </p>
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
