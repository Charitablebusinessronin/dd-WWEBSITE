"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  Star,
  Filter,
  Search,
  BookOpen,
  Heart,
  Briefcase,
  GraduationCap,
  Baby,
} from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Career Development Workshop",
    category: "career",
    description: "Build essential job skills, create a professional resume, and practice interview techniques.",
    duration: "6 weeks",
    schedule: "Tuesdays & Thursdays, 6:00 PM - 8:00 PM",
    location: "Community Learning Center",
    price: "Free for members, $25 for non-members",
    capacity: 20,
    enrolled: 12,
    instructor: "Maria Rodriguez, Career Counselor",
    startDate: "July 15, 2025",
    features: ["Resume Building", "Interview Practice", "Job Search Strategies", "Networking Skills"],
    image: "/career-development.png",
  },
  {
    id: 2,
    title: "Financial Literacy Bootcamp",
    category: "career",
    description: "Learn budgeting, saving, credit management, and investment basics for financial independence.",
    duration: "4 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Main Community Hall",
    price: "Free for members, $15 for non-members",
    capacity: 25,
    enrolled: 18,
    instructor: "James Thompson, Financial Advisor",
    startDate: "July 22, 2025",
    features: ["Budgeting Basics", "Credit Repair", "Investment Planning", "Emergency Fund Building"],
    image: "/event-financial.png",
  },
  {
    id: 3,
    title: "Health & Wellness Program",
    category: "health",
    description: "Comprehensive health education covering nutrition, exercise, mental health, and preventive care.",
    duration: "8 weeks",
    schedule: "Mondays & Wednesdays, 7:00 PM - 8:30 PM",
    location: "Wellness Center",
    price: "Free for members, $40 for non-members",
    capacity: 15,
    enrolled: 8,
    instructor: "Dr. Sarah Johnson, Community Health Specialist",
    startDate: "August 1, 2025",
    features: ["Nutrition Education", "Fitness Planning", "Mental Health Support", "Preventive Care"],
    image: "/health-education.png",
  },
  {
    id: 4,
    title: "Adult Education - GED Prep",
    category: "education",
    description: "Prepare for your GED exam with comprehensive study support and practice tests.",
    duration: "12 weeks",
    schedule: "Monday-Friday, 9:00 AM - 12:00 PM",
    location: "Education Center",
    price: "Free for members, $100 for non-members",
    capacity: 12,
    enrolled: 7,
    instructor: "Patricia Williams, Adult Education Specialist",
    startDate: "July 8, 2025",
    features: ["Math Review", "Science Prep", "Language Arts", "Social Studies", "Practice Tests"],
    image: "/community-workshop.png",
  },
  {
    id: 5,
    title: "Youth Leadership Academy",
    category: "youth",
    description: "Develop leadership skills, community awareness, and civic engagement for teens 14-18.",
    duration: "10 weeks",
    schedule: "Saturdays, 1:00 PM - 4:00 PM",
    location: "Youth Center",
    price: "Free for member families, $30 for non-members",
    capacity: 16,
    enrolled: 11,
    instructor: "Marcus Davis, Youth Coordinator",
    startDate: "July 29, 2025",
    features: ["Leadership Skills", "Community Projects", "Public Speaking", "Team Building"],
    image: "/youth-community.png",
  },
  {
    id: 6,
    title: "Computer Skills for Seniors",
    category: "education",
    description: "Learn basic computer skills, internet navigation, and digital communication tools.",
    duration: "6 weeks",
    schedule: "Thursdays, 2:00 PM - 4:00 PM",
    location: "Computer Lab",
    price: "Free for members, $20 for non-members",
    capacity: 10,
    enrolled: 6,
    instructor: "Lisa Chen, Technology Instructor",
    startDate: "August 5, 2025",
    features: ["Basic Computer Use", "Internet Browsing", "Email Setup", "Video Calling"],
    image: "/community-workshop.png",
  },
]

const categories = [
  { id: "all", label: "All Programs", icon: BookOpen },
  { id: "career", label: "Career Development", icon: Briefcase },
  { id: "health", label: "Health & Wellness", icon: Heart },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "youth", label: "Youth Programs", icon: Baby },
]

