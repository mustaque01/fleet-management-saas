"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Truck, MapPin, Clock, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function HeroSection() {
  const [trackingId, setTrackingId] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleTrackPackage = () => {
    if (trackingId.trim()) {
      router.push(`/track?id=${encodeURIComponent(trackingId)}`)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-background via-purple-50/30 to-blue-50/30 dark:from-background dark:via-purple-950/20 dark:to-blue-950/20 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8 backdrop-blur-sm bg-background/80 border-b border-border/50">
        <Link href="/" className="flex items-center space-x-2">
          <Truck className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-foreground">FleetFlow</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <ThemeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border/50 relative z-10">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#features"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/login">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-accent hover:bg-accent/90 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
                  Modern Fleet Management
                  <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent"> Made Simple</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Streamline your logistics operations with real-time tracking, intelligent routing, and comprehensive
                  fleet analytics. Trusted by 500+ companies worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 hover:bg-accent/5 transition-all duration-300">
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>SOC 2 Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column - Package Tracking Card */}
            <div className="lg:pl-8 animate-fade-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold text-card-foreground">Track Your Package</h3>
                      <p className="text-muted-foreground">Enter your tracking ID to get real-time updates</p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <Input
                          placeholder="Enter tracking ID (e.g., FL123456789)"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          className="pr-12 bg-input/50 backdrop-blur-sm border-border/50 focus:border-accent/50 transition-all duration-300"
                          onKeyPress={(e) => e.key === "Enter" && handleTrackPackage()}
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                      <Button
                        onClick={handleTrackPackage}
                        className="w-full bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={!trackingId.trim()}
                      >
                        Track Package
                      </Button>
                    </div>

                    {/* Sample Tracking Status */}
                    <div className="border-t border-border pt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="text-card-foreground">In Transit</span>
                          </div>
                          <span className="text-muted-foreground">2 hours ago</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="text-card-foreground">Expected Delivery</span>
                          </div>
                          <span className="text-muted-foreground">Today, 3:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
