import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BarChart3, TrendingDown, Home } from "lucide-react"

export default function HousingResearchPage() {
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
            <span className="text-dark-gray font-medium">Research & Data</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl mb-6">
              Housing Research & Data
            </h1>
            <p className="text-xl text-gray-600">Understanding the Racial Wealth Gap Through Housing</p>
          </div>
        </div>
      </section>

      {/* Key Statistics Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">73%</div>
                <p className="text-sm font-semibold text-dark-gray">White Homeownership Rate</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">44%</div>
                <p className="text-sm font-semibold text-dark-gray">Black Homeownership Rate</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">29%</div>
                <p className="text-sm font-semibold text-dark-gray">Homeownership Gap</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="h-12 w-12 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-green">40x</span>
                </div>
                <div className="text-3xl font-bold text-green mb-2">More</div>
                <p className="text-sm font-semibold text-dark-gray">Wealth for Homeowners</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visualization Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-12">Key Research Findings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Homeownership Rates Chart */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-dark-gray">Homeownership Rates by Race</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">White Households</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-4">
                          <div className="bg-accent h-4 rounded-full" style={{ width: "73%" }}></div>
                        </div>
                        <span className="font-semibold text-accent">73%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Hispanic Households</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-4">
                          <div className="bg-primary h-4 rounded-full" style={{ width: "49%" }}></div>
                        </div>
                        <span className="font-semibold text-primary">49%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Black Households</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-4">
                          <div className="bg-secondary h-4 rounded-full" style={{ width: "44%" }}></div>
                        </div>
                        <span className="font-semibold text-secondary">44%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    The 29-30 percentage point gap between White and Black homeownership has remained virtually
                    unchanged since 1992.
                  </p>
                </CardContent>
              </Card>

              {/* Wealth Gap Chart */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-dark-gray">Median Household Wealth by Race</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">White Households</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-4">
                          <div className="bg-accent h-4 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <span className="font-semibold text-accent">$171K</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Hispanic Households</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-4">
                          <div className="bg-primary h-4 rounded-full" style={{ width: "14%" }}></div>
                        </div>
                        <span className="font-semibold text-primary">$24K</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Black Households</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-4">
                          <div className="bg-secondary h-4 rounded-full" style={{ width: "12%" }}></div>
                        </div>
                        <span className="font-semibold text-secondary">$20K</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Black households possess only 15% of White household wealth, with housing being the primary driver
                    of this disparity.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Homeowner vs Renter Wealth */}
            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="text-xl text-dark-gray text-center">
                  Homeowner vs Renter Wealth Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green mb-2">$255,000</div>
                    <p className="text-lg font-semibold text-dark-gray mb-2">Average Homeowner Wealth</p>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-green h-6 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">$6,300</div>
                    <p className="text-lg font-semibold text-dark-gray mb-2">Average Renter Wealth</p>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-red-500 h-6 rounded-full" style={{ width: "2.5%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                  Homeowners possess 40 times more wealth than renters, highlighting the critical importance of
                  homeownership for wealth building.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray text-center mb-8">Research Findings</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  29-30 percentage point homeownership gap drives wealth inequality between racial groups
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Gap unchanged since 1992 - systemic intervention needed to address structural barriers
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Homeowners possess 40x more wealth than renters, making homeownership critical for wealth building
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Community land trusts show 8.2x lower foreclosure rates than conventional mortgages
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  67% of CLT residents successfully transition to market-rate homeownership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-4 sm:mb-0 bg-transparent">
              <Link href="/housing" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Housing Overview
              </Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/housing/cooperatives" className="flex items-center">
                Cooperative Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
