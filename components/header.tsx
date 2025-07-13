"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check login status on component mount
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const name = localStorage.getItem("userName") || ""
    setIsLoggedIn(loggedIn)
    setUserName(name)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    setIsLoggedIn(false)
    setUserName("")
    router.push("/")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/dd-logo.png" alt="Difference Driven Logo" width={50} height={50} className="w-12 h-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-teal-600 font-montserrat">Difference Driven</h1>
              <p className="text-sm text-gray-600">Community Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Our Community Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown("community")}
              >
                <span>OUR COMMUNITY</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200 ${
                  activeDropdown === "community" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setActiveDropdown("community")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/programs"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Programs & Services
                  </Link>
                  <Link
                    href="/housing-cooperatives"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Housing Cooperatives
                  </Link>
                  <Link
                    href="/events/career-fair"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    href="/stories"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Community Stories
                  </Link>
                </div>
              </div>
            </div>

            {/* Membership Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition-colors"
                onMouseEnter={() => setActiveDropdown("membership")}
              >
                <span>MEMBERSHIP</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200 ${
                  activeDropdown === "membership" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setActiveDropdown("membership")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    href="/membership"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Join Our Community
                  </Link>
                  <Link
                    href="/get-involved"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="/programs/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    Program Registration
                  </Link>
                </div>
              </div>
            </div>

            {/* Conditional Account/User Dropdown */}
            {isLoggedIn ? (
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition-colors"
                  onMouseEnter={() => setActiveDropdown("user")}
                >
                  <User className="w-4 h-4" />
                  <span>{userName}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200 ${
                    activeDropdown === "user" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setActiveDropdown("user")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      My Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition-colors"
                  onMouseEnter={() => setActiveDropdown("account")}
                >
                  <span>MY DD ACCOUNT</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200 ${
                    activeDropdown === "account" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setActiveDropdown("account")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      Create Account
                    </Link>
                    <Link
                      href="/forgot-password"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      Reset Password
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition-colors">
                DONATE TODAY
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs & Services
            </Link>
            <Link
              href="/programs/register"
              className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Program Registration
            </Link>
            <Link
              href="/membership"
              className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
            <Link href="/contact" className="block px-4 py-2" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-full">
                DONATE TODAY
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
