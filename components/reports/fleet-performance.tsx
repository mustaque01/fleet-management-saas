"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, TrendingDown, Truck, Clock, MapPin } from "lucide-react"

// Mock performance data
const performanceData = [
  { month: "Jan", deliveries: 420, onTime: 92, efficiency: 87 },
  { month: "Feb", deliveries: 380, onTime: 89, efficiency: 85 },
  { month: "Mar", deliveries: 450, onTime: 94, efficiency: 91 },
  { month: "Apr", deliveries: 520, onTime: 91, efficiency: 88 },
  { month: "May", deliveries: 480, onTime: 96, efficiency: 93 },
  { month: "Jun", deliveries: 550, onTime: 95, efficiency: 92 },
]

const utilizationData = [
  { name: "Active", value: 18, color: "#22c55e" },
  { name: "Idle", value: 4, color: "#f59e0b" },
  { name: "Maintenance", value: 2, color: "#ef4444" },
]

const routeEfficiencyData = [
  { route: "Route A", planned: 45, actual: 42, efficiency: 93 },
  { route: "Route B", planned: 38, actual: 40, efficiency: 95 },
  { route: "Route C", planned: 52, actual: 48, efficiency: 92 },
  { route: "Route D", planned: 35, actual: 33, efficiency: 94 },
  { route: "Route E", planned: 41, actual: 44, efficiency: 93 },
]

export function FleetPerformance() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Delivery Performance Chart */}
      <Card className="bg-card border-border lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <span>Delivery Performance Trends</span>
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
              efficiency: {
                label: "Efficiency %",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="deliveries" stroke="var(--color-deliveries)" name="Deliveries" />
                <Line type="monotone" dataKey="onTime" stroke="var(--color-onTime)" name="On-Time %" />
                <Line type="monotone" dataKey="efficiency" stroke="var(--color-efficiency)" name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Fleet Utilization */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center space-x-2">
            <Truck className="h-5 w-5 text-accent" />
            <span>Fleet Utilization</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ChartContainer
              config={{
                active: { label: "Active", color: "#22c55e" },
                idle: { label: "Idle", color: "#f59e0b" },
                maintenance: { label: "Maintenance", color: "#ef4444" },
              }}
              className="h-48"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={utilizationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {utilizationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="space-y-2">
              {utilizationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-card-foreground">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{item.value} vehicles</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Route Efficiency */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span>Route Efficiency</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              planned: {
                label: "Planned Time",
                color: "hsl(var(--chart-1))",
              },
              actual: {
                label: "Actual Time",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-48"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={routeEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="route" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="planned" fill="var(--color-planned)" name="Planned (min)" />
                <Bar dataKey="actual" fill="var(--color-actual)" name="Actual (min)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card className="bg-card border-border lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-card-foreground">Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Clock className="h-4 w-4 text-green-600" />
                <TrendingUp className="h-3 w-3 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-card-foreground">94.2%</p>
              <p className="text-sm text-muted-foreground">On-Time Delivery</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mt-1">
                +2.1%
              </Badge>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Truck className="h-4 w-4 text-blue-600" />
                <TrendingUp className="h-3 w-3 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-card-foreground">87.3%</p>
              <p className="text-sm text-muted-foreground">Fleet Utilization</p>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mt-1">
                +5.2%
              </Badge>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <MapPin className="h-4 w-4 text-accent" />
                <TrendingUp className="h-3 w-3 text-accent" />
              </div>
              <p className="text-2xl font-bold text-card-foreground">92.8%</p>
              <p className="text-sm text-muted-foreground">Route Efficiency</p>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 mt-1">
                +1.8%
              </Badge>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                <TrendingDown className="h-3 w-3 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-card-foreground">2.1%</p>
              <p className="text-sm text-muted-foreground">Incident Rate</p>
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 mt-1">
                -0.5%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
