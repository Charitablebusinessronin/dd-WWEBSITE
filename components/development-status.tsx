"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, Circle } from "lucide-react"

export function DevelopmentStatus() {
  const features = [
    {
      category: "Frontend Website",
      progress: 100,
      status: "complete",
      items: [
        { name: "Homepage", status: "complete" },
        { name: "About Page", status: "complete" },
        { name: "Programs Page", status: "complete" },
        { name: "Events Page", status: "complete" },
        { name: "Contact Page", status: "complete" },
        { name: "Responsive Design", status: "complete" },
        { name: "Accessibility", status: "complete" },
      ],
    },
    {
      category: "Member Management",
      progress: 95,
      status: "complete",
      items: [
        { name: "Registration System", status: "complete" },
        { name: "Authentication", status: "complete" },
        { name: "Member Dashboard", status: "complete" },
        { name: "Profile Management", status: "complete" },
        { name: "Membership Tiers", status: "complete" },
        { name: "Payment History", status: "in-progress" },
      ],
    },
    {
      category: "Program Management",
      progress: 90,
      status: "complete",
      items: [
        { name: "Program Creation", status: "complete" },
        { name: "Registration System", status: "complete" },
        { name: "Capacity Management", status: "complete" },
        { name: "Pricing System", status: "complete" },
        { name: "Schedule Management", status: "in-progress" },
      ],
    },
    {
      category: "Event Management",
      progress: 90,
      status: "complete",
      items: [
        { name: "Event Creation", status: "complete" },
        { name: "Registration System", status: "complete" },
        { name: "Location Management", status: "complete" },
        { name: "Capacity Tracking", status: "complete" },
        { name: "Payment Processing", status: "in-progress" },
      ],
    },
    {
      category: "Admin Dashboard",
      progress: 85,
      status: "complete",
      items: [
        { name: "Dashboard Overview", status: "complete" },
        { name: "Member Management", status: "complete" },
        { name: "Program Management", status: "complete" },
        { name: "Event Management", status: "complete" },
        { name: "Communication Tools", status: "in-progress" },
        { name: "Financial Reports", status: "pending" },
      ],
    },
    {
      category: "Microsoft Integration",
      progress: 80,
      status: "complete",
      items: [
        { name: "Graph API Setup", status: "complete" },
        { name: "Calendar Integration", status: "complete" },
        { name: "Email Integration", status: "complete" },
        { name: "Teams Support", status: "complete" },
        { name: "Bulk Operations", status: "in-progress" },
      ],
    },
    {
      category: "Dynamics 365 CRM",
      progress: 75,
      status: "in-progress",
      items: [
        { name: "Authentication", status: "complete" },
        { name: "Member Sync", status: "complete" },
        { name: "Registration Sync", status: "complete" },
        { name: "Custom Fields", status: "complete" },
        { name: "Bulk Sync", status: "in-progress" },
        { name: "Error Handling", status: "in-progress" },
      ],
    },
    {
      category: "Payment Processing",
      progress: 70,
      status: "in-progress",
      items: [
        { name: "Stripe Setup", status: "in-progress" },
        { name: "Membership Payments", status: "in-progress" },
        { name: "Program Payments", status: "in-progress" },
        { name: "Recurring Payments", status: "pending" },
        { name: "Financial Reports", status: "pending" },
      ],
    },
    {
      category: "Communication System",
      progress: 60,
      status: "in-progress",
      items: [
        { name: "Email Templates", status: "in-progress" },
        { name: "Automated Emails", status: "in-progress" },
        { name: "SMS Integration", status: "pending" },
        { name: "Newsletter System", status: "pending" },
      ],
    },
    {
      category: "Analytics & Reporting",
      progress: 40,
      status: "in-progress",
      items: [
        { name: "Basic Analytics", status: "in-progress" },
        { name: "Member Reports", status: "pending" },
        { name: "Financial Reports", status: "pending" },
        { name: "Custom Dashboards", status: "pending" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "pending":
        return <Circle className="h-4 w-4 text-gray-400" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-600" />
    }
  }

  const getStatusBadge = (status: string, progress: number) => {
    if (progress === 100) {
      return <Badge className="bg-green-100 text-green-800">Complete</Badge>
    } else if (progress >= 70) {
      return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
    } else if (progress >= 40) {
      return <Badge className="bg-yellow-100 text-yellow-800">Started</Badge>
    } else {
      return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
    }
  }

  const overallProgress = Math.round(features.reduce((sum, feature) => sum + feature.progress, 0) / features.length)

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Development Status Dashboard</h1>
        <p className="text-gray-600 mb-4">Community Center Management Platform Progress</p>
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{feature.category}</CardTitle>
                {getStatusBadge(feature.status, feature.progress)}
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-600">{feature.progress}% Complete</span>
              </div>
              <Progress value={feature.progress} className="h-2 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(item.status)}
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-green-700">Completed Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">38</div>
            <p className="text-sm text-gray-600">Features fully implemented and tested</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-yellow-700">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600 mb-2">4</div>
            <p className="text-sm text-gray-600">Features currently being developed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-700">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-600 mb-2">3</div>
            <p className="text-sm text-gray-600">Features planned for future development</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Next Priorities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-red-600">Critical (Next 2 weeks)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Complete Stripe payment integration</li>
                <li>• Implement email template system</li>
                <li>• Add comprehensive error handling</li>
                <li>• Security audit and improvements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-yellow-600">High Priority (Next month)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Advanced reporting dashboard</li>
                <li>• Mobile responsiveness improvements</li>
                <li>• Performance optimization</li>
                <li>• Comprehensive testing suite</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
