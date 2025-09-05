import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { FleetDashboard } from "@/components/fleet/fleet-dashboard"

export default function FleetPage() {
  return (
    <DashboardLayout>
      <FleetDashboard />
    </DashboardLayout>
  )
}
