"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DatabaseService } from "@/lib/database-service"
import { supabase } from "@/lib/supabase"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    city: "",
    state: "NC",
    zipCode: "",
    householdSize: "",
    children: "",
    incomeRange: "",
    membershipLevel: "",
    goals: "",
    referral: "",
    password: "",
    confirmPassword: "",
    interests: [] as string[],
    terms: false,
    newsletter: false,
    emergencyContact: false,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("Please fill in all required fields")
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return false
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return false
    }

    if (!formData.terms) {
      setError("You must agree to the terms and conditions")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Create Supabase auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
        },
      })

      if (authError) throw authError

      // Create member record in database
      const memberData = {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone || undefined,
        address: formData.address
          ? `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`
          : undefined,
        membership_type: formData.membershipLevel as "basic" | "premium" | "family",
        membership_status: "pending" as const,
      }

      await DatabaseService.createMember(memberData)

      setSuccess("Registration successful! Please check your email to verify your account.")

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login?message=Please check your email to verify your account")
      }, 3000)
    } catch (err: any) {
      console.error("Registration error:", err)
      setError(err.message || "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription className="text-green-800">{success}</AlertDescription>
                </Alert>
              )}

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
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-dark-gray">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-dark-gray">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-dark-gray">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate" className="text-dark-gray">
                      Date of Birth
                    </Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-dark-gray">
                    Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-dark-gray">
                      City
                    </Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-dark-gray">
                      State
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-dark-gray">
                      ZIP Code
                    </Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
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
                    <Select
                      value={formData.householdSize}
                      onValueChange={(value) => handleSelectChange("householdSize", value)}
                    >
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
                    <Select value={formData.children} onValueChange={(value) => handleSelectChange("children", value)}>
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
                  <Select
                    value={formData.incomeRange}
                    onValueChange={(value) => handleSelectChange("incomeRange", value)}
                  >
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
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.membershipLevel === "basic"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="membershipLevel"
                        value="basic"
                        checked={formData.membershipLevel === "basic"}
                        onChange={(e) => handleSelectChange("membershipLevel", e.target.value)}
                        className="mr-3"
                      />
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

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.membershipLevel === "premium"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="membershipLevel"
                        value="premium"
                        checked={formData.membershipLevel === "premium"}
                        onChange={(e) => handleSelectChange("membershipLevel", e.target.value)}
                        className="mr-3"
                      />
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

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.membershipLevel === "family"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="membershipLevel"
                        value="family"
                        checked={formData.membershipLevel === "family"}
                        onChange={(e) => handleSelectChange("membershipLevel", e.target.value)}
                        className="mr-3"
                      />
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

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.membershipLevel === "sliding-scale"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="membershipLevel"
                        value="sliding-scale"
                        checked={formData.membershipLevel === "sliding-scale"}
                        onChange={(e) => handleSelectChange("membershipLevel", e.target.value)}
                        className="mr-3"
                      />
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
                  {[
                    "Career Development",
                    "Housing Cooperatives",
                    "Financial Literacy",
                    "Health & Wellness",
                    "Adult Education",
                    "Youth Programs",
                    "Community Organizing",
                    "Volunteer Opportunities",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center">
                      <Checkbox
                        id={interest.toLowerCase().replace(/\s+/g, "-")}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest.toLowerCase().replace(/\s+/g, "-")} className="ml-2">
                        {interest}
                      </Label>
                    </div>
                  ))}
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
                    value={formData.goals}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={3}
                    placeholder="Share what you hope to achieve or contribute..."
                  />
                </div>

                <div>
                  <Label htmlFor="referral" className="text-dark-gray">
                    How did you hear about us? (optional)
                  </Label>
                  <Select value={formData.referral} onValueChange={(value) => handleSelectChange("referral", value)}>
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
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters with letters and numbers</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-dark-gray">
                    Confirm Password *
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => handleCheckboxChange("terms", checked as boolean)}
                    required
                    className="mt-1"
                  />
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
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleCheckboxChange("newsletter", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    I would like to receive the community newsletter and updates about programs and events
                  </Label>
                </div>

                <div className="flex items-start">
                  <Checkbox
                    id="emergency-contact"
                    checked={formData.emergencyContact}
                    onCheckedChange={(checked) => handleCheckboxChange("emergencyContact", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="emergency-contact" className="ml-2 text-sm text-gray-600">
                    I consent to being contacted in case of emergency or urgent community matters
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-dark-gray text-lg py-3"
                >
                  {isLoading ? "Creating Account..." : "Join Our Community"}
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
                <p className="font-medium text-dark-gray">Email Verification</p>
                <p className="text-sm text-gray-600">Check your email and click the verification link</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-dark-gray text-sm font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-dark-gray">Account Review</p>
                <p className="text-sm text-gray-600">We'll review your application within 1-2 business days</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-dark-gray">Welcome Call</p>
                <p className="text-sm text-gray-600">
                  A community coordinator will call to welcome you and answer questions
                </p>
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
