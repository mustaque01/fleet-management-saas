import { PackageTracker } from "@/components/tracking/package-tracker"
import { Footer } from "@/components/footer"

export default function TrackPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <PackageTracker />
      </div>
      <Footer />
    </>
  )
}
