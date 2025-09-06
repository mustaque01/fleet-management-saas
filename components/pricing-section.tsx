import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small fleets",
    badge: null,
    features: [
      "Up to 5 vehicles",
      "Real-time tracking",
      "Basic reports",
      "Mobile app access",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    description: "Ideal for growing businesses",
    badge: "Most Popular",
    features: [
      "Up to 25 vehicles",
      "Advanced analytics",
      "Route optimization",
      "Driver management",
      "API access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    badge: null,
    features: [
      "Unlimited vehicles",
      "Custom integrations",
      "Advanced security",
      "Dedicated support",
      "Custom reporting",
      "SLA guarantee",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the plan that fits your fleet size. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-border/50 relative transition-all duration-500 hover:shadow-xl ${
                plan.badge 
                  ? "ring-2 ring-accent/50 shadow-2xl shadow-accent/10 scale-105 hover:scale-110" 
                  : "hover:shadow-accent/5 hover:scale-[1.02]"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-purple-600 text-white shadow-lg">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-xl text-card-foreground">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className={`text-4xl font-bold ${plan.badge ? 'bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent' : 'text-card-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="block">
                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.badge
                        ? "bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl"
                        : "bg-transparent border-2 border-border hover:bg-accent/5 hover:border-accent/50"
                    }`}
                    variant={plan.badge ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
