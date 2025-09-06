import { Truck } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold text-foreground">FleetFlow</span>
          </Link>
          <Link href="/login" className="text-accent hover:text-accent/80">
            Back to App
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: September 6, 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using FleetFlow ("the Service"), you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                FleetFlow is a Software as a Service (SaaS) platform that provides fleet management solutions including 
                vehicle tracking, route optimization, driver management, and analytics for businesses managing vehicle fleets.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access our service, you must create an account. You are responsible for maintaining the confidentiality 
                of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Data Privacy and Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take data privacy and security seriously. Your data is encrypted and stored securely. We will not 
                share your data with third parties without your explicit consent, except as required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as 
                required by law. We reserve the right to change pricing with 30 days notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                FleetFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@fleetflow.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
