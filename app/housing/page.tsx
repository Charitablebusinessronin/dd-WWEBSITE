import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Building, ArrowRight } from "lucide-react"

export default function HousingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/community-family.png" alt="Community-Owned Housing" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/70" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Community-Owned Housing Initiative
              </h1>
              <p className="text-2xl font-semibold text-primary mt-4">Building Wealth Through Cooperative Ownership</p>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Housing is a human right. We're researching and developing community-owned housing models that build
                wealth while keeping neighborhoods affordable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-accent mb-4">29%</div>
                <p className="text-lg font-semibold text-dark-gray">
                  Homeownership gap between White and Black families
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-primary mb-4">$6M</div>
                <p className="text-lg font-semibold text-dark-gray">Mecklenburg County investment in West Side CLT</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-secondary mb-4">40x</div>
                <p className="text-lg font-semibold text-dark-gray">More wealth for homeowners vs renters</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Difference Driven Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl mb-8">
              Our Housing Justice Vision
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Housing is a human right, and homeownership shouldn't be out of reach. We're researching and developing
                community-owned housing models that build wealth while keeping neighborhoods affordable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through cooperative ownership models and community land trusts, we're working to create pathways to
                homeownership that serve our community's needs and close the racial wealth gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
              Explore Our Housing Research
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Dive deeper into the data, models, and local context behind our housing initiative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Research & Data</h3>
                <p className="text-gray-600 mb-4">
                  Explore comprehensive data on homeownership gaps, wealth inequality, and the impact of housing on
                  community wealth building.
                </p>
                <Link
                  href="/housing/research"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  View Research & Data
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Cooperative Models</h3>
                <p className="text-gray-600 mb-4">
                  Learn how community land trusts and housing cooperatives create affordable homeownership while
                  building community wealth.
                </p>
                <Link
                  href="/housing/cooperatives"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn About Cooperatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">North Carolina Context</h3>
                <p className="text-gray-600 mb-4">
                  Discover local opportunities, existing programs, and how North Carolina is leading in community-owned
                  housing initiatives.
                </p>
                <Link
                  href="/housing/north-carolina"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  North Carolina Context
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Support Housing Justice</h2>
            <p className="text-lg mb-8">
              Help us research and develop housing solutions for our community. Your contribution supports our work to
              create pathways to affordable homeownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg font-semibold"
              >
                <Link href="/contact">Contribute to This Mission</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent font-semibold"
              >
                <Link href="/housing/research">Explore the Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
