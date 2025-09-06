import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function DriversPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Driver Management</h1>
          <p className="text-muted-foreground">Manage your drivers, schedules, and performance metrics</p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-card-foreground mb-2">Driver Management Coming Soon</h2>
          <p className="text-muted-foreground">
            This section will include driver profiles, scheduling, performance tracking, and more.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
