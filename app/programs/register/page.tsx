"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Calendar, Clock, Users, Filter, X } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Career Development Workshop",
    category: "Career",
    description:
      "Comprehensive career development program focusing on resume building, interview skills, and professional networking.",
    longDescription:
      "Our Career Development Workshop is designed to empower individuals with the skills and confidence needed to advance their careers. This comprehensive program covers resume writing, interview preparation, networking strategies, and professional development planning. Participants will work with experienced career counselors and have access to job placement assistance.",
    image: "/career-development.png",
    schedule: "Tuesdays & Thursdays, 6:00 PM - 8:00 PM",
    duration: "8 weeks",
    capacity: 20,
    enrolled: 15,
    price: 50,
    instructor: "Maya Johnson",
    level: "All Levels",
    requirements: "None",
    materials: "Notebook and pen provided",
    outcomes: ["Professional resume", "Interview skills", "Networking connections", "Job search strategy"],
  },
  {
    id: 2,
    title: "Financial Literacy Bootcamp",
    category: "Finance",
    description: "Learn essential money management skills including budgeting, saving, investing, and debt management.",
    longDescription:
      "Take control of your financial future with our comprehensive Financial Literacy Bootcamp. This program covers budgeting basics, debt management strategies, saving techniques, investment fundamentals, and credit building. Our certified financial counselors provide personalized guidance to help you achieve your financial goals.",
    image: "/event-financial.png",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    duration: "6 weeks",
    capacity: 25,
    enrolled: 18,
    price: 25,
    instructor: "Marcus Williams",
    level: "Beginner",
    requirements: "Bring recent bank statements",
    materials: "Workbook and calculator provided",
    outcomes: ["Personal budget plan", "Debt reduction strategy", "Savings goals", "Credit improvement plan"],
  },
  {
    id: 3,
    title: "Youth Leadership Academy",
    category: "Youth",
    description:
      "Empowering young leaders through skill-building workshops, community service projects, and mentorship.",
    longDescription:
      "The Youth Leadership Academy is designed for teens aged 14-18 who want to develop leadership skills and make a positive impact in their community. The program includes workshops on public speaking, project management, team building, and social justice advocacy. Participants will complete a community service project and receive ongoing mentorship.",
    image: "/youth-basketball.png",
    schedule: "Wednesdays, 4:00 PM - 6:00 PM",
    duration: "12 weeks",
    capacity: 15,
    enrolled: 12,
    price: 0,
    instructor: "Sophia Rodriguez",
    level: "Ages 14-18",
    requirements: "Parent/guardian consent form",
    materials: "All materials provided",
    outcomes: ["Leadership certificate", "Community project completion", "Mentor relationship", "College prep skills"],
  },
  {
    id: 4,
    title: "Digital Skills Training",
    category: "Technology",
    description:
      "Basic computer skills, internet navigation, email setup, and introduction to social media for beginners.",
    longDescription:
      "Bridge the digital divide with our Digital Skills Training program. Perfect for beginners, this course covers computer basics, internet navigation, email setup and management, online safety, and social media fundamentals. Our patient instructors provide hands-on learning in a supportive environment.",
    image: "/community-workshop.png",
    schedule: "Mondays & Wednesdays, 2:00 PM - 4:00 PM",
    duration: "4 weeks",
    capacity: 12,
    enrolled: 8,
    price: 15,
    instructor: "Tech Team",
    level: "Beginner",
    requirements: "None - all skill levels welcome",
    materials: "Computer access provided",
    outcomes: [
      "Email account setup",
      "Internet navigation skills",
      "Online safety knowledge",
      "Basic social media use",
    ],
  },
  {
    id: 5,
    title: "Community Garden Project",
    category: "Health",
    description: "Learn sustainable gardening practices while growing fresh produce for the community food pantry.",
    longDescription:
      "Join our Community Garden Project to learn sustainable gardening practices while contributing to food security in our neighborhood. Participants will learn about soil preparation, planting, composting, and organic pest management. The produce grown will be shared with participants and donated to our community food pantry.",
    image: "/community-art-group.png",
    schedule: "Saturdays, 9:00 AM - 11:00 AM",
    duration: "Ongoing (seasonal)",
    capacity: 30,
    enrolled: 22,
    price: 10,
    instructor: "Garden Committee",
    level: "All Levels",
    requirements: "Comfortable clothing and closed-toe shoes",
    materials: "Tools and seeds provided",
    outcomes: ["Gardening skills", "Fresh produce", "Community connections", "Environmental awareness"],
  },
  {
    id: 6,
    title: "Art Therapy Workshop",
    category: "Wellness",
    description: "Explore creativity and emotional healing through various art mediums in a supportive group setting.",
    longDescription:
      "Our Art Therapy Workshop provides a safe space for emotional expression and healing through creative arts. Led by a licensed art therapist, participants explore various mediums including painting, drawing, collage, and sculpture. No artistic experience is required - the focus is on the therapeutic process, not the final product.",
    image: "/art-workshop.png",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    duration: "8 weeks",
    capacity: 10,
    enrolled: 7,
    price: 30,
    instructor: "Dr. Sarah Chen",
    level: "All Levels",
    requirements: "Commitment to attend all sessions",
    materials: "All art supplies provided",
    outcomes: ["Stress reduction", "Emotional awareness", "Creative expression", "Coping strategies"],
  },
]

