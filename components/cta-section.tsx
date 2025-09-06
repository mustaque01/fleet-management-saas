import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const benefits = ["Free 14-day trial", "No setup fees", "Cancel anytime", "24/7 support included"]

export function CTASection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-accent/5 to-purple-500/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-card-foreground lg:text-4xl text-balance">
                  Ready to Transform Your Fleet Management?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Join thousands of companies that have streamlined their logistics operations. Start your free trial
                  today and see the difference.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 hover:bg-accent/5 hover:border-accent/50 transition-all duration-300">
                  Schedule Demo
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">No credit card required • Setup in under 5 minutes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
