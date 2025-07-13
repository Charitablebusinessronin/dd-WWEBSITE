"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Users, Heart, Home } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Test credentials
    if (email === "admin@work.capturefantasy.com" && password === "admin") {
      // Store login state in localStorage
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userEmail", email)
      localStorage.setItem("userName", "Admin User")

      // Redirect to dashboard
      router.push("/dashboard")
    } else {
      setError("Invalid email or password. Try admin@work.capturefantasy.com / admin")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image
            src="/dd-logo.png"
            alt="Difference Driven Community Center"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-dark-gray">
          Welcome Back to Your Community
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to access your programs, connect with neighbors, and continue building your future
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl text-dark-gray">Member Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">{error}</div>
              )}

              <div className="bg-blue-50 border border-blue-200 text-blue-600 px-4 py-3 rounded-md text-sm">
                <strong>Test Login:</strong>
                <br />
                Email: admin@work.capturefantasy.com
                <br />
                Password: admin
              </div>

              <div>
                <Label htmlFor="email" className="text-dark-gray">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-dark-gray">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember-me" />
                  <Label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="text-accent hover:text-accent/80">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-dark-gray"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in to your community"}
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">New to our community?</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Link href="/register">Join Difference Driven Today</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Benefits Preview */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-dark-gray mb-4 text-center">
            What awaits you in your community dashboard:
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-secondary mr-3" />
              <span className="text-gray-600">Access to all programs and workshops</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-accent mr-3" />
              <span className="text-gray-600">Connect with community members</span>
            </div>
            <div className="flex items-center">
              <Home className="h-5 w-5 text-primary mr-3" />
              <span className="text-gray-600">Housing cooperative information</span>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Need help accessing your account?</p>
          <p className="text-sm">
            <span className="text-gray-600">Call us at </span>
            <Link href="tel:7045553322" className="text-accent hover:text-accent/80 font-medium">
              (704) 555-DDCC (3322)
            </Link>
            <span className="text-gray-600"> or email </span>
            <Link href="mailto:help@differencedriven.org" className="text-accent hover:text-accent/80 font-medium">
              help@differencedriven.org
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
