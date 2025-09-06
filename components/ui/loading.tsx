"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full border-2 border-accent/20"></div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent animate-spin"></div>
      <div className="absolute inset-1 rounded-full border border-purple-600/30 animate-spin-slow"></div>
    </div>
  )
}

interface LoadingCardProps {
  className?: string
}

export function LoadingCard({ className = "" }: LoadingCardProps) {
  return (
    <div className={`p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-xl ${className}`}>
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded animate-shimmer"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gradient-to-r from-accent/10 to-purple-600/10 rounded w-3/4 animate-shimmer"></div>
          <div className="h-3 bg-gradient-to-r from-accent/10 to-purple-600/10 rounded w-1/2 animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

interface LoadingDotsProps {
  className?: string
}

export function LoadingDots({ className = "" }: LoadingDotsProps) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
    </div>
  )
}

interface ProgressBarProps {
  progress: number
  className?: string
  showPercentage?: boolean
}

export function ProgressBar({ progress, className = "", showPercentage = false }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between mb-1">
        {showPercentage && (
          <span className="text-sm font-medium text-foreground">{Math.round(progress)}%</span>
        )}
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <div className="h-2.5 bg-gradient-to-r from-accent to-purple-600 rounded-full transition-all duration-500 ease-out relative w-3/4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}
