import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function LoginPage() {
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
              <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
              <p className="text-muted-foreground">Sign in to your fleet management dashboard</p>
            </div>
          </div>

          {/* Login Form Card */}
          <Card className="bg-card border-border shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl text-card-foreground">Sign in</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-accent hover:text-accent/80 font-medium">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
