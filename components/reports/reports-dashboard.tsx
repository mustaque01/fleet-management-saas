"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FleetPerformance } from "./fleet-performance"
import { CostAnalysis } from "./cost-analysis"
import { DriverMetrics } from "./driver-metrics"
import { TripReports } from "./trip-reports"
import { BarChart3, Download, Calendar, Filter, TrendingUp, DollarSign, Users, Route } from "lucide-react"

export function ReportsDashboard() {
  const [selectedView, setSelectedView] = useState<"performance" | "costs" | "drivers" | "trips">("performance")
  const [dateRange, setDateRange] = useState("last-30-days")

  const kpiMetrics = [
    {
      title: "Total Revenue",
      value: "$124,580",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Fleet Utilization",
      value: "87.3%",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Active Drivers",
      value: "24",
      change: "+2 this month",
      trend: "up",
      icon: Users,
      color: "text-accent",
    },
    {
      title: "Completed Trips",
      value: "1,247",
      change: "+8.7%",
      trend: "up",
      icon: Route,
      color: "text-purple-600",
    },
  ]

  const handleExport = () => {
    console.log("Exporting reports...")
    // In a real app, this would generate and download reports
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights into your fleet operations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button onClick={handleExport} className="bg-accent hover:bg-accent/90">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiMetrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold text-card-foreground">{metric.value}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {metric.change}
                    </Badge>
                  </div>
                </div>
                <div className="p-2 bg-accent/10 rounded-lg">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Tabs */}
      <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button
          variant={selectedView === "performance" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("performance")}
          className={selectedView === "performance" ? "bg-background shadow-sm" : ""}
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Performance
        </Button>
        <Button
          variant={selectedView === "costs" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("costs")}
          className={selectedView === "costs" ? "bg-background shadow-sm" : ""}
        >
          <DollarSign className="mr-2 h-4 w-4" />
          Costs
        </Button>
        <Button
          variant={selectedView === "drivers" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("drivers")}
          className={selectedView === "drivers" ? "bg-background shadow-sm" : ""}
        >
          <Users className="mr-2 h-4 w-4" />
          Drivers
        </Button>
        <Button
          variant={selectedView === "trips" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("trips")}
          className={selectedView === "trips" ? "bg-background shadow-sm" : ""}
        >
          <Route className="mr-2 h-4 w-4" />
          Trips
        </Button>
      </div>

      {/* Report Content */}
      {selectedView === "performance" && <FleetPerformance />}
      {selectedView === "costs" && <CostAnalysis />}
      {selectedView === "drivers" && <DriverMetrics />}
      {selectedView === "trips" && <TripReports />}
    </div>
  )
}
