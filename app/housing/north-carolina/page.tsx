import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Users, Building } from "lucide-react"

export default function NorthCarolinaHousingPage() {
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
            <span className="text-dark-gray font-medium">North Carolina Context</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl mb-6">
              North Carolina Housing Landscape
            </h1>
            <p className="text-xl text-gray-600">Local Context and Implementation Opportunities</p>
          </div>
        </div>
      </section>

      {/* NC CLT Network Growth */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">North Carolina CLT Network Growth</h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-dark-gray text-center">
                  Community Land Trusts Across North Carolina
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <p className="text-sm font-semibold text-dark-gray">Active CLTs</p>
                    <p className="text-xs text-gray-600 mt-1">across the state</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-3xl font-bold text-accent mb-2">850+</div>
                    <p className="text-sm font-semibold text-dark-gray">CLT Homes</p>
                    <p className="text-xs text-gray-600 mt-1">permanently affordable</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">$6M</div>
                    <p className="text-sm font-semibold text-dark-gray">Mecklenburg Investment</p>
                    <p className="text-xs text-gray-600 mt-1">in West Side CLT</p>
                  </div>
                  <div className="text-center p-4 bg-green/10 rounded-lg">
                    <div className="text-3xl font-bold text-green mb-2">25%</div>
                    <p className="text-sm font-semibold text-dark-gray">Growth Rate</p>
                    <p className="text-xs text-gray-600 mt-1">annual expansion</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold text-dark-gray mb-4">Key NC CLT Locations:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-accent">Triangle Region:</p>
                      <ul className="text-gray-600 ml-4">
                        <li>• Orange Community Housing & Land Trust</li>
                        <li>• Chatham Community Land Trust</li>
                        <li>• Durham Community Land Trustees</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-accent">Charlotte Region:</p>
                      <ul className="text-gray-600 ml-4">
                        <li>• West Side CLT (Mecklenburg County)</li>
                        <li>• Charlotte-Mecklenburg Housing Partnership</li>
                        <li>• Habitat for Humanity CLT Program</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Sources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">NC Funding Sources</h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-dark-gray text-center">
                  Available Funding for Community Housing Initiatives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 text-primary mr-2" />
                      Federal Funding
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium">HUD HOME Program</span>
                        <span className="text-sm text-primary font-semibold">$2.8M annually</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium">USDA Rural Development</span>
                        <span className="text-sm text-primary font-semibold">$1.5M available</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium">CDFI Fund</span>
                        <span className="text-sm text-primary font-semibold">$246M nationally</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-4 flex items-center">
                      <MapPin className="h-5 w-5 text-accent mr-2" />
                      State & Local Funding
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium">NC Housing Trust Fund</span>
                        <span className="text-sm text-accent font-semibold">$50M annually</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium">Mecklenburg County</span>
                        <span className="text-sm text-accent font-semibold">$6M committed</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm font-medium">Charlotte Housing Fund</span>
                        <span className="text-sm text-accent font-semibold">$15M available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">Mecklenburg County Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray flex items-center">
                    <Building className="h-5 w-5 text-primary mr-2" />
                    Housing Need
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3">•</span>
                      36,000 affordable housing unit shortage
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3">•</span>
                      Charlotte ranks 50/50 for economic mobility
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3">•</span>
                      Median home price increased 45% since 2020
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3">•</span>
                      Cost-burdened households: 35% of renters
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray flex items-center">
                    <Users className="h-5 w-5 text-accent mr-2" />
                    Existing Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      $6M county investment in West Side CLT
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      Strong foundation for scaling cooperative models
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      Active community development corporations
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      Established partnerships with housing nonprofits
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Driven Connection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-8">How Difference Driven Fits In</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We're positioning ourselves to be part of this proven network of community-controlled housing
                  initiatives, starting with research and community organizing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-4">Our Current Phase:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">•</span>
                        Community asset mapping and needs assessment
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">•</span>
                        Building partnerships with existing CLTs
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">•</span>
                        Researching funding opportunities
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">•</span>
                        Developing community education programs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-4">Future Implementation:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        Pilot cooperative housing project
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        Community land acquisition strategy
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        Resident leadership development
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        Integration with community center programming
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-dark-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Support Housing Justice in North Carolina
            </h2>
            <p className="text-lg mb-8">
              Help us research and develop community-owned housing solutions that build wealth and strengthen
              neighborhoods in Charlotte and beyond.
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
                <Link href="/housing">Back to Housing Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-4 sm:mb-0 bg-transparent">
              <Link href="/housing/cooperatives" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Cooperative Model
              </Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/housing" className="flex items-center">
                Back to Housing Overview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
