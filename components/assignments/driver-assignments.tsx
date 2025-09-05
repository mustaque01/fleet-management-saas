"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Truck, Package, MapPin, Clock, Plus } from "lucide-react"

// Mock driver assignments data
const driverAssignments = [
  {
    id: "driver-1",
    name: "John Smith",
    vehicle: "FL-001",
    status: "active",
    currentLocation: "Downtown District",
    packages: [
      {
        id: "FL123456789",
        recipient: "Alice Johnson",
        address: "123 Main St",
        priority: "high",
        estimatedTime: "30 min",
      },
      {
        id: "FL987654321",
        recipient: "Bob Wilson",
        address: "456 Oak Ave",
        priority: "medium",
        estimatedTime: "45 min",
      },
    ],
    totalDistance: "12.5 km",
    estimatedCompletion: "3:30 PM",
  },
  {
    id: "driver-2",
    name: "Sarah Johnson",
    vehicle: "FL-002",
    status: "available",
    currentLocation: "Warehouse A",
    packages: [],
    totalDistance: "0 km",
    estimatedCompletion: "Available",
  },
  {
    id: "driver-3",
    name: "Mike Wilson",
    vehicle: "FL-003",
    status: "on-route",
    currentLocation: "Highway 101",
    packages: [
      {
        id: "FL456789123",
        recipient: "Carol Davis",
        address: "789 Pine St",
        priority: "urgent",
        estimatedTime: "15 min",
      },
    ],
    totalDistance: "8.2 km",
    estimatedCompletion: "2:45 PM",
  },
  {
    id: "driver-4",
    name: "Emma Davis",
    vehicle: "FL-004",
    status: "break",
    currentLocation: "Rest Area B",
    packages: [],
    totalDistance: "0 km",
    estimatedCompletion: "Back at 2:00 PM",
  },
]

export function DriverAssignments() {
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "available":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "on-route":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "break":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  const handleAssignPackage = (driverId: string) => {
    console.log("Assigning package to driver:", driverId)
    // In a real app, this would open an assignment modal
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center space-x-2">
          <User className="h-5 w-5 text-accent" />
          <span>Driver Assignments</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {driverAssignments.map((driver) => (
          <Card
            key={driver.id}
            className={`bg-background border-border transition-colors ${
              selectedDriver === driver.id ? "ring-2 ring-accent" : "hover:bg-muted/50"
            }`}
          >
            <CardContent className="p-4">
              <div className="space-y-4">
                {/* Driver Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-accent/10 text-accent">
                        {driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{driver.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Truck className="h-3 w-3" />
                        <span>{driver.vehicle}</span>
                        <span>•</span>
                        <MapPin className="h-3 w-3" />
                        <span>{driver.currentLocation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(driver.status)}>{driver.status}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAssignPackage(driver.id)}
                      disabled={driver.status === "break"}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Assign
                    </Button>
                  </div>
                </div>

                {/* Route Summary */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Packages</p>
                    <p className="font-medium text-card-foreground">{driver.packages.length}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Distance</p>
                    <p className="font-medium text-card-foreground">{driver.totalDistance}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">ETA</p>
                    <p className="font-medium text-card-foreground">{driver.estimatedCompletion}</p>
                  </div>
                </div>

                {/* Assigned Packages */}
                {driver.packages.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-card-foreground">Assigned Packages</h4>
                    <div className="space-y-2">
                      {driver.packages.map((pkg, index) => (
                        <div key={pkg.id} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium text-muted-foreground">{index + 1}</span>
                            <Package className="h-3 w-3 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium text-card-foreground">{pkg.id}</p>
                              <p className="text-xs text-muted-foreground">
                                {pkg.recipient} • {pkg.address}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getPriorityColor(pkg.priority)} variant="outline">
                              {pkg.priority}
                            </Badge>
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{pkg.estimatedTime}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {driver.packages.length === 0 && driver.status === "available" && (
                  <div className="text-center py-4 text-muted-foreground">
                    <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No packages assigned</p>
                    <p className="text-xs">Ready for new assignments</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
