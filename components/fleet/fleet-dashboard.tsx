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
    <div className="space-y-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Fleet Management
            </h1>
            <p className="text-muted-foreground mt-2">Monitor and manage your vehicle fleet in real-time</p>
          </div>
          <Button className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Plus className="mr-2 h-4 w-4" />
            Add Vehicle
          </Button>
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {fleetStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">{stat.label}</p>
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
                    className={`transition-all duration-300 ${
                      stat.status === "success"
                        ? "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 dark:text-green-400 border-green-500/30"
                        : stat.status === "active"
                          ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-700 dark:text-blue-400 border-blue-500/30"
                          : stat.status === "warning"
                            ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-700 dark:text-orange-400 border-orange-500/30"
                            : "bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-700 dark:text-red-400 border-red-500/30"
                    }`}
                  >
                    {stat.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between p-4 bg-gradient-to-r from-card/30 to-card/20 backdrop-blur-sm rounded-xl border border-border/50">
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search vehicles by ID, driver, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input/50 backdrop-blur-sm border-border/50 focus:bg-input/80 transition-all duration-300 hover:border-accent/50"
              />
            </div>
            <VehicleFilters filters={selectedFilters} onFiltersChange={setSelectedFilters} />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`transition-all duration-300 ${
                viewMode === "list" 
                  ? "bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 shadow-md" 
                  : "hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-600/10 hover:scale-105"
              }`}
            >
              <List className="mr-2 h-4 w-4" />
              List View
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className={`transition-all duration-300 ${
                viewMode === "map" 
                  ? "bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 shadow-md" 
                  : "hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-600/10 hover:scale-105"
              }`}
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
    </div>
  )
}
