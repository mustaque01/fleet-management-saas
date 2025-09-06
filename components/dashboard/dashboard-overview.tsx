import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, MapPin, AlertTriangle } from "lucide-react"

const stats = [
  {
    title: "Total Vehicles",
    value: "24",
    change: "+2 from last month",
    icon: Truck,
    gradient: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Deliveries",
    value: "156",
    change: "+12% from yesterday",
    icon: Package,
    gradient: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-600",
  },
  {
    title: "On Route",
    value: "18",
    change: "3 delayed",
    icon: MapPin,
    gradient: "from-accent/20 to-purple-600/20",
    iconColor: "text-accent",
  },
  {
    title: "Alerts",
    value: "3",
    change: "2 maintenance due",
    icon: AlertTriangle,
    gradient: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-600",
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your fleet.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-accent to-purple-600 rounded-full animate-pulse"></div>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-card-foreground font-medium">Vehicle FL-001 completed delivery</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-card-foreground font-medium">New package assigned to FL-003</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-card-foreground font-medium">Maintenance alert for FL-007</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-border/50 rounded-lg hover:bg-gradient-to-br hover:from-accent/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 group">
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg w-fit mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Add Package</p>
              </button>
              <button className="p-4 border border-border/50 rounded-lg hover:bg-gradient-to-br hover:from-accent/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 group">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg w-fit mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Add Vehicle</p>
              </button>
              <button className="p-4 border border-border/50 rounded-lg hover:bg-gradient-to-br hover:from-accent/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 group">
                <div className="p-2 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-lg w-fit mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Track Fleet</p>
              </button>
              <button className="p-4 border border-border/50 rounded-lg hover:bg-gradient-to-br hover:from-accent/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 group">
                <div className="p-2 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg w-fit mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-card-foreground">View Alerts</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
