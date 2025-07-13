import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft, Phone, MessageCircle } from "lucide-react"

export default function ForgotPasswordPage() {
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
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-dark-gray">Reset Your Password</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          No worries! We'll help you get back into your community account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl text-dark-gray flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-accent" />
              Password Reset
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-dark-gray">
                  Email address associated with your account
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
                <p className="mt-2 text-sm text-gray-500">We'll send you a secure link to reset your password</p>
              </div>

              <div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                  Send Reset Link
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Remember your password?</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Link href="/login" className="flex items-center justify-center">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success State (would be shown after form submission) */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 hidden" id="success-message">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Check Your Email</h3>
              <p className="text-green-700 mt-1">
                We've sent a password reset link to your email address. Please check your inbox and follow the
                instructions.
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-green-600">
            <p>• The link will expire in 24 hours for security</p>
            <p>• Check your spam folder if you don't see the email</p>
            <p>• You can request a new link if needed</p>
          </div>
        </div>

        {/* Troubleshooting Help */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-dark-gray mb-4">Need Additional Help?</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-accent mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-dark-gray">Call Our Support Team</p>
                <p className="text-sm text-gray-600">
                  <Link href="tel:7045553322" className="text-accent hover:text-accent/80">
                    (704) 555-DDCC (3322)
                  </Link>
                </p>
                <p className="text-xs text-gray-500">Monday-Friday, 8 AM - 8 PM</p>
              </div>
            </div>

            <div className="flex items-start">
              <MessageCircle className="h-5 w-5 text-secondary mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-dark-gray">Visit Us In Person</p>
                <p className="text-sm text-gray-600">123 Community Way, Charlotte, NC 28205</p>
                <p className="text-xs text-gray-500">Our front desk can help reset your account</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-green mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-dark-gray">Email Support</p>
                <p className="text-sm text-gray-600">
                  <Link href="mailto:help@differencedriven.org" className="text-accent hover:text-accent/80">
                    help@differencedriven.org
                  </Link>
                </p>
                <p className="text-xs text-gray-500">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mt-6 bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-dark-gray mb-2">Common Issues:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Make sure you're using the email address you registered with</li>
            <li>• Check that your email address is spelled correctly</li>
            <li>• If you have multiple email addresses, try each one</li>
            <li>• Contact us if you've changed your email address recently</li>
          </ul>
        </div>

        {/* New Account Option */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account yet?{" "}
            <Link href="/register" className="text-accent hover:text-accent/80 font-medium">
              Join our community today
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