export default function ProgramRegistrationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const filteredPrograms = programs.filter((program) => {
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleRegister = (program: (typeof programs)[0]) => {
    setSelectedProgram(program)
    setIsRegistrationOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dark-gray mb-4">Program Registration</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover programs designed to empower you and your family. From career development to health and wellness,
            we offer comprehensive support for your journey toward success.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter by category:</span>
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mt-4">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-dark-gray">
                    {categories.find((c) => c.id === program.category)?.label}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-dark-gray">{program.title}</CardTitle>
                <p className="text-gray-600 text-sm line-clamp-2">{program.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {program.schedule}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {program.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {program.enrolled}/{program.capacity} enrolled
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {program.price}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-dark-gray">{program.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="relative h-64 overflow-hidden rounded-lg">
                          <Image
                            src={program.image || "/placeholder.svg"}
                            alt={program.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-dark-gray mb-2">Program Description</h3>
                          <p className="text-gray-600">{program.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-dark-gray mb-2">Program Details</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-accent" />
                                <span>Duration: {program.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-accent" />
                                <span>Starts: {program.startDate}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-accent" />
                                <span>{program.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2 text-accent" />
                                <span>
                                  {program.enrolled}/{program.capacity} enrolled
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-dark-gray mb-2">What You'll Learn</h4>
                            <ul className="space-y-1 text-sm">
                              {program.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <Star className="h-3 w-3 mr-2 text-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-dark-gray mb-2">Instructor</h4>
                          <p className="text-gray-600">{program.instructor}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-dark-gray mb-2">Pricing</h4>
                          <p className="text-lg font-bold text-primary">{program.price}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Sliding scale pricing available based on income. Contact us for assistance.
                          </p>
                        </div>

                        <Button
                          onClick={() => handleRegister(program)}
                          className="w-full bg-primary hover:bg-primary/90 text-dark-gray"
                          disabled={program.enrolled >= program.capacity}
                        >
                          {program.enrolled >= program.capacity ? "Program Full" : "Register Now"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    onClick={() => handleRegister(program)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-dark-gray"
                    disabled={program.enrolled >= program.capacity}
                  >
                    {program.enrolled >= program.capacity ? "Full" : "Register"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Modal */}
        <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-dark-gray">Register for {selectedProgram?.title}</DialogTitle>
            </DialogHeader>

            {selectedProgram && (
              <form className="space-y-6">
                {/* Program Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-dark-gray mb-2">Program Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Duration:</span> {selectedProgram.duration}
                    </div>
                    <div>
                      <span className="text-gray-600">Schedule:</span> {selectedProgram.schedule}
                    </div>
                    <div>
                      <span className="text-gray-600">Location:</span> {selectedProgram.location}
                    </div>
                    <div>
                      <span className="text-gray-600">Price:</span> {selectedProgram.price}
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dark-gray">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                {/* Membership Status */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dark-gray">Membership Status</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your membership status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="member">Current Member</SelectItem>
                      <SelectItem value="non-member">Non-Member</SelectItem>
                      <SelectItem value="interested">Interested in Membership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dark-gray">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyName">Contact Name</Label>
                      <Input id="emergencyName" />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Contact Phone</Label>
                      <Input id="emergencyPhone" type="tel" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="emergencyRelation">Relationship</Label>
                    <Input id="emergencyRelation" placeholder="e.g., Spouse, Parent, Friend" />
                  </div>
                </div>

                {/* Special Accommodations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dark-gray">Special Accommodations</h3>
                  <div>
                    <Label htmlFor="accommodations">Do you need any special accommodations? (Optional)</Label>
                    <Textarea
                      id="accommodations"
                      placeholder="Please describe any accessibility needs, dietary restrictions, or other accommodations..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Goals and Expectations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dark-gray">Goals & Expectations</h3>
                  <div>
                    <Label htmlFor="goals">What do you hope to achieve from this program? (Optional)</Label>
                    <Textarea id="goals" placeholder="Share your goals and what you hope to learn..." rows={3} />
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the program terms and conditions, including attendance requirements and community
                      guidelines. *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="waiver" required />
                    <Label htmlFor="waiver" className="text-sm">
                      I acknowledge that I participate in this program at my own risk and release Difference Driven
                      Community Center from liability. *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="communications" />
                    <Label htmlFor="communications" className="text-sm">
                      I consent to receive program updates and community communications via email and text.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsRegistrationOpen(false)}
                    className="flex-1 bg-transparent"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-dark-gray">
                    Complete Registration
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Support Information */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-dark-gray mb-4 text-center">Need Help with Registration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">Call Us</h3>
              <p className="text-gray-600">
                <Link href="tel:7045553322" className="text-accent hover:text-accent/80">
                  (704) 555-DDCC (3322)
                </Link>
              </p>
              <p className="text-sm text-gray-500">Monday-Friday, 9 AM - 5 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">Email Us</h3>
              <p className="text-gray-600">
                <Link href="mailto:programs@differencedriven.org" className="text-accent hover:text-accent/80">
                  programs@differencedriven.org
                </Link>
              </p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">Visit Us</h3>
              <p className="text-gray-600">
                1234 Community Drive
                <br />
                Charlotte, NC 28205
              </p>
              <p className="text-sm text-gray-500">Walk-ins welcome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