const categories = ["All", "Career", "Finance", "Youth", "Technology", "Health", "Wellness"]

export default function ProgramRegistrationPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPrograms, setFilteredPrograms] = useState(programs)
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [registrationStep, setRegistrationStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalConditions: "",
    dietaryRestrictions: "",
    previousExperience: "",
    goals: "",
    howHeard: "",
    agreeToTerms: false,
    agreeToPhotos: false,
  })

  useEffect(() => {
    let filtered = programs

    if (selectedCategory !== "All") {
      filtered = filtered.filter((program) => program.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (program) =>
          program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          program.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredPrograms(filtered)
  }, [selectedCategory, searchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleRegistration = (program: (typeof programs)[0]) => {
    setSelectedProgram(program)
    setIsRegistrationOpen(true)
    setRegistrationStep(1)
  }

  const nextStep = () => {
    setRegistrationStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setRegistrationStep((prev) => Math.max(prev - 1, 1))
  }

  const submitRegistration = () => {
    console.log("Registration submitted:", { program: selectedProgram, formData })
    alert("Registration submitted successfully! You will receive a confirmation email shortly.")
    setIsRegistrationOpen(false)
    setRegistrationStep(1)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      emergencyContact: "",
      emergencyPhone: "",
      medicalConditions: "",
      dietaryRestrictions: "",
      previousExperience: "",
      goals: "",
      howHeard: "",
      agreeToTerms: false,
      agreeToPhotos: false,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 rebel-border">Program Registration</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover and register for our community programs designed to empower, educate, and inspire
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedCategory}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("All")} />
              </Badge>
            )}
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{searchTerm}"
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm("")} />
              </Badge>
            )}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <Card
              key={program.id}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-white">{program.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-dark-gray">
                    ${program.price}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-accent" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    <span>
                      {program.enrolled}/{program.capacity} enrolled
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-accent">{program.title}</DialogTitle>
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

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Schedule:</strong> {program.schedule}
                          </div>
                          <div>
                            <strong>Duration:</strong> {program.duration}
                          </div>
                          <div>
                            <strong>Instructor:</strong> {program.instructor}
                          </div>
                          <div>
                            <strong>Level:</strong> {program.level}
                          </div>
                          <div>
                            <strong>Capacity:</strong> {program.capacity} participants
                          </div>
                          <div>
                            <strong>Price:</strong> ${program.price}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Program Description</h4>
                          <p className="text-gray-600">{program.longDescription}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Requirements</h4>
                          <p className="text-gray-600">{program.requirements}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Materials Provided</h4>
                          <p className="text-gray-600">{program.materials}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {program.outcomes.map((outcome, index) => (
                              <li key={index}>{outcome}</li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          onClick={() => handleRegistration(program)}
                          className="w-full bg-accent hover:bg-accent/90 text-white"
                          disabled={program.enrolled >= program.capacity}
                        >
                          {program.enrolled >= program.capacity ? "Program Full" : "Register Now"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    onClick={() => handleRegistration(program)}
                    className="flex-1 bg-accent hover:bg-accent/90 text-white"
                    disabled={program.enrolled >= program.capacity}
                  >
                    {program.enrolled >= program.capacity ? "Full" : "Register"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No programs found matching your criteria.</p>
            <Button
              onClick={() => {
                setSelectedCategory("All")
                setSearchTerm("")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Registration Modal */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-accent">Register for {selectedProgram?.title}</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step <= registrationStep ? "bg-accent text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-1 mx-2 ${step < registrationStep ? "bg-accent" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Personal Information */}
            {registrationStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <Input name="address" value={formData.address} onChange={handleInputChange} required />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <Input name="city" value={formData.city} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <Input name="state" value={formData.state} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
                    <Input name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Emergency Contact & Health Information */}
            {registrationStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Emergency Contact & Health Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name *</label>
                    <Input
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone *</label>
                    <Input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical Conditions or Allergies
                  </label>
                  <Textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    placeholder="Please list any medical conditions, allergies, or medications we should be aware of"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Restrictions</label>
                  <Textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    placeholder="Please list any dietary restrictions or food allergies"
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Program-Specific Information */}
            {registrationStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Program Information</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Previous Experience</label>
                  <Textarea
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any relevant experience or background"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Goals and Expectations</label>
                  <Textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="What do you hope to achieve through this program?"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                  <Select
                    value={formData.howHeard}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, howHeard: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="community-event">Community Event</SelectItem>
                      <SelectItem value="flyer">Flyer/Poster</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-accent hover:underline">
                        terms and conditions
                      </Link>{" "}
                      and understand the program requirements *
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="photos"
                      checked={formData.agreeToPhotos}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeToPhotos", checked as boolean)}
                    />
                    <label htmlFor="photos" className="text-sm text-gray-700">
                      I consent to photographs being taken during program activities for promotional purposes
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={registrationStep === 1}>
                Previous
              </Button>

              {registrationStep < 3 ? (
                <Button onClick={nextStep} className="bg-accent hover:bg-accent/90 text-white">
                  Next
                </Button>
              ) : (
                <Button
                  onClick={submitRegistration}
                  className="bg-accent hover:bg-accent/90 text-white"
                  disabled={!formData.agreeToTerms}
                >
                  Complete Registration
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
