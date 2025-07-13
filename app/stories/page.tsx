import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Heart, Award } from "lucide-react"

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/youth-community.png" alt="Stories of Transformation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/50" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rebel-border">
                Stories of Transformation: Where Individual Growth Meets Community Power
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white">
                These are the stories that remind us why we do this work. Each journey is unique, but they all share
                common threads: the power of community support, the importance of stable housing, and the transformation
                that happens when people have access to opportunities and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Featured Success Stories
            </h2>
          </div>

          {/* Maria's Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">
                Maria's Journey: From Uncertainty to Homeownership
              </h3>
              <p className="text-sm text-accent font-semibold mb-4">Housing Cooperative Member since 2020</p>

              <div className="relative mb-6">
                <div className="text-4xl text-primary font-serif absolute -top-4 -left-4">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-8">
                  This place gave me more than affordable housing—it gave me a community. Sofia has grandparents here,
                  even though my family lives far away. I'm building equity instead of just paying rent, and for the
                  first time in my life, I feel secure.
                </blockquote>
                <div className="text-4xl text-primary font-serif absolute -bottom-4 -right-4">"</div>
              </div>

              <p className="text-gray-600 mb-4">
                Three years ago, Maria was facing eviction from her apartment while juggling two part-time jobs and
                raising her eight-year-old daughter Sofia. With rent consuming 70% of her income, she had no savings and
                little hope of ever owning her own home.
              </p>
              <p className="text-gray-600 mb-6">
                Today, Maria and Sofia live in a beautiful townhome at Sunrise Cooperative Village, where her monthly
                payment is $300 less than her previous rent. As a cooperative member-owner, she has a voice in community
                decisions and has built lasting friendships with her neighbors. Maria now volunteers as a peer mentor
                and serves on the cooperative's board of directors.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-family.png" alt="Maria's Story" fill className="object-cover" />
            </div>
          </div>

          {/* Marcus's Career Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-member-2.png" alt="Marcus's Story" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">
                Marcus's Career Transformation: From Survival to Success
              </h3>
              <p className="text-sm text-accent font-semibold mb-4">Career Development Program Graduate, 2023</p>

              <div className="relative mb-6">
                <div className="text-4xl text-secondary font-serif absolute -top-4 -left-4">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-8">
                  The program didn't just help me find a job—it helped me discover what I was truly capable of
                  achieving. They saw the leader in me before I saw it myself.
                </blockquote>
                <div className="text-4xl text-secondary font-serif absolute -bottom-4 -right-4">"</div>
              </div>

              <p className="text-gray-600 mb-4">
                After spending eight years in and out of the criminal justice system, Marcus found himself at 29 with
                few job prospects and mounting pressure to support his family through any means necessary.
              </p>
              <p className="text-gray-600 mb-6">
                Through our Career Development program, Marcus completed his GED, earned HVAC certifications, and
                connected with employers who valued his potential over his past. Now employed as a lead technician with
                tripled income, Marcus has returned as a mentor, helping other formerly incarcerated community members
                navigate their own career transitions.
              </p>
            </div>
          </div>

          {/* The Johnson Family */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">The Johnson Family: Building Wellness Together</h3>
              <p className="text-sm text-accent font-semibold mb-4">Family Wellness Program Participants since 2022</p>

              <div className="relative mb-6">
                <div className="text-4xl text-accent font-serif absolute -top-4 -left-4">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-8">
                  We're not just healthier individually—we're stronger as a family. And now we help other families going
                  through similar struggles.
                </blockquote>
                <div className="text-4xl text-accent font-serif absolute -bottom-4 -right-4">"</div>
              </div>

              <p className="text-gray-600 mb-4">
                When David Johnson was diagnosed with diabetes and his wife Angela began struggling with depression,
                their family felt overwhelmed by mounting medical bills and emotional stress. Their teenage children,
                Malik and Keisha, were acting out at school.
              </p>
              <p className="text-gray-600 mb-6">
                Through our Family Wellness Program, David learned to manage his diabetes through nutrition education,
                Angela found support through counseling and community mental health programming, and the whole family
                participated in financial literacy classes. Today, David's diabetes is well-controlled, Angela leads a
                support group, and both children are thriving academically and socially.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-workshop.png" alt="Johnson Family Story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Youth Leadership Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Youth Leadership Stories</h2>
            <p className="mt-4 text-lg text-gray-600">Young people leading change in their community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/youth-basketball.png" alt="Malik's Organizing Victory" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-2">
                  Malik's Organizing Victory: Youth Transit Advocacy
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">Youth Leadership Program Participant</p>
                <p className="text-gray-600 mb-4">
                  When 16-year-old Malik noticed friends were frequently late to after-school programs because of
                  limited bus service, he decided to do something about it. Through our Youth Leadership Program, Malik
                  learned community organizing skills and policy advocacy.
                </p>
                <p className="text-gray-600 mb-4">
                  His efforts resulted in extended evening service on two bus routes serving our community, benefiting
                  not just youth but also adults working evening shifts and seniors needing transportation to medical
                  appointments.
                </p>
                <div className="relative">
                  <div className="text-2xl text-primary font-serif absolute -top-2 -left-2">"</div>
                  <blockquote className="text-gray-600 italic pl-4">
                    Young people are affected by policy decisions, so we should have a voice in making them. This
                    community taught me that my voice matters and gave me the tools to use it effectively.
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/art-workshop.png" alt="Keisha's Creative Expression" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-2">
                  Keisha's Creative Expression: Community Mural Project
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">Arts Program Participant and Community Artist</p>
                <p className="text-gray-600 mb-4">
                  Fifteen-year-old Keisha felt like her neighborhood was often portrayed negatively in local media. She
                  wanted to show the beauty, strength, and resilience she saw in her community every day.
                </p>
                <p className="text-gray-600 mb-4">
                  Through our Community Arts Program, Keisha worked with community members to design a mural that
                  incorporated symbols and stories from different cultural backgrounds. Over six months, more than 50
                  community members contributed to the painting process.
                </p>
                <div className="relative">
                  <div className="text-2xl text-secondary font-serif absolute -top-2 -left-2">"</div>
                  <blockquote className="text-gray-600 italic pl-4">
                    Art has the power to change how people see a place and how people who live there see themselves.
                    This mural reminds us every day that we're part of something beautiful and strong.
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Community Impact Stories</h2>
            <p className="mt-4 text-lg text-gray-600">Collective efforts that strengthen our entire community</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">The Sunrise Cooperative Village Gardens</h3>
              <p className="text-sm text-accent font-semibold mb-4">Collaborative Community Project, 2023</p>

              <p className="text-gray-600 mb-4">
                What started as unused space behind the cooperative housing units has become a thriving community garden
                that feeds 40 families year-round and brings neighbors together across cultural and generational lines.
              </p>
              <p className="text-gray-600 mb-4">
                Residents Maria Gonzalez and James Chen noticed families struggling with food costs and limited access
                to fresh produce. They proposed converting the unused lot into community garden space.
              </p>
              <p className="text-gray-600 mb-6">
                The garden now produces over 2,000 pounds of fresh vegetables annually, with surplus shared with the
                broader community through our weekend food distribution. More importantly, it's become a gathering place
                where children play while parents tend plots and share gardening knowledge across language barriers.
              </p>

              <div className="relative">
                <div className="text-2xl text-green font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-gray-600 italic pl-4">
                  It's not just about the food. It's about having a place where neighbors become family.
                </blockquote>
                <cite className="text-sm text-gray-500 block mt-2 pl-4">
                  - Mrs. Williams, resident elder who tends the herb section
                </cite>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-art-group.png" alt="Community Gardens" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/event-career-fair.png" alt="Career Fair Success" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-dark-gray mb-4">The Career Fair Success Story</h3>
              <p className="text-sm text-accent font-semibold mb-4">Annual Community Event Impact</p>

              <p className="text-gray-600 mb-4">
                Our annual career fair has become one of the region's most successful employment events, with over 300
                job seekers connecting with 50+ employers each year. What makes it unique is the community-centered
                approach that treats job seekers as whole people, not just resume statistics.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-primary">127</div>
                  <p className="text-sm text-gray-600">On-the-spot interviews</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-secondary">89</div>
                  <p className="text-sm text-gray-600">Job offers within two weeks</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-accent">156</div>
                  <p className="text-sm text-gray-600">Enrolled in skills training</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-green">45</div>
                  <p className="text-sm text-gray-600">Employer partnerships</p>
                </div>
              </div>

              <div className="relative">
                <div className="text-2xl text-accent font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-gray-600 italic pl-4">
                  We don't just fill positions—we build relationships that support long-term career success.
                </blockquote>
                <cite className="text-sm text-gray-500 block mt-2 pl-4">- Sarah Kim, Regional Medical Center</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Stories in Progress</h2>
            <p className="mt-4 text-lg text-gray-600">The next chapter of community transformation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-gray mb-4">
                      The Next Generation of Cooperative Housing
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-4">Maple Grove Family Cooperative Development</p>

                    <p className="text-gray-600 mb-4">
                      The success of our existing housing cooperatives has created demand for additional community-owned
                      housing. Our newest development, Maple Grove Family Cooperative, is being designed entirely with
                      input from future residents.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Twenty-four families are participating in the planning process, attending weekly meetings to
                      discuss everything from unit layouts to community governance structures. Children are involved
                      through design workshops where they share ideas for outdoor spaces and community areas.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Construction begins in fall 2025, with families moving in throughout 2026. The cooperative will
                      include innovative features like shared commercial kitchen space for food businesses, community
                      childcare facilities, and sustainable energy systems designed and maintained by residents.
                    </p>

                    <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                      <Link href="/housing-cooperatives">Learn About Housing Cooperatives</Link>
                    </Button>
                  </div>

                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image src="/community-leader.png" alt="Future Housing Development" fill className="object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Community Voices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="relative mb-4">
                <div className="text-3xl text-primary font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-6">
                  This place doesn't just provide services—it creates possibilities. When I see what people accomplish
                  here, I remember that change is always possible.
                </blockquote>
              </div>
              <cite className="text-gray-500">- Dr. Patricia Williams, Community Member since 2019</cite>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="relative mb-4">
                <div className="text-3xl text-secondary font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-6">
                  The most powerful thing about this community is how it helps you see yourself differently. I went from
                  someone who needed help to someone who helps others, and both roles are valuable.
                </blockquote>
              </div>
              <cite className="text-gray-500">- Roberto Santos, Volunteer Coordinator</cite>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="relative mb-4">
                <div className="text-3xl text-accent font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-6">
                  My children are growing up believing that communities can take care of each other, that neighbors can
                  become family, that they have the power to create change. That's a gift.
                </blockquote>
              </div>
              <cite className="text-gray-500">- Jennifer Kim, Cooperative Resident and Parent</cite>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="relative mb-4">
                <div className="text-3xl text-green font-serif absolute -top-2 -left-2">"</div>
                <blockquote className="text-lg text-gray-600 italic pl-6">
                  Every story here reminds me that individual success and community strength aren't separate things—they
                  grow together.
                </blockquote>
              </div>
              <cite className="text-gray-500">- Rev. Michael Johnson, Community Partner</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Share Your Story</h2>
            <p className="mt-6 text-lg">
              Are you part of the Difference Driven community? We'd love to feature your story and celebrate your
              journey.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Contact Our Communications Team</h3>
                <p className="mb-4">Email: stories@differencedriven.org</p>
                <p>Phone: (704) 555-DDCC (3322)</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Monthly StoryShare Gatherings</h3>
                <p className="mb-4">First Friday of every month at 7 PM</p>
                <p>Share your story in a supportive community setting</p>
              </div>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white">
                <Link href="/contact">Share Your Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
