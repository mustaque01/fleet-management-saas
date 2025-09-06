import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, BarChart3, Shield, Smartphone, Clock, Users } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Monitor your entire fleet with GPS tracking and live location updates.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get insights into fuel consumption, driver performance, and route optimization.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with SOC 2 compliance and data encryption.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage your fleet on-the-go with our iOS and Android applications.",
  },
  {
    icon: Clock,
    title: "Route Optimization",
    description: "AI-powered routing to reduce fuel costs and improve delivery times.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Assign drivers, manage schedules, and track performance metrics.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent/20 via-transparent to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Everything You Need to Manage Your Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive tools and features designed to streamline your logistics operations and maximize efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:scale-[1.02] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-xl group-hover:from-accent/20 group-hover:to-purple-600/20 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
