import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { History, Package, User, Clock, CheckCircle, XCircle } from "lucide-react"

// Mock assignment history data
const assignmentHistory = [
  {
    id: "assign-001",
    timestamp: "2024-01-15 14:30",
    action: "Package Assigned",
    packageId: "FL123456789",
    driver: "John Smith",
    vehicle: "FL-001",
    status: "completed",
    completedAt: "2024-01-15 16:45",
  },
  {
    id: "assign-002",
    timestamp: "2024-01-15 13:15",
    action: "Route Optimized",
    packageId: "Multiple (5 packages)",
    driver: "Sarah Johnson",
    vehicle: "FL-002",
    status: "active",
    completedAt: null,
  },
  {
    id: "assign-003",
    timestamp: "2024-01-15 12:00",
    action: "Package Reassigned",
    packageId: "FL987654321",
    driver: "Mike Wilson → Emma Davis",
    vehicle: "FL-003 → FL-004",
    status: "completed",
    completedAt: "2024-01-15 12:30",
  },
  {
    id: "assign-004",
    timestamp: "2024-01-15 10:45",
    action: "Bulk Assignment",
    packageId: "Multiple (8 packages)",
    driver: "Multiple Drivers",
    vehicle: "Multiple Vehicles",
    status: "completed",
    completedAt: "2024-01-15 11:00",
  },
  {
    id: "assign-005",
    timestamp: "2024-01-15 09:30",
    action: "Assignment Cancelled",
    packageId: "FL456789123",
    driver: "Alex Brown",
    vehicle: "FL-005",
    status: "cancelled",
    completedAt: "2024-01-15 09:35",
  },
]

export function AssignmentHistory() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "active":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle
      case "active":
        return Clock
      case "cancelled":
        return XCircle
      default:
        return Clock
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center space-x-2">
          <History className="h-5 w-5 text-accent" />
          <span>Assignment History</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignmentHistory.map((item) => {
            const StatusIcon = getStatusIcon(item.status)
            return (
              <div
                key={item.id}
                className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 bg-accent/10 rounded-lg">
                  <StatusIcon className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-card-foreground">{item.action}</h4>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Package className="h-3 w-3 text-muted-foreground" />
                      <span className="text-card-foreground">{item.packageId}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-card-foreground">{item.driver}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{item.timestamp}</span>
                    </div>
                  </div>
                  {item.completedAt && <p className="text-xs text-muted-foreground">Completed: {item.completedAt}</p>}
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
