import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: "500+",
    label: "Companies Trust Us",
    description: "From startups to enterprises",
  },
  {
    value: "50K+",
    label: "Vehicles Tracked",
    description: "Across 25 countries",
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Reliable 24/7 service",
  },
  {
    value: "30%",
    label: "Cost Reduction",
    description: "Average fuel savings",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of companies that have transformed their logistics operations with FleetFlow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="text-lg font-semibold text-card-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
