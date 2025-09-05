"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Route, MapPin, Clock, Package, Filter, Download } from "lucide-react"

// Mock trip data
const recentTrips = [
  {
    id: "TRP-001",
    driver: "John Smith",
    vehicle: "FL-001",
    route: "Downtown Circuit",
    startTime: "08:30 AM",
    endTime: "12:45 PM",
    duration: "4h 15m",
    distance: "45.2 km",
    packages: 8,
    status: "completed",
    efficiency: 94,
  },
  {
    id: "TRP-002",
    driver: "Sarah Johnson",
    vehicle: "FL-002",
    route: "Industrial Zone",
    startTime: "09:00 AM",
    endTime: "01:30 PM",
    duration: "4h 30m",
    distance: "52.1 km",
    packages: 6,
    status: "completed",
    efficiency: 91,
  },
  {
    id: "TRP-003",
    driver: "Mike Wilson",
    vehicle: "FL-003",
    route: "Suburban Loop",
    startTime: "10:15 AM",
    endTime: "In Progress",
    duration: "2h 45m",
    distance: "28.7 km",
    packages: 5,
    status: "in-progress",
    efficiency: 88,
  },
  {
    id: "TRP-004",
    driver: "Emma Davis",
    vehicle: "FL-004",
    route: "Express Route",
    startTime: "07:45 AM",
    endTime: "11:20 AM",
    duration: "3h 35m",
    distance: "38.9 km",
    packages: 4,
    status: "completed",
    efficiency: 96,
  },
  {
    id: "TRP-005",
    driver: "Alex Brown",
    vehicle: "FL-005",
    route: "City Center",
    startTime: "11:30 AM",
    endTime: "Scheduled",
    duration: "Est. 3h 20m",
    distance: "Est. 35.5 km",
    packages: 7,
    status: "scheduled",
    efficiency: 0,
  },
]

const tripSummary = {
  totalTrips: 247,
  completedTrips: 231,
  inProgressTrips: 8,
  scheduledTrips: 8,
  avgDuration: "3h 45m",
  avgDistance: "42.3 km",
  avgEfficiency: 92.4,
  totalPackages: 1456,
}

export function TripReports() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "scheduled":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 95) return "text-green-600"
    if (efficiency >= 90) return "text-blue-600"
    if (efficiency >= 85) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Trip Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Trips</p>
                <p className="text-2xl font-bold text-card-foreground">{tripSummary.totalTrips}</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Route className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Duration</p>
                <p className="text-2xl font-bold text-card-foreground">{tripSummary.avgDuration}</p>
                <p className="text-xs text-muted-foreground">Per trip</p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Distance</p>
                <p className="text-2xl font-bold text-card-foreground">{tripSummary.avgDistance}</p>
                <p className="text-xs text-muted-foreground">Per trip</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-4 w-4 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Efficiency</p>
                <p className="text-2xl font-bold text-card-foreground">{tripSummary.avgEfficiency}%</p>
                <p className="text-xs text-muted-foreground">Average</p>
              </div>
              <div className="p-2 bg-accent/10 rounded-lg">
                <Package className="h-4 w-4 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trip Status Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{tripSummary.completedTrips}</div>
            <p className="text-sm text-muted-foreground">Completed Trips</p>
            <Badge className="bg-green-100 text-green-800 border-green-200 mt-2">
              {Math.round((tripSummary.completedTrips / tripSummary.totalTrips) * 100)}%
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{tripSummary.inProgressTrips}</div>
            <p className="text-sm text-muted-foreground">In Progress</p>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mt-2">
              {Math.round((tripSummary.inProgressTrips / tripSummary.totalTrips) * 100)}%
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-1">{tripSummary.scheduledTrips}</div>
            <p className="text-sm text-muted-foreground">Scheduled</p>
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 mt-2">
              {Math.round((tripSummary.scheduledTrips / tripSummary.totalTrips) * 100)}%
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Recent Trips Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-card-foreground flex items-center space-x-2">
              <Route className="h-5 w-5 text-accent" />
              <span>Recent Trips</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-3 w-3" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-3 w-3" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Trip ID</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Driver</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Route</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Duration</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Distance</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Packages</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Efficiency</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTrips.map((trip) => (
                  <tr key={trip.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium text-card-foreground">{trip.id}</td>
                    <td className="py-3 px-4 text-card-foreground">{trip.driver}</td>
                    <td className="py-3 px-4 text-card-foreground">{trip.route}</td>
                    <td className="py-3 px-4 text-card-foreground">{trip.duration}</td>
                    <td className="py-3 px-4 text-card-foreground">{trip.distance}</td>
                    <td className="py-3 px-4 text-card-foreground">{trip.packages}</td>
                    <td className="py-3 px-4">
                      {trip.efficiency > 0 ? (
                        <span className={`font-medium ${getEfficiencyColor(trip.efficiency)}`}>{trip.efficiency}%</span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(trip.status)}>{trip.status.replace("-", " ")}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
