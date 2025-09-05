import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = ["Free 14-day trial", "No setup fees", "Cancel anytime", "24/7 support included"]

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Card className="bg-card border-border shadow-xl">
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
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
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
