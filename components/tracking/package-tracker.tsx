"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PackageTimeline } from "./package-timeline"
import { PackageDetails } from "./package-details"
import { Truck, Search, ArrowLeft, MapPin, Clock, Package } from "lucide-react"
import Link from "next/link"

// Mock package data
const mockPackages = {
  FL123456789: {
    id: "FL123456789",
    status: "in-transit",
    sender: "TechCorp Inc.",
    recipient: "John Smith",
    recipientAddress: "123 Main St, New York, NY 10001",
    estimatedDelivery: "Today, 3:30 PM",
    currentLocation: "Distribution Center - Brooklyn",
    vehicle: "FL-003",
    driver: "Mike Wilson",
    weight: "2.5 kg",
    dimensions: "30x20x15 cm",
    timeline: [
      {
        status: "Package Created",
        location: "TechCorp Warehouse",
        timestamp: "2024-01-15 09:00 AM",
        completed: true,
      },
      {
        status: "Picked Up",
        location: "TechCorp Warehouse",
        timestamp: "2024-01-15 10:30 AM",
        completed: true,
      },
      {
        status: "In Transit",
        location: "Distribution Center - Brooklyn",
        timestamp: "2024-01-15 02:15 PM",
        completed: true,
      },
      {
        status: "Out for Delivery",
        location: "Local Delivery Hub",
        timestamp: "Expected: 2:30 PM",
        completed: false,
      },
      {
        status: "Delivered",
        location: "123 Main St",
        timestamp: "Expected: 3:30 PM",
        completed: false,
      },
    ],
  },
  FL987654321: {
    id: "FL987654321",
    status: "delivered",
    sender: "Fashion Store",
    recipient: "Sarah Johnson",
    recipientAddress: "456 Oak Ave, Los Angeles, CA 90210",
    estimatedDelivery: "Delivered",
    currentLocation: "Delivered",
    vehicle: "FL-001",
    driver: "John Smith",
    weight: "1.2 kg",
    dimensions: "25x15x10 cm",
    timeline: [
      {
        status: "Package Created",
        location: "Fashion Store Warehouse",
        timestamp: "2024-01-14 08:00 AM",
        completed: true,
      },
      {
        status: "Picked Up",
        location: "Fashion Store Warehouse",
        timestamp: "2024-01-14 09:15 AM",
        completed: true,
      },
      {
        status: "In Transit",
        location: "Distribution Center - LA",
        timestamp: "2024-01-14 01:30 PM",
        completed: true,
      },
      {
        status: "Out for Delivery",
        location: "Local Delivery Hub",
        timestamp: "2024-01-15 08:00 AM",
        completed: true,
      },
      {
        status: "Delivered",
        location: "456 Oak Ave",
        timestamp: "2024-01-15 11:45 AM",
        completed: true,
      },
    ],
  },
}

export function PackageTracker() {
  const [trackingId, setTrackingId] = useState("")
  const [searchedId, setSearchedId] = useState("")
  const [packageData, setPackageData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrack = async () => {
    if (!trackingId.trim()) return

    setIsLoading(true)
    setError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const foundPackage = mockPackages[trackingId as keyof typeof mockPackages]
    if (foundPackage) {
      setPackageData(foundPackage)
      setSearchedId(trackingId)
      setError("")
    } else {
      setPackageData(null)
      setError("Package not found. Please check your tracking ID and try again.")
    }

    setIsLoading(false)
  }

  const handleNewSearch = () => {
    setPackageData(null)
    setSearchedId("")
    setTrackingId("")
    setError("")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-transit":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "out-for-delivery":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered"
      case "in-transit":
        return "In Transit"
      case "out-for-delivery":
        return "Out for Delivery"
      case "pending":
        return "Pending Pickup"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold text-foreground">FleetFlow</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {!packageData ? (
          /* Search Interface */
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-foreground">Track Your Package</h1>
              <p className="text-lg text-muted-foreground">
                Enter your tracking ID to get real-time updates on your delivery
              </p>
            </div>

            <Card className="bg-card border-border shadow-lg max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        placeholder="Enter tracking ID (e.g., FL123456789)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="pr-12 bg-input border-border"
                        onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                      />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                    <Button
                      onClick={handleTrack}
                      className="w-full bg-accent hover:bg-accent/90"
                      disabled={!trackingId.trim() || isLoading}
                    >
                      {isLoading ? "Tracking..." : "Track Package"}
                    </Button>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  )}

                  <div className="border-t border-border pt-6">
                    <div className="space-y-2">
                      <h3 className="font-medium text-card-foreground">Try these sample tracking IDs:</h3>
                      <div className="space-y-1">
                        <button
                          onClick={() => setTrackingId("FL123456789")}
                          className="block text-sm text-accent hover:text-accent/80"
                        >
                          FL123456789 (In Transit)
                        </button>
                        <button
                          onClick={() => setTrackingId("FL987654321")}
                          className="block text-sm text-accent hover:text-accent/80"
                        >
                          FL987654321 (Delivered)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Package Details */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleNewSearch}
                className="flex items-center space-x-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>New Search</span>
              </Button>
              <Badge className={getStatusColor(packageData.status)}>{getStatusLabel(packageData.status)}</Badge>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Package Overview */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-card-foreground">
                      <Package className="h-5 w-5 text-accent" />
                      <span>Package {packageData.id}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">From</p>
                        <p className="font-medium text-card-foreground">{packageData.sender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">To</p>
                        <p className="font-medium text-card-foreground">{packageData.recipient}</p>
                        <p className="text-sm text-muted-foreground">{packageData.recipientAddress}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Current Location</p>
                          <p className="font-medium text-card-foreground">{packageData.currentLocation}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                          <p className="font-medium text-card-foreground">{packageData.estimatedDelivery}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Vehicle</p>
                          <p className="font-medium text-card-foreground">{packageData.vehicle}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <PackageTimeline timeline={packageData.timeline} />
              </div>

              {/* Package Details Sidebar */}
              <div>
                <PackageDetails packageData={packageData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
