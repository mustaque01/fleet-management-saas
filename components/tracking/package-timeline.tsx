import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, Clock } from "lucide-react"

interface TimelineItem {
  status: string
  location: string
  timestamp: string
  completed: boolean
}

interface PackageTimelineProps {
  timeline: TimelineItem[]
}

export function PackageTimeline({ timeline }: PackageTimelineProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Delivery Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                {item.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : index === timeline.findIndex((t) => !t.completed) ? (
                  <Clock className="h-5 w-5 text-blue-500" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
                {index < timeline.length - 1 && (
                  <div className={`w-px h-8 mt-2 ${item.completed ? "bg-green-200" : "bg-muted-foreground/20"}`} />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <h4
                    className={`font-medium ${
                      item.completed
                        ? "text-card-foreground"
                        : index === timeline.findIndex((t) => !t.completed)
                          ? "text-blue-600"
                          : "text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </h4>
                  <span
                    className={`text-sm ${
                      item.completed
                        ? "text-muted-foreground"
                        : index === timeline.findIndex((t) => !t.completed)
                          ? "text-blue-600"
                          : "text-muted-foreground"
                    }`}
                  >
                    {item.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
