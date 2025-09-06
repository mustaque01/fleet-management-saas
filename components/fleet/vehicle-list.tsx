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
        return "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 dark:text-green-400 border-green-500/30"
      case "idle":
        return "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
      case "maintenance":
        return "bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-700 dark:text-red-400 border-red-500/30"
      default:
        return "bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-700 dark:text-gray-400 border-gray-500/30"
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
    <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center justify-between">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-accent to-purple-600 rounded-full animate-pulse"></div>
            Fleet Vehicles ({filteredVehicles.length})
          </span>
          <Button variant="ghost" size="sm" className="hover:bg-accent/10">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className={`space-y-0 ${viewMode === "map" ? "max-h-96 overflow-y-auto" : ""}`}>
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`p-4 border-b border-border/50 last:border-b-0 hover:bg-gradient-to-r hover:from-accent/5 hover:to-purple-600/5 transition-all duration-300 cursor-pointer group ${
                index === 0 ? "bg-gradient-to-r from-accent/10 to-purple-600/10" : ""
              }`}
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Truck className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">{vehicle.id}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(vehicle.status)} shadow-sm`}>{getStatusLabel(vehicle.status)}</Badge>
                </div>

                {/* Driver and Location */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{vehicle.driver}</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{vehicle.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-500/5 transition-colors">
                    <Fuel className="h-3 w-3 text-green-600" />
                    <span className="text-card-foreground font-medium">{vehicle.fuel}%</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-500/5 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse"></div>
                    <span className="text-card-foreground font-medium">{vehicle.speed} mph</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                    <Clock className="h-3 w-3 text-accent" />
                    <span className="text-card-foreground">{vehicle.lastUpdate}</span>
                  </div>
                </div>

                {/* Destination */}
                {vehicle.destination !== "N/A" && (
                  <div className="text-sm p-2 bg-gradient-to-r from-accent/5 to-purple-600/5 rounded-lg border border-accent/10">
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
