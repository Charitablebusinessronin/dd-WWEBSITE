"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Circle, Copy, ExternalLink, AlertTriangle } from "lucide-react"

export function DynamicsSetupGuide() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [copiedText, setCopiedText] = useState<string>("")

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber) ? prev.filter((n) => n !== stepNumber) : [...prev, stepNumber],
    )
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(""), 2000)
  }

  const StepCard = ({
    stepNumber,
    title,
    children,
    isCompleted,
  }: {
    stepNumber: number
    title: string
    children: React.ReactNode
    isCompleted: boolean
  }) => (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => toggleStep(stepNumber)} className="p-0 h-6 w-6">
            {isCompleted ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400" />
            )}
          </Button>
          <CardTitle className="text-lg">
            Step {stepNumber}: {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )

  const CodeBlock = ({ code, label }: { code: string; label: string }) => (
    <div className="relative">
      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button variant="ghost" size="sm" className="absolute top-2 right-2" onClick={() => copyToClipboard(code, label)}>
        <Copy className="h-4 w-4" />
        {copiedText === label && <span className="ml-1 text-xs">Copied!</span>}
      </Button>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dynamics 365 Integration Setup</h1>
        <p className="text-gray-600">
          Complete configuration guide for integrating your community center with Dynamics 365 CRM
        </p>
        <div className="mt-4">
          <Badge variant="outline" className="mr-2">
            {completedSteps.length}/8 Steps Completed
          </Badge>
          <Badge variant={completedSteps.length === 8 ? "default" : "secondary"}>
            {completedSteps.length === 8 ? "Setup Complete" : "In Progress"}
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="setup">Azure Setup</TabsTrigger>
          <TabsTrigger value="dynamics">Dynamics Config</TabsTrigger>
          <TabsTrigger value="environment">Environment</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="mt-6">
          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You'll need Dynamics 365 administrator privileges to complete this setup.
            </AlertDescription>
          </Alert>

          <StepCard stepNumber={1} title="Register Azure AD Application" isCompleted={completedSteps.includes(1)}>
            <div className="space-y-4">
              <p>Create a new application registration in Azure Active Directory:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Go to{" "}
                  <a
                    href="https://portal.azure.com"
                    target="_blank"
                    className="text-blue-600 hover:underline inline-flex items-center"
                    rel="noreferrer"
                  >
                    Azure Portal <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>Navigate to "Azure Active Directory" → "App registrations"</li>
                <li>Click "New registration"</li>
                <li>Fill in the details:</li>
              </ol>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Application Details:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Name:</strong> Community Center CRM Integration
                  </li>
                  <li>
                    <strong>Supported account types:</strong> Single tenant
                  </li>
                  <li>
                    <strong>Redirect URI:</strong> Leave blank for now
                  </li>
                </ul>
              </div>

              <p>
                After registration, note down the <strong>Application (client) ID</strong> and{" "}
                <strong>Directory (tenant) ID</strong>.
              </p>
            </div>
          </StepCard>

          <StepCard stepNumber={2} title="Create Client Secret" isCompleted={completedSteps.includes(2)}>
            <div className="space-y-4">
              <p>Generate a client secret for authentication:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In your app registration, go to "Certificates & secrets"</li>
                <li>Click "New client secret"</li>
                <li>Add description: "Community Center Integration"</li>
                <li>Set expiration: 24 months (recommended)</li>
                <li>Click "Add"</li>
              </ol>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Copy the client secret value immediately - it won't be shown again!
                </AlertDescription>
              </Alert>
            </div>
          </StepCard>
        </TabsContent>

        <TabsContent value="dynamics" className="mt-6">
          <StepCard stepNumber={3} title="Configure API Permissions" isCompleted={completedSteps.includes(3)}>
            <div className="space-y-4">
              <p>Add required permissions for Dynamics 365 access:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In your app registration, go to "API permissions"</li>
                <li>Click "Add a permission"</li>
                <li>Select "Dynamics CRM"</li>
                <li>Choose "Application permissions"</li>
                <li>Select the following permissions:</li>
              </ol>

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Required Permissions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    ✓ <code>user_impersonation</code> - Access Dynamics 365 as organization users
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-600">
                After adding permissions, click "Grant admin consent" to approve them.
              </p>
            </div>
          </StepCard>

          <StepCard
            stepNumber={4}
            title="Create Dynamics 365 Application User"
            isCompleted={completedSteps.includes(4)}
          >
            <div className="space-y-4">
              <p>Create a dedicated application user in Dynamics 365:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Open your Dynamics 365 environment</li>
                <li>Go to Settings → Security → Users</li>
                <li>Click "New" → "Application User"</li>
                <li>Fill in the details:</li>
              </ol>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Application User Details:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>User Name:</strong> communityapp@yourdomain.com
                  </li>
                  <li>
                    <strong>Application ID:</strong> [Your Azure App Client ID]
                  </li>
                  <li>
                    <strong>Full Name:</strong> Community Center Integration
                  </li>
                  <li>
                    <strong>Primary Email:</strong> communityapp@yourdomain.com
                  </li>
                </ul>
              </div>

              <p>
                Assign the <strong>System Administrator</strong> security role to this user.
              </p>
            </div>
          </StepCard>

          <StepCard stepNumber={5} title="Create Custom Fields" isCompleted={completedSteps.includes(5)}>
            <div className="space-y-4">
              <p>Add custom fields to the Contact entity for community center data:</p>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Contact Entity Custom Fields:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>dd_membershiptype</strong>
                      <ul className="ml-4 mt-1">
                        <li>Type: Option Set</li>
                        <li>Values: Basic, Premium, Family, Sliding Scale</li>
                      </ul>
                    </div>
                    <div>
                      <strong>dd_memberstatus</strong>
                      <ul className="ml-4 mt-1">
                        <li>Type: Option Set</li>
                        <li>Values: Active, Inactive, Pending</li>
                      </ul>
                    </div>
                    <div>
                      <strong>dd_joindate</strong>
                      <ul className="ml-4 mt-1">
                        <li>Type: Date Only</li>
                        <li>Description: Member join date</li>
                      </ul>
                    </div>
                    <div>
                      <strong>dd_lastupdated</strong>
                      <ul className="ml-4 mt-1">
                        <li>Type: Date and Time</li>
                        <li>Description: Last profile update</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Opportunity Entity Custom Fields:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>dd_registrationdate</strong>
                      <ul className="ml-4 mt-1">
                        <li>Type: Date and Time</li>
                        <li>Description: Program/Event registration date</li>
                      </ul>
                    </div>
                    <div>
                      <strong>dd_registrationtype</strong>
                      <ul className="ml-4 mt-1">
                        <li>Type: Option Set</li>
                        <li>Values: Program, Event, Donation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  Navigate to Settings → Customizations → Customize the System → Entities → Contact/Opportunity → Fields
                  to add these custom fields.
                </AlertDescription>
              </Alert>
            </div>
          </StepCard>
        </TabsContent>

        <TabsContent value="environment" className="mt-6">
          <StepCard stepNumber={6} title="Configure Environment Variables" isCompleted={completedSteps.includes(6)}>
            <div className="space-y-4">
              <p>Add the following environment variables to your Vercel project:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Dynamics 365 Configuration:</h4>
                  <CodeBlock
                    code={`# Dynamics 365 Integration
DYNAMICS_CLIENT_ID=your-azure-app-client-id
DYNAMICS_CLIENT_SECRET=your-azure-app-client-secret
DYNAMICS_TENANT_ID=your-azure-tenant-id
DYNAMICS_BASE_URL=https://yourorg.crm.dynamics.com`}
                    label="dynamics-env"
                  />
                </div>

                <Alert>
                  <AlertDescription>
                    Replace <code>yourorg</code> in the base URL with your actual Dynamics 365 organization name.
                  </AlertDescription>
                </Alert>

                <div className="bg-yellow-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">How to find your Dynamics 365 URL:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Log into your Dynamics 365 environment</li>
                    <li>Look at the URL in your browser</li>
                    <li>
                      It should look like: <code>https://yourorg.crm.dynamics.com</code>
                    </li>
                    <li>Use this exact URL (without any path after .com)</li>
                  </ol>
                </div>
              </div>
            </div>
          </StepCard>

          <StepCard stepNumber={7} title="Deploy Environment Variables" isCompleted={completedSteps.includes(7)}>
            <div className="space-y-4">
              <p>Add environment variables to your Vercel deployment:</p>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Go to your Vercel dashboard</li>
                <li>Select your community center project</li>
                <li>Navigate to Settings → Environment Variables</li>
                <li>Add each variable from Step 6</li>
                <li>Redeploy your application</li>
              </ol>

              <Alert>
                <AlertDescription>
                  Make sure to redeploy your application after adding environment variables for changes to take effect.
                </AlertDescription>
              </Alert>
            </div>
          </StepCard>
        </TabsContent>

        <TabsContent value="testing" className="mt-6">
          <StepCard stepNumber={8} title="Test Integration" isCompleted={completedSteps.includes(8)}>
            <div className="space-y-4">
              <p>Verify your Dynamics 365 integration is working:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Test Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Test if your app can authenticate with Dynamics 365:</p>
                    <Button className="w-full" onClick={() => window.open("/api/dynamics/test-auth", "_blank")}>
                      Test Authentication
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Test Member Sync</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Create a test member and sync to Dynamics:</p>
                    <Button className="w-full" onClick={() => window.open("/api/dynamics/test-sync", "_blank")}>
                      Test Member Sync
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Success Indicators:</h4>
                <ul className="space-y-1 text-sm">
                  <li>✓ Authentication test returns access token</li>
                  <li>✓ Member sync creates contact in Dynamics 365</li>
                  <li>✓ Custom fields are populated correctly</li>
                  <li>✓ No error messages in console</li>
                </ul>
              </div>

              <Alert>
                <AlertDescription>
                  If tests fail, check your environment variables and Azure app permissions. Common issues include
                  incorrect URLs or missing admin consent.
                </AlertDescription>
              </Alert>
            </div>
          </StepCard>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>Azure Documentation:</strong>
            <br />
            <a
              href="https://docs.microsoft.com/en-us/azure/active-directory/develop/"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              Azure AD App Registration
            </a>
          </div>
          <div>
            <strong>Dynamics 365 Documentation:</strong>
            <br />
            <a
              href="https://docs.microsoft.com/en-us/dynamics365/"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              Dynamics 365 Web API
            </a>
          </div>
          <div>
            <strong>Support:</strong>
            <br />
            Contact your IT administrator or Microsoft support for assistance.
          </div>
        </div>
      </div>
    </div>
  )
}
