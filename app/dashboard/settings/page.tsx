import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-card-foreground mb-2">Settings Panel Coming Soon</h2>
          <p className="text-muted-foreground">
            This section will include account settings, notifications, integrations, and more.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
