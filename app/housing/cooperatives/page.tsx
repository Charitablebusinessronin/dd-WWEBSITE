import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Home, Users, TrendingUp, Shield } from "lucide-react"

export default function HousingCooperativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <span>›</span>
            <Link href="/housing" className="hover:text-accent">
              Housing Initiative
            </Link>
            <span>›</span>
            <span className="text-dark-gray font-medium">Cooperative Models</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl mb-6">
              Community Housing Cooperatives
            </h1>
            <p className="text-xl text-gray-600">Proven Models for Wealth Building and Community Control</p>
          </div>
        </div>
      </section>

      {/* CLT Performance Chart */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">Community Land Trust Performance</h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-dark-gray text-center">
                  CLT vs Conventional Mortgage Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-green/10 rounded-lg">
                    <div className="text-3xl font-bold text-green mb-2">8.2x</div>
                    <p className="text-sm font-semibold text-dark-gray">Lower Foreclosure Rate</p>
                    <p className="text-xs text-gray-600 mt-1">vs conventional mortgages</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">67%</div>
                    <p className="text-sm font-semibold text-dark-gray">Successful Transition</p>
                    <p className="text-xs text-gray-600 mt-1">to market-rate homes</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-3xl font-bold text-accent mb-2">$49K</div>
                    <p className="text-sm font-semibold text-dark-gray">Average Proceeds</p>
                    <p className="text-xs text-gray-600 mt-1">from CLT home sales</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <p className="text-sm font-semibold text-dark-gray">Permanent Affordability</p>
                    <p className="text-xs text-gray-600 mt-1">for future buyers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">How Community Land Trusts Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-3">Community Ownership</h3>
                <p className="text-gray-600 text-sm">
                  Community land trust acquires and holds land permanently, removing it from speculation
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-3">Affordable Purchase</h3>
                <p className="text-gray-600 text-sm">
                  Families buy homes at below-market prices through shared equity model
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-3">Wealth Building</h3>
                <p className="text-gray-600 text-sm">
                  Homeowners build equity and wealth while maintaining long-term affordability
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-3">Community Control</h3>
                <p className="text-gray-600 text-sm">
                  Residents have democratic voice in community development and neighborhood planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">Benefits of Cooperative Housing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray mb-3">Affordability</h3>
                  <p className="text-gray-600 text-sm">
                    Permanent affordability through shared equity model ensures homes remain accessible to working
                    families
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray mb-3">Stability</h3>
                  <p className="text-gray-600 text-sm">
                    8.2x lower foreclosure rates than conventional mortgages provide housing security and stability
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray mb-3">Wealth Building</h3>
                  <p className="text-gray-600 text-sm">
                    67% successfully transition to market-rate homeownership, building wealth and credit along the way
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-green" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-gray mb-3">Community Control</h3>
                  <p className="text-gray-600 text-sm">
                    Residents have voice in neighborhood development, preventing displacement and gentrification
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">Proven Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Champlain Housing Trust</CardTitle>
                  <p className="text-sm text-accent font-semibold">Vermont • 40+ Years</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    The nation's largest CLT has helped over 3,000 families achieve homeownership while maintaining
                    permanent affordability.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs font-semibold text-dark-gray">Average $49,776 in proceeds from home sales</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">ROC USA Network</CardTitle>
                  <p className="text-sm text-accent font-semibold">National • 275 Communities</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Resident-owned communities with 18,790 homes across the country, proving cooperative ownership works
                    at scale.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs font-semibold text-dark-gray">
                      Site fees increase 25% less than industry average
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">Dudley Street Initiative</CardTitle>
                  <p className="text-sm text-accent font-semibold">Boston • 40+ Years</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    First community organization to obtain eminent domain powers, developing 400+ homes and preventing
                    displacement.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs font-semibold text-dark-gray">
                      Transformed 1,300 vacant lots into community assets
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-4 sm:mb-0 bg-transparent">
              <Link href="/housing/research" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Research Data
              </Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/housing/north-carolina" className="flex items-center">
                NC Context
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
