"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Route, Clock, Fuel, Zap, Settings } from "lucide-react"

// Mock route optimization data
const optimizationResults = [
  {
    id: "route-1",
    driver: "John Smith",
    vehicle: "FL-001",
    packages: 5,
    originalDistance: "18.5 km",
    optimizedDistance: "14.2 km",
    timeSaved: "25 min",
    fuelSaved: "2.3L",
    efficiency: 92,
    stops: [
      { address: "123 Main St", time: "9:00 AM", priority: "high" },
      { address: "456 Oak Ave", time: "9:30 AM", priority: "medium" },
      { address: "789 Pine St", time: "10:15 AM", priority: "high" },
      { address: "321 Elm Dr", time: "11:00 AM", priority: "low" },
      { address: "654 Maple Ln", time: "11:45 AM", priority: "medium" },
    ],
  },
  {
    id: "route-2",
    driver: "Sarah Johnson",
    vehicle: "FL-002",
    packages: 3,
    originalDistance: "12.8 km",
    optimizedDistance: "10.5 km",
    timeSaved: "18 min",
    fuelSaved: "1.8L",
    efficiency: 88,
    stops: [
      { address: "111 First St", time: "9:15 AM", priority: "urgent" },
      { address: "222 Second Ave", time: "10:00 AM", priority: "high" },
      { address: "333 Third Blvd", time: "10:45 AM", priority: "medium" },
    ],
  },
]

export function RouteOptimizer() {
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null)

  const handleOptimize = async () => {
    setIsOptimizing(true)
    // Simulate optimization process
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsOptimizing(false)
  }

  const handleApplyRoute = (routeId: string) => {
    console.log("Applying optimized route:", routeId)
    // In a real app, this would apply the route to the driver
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Optimization Controls */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center space-x-2">
            <Route className="h-5 w-5 text-accent" />
            <span>Route Optimization</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Optimize delivery routes to reduce travel time, fuel consumption, and improve efficiency.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 text-blue-500" />
                  <span className="text-muted-foreground">Time optimization</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Fuel className="h-3 w-3 text-green-500" />
                  <span className="text-muted-foreground">Fuel efficiency</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-accent" />
                  <span className="text-muted-foreground">Priority-based routing</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-3 w-3" />
                Settings
              </Button>
              <Button onClick={handleOptimize} disabled={isOptimizing} className="bg-accent hover:bg-accent/90">
                {isOptimizing ? "Optimizing..." : "Optimize Routes"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Results */}
      <div className="grid lg:grid-cols-2 gap-6">
        {optimizationResults.map((route) => (
          <Card
            key={route.id}
            className={`bg-card border-border transition-colors ${
              selectedRoute === route.id ? "ring-2 ring-accent" : "hover:bg-muted/50"
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-card-foreground">
                  {route.driver} ({route.vehicle})
                </CardTitle>
                <Badge className="bg-green-100 text-green-800 border-green-200">{route.efficiency}% Efficient</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Optimization Metrics */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <p className="text-sm font-medium text-card-foreground">
                      <span className="line-through text-muted-foreground">{route.originalDistance}</span>
                      {" → "}
                      <span className="text-green-600">{route.optimizedDistance}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Time Saved</p>
                    <p className="text-sm font-medium text-green-600">{route.timeSaved}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Packages</p>
                    <p className="text-sm font-medium text-card-foreground">{route.packages} stops</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Fuel Saved</p>
                    <p className="text-sm font-medium text-green-600">{route.fuelSaved}</p>
                  </div>
                </div>
              </div>

              {/* Route Stops */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-card-foreground">Optimized Route</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {route.stops.map((stop, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-background rounded border border-border"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-card-foreground">{stop.address}</p>
                          <p className="text-xs text-muted-foreground">ETA: {stop.time}</p>
                        </div>
                      </div>
                      <Badge className={getPriorityColor(stop.priority)} variant="outline">
                        {stop.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}
                >
                  {selectedRoute === route.id ? "Collapse" : "View Details"}
                </Button>
                <Button size="sm" onClick={() => handleApplyRoute(route.id)} className="bg-accent hover:bg-accent/90">
                  Apply Route
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
