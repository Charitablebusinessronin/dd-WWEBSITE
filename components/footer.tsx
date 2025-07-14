import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-teal text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Future Morii Community Center Location
                  <br />
                  Charlotte, NC
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">Phone: [Google Voice Number - To Be Set Up]</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">info@differencedriven.org</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">501(c)(3) nonprofit organization</p>
            <p className="text-xs text-gray-400 mt-2">Currently in building phase - contact us to get involved!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Programs & Services
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Membership Options
                </Link>
              </li>
              <li>
                <Link href="/housing-cooperatives" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Housing Initiative
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contribute to This Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Future Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Recording Studio Access</li>
              <li className="text-sm text-gray-300">Podcast Production</li>
              <li className="text-sm text-gray-300">Life Skills Training</li>
              <li className="text-sm text-gray-300">Career Development</li>
              <li className="text-sm text-gray-300">Housing Assistance</li>
              <li className="text-sm text-gray-300">Wellness Programs</li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-300 mb-3">
                Subscribe to our newsletter for updates on our building progress and community events.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-sm"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-dark-gray font-semibold">
                  Sign Up
                </Button>
              </form>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-gray-700 px-6 py-6 md:flex md:items-center md:justify-between">
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Difference Driven Community Center. All rights reserved.
        </div>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
