"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Maximize2, Layers, Navigation } from "lucide-react"

export function FleetMap() {
  // Mock map data - in a real app, this would integrate with Google Maps/Mapbox
  const mapMarkers = [
    { id: "FL-001", lat: 40.7128, lng: -74.006, status: "on-route", driver: "John Smith" },
    { id: "FL-002", lat: 40.7589, lng: -73.9851, status: "idle", driver: "Sarah Johnson" },
    { id: "FL-003", lat: 40.6892, lng: -74.0445, status: "on-route", driver: "Mike Wilson" },
    { id: "FL-004", lat: 40.7505, lng: -73.9934, status: "maintenance", driver: "Emma Davis" },
    { id: "FL-005", lat: 40.7282, lng: -73.7949, status: "on-route", driver: "Alex Brown" },
  ]

  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Live Fleet Map</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Layers className="mr-2 h-3 w-3" />
              Layers
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          {/* Map Container - Placeholder */}
          <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden rounded-b-lg">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Mock Roads */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d="M 50 150 Q 200 100 350 150"
                stroke="#6b7280"
                strokeWidth="3"
                fill="none"
                className="opacity-60"
              />
              <path
                d="M 200 50 Q 200 150 200 250"
                stroke="#6b7280"
                strokeWidth="3"
                fill="none"
                className="opacity-60"
              />
              <path
                d="M 100 200 Q 250 180 350 200"
                stroke="#6b7280"
                strokeWidth="3"
                fill="none"
                className="opacity-60"
              />
            </svg>

            {/* Vehicle Markers */}
            {mapMarkers.map((marker, index) => (
              <div
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${30 + index * 10}%`,
                }}
              >
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                      marker.status === "on-route"
                        ? "bg-green-500"
                        : marker.status === "idle"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current"></div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 min-w-32 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="text-xs space-y-1">
                      <div className="font-semibold text-gray-900">{marker.id}</div>
                      <div className="text-gray-600">{marker.driver}</div>
                      <Badge
                        className={`text-xs ${
                          marker.status === "on-route"
                            ? "bg-green-100 text-green-800"
                            : marker.status === "idle"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {marker.status}
                      </Badge>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur">
                <Navigation className="h-3 w-3" />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 space-y-2">
              <div className="text-xs font-semibold text-gray-900">Vehicle Status</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">On Route</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Idle</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
