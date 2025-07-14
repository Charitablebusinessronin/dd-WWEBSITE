import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Building } from "lucide-react"

export default function HousingCooperativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/community-family.png" alt="Community-Owned Housing" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-dark-gray/60" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl rebel-border">
                Your Path to Affordable Home Ownership
              </h1>
              <h2 className="text-2xl font-semibold text-primary mt-4 mb-6">Community-Owned Housing Initiative</h2>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Housing is a human right, and homeownership shouldn't be out of reach. Our community-owned housing
                initiative is working to create affordable pathways to homeownership in our neighborhood.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-dark-gray font-bold px-8 py-6 text-lg mr-4"
                >
                  <Link href="#learn-more">Learn More</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark-gray px-8 py-6 text-lg bg-transparent"
                >
                  <Link href="#contribute">Contribute to Housing Justice</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="learn-more" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Our Housing Mission
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We're developing innovative approaches to affordable housing that keep communities together while building
              wealth and stability for families. Through cooperative ownership models and community land trusts, we're
              making homeownership accessible.
            </p>
          </div>

          <div className="bg-accent text-white p-8 rounded-lg text-center">
            <blockquote className="text-xl italic">
              "Community-owned housing cooperatives represent not just a viable solution but an essential tool for
              achieving racial equity within the next generation rather than the next five centuries."
            </blockquote>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">How You Can Help</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              This initiative is currently in development as we raise funds and build partnerships. Your contribution
              helps us research, plan, and implement housing solutions that serve our community's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">$25</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">Research & Planning</p>
              <p className="text-gray-600 text-sm mt-2">Supports community research and housing needs assessment</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">$100</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">Partnership Building</p>
              <p className="text-gray-600 text-sm mt-2">Helps establish partnerships with housing organizations</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">$500</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">Community Education</p>
              <p className="text-gray-600 text-sm mt-2">Funds workshops on cooperative housing models</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green">$1,000</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">Implementation</p>
              <p className="text-gray-600 text-sm mt-2">Supports initial development and infrastructure planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Proven Models of Success
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Community-owned housing cooperatives have a proven track record of success across the country
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Champlain Housing Trust</h3>
                <p className="text-sm text-accent font-semibold mb-2">40+ Years Strong</p>
                <p className="text-gray-600 mb-4">
                  Operating in Vermont for over four decades, CHT has helped families build an average of $49,776 in
                  proceeds from home sales while keeping homes affordable for the next generation.
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-dark-gray">
                    67% of CHT homeowners successfully purchase market-rate homes when they're ready to move
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">ROC USA Network</h3>
                <p className="text-sm text-accent font-semibold mb-2">275 Communities, 18,790 Homes</p>
                <p className="text-gray-600 mb-4">
                  Residents have taken control of their housing destiny. ROC communities raise site fees at less than
                  25% of the industry average, and homes sell for higher values with less time on market.
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-dark-gray">
                    Proven model for resident ownership and community control
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">Dudley Street Neighborhood Initiative</h3>
                <p className="text-sm text-accent font-semibold mb-2">Boston, 40+ Years</p>
                <p className="text-gray-600 mb-4">
                  DSNI became the first community organization to obtain eminent domain powers, developing 400+ new
                  homes while transforming 1,300 vacant lots into productive community spaces.
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-dark-gray">
                    Successfully prevented displacement during Boston's gentrification wave
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contribute" className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Housing Justice Movement</h2>
            <p className="text-lg mb-8">
              Ready to be part of the solution? Your contribution helps us research, plan, and implement housing
              solutions that serve our community's needs and create pathways to homeownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg font-semibold"
              >
                <Link href="/contact">Contribute to Housing Justice</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent font-semibold"
              >
                <Link href="/contact">Learn More About Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
