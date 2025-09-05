"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DollarSign, Fuel, Wrench, TrendingUp, TrendingDown } from "lucide-react"

// Mock cost data
const costTrendsData = [
  { month: "Jan", fuel: 12500, maintenance: 3200, insurance: 2800, total: 18500 },
  { month: "Feb", fuel: 11800, maintenance: 4100, insurance: 2800, total: 18700 },
  { month: "Mar", fuel: 13200, maintenance: 2900, insurance: 2800, total: 18900 },
  { month: "Apr", fuel: 14100, maintenance: 3800, insurance: 2800, total: 20700 },
  { month: "May", fuel: 13600, maintenance: 3400, insurance: 2800, total: 19800 },
  { month: "Jun", fuel: 15200, maintenance: 3100, insurance: 2800, total: 21100 },
]

const fuelEfficiencyData = [
  { vehicle: "FL-001", mpg: 12.5, cost: 2400 },
  { vehicle: "FL-002", mpg: 11.8, cost: 2650 },
  { vehicle: "FL-003", mpg: 13.2, cost: 2200 },
  { vehicle: "FL-004", mpg: 10.9, cost: 2800 },
  { vehicle: "FL-005", mpg: 12.1, cost: 2500 },
]

const maintenanceCosts = [
  { category: "Routine Service", cost: 8500, percentage: 35 },
  { category: "Repairs", cost: 6200, percentage: 26 },
  { category: "Tires", cost: 4800, percentage: 20 },
  { category: "Parts", cost: 2900, percentage: 12 },
  { category: "Other", cost: 1600, percentage: 7 },
]

export function CostAnalysis() {
  return (
    <div className="space-y-6">
      {/* Cost Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Costs</p>
                <p className="text-2xl font-bold text-card-foreground">$21,100</p>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 mt-1">
                  +6.6%
                </Badge>
              </div>
              <div className="p-2 bg-red-100 rounded-lg">
                <DollarSign className="h-4 w-4 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Fuel Costs</p>
                <p className="text-2xl font-bold text-card-foreground">$15,200</p>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 mt-1">
                  +11.8%
                </Badge>
              </div>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Fuel className="h-4 w-4 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Maintenance</p>
                <p className="text-2xl font-bold text-card-foreground">$3,100</p>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mt-1">
                  -8.8%
                </Badge>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <Wrench className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cost per Mile</p>
                <p className="text-2xl font-bold text-card-foreground">$1.42</p>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mt-1">
                  -2.1%
                </Badge>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingDown className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Cost Trends */}
        <Card className="bg-card border-border lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-accent" />
              <span>Cost Trends Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                fuel: {
                  label: "Fuel",
                  color: "hsl(var(--chart-1))",
                },
                maintenance: {
                  label: "Maintenance",
                  color: "hsl(var(--chart-2))",
                },
                insurance: {
                  label: "Insurance",
                  color: "hsl(var(--chart-3))",
                },
                total: {
                  label: "Total",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={costTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="fuel" stroke="var(--color-fuel)" name="Fuel ($)" />
                  <Line
                    type="monotone"
                    dataKey="maintenance"
                    stroke="var(--color-maintenance)"
                    name="Maintenance ($)"
                  />
                  <Line type="monotone" dataKey="insurance" stroke="var(--color-insurance)" name="Insurance ($)" />
                  <Line type="monotone" dataKey="total" stroke="var(--color-total)" name="Total ($)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Fuel Efficiency */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center space-x-2">
              <Fuel className="h-5 w-5 text-accent" />
              <span>Fuel Efficiency by Vehicle</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                mpg: {
                  label: "MPG",
                  color: "hsl(var(--chart-1))",
                },
                cost: {
                  label: "Cost",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fuelEfficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="vehicle" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="mpg" fill="var(--color-mpg)" name="MPG" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Maintenance Breakdown */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-accent" />
              <span>Maintenance Cost Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {maintenanceCosts.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-card-foreground">{item.category}</span>
                    <span className="text-sm text-muted-foreground">${item.cost.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.percentage}% of total</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Optimization Recommendations */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Cost Optimization Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Fuel className="h-4 w-4 text-blue-600" />
                <h4 className="font-medium text-blue-900">Fuel Optimization</h4>
              </div>
              <p className="text-sm text-blue-800">
                Implement route optimization to reduce fuel consumption by an estimated 12-15%.
              </p>
              <p className="text-xs text-blue-600 mt-2">Potential savings: $1,800/month</p>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Wrench className="h-4 w-4 text-green-600" />
                <h4 className="font-medium text-green-900">Preventive Maintenance</h4>
              </div>
              <p className="text-sm text-green-800">
                Increase preventive maintenance frequency to reduce emergency repair costs.
              </p>
              <p className="text-xs text-green-600 mt-2">Potential savings: $800/month</p>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <h4 className="font-medium text-purple-900">Driver Training</h4>
              </div>
              <p className="text-sm text-purple-800">
                Eco-driving training can improve fuel efficiency and reduce vehicle wear.
              </p>
              <p className="text-xs text-purple-600 mt-2">Potential savings: $600/month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
