"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UnassignedPackages } from "./unassigned-packages"
import { DriverAssignments } from "./driver-assignments"
import { RouteOptimizer } from "./route-optimizer"
import { AssignmentHistory } from "./assignment-history"
import { Package, Users, Truck, Route, Plus, RefreshCw } from "lucide-react"

export function AssignmentDashboard() {
  const [selectedView, setSelectedView] = useState<"assignments" | "optimizer" | "history">("assignments")
  const [refreshKey, setRefreshKey] = useState(0)

  const stats = [
    {
      title: "Unassigned Packages",
      value: "12",
      change: "+3 new today",
      icon: Package,
      color: "text-orange-600",
    },
    {
      title: "Available Drivers",
      value: "8",
      change: "2 on break",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Active Vehicles",
      value: "18",
      change: "2 in maintenance",
      icon: Truck,
      color: "text-blue-600",
    },
    {
      title: "Routes Today",
      value: "24",
      change: "6 completed",
      icon: Route,
      color: "text-accent",
    },
  ]

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Delivery Assignments</h1>
          <p className="text-muted-foreground">Assign packages to drivers and optimize delivery routes</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleRefresh}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="mr-2 h-4 w-4" />
            New Assignment
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className="p-2 bg-accent/10 rounded-lg">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View Tabs */}
      <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button
          variant={selectedView === "assignments" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("assignments")}
          className={selectedView === "assignments" ? "bg-background shadow-sm" : ""}
        >
          Assignments
        </Button>
        <Button
          variant={selectedView === "optimizer" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("optimizer")}
          className={selectedView === "optimizer" ? "bg-background shadow-sm" : ""}
        >
          Route Optimizer
        </Button>
        <Button
          variant={selectedView === "history" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedView("history")}
          className={selectedView === "history" ? "bg-background shadow-sm" : ""}
        >
          History
        </Button>
      </div>

      {/* Main Content */}
      {selectedView === "assignments" && (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UnassignedPackages key={refreshKey} />
          </div>
          <div className="lg:col-span-2">
            <DriverAssignments key={refreshKey} />
          </div>
        </div>
      )}

      {selectedView === "optimizer" && <RouteOptimizer />}
      {selectedView === "history" && <AssignmentHistory />}
    </div>
  )
}
