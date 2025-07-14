"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, ExternalLink, CheckCircle, AlertCircle, Settings } from "lucide-react"

export function MicrosoftSetupGuide() {
  const [copiedText, setCopiedText] = useState("")

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(""), 2000)
  }

  const redirectUri = `${typeof window !== "undefined" ? window.location.origin : "https://your-domain.com"}/api/auth/callback/microsoft`

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Microsoft Graph API Setup</h1>
        <p className="text-gray-600">Configure Microsoft 365 integration for calendar invitations</p>
      </div>

      <Tabs defaultValue="registration" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="registration">App Registration</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="secrets">Client Secret</TabsTrigger>
          <TabsTrigger value="environment">Environment</TabsTrigger>
        </TabsList>

        {/* App Registration Tab */}
        <TabsContent value="registration">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Step 1: Create App Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  You'll need admin access to your Microsoft 365 tenant or Azure Active Directory.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">1. Go to Azure Portal</p>
                    <p className="text-sm text-gray-600">Navigate to App registrations</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Open Portal
                  </Button>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">2. Click "New registration" and fill out:</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <strong>Name:</strong> Difference Driven Community Center
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <strong>Supported account types:</strong> Single tenant
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <strong>Redirect URI:</strong> Web
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(redirectUri, "redirect")}>
                        <Copy className="h-3 w-3 mr-1" />
                        {copiedText === "redirect" ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <div className="bg-white p-2 rounded border text-xs font-mono break-all">{redirectUri}</div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">3. After creation, note down:</p>
                  <ul className="text-sm text-green-700 ml-4 mt-1 space-y-1">
                    <li>• Application (client) ID</li>
                    <li>• Directory (tenant) ID</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Permissions Tab */}
        <TabsContent value="permissions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Step 2: Configure API Permissions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  These permissions allow the app to create calendar events and send invitations.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">1. Go to "API permissions" in your app</p>
                  <p className="text-sm text-gray-600">
                    Click "Add a permission" → "Microsoft Graph" → "Application permissions"
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium mb-2">2. Add these Application permissions:</p>
                  <div className="space-y-2">
                    {[
                      { name: "Calendars.ReadWrite", description: "Create and manage calendar events" },
                      { name: "Mail.Send", description: "Send email invitations" },
                      { name: "User.Read.All", description: "Read user profiles for attendees" },
                      { name: "OnlineMeetings.ReadWrite.All", description: "Create Teams meetings (optional)" },
                    ].map((permission, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <Badge variant="outline" className="mr-2">
                            {permission.name}
                          </Badge>
                          <span className="text-sm text-gray-600">{permission.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-800">3. Grant admin consent</p>
                  <p className="text-sm text-yellow-700">Click "Grant admin consent for [Your Organization]"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Client Secret Tab */}
        <TabsContent value="secrets">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Step 3: Create Client Secret
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>The client secret is like a password for your app. Keep it secure!</AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">1. Go to "Certificates & secrets"</p>
                  <p className="text-sm text-gray-600">Click "New client secret"</p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium mb-2">2. Configure the secret:</p>
                  <div className="space-y-1 ml-4 text-sm">
                    <p>
                      <strong>Description:</strong> Community Center Calendar Integration
                    </p>
                    <p>
                      <strong>Expires:</strong> 24 months (recommended)
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-800">3. Copy the secret value immediately!</p>
                  <p className="text-sm text-red-700">You won't be able to see it again after leaving the page.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Environment Variables Tab */}
        <TabsContent value="environment">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Step 4: Environment Variables
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  Add these environment variables to your Vercel project or .env.local file.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                {[
                  {
                    key: "MICROSOFT_CLIENT_ID",
                    description: "Application (client) ID from Step 1",
                    example: "12345678-1234-1234-1234-123456789012",
                  },
                  {
                    key: "MICROSOFT_CLIENT_SECRET",
                    description: "Client secret value from Step 3",
                    example: "your-secret-value-here",
                  },
                  {
                    key: "MICROSOFT_TENANT_ID",
                    description: "Directory (tenant) ID from Step 1",
                    example: "87654321-4321-4321-4321-210987654321",
                  },
                ].map((env, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="font-mono">
                        {env.key}
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(env.key, env.key)}>
                        <Copy className="h-3 w-3 mr-1" />
                        {copiedText === env.key ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{env.description}</p>
                    <div className="bg-white p-2 rounded border text-xs font-mono text-gray-500">{env.example}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-medium text-green-800 mb-2">🎉 You're all set!</p>
                <p className="text-sm text-green-700">
                  Once you've added these environment variables, your Microsoft Calendar integration will be ready to
                  use. You can start sending event invitations, program confirmations, and meeting requests directly
                  from the admin dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
