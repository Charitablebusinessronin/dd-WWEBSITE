"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Heart, Users, Target } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    donationAmount: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">Contact & Support Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team or make a donation to support our community programs
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-600">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Donation */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-600">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      1234 Community Drive
                      <br />
                      Charlotte, NC 28205
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Main: (704) 555-3322</p>
                    <p className="text-gray-600">Programs: (704) 555-7764</p>
                    <p className="text-gray-600">Crisis Line: (704) 555-4357</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@differencedriven.org</p>
                    <p className="text-gray-600">programs@differencedriven.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sun: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-yellow-600 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Support Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Your donation helps us provide essential programs and services to our community members.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">$25</Button>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">$50</Button>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">$100</Button>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">$250</Button>
                </div>

                <div className="mb-4">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <Input
                    id="customAmount"
                    name="donationAmount"
                    type="number"
                    placeholder="Enter amount"
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                  Donate Now
                </Button>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-teal-600" />
                    <span>$25 provides meals for 5 community members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-teal-600" />
                    <span>$100 funds a week of youth programming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-teal-600" />
                    <span>$250 supports a family in crisis for a month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-teal-600">Visit Our Community Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Interactive Map Coming Soon</p>
                  <p className="text-sm">1234 Community Drive, Charlotte, NC 28205</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
