"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, User, LogOut, Settings } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsLoggedIn(false)
    window.location.href = "/"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/dd-logo.png" alt="Difference Driven Logo" width={50} height={50} className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-dark-gray font-montserrat">Difference Driven</span>
              <span className="text-sm text-accent font-medium -mt-1">Morii Community Center</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-dark-gray hover:text-accent transition-colors font-medium">
                <span>Community</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="text-dark-gray hover:text-accent">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/programs" className="text-dark-gray hover:text-accent">
                    Programs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events" className="text-dark-gray hover:text-accent">
                    Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/stories" className="text-dark-gray hover:text-accent">
                    Stories
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-dark-gray hover:text-accent transition-colors font-medium">
                <span>Housing</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/housing-cooperatives" className="text-dark-gray hover:text-accent">
                    Housing Cooperatives
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/housing-cooperatives/data" className="text-dark-gray hover:text-accent">
                    Housing Data
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/membership" className="text-dark-gray hover:text-accent transition-colors font-medium">
              Membership
            </Link>
            <Link href="/get-involved" className="text-dark-gray hover:text-accent transition-colors font-medium">
              Get Involved
            </Link>
            <Link href="/contact" className="text-dark-gray hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 text-dark-gray hover:text-accent transition-colors">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{user.name.split(" ")[0]}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center space-x-2 text-dark-gray hover:text-accent">
                      <Settings className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/register">Join Us</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-dark-gray hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-dark-gray text-sm uppercase tracking-wide">Community</span>
                <Link href="/about" className="pl-4 text-dark-gray hover:text-accent transition-colors">
                  About Us
                </Link>
                <Link href="/programs" className="pl-4 text-dark-gray hover:text-accent transition-colors">
                  Programs
                </Link>
                <Link href="/events" className="pl-4 text-dark-gray hover:text-accent transition-colors">
                  Events
                </Link>
                <Link href="/stories" className="pl-4 text-dark-gray hover:text-accent transition-colors">
                  Stories
                </Link>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-dark-gray text-sm uppercase tracking-wide">Housing</span>
                <Link href="/housing-cooperatives" className="pl-4 text-dark-gray hover:text-accent transition-colors">
                  Housing Cooperatives
                </Link>
                <Link
                  href="/housing-cooperatives/data"
                  className="pl-4 text-dark-gray hover:text-accent transition-colors"
                >
                  Housing Data
                </Link>
              </div>

              <Link href="/membership" className="text-dark-gray hover:text-accent transition-colors font-medium">
                Membership
              </Link>
              <Link href="/get-involved" className="text-dark-gray hover:text-accent transition-colors font-medium">
                Get Involved
              </Link>
              <Link href="/contact" className="text-dark-gray hover:text-accent transition-colors font-medium">
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-200">
                {isLoggedIn && user ? (
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-dark-gray">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <Link href="/dashboard" className="pl-7 text-dark-gray hover:text-accent transition-colors">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="pl-7 text-left text-red-600 hover:text-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Button
                      asChild
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                      <Link href="/register">Join Us</Link>
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
