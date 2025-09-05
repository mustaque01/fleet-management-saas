import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, MapPin, AlertTriangle } from "lucide-react"

const stats = [
  {
    title: "Total Vehicles",
    value: "24",
    change: "+2 from last month",
    icon: Truck,
    color: "text-blue-600",
  },
  {
    title: "Active Deliveries",
    value: "156",
    change: "+12% from yesterday",
    icon: Package,
    color: "text-green-600",
  },
  {
    title: "On Route",
    value: "18",
    change: "3 delayed",
    icon: MapPin,
    color: "text-accent",
  },
  {
    title: "Alerts",
    value: "3",
    change: "2 maintenance due",
    icon: AlertTriangle,
    color: "text-orange-600",
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your fleet.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-card-foreground">Vehicle FL-001 completed delivery</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-card-foreground">New package assigned to FL-003</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-card-foreground">Maintenance alert for FL-007</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <Package className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-medium text-card-foreground">Add Package</p>
              </button>
              <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <Truck className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-medium text-card-foreground">Add Vehicle</p>
              </button>
              <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <MapPin className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-medium text-card-foreground">Track Fleet</p>
              </button>
              <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <AlertTriangle className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-medium text-card-foreground">View Alerts</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
