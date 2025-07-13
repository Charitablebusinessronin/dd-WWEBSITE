import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Image
            src="/dd-logo.png"
            alt="Difference Driven Community Center"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold tracking-tight text-dark-gray">Join Our Community</h1>
          <p className="mt-2 text-lg text-gray-600">
            Become part of a movement that believes in community ownership, shared prosperity, and collective care
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-dark-gray">Create Your Community Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-dark-gray border-b border-gray-200 pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-dark-gray">
                      First Name *
                    </Label>
                    <Input id="firstName" name="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-dark-gray">
                      Last Name *
                    </Label>
                    <Input id="lastName" name="lastName" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-dark-gray">
                    Email Address *
                  </Label>
                  <Input id="email" name="email" type="email" required className="mt-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-dark-gray">
                      Phone Number
                    </Label>
                    <Input id="phone" name="phone" type="tel" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="birthDate" className="text-dark-gray">
                      Date of Birth
                    </Label>
                    <Input id="birthDate" name="birthDate" type="date" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-dark-gray">
                    Address
                  </Label>
                  <Input id="address" name="address" className="mt-1" placeholder="Street address" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-dark-gray">
                      City
                    </Label>
                    <Input id="city" name="city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-dark-gray">
                      State
                    </Label>
                    <Input id="state" name="state" className="mt-1" defaultValue="NC" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-dark-gray">
                      ZIP Code
                    </Label>
                    <Input id="zipCode" name="zipCode" className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Household Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-dark-gray border-b border-gray-200 pb-2">
                  Household Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="householdSize" className="text-dark-gray">
                      Household Size
                    </Label>
                    <Select name="householdSize">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select household size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                        <SelectItem value="5">5 people</SelectItem>
                        <SelectItem value="6+">6+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="children" className="text-dark-gray">
                      Number of Children (under 18)
                    </Label>
                    <Select name="children">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="incomeRange" className="text-dark-gray">
                    Annual Household Income (optional)
                  </Label>
                  <Select name="incomeRange">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under $25,000</SelectItem>
                      <SelectItem value="25k-35k">$25,000 - $35,000</SelectItem>
                      <SelectItem value="35k-50k">$35,000 - $50,000</SelectItem>
                      <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                      <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-1">
                    This helps us determine sliding scale pricing and program eligibility
                  </p>
                </div>
              </div>

              {/* Membership Level */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-dark-gray border-b border-gray-200 pb-2">
                  Choose Your Membership Level
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary cursor-pointer">
                    <div className="flex items-center mb-2">
                      <input type="radio" name="membershipLevel" value="community-supporter" className="mr-3" />
                      <div>
                        <h4 className="font-semibold text-dark-gray">Community Supporter</h4>
                        <p className="text-primary font-bold">$25/month</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Access to workshops and events</li>
                      <li>• Community newsletter</li>
                      <li>• Volunteer opportunities</li>
                      <li>• Emergency assistance eligibility</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary cursor-pointer">
                    <div className="flex items-center mb-2">
                      <input type="radio" name="membershipLevel" value="full-member" className="mr-3" />
                      <div>
                        <h4 className="font-semibold text-dark-gray">Full Member</h4>
                        <p className="text-primary font-bold">$50/month</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All Community Supporter benefits</li>
                      <li>• Priority program registration</li>
                      <li>• One-on-one counseling</li>
                      <li>• Childcare during programs</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary cursor-pointer">
                    <div className="flex items-center mb-2">
                      <input type="radio" name="membershipLevel" value="family-membership" className="mr-3" />
                      <div>
                        <h4 className="font-semibold text-dark-gray">Family Membership</h4>
                        <p className="text-primary font-bold">$75/month</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All Full Member benefits for family</li>
                      <li>• Youth programs included</li>
                      <li>• Family counseling services</li>
                      <li>• Housing cooperative priority</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-primary cursor-pointer">
                    <div className="flex items-center mb-2">
                      <input type="radio" name="membershipLevel" value="sliding-scale" className="mr-3" />
                      <div>
                        <h4 className="font-semibold text-dark-gray">Sliding Scale</h4>
                        <p className="text-primary font-bold">Based on income</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Financial assistance available based on household income and circumstances
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-dark-gray border-b border-gray-200 pb-2">
                  Areas of Interest
                </h3>
                <p className="text-sm text-gray-600">
                  Select the programs and services you're most interested in (check all that apply):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <Checkbox id="career-development" />
                    <Label htmlFor="career-development" className="ml-2">
                      Career Development
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="housing-cooperative" />
                    <Label htmlFor="housing-cooperative" className="ml-2">
                      Housing Cooperatives
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="financial-literacy" />
                    <Label htmlFor="financial-literacy" className="ml-2">
                      Financial Literacy
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="health-wellness" />
                    <Label htmlFor="health-wellness" className="ml-2">
                      Health & Wellness
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="adult-education" />
                    <Label htmlFor="adult-education" className="ml-2">
                      Adult Education
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="youth-programs" />
                    <Label htmlFor="youth-programs" className="ml-2">
                      Youth Programs
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="community-organizing" />
                    <Label htmlFor="community-organizing" className="ml-2">
                      Community Organizing
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="volunteer-opportunities" />
                    <Label htmlFor="volunteer-opportunities" className="ml-2">
                      Volunteer Opportunities
                    </Label>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-dark-gray border-b border-gray-200 pb-2">
                  Tell Us About Yourself
                </h3>

                <div>
                  <Label htmlFor="goals" className="text-dark-gray">
                    What are your main goals for joining our community? (optional)
                  </Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    className="mt-1"
                    rows={3}
                    placeholder="Share what you hope to achieve or contribute..."
                  />
                </div>

                <div>
                  <Label htmlFor="referral" className="text-dark-gray">
                    How did you hear about us? (optional)
                  </Label>
                  <Select name="referral">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select how you found us" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friend-family">Friend or family member</SelectItem>
                      <SelectItem value="community-event">Community event</SelectItem>
                      <SelectItem value="social-media">Social media</SelectItem>
                      <SelectItem value="website">Website search</SelectItem>
                      <SelectItem value="flyer-poster">Flyer or poster</SelectItem>
                      <SelectItem value="community-partner">Community partner organization</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Account Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-dark-gray border-b border-gray-200 pb-2">Account Security</h3>

                <div>
                  <Label htmlFor="password" className="text-dark-gray">
                    Password *
                  </Label>
                  <Input id="password" name="password" type="password" required className="mt-1" />
                  <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters with letters and numbers</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-dark-gray">
                    Confirm Password *
                  </Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" required className="mt-1" />
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <Checkbox id="terms" required className="mt-1" />
                  <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-accent hover:text-accent/80 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-accent hover:text-accent/80 underline">
                      Privacy Policy
                    </Link>
                    *
                  </Label>
                </div>

                <div className="flex items-start">
                  <Checkbox id="newsletter" className="mt-1" />
                  <Label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    I would like to receive the community newsletter and updates about programs and events
                  </Label>
                </div>

                <div className="flex items-start">
                  <Checkbox id="emergency-contact" className="mt-1" />
                  <Label htmlFor="emergency-contact" className="ml-2 text-sm text-gray-600">
                    I consent to being contacted in case of emergency or urgent community matters
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-dark-gray text-lg py-3">
                  Join Our Community
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-dark-gray mb-4">What happens next?</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-dark-gray text-sm font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-dark-gray">Account Review</p>
                <p className="text-sm text-gray-600">We'll review your application within 1-2 business days</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-dark-gray text-sm font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-dark-gray">Welcome Call</p>
                <p className="text-sm text-gray-600">
                  A community coordinator will call to welcome you and answer questions
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-dark-gray">Orientation Invitation</p>
                <p className="text-sm text-gray-600">You'll be invited to our next new member orientation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Already have account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:text-accent/80 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
