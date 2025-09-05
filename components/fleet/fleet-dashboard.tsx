"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { VehicleList } from "./vehicle-list"
import { FleetMap } from "./fleet-map"
import { VehicleFilters } from "./vehicle-filters"
import { Search, MapPin, List, Plus } from "lucide-react"

export function FleetDashboard() {
  const [viewMode, setViewMode] = useState<"list" | "map">("map")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    status: "all",
    type: "all",
    location: "all",
  })

  const fleetStats = [
    { label: "Total Vehicles", value: "24", status: "active" },
    { label: "On Route", value: "18", status: "success" },
    { label: "Idle", value: "4", status: "warning" },
    { label: "Maintenance", value: "2", status: "error" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Fleet Management</h1>
          <p className="text-muted-foreground">Monitor and manage your vehicle fleet in real-time</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      {/* Fleet Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {fleetStats.map((stat, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                </div>
                <Badge
                  variant={
                    stat.status === "success"
                      ? "default"
                      : stat.status === "warning"
                        ? "secondary"
                        : stat.status === "error"
                          ? "destructive"
                          : "outline"
                  }
                  className={
                    stat.status === "success"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : stat.status === "active"
                        ? "bg-blue-100 text-blue-800 border-blue-200"
                        : ""
                  }
                >
                  {stat.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex items-center space-x-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search vehicles by ID, driver, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>
          <VehicleFilters filters={selectedFilters} onFiltersChange={setSelectedFilters} />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-accent hover:bg-accent/90" : ""}
          >
            <List className="mr-2 h-4 w-4" />
            List View
          </Button>
          <Button
            variant={viewMode === "map" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("map")}
            className={viewMode === "map" ? "bg-accent hover:bg-accent/90" : ""}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Map View
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Vehicle List - Always visible on desktop, conditional on mobile */}
        <div className={`${viewMode === "map" ? "lg:col-span-1" : "lg:col-span-3"}`}>
          <VehicleList searchQuery={searchQuery} filters={selectedFilters} viewMode={viewMode} />
        </div>

        {/* Map - Only visible in map view */}
        {viewMode === "map" && (
          <div className="lg:col-span-2">
            <FleetMap />
          </div>
        )}
      </div>
    </div>
  )
}
