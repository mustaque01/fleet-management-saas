import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AssignmentDashboard } from "@/components/assignments/assignment-dashboard"

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      <AssignmentDashboard />
    </DashboardLayout>
  )
}
