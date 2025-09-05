import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Weight, Ruler, User, Truck } from "lucide-react"

interface PackageDetailsProps {
  packageData: {
    id: string
    weight: string
    dimensions: string
    driver: string
    vehicle: string
    sender: string
    recipient: string
  }
}

export function PackageDetails({ packageData }: PackageDetailsProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Package Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Package className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Package ID</p>
              <p className="font-medium text-card-foreground">{packageData.id}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Weight className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="font-medium text-card-foreground">{packageData.weight}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Ruler className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Dimensions</p>
              <p className="font-medium text-card-foreground">{packageData.dimensions}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Driver</p>
              <p className="font-medium text-card-foreground">{packageData.driver}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Truck className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Vehicle</p>
              <p className="font-medium text-card-foreground">{packageData.vehicle}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <h4 className="font-medium text-card-foreground mb-2">Delivery Instructions</h4>
          <p className="text-sm text-muted-foreground">
            Please deliver to the front door. If no one is available, leave with building concierge.
          </p>
        </div>

        <div className="pt-4 border-t border-border">
          <h4 className="font-medium text-card-foreground mb-2">Contact Support</h4>
          <p className="text-sm text-muted-foreground">
            Need help with your delivery? Contact our support team at{" "}
            <a href="tel:+1-800-FLEET" className="text-accent hover:text-accent/80">
              1-800-FLEET
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
