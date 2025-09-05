"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, Package, Truck, Clock, CheckCircle } from "lucide-react"

// Mock packages data
const packages = [
  {
    id: "FL123456789",
    status: "in-transit",
    sender: "TechCorp Inc.",
    recipient: "John Smith",
    destination: "New York, NY",
    vehicle: "FL-003",
    driver: "Mike Wilson",
    estimatedDelivery: "Today, 3:30 PM",
    created: "2024-01-15",
  },
  {
    id: "FL987654321",
    status: "delivered",
    sender: "Fashion Store",
    recipient: "Sarah Johnson",
    destination: "Los Angeles, CA",
    vehicle: "FL-001",
    driver: "John Smith",
    estimatedDelivery: "Delivered",
    created: "2024-01-14",
  },
  {
    id: "FL456789123",
    status: "pending",
    sender: "Electronics Hub",
    recipient: "David Brown",
    destination: "Chicago, IL",
    vehicle: "Not Assigned",
    driver: "Not Assigned",
    estimatedDelivery: "Pending Assignment",
    created: "2024-01-15",
  },
  {
    id: "FL789123456",
    status: "out-for-delivery",
    sender: "Book Store",
    recipient: "Emma Wilson",
    destination: "Miami, FL",
    vehicle: "FL-005",
    driver: "Alex Brown",
    estimatedDelivery: "Today, 5:00 PM",
    created: "2024-01-14",
  },
]

export function TrackingDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || pkg.status === statusFilter

    return matchesSearch && matchesStatus
  })

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
        return "Pending"
      default:
        return status
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return CheckCircle
      case "in-transit":
        return Truck
      case "out-for-delivery":
        return Package
      case "pending":
        return Clock
      default:
        return Package
    }
  }

  const statusCounts = {
    all: packages.length,
    pending: packages.filter((p) => p.status === "pending").length,
    "in-transit": packages.filter((p) => p.status === "in-transit").length,
    "out-for-delivery": packages.filter((p) => p.status === "out-for-delivery").length,
    delivered: packages.filter((p) => p.status === "delivered").length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Package Tracking</h1>
          <p className="text-muted-foreground">Monitor and manage all package deliveries</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Package
        </Button>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(statusCounts).map(([status, count]) => (
          <Card
            key={status}
            className={`bg-card border-border cursor-pointer transition-colors ${
              statusFilter === status ? "ring-2 ring-accent" : "hover:bg-muted/50"
            }`}
            onClick={() => setStatusFilter(status)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground capitalize">
                    {status === "all" ? "Total" : status.replace("-", " ")}
                  </p>
                  <p className="text-2xl font-bold text-card-foreground">{count}</p>
                </div>
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Package className="h-4 w-4 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="relative flex-1 lg:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search packages by ID, recipient, or destination..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-input border-border"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-3 w-3" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Packages List */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Packages ({filteredPackages.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {filteredPackages.map((pkg, index) => {
              const StatusIcon = getStatusIcon(pkg.status)
              return (
                <div
                  key={pkg.id}
                  className="p-6 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <StatusIcon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{pkg.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          {pkg.sender} → {pkg.recipient}
                        </p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(pkg.status)}>{getStatusLabel(pkg.status)}</Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Destination</p>
                      <p className="font-medium text-card-foreground">{pkg.destination}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Vehicle</p>
                      <p className="font-medium text-card-foreground">{pkg.vehicle}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Driver</p>
                      <p className="font-medium text-card-foreground">{pkg.driver}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Delivery</p>
                      <p className="font-medium text-card-foreground">{pkg.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Created: {pkg.created}</p>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
