import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, TrendingUp, Users, Building } from "lucide-react"

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
                Community-Owned Housing
              </h1>
              <h2 className="text-2xl font-semibold text-primary mt-4 mb-6">
                Building Pathways to Generational Wealth
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-white">
                Together, we're creating sustainable solutions that empower communities and close the racial wealth gap
                through proven cooperative housing models.
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
                  <Link href="#get-involved">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="learn-more" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Our Vision for Change
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We believe that housing is more than shelter—it's the foundation for building generational wealth and
              strengthening communities. Community-owned housing cooperatives offer a proven solution to address the
              racial generational wealth gap, providing both affordable housing and meaningful wealth-building
              opportunities for families who have been historically excluded from homeownership.
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

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
              The Reality We're Addressing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">40x</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">More wealth for homeowners vs. renters</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">73%</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">White homeownership rate</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">44%</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">Black homeownership rate</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green">67%</span>
              </div>
              <p className="text-lg font-semibold text-dark-gray">Cooperative members who buy market-rate homes</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-4">
              The data shows us clearly that homeownership remains the primary driver of wealth building in America.
              While White households enjoy homeownership rates of 73-74%, Black households face rates of only 44-46%,
              and Hispanic households 49-50%. These gaps haven't just persisted—they've actually grown since the Fair
              Housing Act was passed in 1968.
            </p>
            <p>
              But here's what gives us hope: community-owned housing cooperatives provide a bridge to traditional
              homeownership while building wealth along the way. Through shared equity models, families can accumulate
              equity, learn homeownership skills, and eventually transition to market-rate homeownership at rates that
              far exceed traditional affordable housing programs.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Stories of Transformation
            </h2>
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

      {/* How We're Making a Difference */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">
              How We're Making a Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Wealth Building</h3>
              <p className="text-gray-600 text-sm">
                Shared equity models allow families to build wealth through property appreciation while maintaining
                affordability
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Community Control</h3>
              <p className="text-gray-600 text-sm">
                Residents have democratic control over their housing, creating stability and preventing displacement
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Pathway to Ownership</h3>
              <p className="text-gray-600 text-sm">
                Prepares families for traditional homeownership with education, equity building, and credit improvement
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green" />
              </div>
              <h3 className="text-lg font-bold text-dark-gray mb-2">Cultural Preservation</h3>
              <p className="text-gray-600 text-sm">
                Arts and cultural integration maintains community identity while building economic strength
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl rebel-border inline-block pb-4">
              Our Path Forward
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We know that lasting change requires strategic, community-driven action. That's why we're building
              partnerships across sectors and implementing our vision through proven, phased approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-3">Foundation Building</h3>
              <p className="text-gray-600">
                Community asset mapping, partnership development, and governance structure creation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-3">Development & Programming</h3>
              <p className="text-gray-600">
                Creating live/work spaces, cultural programming, and revenue-generating initiatives
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-20 w-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-3">Sustainability & Growth</h3>
              <p className="text-gray-600">
                Building endowments, land trust structures, and networks with other cooperatives
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Our approach draws on successful international models from Germany, Austria, Canada, and the UK, while
              adapting to the unique needs and strengths of our communities. We're not reinventing the wheel—we're
              building on decades of proven success.
            </p>
          </div>
        </div>
      </section>

      {/* Data Visualizations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl">Data & Impact</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the data behind community housing cooperatives and their proven impact
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Interactive Data Visualizations</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive analysis of homeownership gaps, wealth building potential, and cooperative housing success
                metrics
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/housing-cooperatives/data">View Full Data Dashboard</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-dark-gray mb-2">Homeownership Rates by Race</h4>
                <p className="text-sm text-gray-600">29-30 point gap between White and Black homeownership</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-dark-gray mb-2">Wealth Gap Analysis</h4>
                <p className="text-sm text-gray-600">Black households possess only 15% of White household wealth</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-dark-gray mb-2">CLT Performance Metrics</h4>
                <p className="text-sm text-gray-600">8.2x lower foreclosure rates than conventional mortgages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray mb-6">Resources & Support</h2>
              <p className="text-gray-600 mb-6">
                The funding landscape for community-driven housing initiatives remains strong and diverse. Federal
                programs like HUD's HOME Investment Partnerships and USDA Rural Development continue to support
                cooperative housing with simplified requirements and favorable terms.
              </p>
              <p className="text-gray-600 mb-6">
                State and local programs are expanding rapidly—Washington State invested $527 million in housing in
                2024, while California's Local Housing Trust Fund provides dollar-for-dollar matching grants.
              </p>
              <p className="text-gray-600 mb-8">
                Community Development Financial Institutions (CDFIs) serve as crucial partners, with the CDFI Fund
                awarding $246.4 million in 2024 alone, projected to leverage $9 billion in additional resources.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray">
                <Link href="/contact">Learn About Funding Opportunities</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/community-workshop.png" alt="Community Resources" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-involved" className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Movement</h2>
            <p className="text-lg mb-8">
              Ready to be part of the solution? Whether you're interested in learning more about cooperative housing,
              exploring partnership opportunities, or getting involved in your community, we're here to support your
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dark-gray hover:bg-dark-gray/90 text-white px-8 py-6 text-lg">
                <Link href="/contact">Get Involved Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/housing-cooperatives/data">Explore the Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
