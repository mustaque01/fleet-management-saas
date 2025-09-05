"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, MapPin, Clock, Search, Filter } from "lucide-react"

// Mock unassigned packages data
const unassignedPackages = [
  {
    id: "FL789123456",
    sender: "Electronics Hub",
    recipient: "David Brown",
    address: "123 Tech Street, Chicago, IL",
    priority: "high",
    weight: "3.2 kg",
    deadline: "Today, 4:00 PM",
    zone: "North Chicago",
  },
  {
    id: "FL456789123",
    sender: "Fashion Boutique",
    recipient: "Lisa Garcia",
    address: "456 Style Ave, Chicago, IL",
    priority: "medium",
    weight: "1.8 kg",
    deadline: "Tomorrow, 2:00 PM",
    zone: "Downtown",
  },
  {
    id: "FL321654987",
    sender: "Home Goods",
    recipient: "Robert Johnson",
    address: "789 Home Blvd, Chicago, IL",
    priority: "low",
    weight: "5.1 kg",
    deadline: "Tomorrow, 6:00 PM",
    zone: "South Chicago",
  },
  {
    id: "FL654321789",
    sender: "Medical Supply",
    recipient: "Dr. Sarah Wilson",
    address: "321 Health St, Chicago, IL",
    priority: "urgent",
    weight: "0.5 kg",
    deadline: "Today, 1:00 PM",
    zone: "Medical District",
  },
]

export function UnassignedPackages() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackages, setSelectedPackages] = useState<string[]>([])

  const filteredPackages = unassignedPackages.filter(
    (pkg) =>
      pkg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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

  const togglePackageSelection = (packageId: string) => {
    setSelectedPackages((prev) =>
      prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId],
    )
  }

  const handleBulkAssign = () => {
    if (selectedPackages.length > 0) {
      console.log("Bulk assigning packages:", selectedPackages)
      // In a real app, this would open an assignment modal
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground flex items-center space-x-2">
            <Package className="h-5 w-5 text-accent" />
            <span>Unassigned Packages ({filteredPackages.length})</span>
          </CardTitle>
          {selectedPackages.length > 0 && (
            <Button size="sm" onClick={handleBulkAssign} className="bg-accent hover:bg-accent/90">
              Assign ({selectedPackages.length})
            </Button>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-8 text-sm bg-input border-border"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-96 overflow-y-auto">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-4 border-b border-border last:border-b-0 cursor-pointer transition-colors ${
                selectedPackages.includes(pkg.id) ? "bg-accent/5 border-l-4 border-l-accent" : "hover:bg-muted/50"
              }`}
              onClick={() => togglePackageSelection(pkg.id)}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-card-foreground">{pkg.id}</h4>
                    <p className="text-sm text-muted-foreground">{pkg.recipient}</p>
                  </div>
                  <Badge className={getPriorityColor(pkg.priority)}>{pkg.priority}</Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{pkg.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-card-foreground">{pkg.deadline}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Weight: {pkg.weight}</span>
                  <span className="text-muted-foreground">Zone: {pkg.zone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
