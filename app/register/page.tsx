import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
  return (
    <>
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <Truck className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-foreground">FleetFlow</span>
            </Link>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
              <p className="text-muted-foreground">Start managing your fleet in minutes</p>
            </div>
          </div>

          {/* Register Form Card */}
          <Card className="bg-card border-border shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl text-card-foreground">Sign up</CardTitle>
              <CardDescription>Create your account to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>

          {/* Sign in link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-accent hover:text-accent/80 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
