"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Clock, Fuel, User, MoreHorizontal } from "lucide-react"

// Mock vehicle data
const vehicles = [
  {
    id: "FL-001",
    driver: "John Smith",
    status: "on-route",
    location: "Downtown District",
    destination: "Warehouse A",
    fuel: 85,
    speed: 45,
    lastUpdate: "2 min ago",
    type: "Delivery Van",
  },
  {
    id: "FL-002",
    driver: "Sarah Johnson",
    status: "idle",
    location: "Parking Lot B",
    destination: "N/A",
    fuel: 92,
    speed: 0,
    lastUpdate: "15 min ago",
    type: "Truck",
  },
  {
    id: "FL-003",
    driver: "Mike Wilson",
    status: "on-route",
    location: "Highway 101",
    destination: "Customer Site C",
    fuel: 67,
    speed: 62,
    lastUpdate: "1 min ago",
    type: "Delivery Van",
  },
  {
    id: "FL-004",
    driver: "Emma Davis",
    status: "maintenance",
    location: "Service Center",
    destination: "N/A",
    fuel: 45,
    speed: 0,
    lastUpdate: "2 hours ago",
    type: "Truck",
  },
  {
    id: "FL-005",
    driver: "Alex Brown",
    status: "on-route",
    location: "Industrial Zone",
    destination: "Distribution Hub",
    fuel: 78,
    speed: 38,
    lastUpdate: "5 min ago",
    type: "Cargo Van",
  },
]

interface VehicleListProps {
  searchQuery: string
  filters: {
    status: string
    type: string
    location: string
  }
  viewMode: "list" | "map"
}

export function VehicleList({ searchQuery, filters, viewMode }: VehicleListProps) {
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filters.status === "all" || vehicle.status === filters.status
    const matchesType = filters.type === "all" || vehicle.type === filters.type

    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-route":
        return "bg-green-100 text-green-800 border-green-200"
      case "idle":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "maintenance":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "on-route":
        return "On Route"
      case "idle":
        return "Idle"
      case "maintenance":
        return "Maintenance"
      default:
        return status
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center justify-between">
          <span>Fleet Vehicles ({filteredVehicles.length})</span>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className={`space-y-0 ${viewMode === "map" ? "max-h-96 overflow-y-auto" : ""}`}>
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors cursor-pointer ${
                index === 0 ? "bg-accent/5" : ""
              }`}
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Truck className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{vehicle.id}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(vehicle.status)}>{getStatusLabel(vehicle.status)}</Badge>
                </div>

                {/* Driver and Location */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{vehicle.driver}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{vehicle.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{vehicle.fuel}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-card-foreground">{vehicle.speed} mph</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{vehicle.lastUpdate}</span>
                  </div>
                </div>

                {/* Destination */}
                {vehicle.destination !== "N/A" && (
                  <div className="text-sm">
                    <span className="text-muted-foreground">Destination: </span>
                    <span className="text-card-foreground font-medium">{vehicle.destination}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
