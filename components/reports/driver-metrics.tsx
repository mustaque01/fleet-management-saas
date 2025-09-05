"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, Star, Clock, AlertTriangle, Award } from "lucide-react"

// Mock driver performance data
const driverPerformanceData = [
  { name: "John Smith", deliveries: 145, onTime: 96, rating: 4.8, incidents: 0 },
  { name: "Sarah Johnson", deliveries: 132, onTime: 94, rating: 4.7, incidents: 1 },
  { name: "Mike Wilson", deliveries: 128, onTime: 92, rating: 4.6, incidents: 0 },
  { name: "Emma Davis", deliveries: 118, onTime: 89, rating: 4.5, incidents: 2 },
  { name: "Alex Brown", deliveries: 125, onTime: 91, rating: 4.4, incidents: 1 },
]

const driverRankings = [
  {
    rank: 1,
    name: "John Smith",
    score: 96.2,
    deliveries: 145,
    onTimeRate: 96,
    customerRating: 4.8,
    badge: "Top Performer",
  },
  {
    rank: 2,
    name: "Sarah Johnson",
    score: 94.1,
    deliveries: 132,
    onTimeRate: 94,
    customerRating: 4.7,
    badge: "Excellent",
  },
  {
    rank: 3,
    name: "Mike Wilson",
    score: 92.8,
    deliveries: 128,
    onTimeRate: 92,
    customerRating: 4.6,
    badge: "Great",
  },
  {
    rank: 4,
    name: "Alex Brown",
    score: 91.5,
    deliveries: 125,
    onTimeRate: 91,
    customerRating: 4.4,
    badge: "Good",
  },
  {
    rank: 5,
    name: "Emma Davis",
    score: 89.2,
    deliveries: 118,
    onTimeRate: 89,
    customerRating: 4.5,
    badge: "Improving",
  },
]

export function DriverMetrics() {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Top Performer":
        return "bg-green-100 text-green-800 border-green-200"
      case "Excellent":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Great":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Good":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Improving":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Driver Performance Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Drivers</p>
                <p className="text-2xl font-bold text-card-foreground">24</p>
                <p className="text-xs text-muted-foreground">+2 this month</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold text-card-foreground">4.6</p>
                <p className="text-xs text-muted-foreground">+0.2 this month</p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-4 w-4 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">On-Time Rate</p>
                <p className="text-2xl font-bold text-card-foreground">92.4%</p>
                <p className="text-xs text-muted-foreground">+1.8% this month</p>
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
                <p className="text-sm text-muted-foreground">Incidents</p>
                <p className="text-2xl font-bold text-card-foreground">4</p>
                <p className="text-xs text-muted-foreground">-2 this month</p>
              </div>
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Driver Performance Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent" />
              <span>Driver Performance Comparison</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                deliveries: {
                  label: "Deliveries",
                  color: "hsl(var(--chart-1))",
                },
                onTime: {
                  label: "On-Time %",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={driverPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="deliveries" fill="var(--color-deliveries)" name="Deliveries" />
                  <Bar dataKey="onTime" fill="var(--color-onTime)" name="On-Time %" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <span>Driver Rankings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {driverRankings.map((driver) => (
                <div key={driver.rank} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                      {driver.rank}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-accent/10 text-accent text-xs">
                        {driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-card-foreground">{driver.name}</p>
                      <p className="text-xs text-muted-foreground">Score: {driver.score}</p>
                    </div>
                  </div>
                  <Badge className={getBadgeColor(driver.badge)}>{driver.badge}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Driver Metrics */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Detailed Driver Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Driver</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Deliveries</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">On-Time Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Customer Rating</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Incidents</th>
                  <th className="text-left py-3 px-4 font-medium text-card-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {driverPerformanceData.map((driver, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="bg-accent/10 text-accent text-xs">
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-card-foreground">{driver.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-card-foreground">{driver.deliveries}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="outline"
                        className={
                          driver.onTime >= 95
                            ? "bg-green-50 text-green-700 border-green-200"
                            : driver.onTime >= 90
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-red-50 text-red-700 border-red-200"
                        }
                      >
                        {driver.onTime}%
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-card-foreground">{driver.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="outline"
                        className={
                          driver.incidents === 0
                            ? "bg-green-50 text-green-700 border-green-200"
                            : driver.incidents <= 1
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-red-50 text-red-700 border-red-200"
                        }
                      >
                        {driver.incidents}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Active
                      </Badge>
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
