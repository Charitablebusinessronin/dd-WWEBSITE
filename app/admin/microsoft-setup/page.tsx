"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MicrosoftSetupGuide } from "@/components/microsoft-setup-guide"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"

export default function MicrosoftSetupPage() {
  const [user, setUser] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [setupStatus, setSetupStatus] = useState({
    clientId: false,
    clientSecret: false,
    tenantId: false,
    permissions: false,
  })
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const userData = localStorage.getItem("user")
      if (userData) {
        const parsedUser = JSON.parse(userData)
        if (parsedUser.role !== "admin") {
          router.push("/dashboard")
          return
        }
        setUser(parsedUser)
        checkSetupStatus()
      } else {
        router.push("/login")
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [router])

  const checkSetupStatus = async () => {
    try {
      const response = await fetch("/api/microsoft/status")
      if (response.ok) {
        const status = await response.json()
        setSetupStatus(status)
      }
    } catch (error) {
      console.error("Error checking setup status:", error)
    }
  }

  const testConnection = async () => {
    try {
      const response = await fetch("/api/microsoft/test", { method: "POST" })
      const result = await response.json()

      if (result.success) {
        alert("✅ Microsoft Graph API connection successful!")
        checkSetupStatus()
      } else {
        alert(`❌ Connection failed: ${result.error}`)
      }
    } catch (error) {
      alert("❌ Connection test failed")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading setup guide...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" onClick={() => router.push("/admin")} className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-dark-gray">Microsoft Setup</h1>
                <p className="text-gray-600 mt-1">Configure Microsoft Graph API for calendar invitations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Current Configuration Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Configuration Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                {setupStatus.clientId ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="text-sm">Client ID</span>
                <Badge variant={setupStatus.clientId ? "default" : "destructive"}>
                  {setupStatus.clientId ? "Set" : "Missing"}
                </Badge>
              </div>

              <div className="flex items-center space-x-2">
                {setupStatus.clientSecret ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="text-sm">Client Secret</span>
                <Badge variant={setupStatus.clientSecret ? "default" : "destructive"}>
                  {setupStatus.clientSecret ? "Set" : "Missing"}
                </Badge>
              </div>

              <div className="flex items-center space-x-2">
                {setupStatus.tenantId ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="text-sm">Tenant ID</span>
                <Badge variant={setupStatus.tenantId ? "default" : "destructive"}>
                  {setupStatus.tenantId ? "Set" : "Missing"}
                </Badge>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  onClick={testConnection}
                  disabled={!setupStatus.clientId || !setupStatus.clientSecret || !setupStatus.tenantId}
                  size="sm"
                >
                  Test Connection
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Client ID */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Microsoft Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Client ID Found:</strong> 6f0dab74-c7e9-4282-aa1a-96bdf4e3173c
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>Complete the app registration setup below</li>
                  <li>Create a client secret in Azure Portal</li>
                  <li>Get your tenant ID from the app overview</li>
                  <li>Add the environment variables to Vercel</li>
                </ol>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Environment Variables to Add:</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="bg-white p-2 rounded border">
                    <strong>MICROSOFT_CLIENT_ID=</strong>6f0dab74-c7e9-4282-aa1a-96bdf4e3173c
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <strong>MICROSOFT_CLIENT_SECRET=</strong>[Get from Azure Portal]
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <strong>MICROSOFT_TENANT_ID=</strong>[Get from Azure Portal]
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Setup Guide */}
        <MicrosoftSetupGuide />
      </div>
    </div>
  )
}
