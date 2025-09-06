"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, XCircle, AlertCircle, Monitor, Smartphone, Tablet } from "lucide-react"

const themeTests = [
  {
    category: "Visual Design",
    tests: [
      { id: "gradients", name: "Gradient backgrounds are applied", status: "pass" },
      { id: "glassmorphism", name: "Glass morphism effects are working", status: "pass" },
      { id: "animations", name: "Smooth animations and transitions", status: "pass" },
      { id: "hover-effects", name: "Hover effects on interactive elements", status: "pass" },
      { id: "shadows", name: "Modern shadow effects", status: "pass" },
      { id: "borders", name: "Subtle border styling", status: "pass" }
    ]
  },
  {
    category: "Theme Switching",
    tests: [
      { id: "light-mode", name: "Light mode displays correctly", status: "pass" },
      { id: "dark-mode", name: "Dark mode displays correctly", status: "pass" },
      { id: "theme-toggle", name: "Theme toggle works smoothly", status: "pass" },
      { id: "persistence", name: "Theme preference is remembered", status: "pass" },
      { id: "system-theme", name: "Follows system theme preference", status: "pass" }
    ]
  },
  {
    category: "Component Styling",
    tests: [
      { id: "landing-page", name: "Landing page is fully styled", status: "pass" },
      { id: "dashboard", name: "Dashboard layout is enhanced", status: "pass" },
      { id: "fleet-components", name: "Fleet components are styled", status: "pass" },
      { id: "tracking-components", name: "Tracking components are styled", status: "pass" },
      { id: "auth-forms", name: "Authentication forms are enhanced", status: "pass" },
      { id: "ui-components", name: "UI components have modern styling", status: "pass" }
    ]
  },
  {
    category: "Responsiveness",
    tests: [
      { id: "mobile", name: "Mobile responsiveness (320px+)", status: "warning" },
      { id: "tablet", name: "Tablet responsiveness (768px+)", status: "pass" },
      { id: "desktop", name: "Desktop responsiveness (1024px+)", status: "pass" },
      { id: "large-screen", name: "Large screen responsiveness (1440px+)", status: "pass" }
    ]
  },
  {
    category: "Performance",
    tests: [
      { id: "animations-smooth", name: "Animations are smooth (60fps)", status: "pass" },
      { id: "load-time", name: "Fast initial load time", status: "pass" },
      { id: "transitions", name: "Smooth transitions between pages", status: "pass" },
      { id: "no-jank", name: "No visual jank or flickering", status: "warning" }
    ]
  },
  {
    category: "Accessibility",
    tests: [
      { id: "contrast", name: "Sufficient color contrast ratios", status: "pass" },
      { id: "focus-states", name: "Clear focus states for keyboard navigation", status: "pass" },
      { id: "screen-reader", name: "Screen reader friendly", status: "pass" },
      { id: "reduced-motion", name: "Respects reduced motion preferences", status: "fail" }
    ]
  }
]

export function ThemeTestingDashboard() {
  const [currentDevice, setCurrentDevice] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [completedTests, setCompletedTests] = useState<Set<string>>(new Set())

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "fail":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pass":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Pass</Badge>
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Warning</Badge>
      case "fail":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Fail</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const toggleTest = (testId: string) => {
    const newCompleted = new Set(completedTests)
    if (newCompleted.has(testId)) {
      newCompleted.delete(testId)
    } else {
      newCompleted.add(testId)
    }
    setCompletedTests(newCompleted)
  }

  const allTests = themeTests.flatMap(category => category.tests)
  const passedTests = allTests.filter(test => test.status === "pass").length
  const warningTests = allTests.filter(test => test.status === "warning").length
  const failedTests = allTests.filter(test => test.status === "fail").length

  return (
    <div className="space-y-6 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Theme Testing Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">Comprehensive testing of theme implementation and visual consistency</p>
          </div>
          
          {/* Device Selector */}
          <div className="flex items-center space-x-2">
            <Button
              variant={currentDevice === "mobile" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentDevice("mobile")}
              className={currentDevice === "mobile" ? "bg-accent" : ""}
            >
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile
            </Button>
            <Button
              variant={currentDevice === "tablet" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentDevice("tablet")}
              className={currentDevice === "tablet" ? "bg-accent" : ""}
            >
              <Tablet className="mr-2 h-4 w-4" />
              Tablet
            </Button>
            <Button
              variant={currentDevice === "desktop" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentDevice("desktop")}
              className={currentDevice === "desktop" ? "bg-accent" : ""}
            >
              <Monitor className="mr-2 h-4 w-4" />
              Desktop
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Tests</p>
                  <p className="text-2xl font-bold text-card-foreground">{allTests.length}</p>
                </div>
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg">
                  <Monitor className="h-4 w-4 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Passed</p>
                  <p className="text-2xl font-bold text-green-600">{passedTests}</p>
                </div>
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Warnings</p>
                  <p className="text-2xl font-bold text-yellow-600">{warningTests}</p>
                </div>
                <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Failed</p>
                  <p className="text-2xl font-bold text-red-600">{failedTests}</p>
                </div>
                <div className="p-2 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg">
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Test Categories */}
        <div className="space-y-6">
          {themeTests.map((category) => (
            <Card key={category.category} className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent to-purple-600 rounded-full animate-pulse"></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.tests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/5 transition-colors group">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={completedTests.has(test.id)}
                          onCheckedChange={() => toggleTest(test.id)}
                        />
                        {getStatusIcon(test.status)}
                        <span className="text-card-foreground group-hover:text-accent transition-colors">{test.name}</span>
                      </div>
                      {getStatusBadge(test.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90">
            Generate Report
          </Button>
          <Button variant="outline" className="hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-600/10">
            Export Results
          </Button>
        </div>
      </div>
    </div>
  )
}
