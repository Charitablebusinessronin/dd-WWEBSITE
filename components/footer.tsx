import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Difference Driven Community Center</h3>
            <p className="text-sm text-gray-300 mb-4">
              123 Community Way
              <br />
              Anytown, ST 12345
            </p>
            <p className="text-sm text-gray-300 mb-4">
              Phone: (555) 123-4567
              <br />
              Email: info@differencedriven.org
            </p>
            <p className="text-sm text-gray-300">501(c)(3) nonprofit organization</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community/about" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/community/programs" className="text-sm text-gray-300 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/membership/join" className="text-sm text-gray-300 hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/community/events" className="text-sm text-gray-300 hover:text-white">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-300 mb-2">Subscribe to our newsletter</p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-dark-gray">
                  Sign Up
                </Button>
              </form>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-gray-700 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Difference Driven Community Center. All rights reserved.
        </div>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-gray-400 hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
