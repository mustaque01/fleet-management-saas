"use client"

import { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, XCircle, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationProps {
  type: "success" | "error" | "warning" | "info"
  title: string
  message: string
  duration?: number
  onClose?: () => void
}

export function Notification({ type, title, message, duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-600" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-orange-600" />
      case "info":
        return <Info className="h-5 w-5 text-blue-600" />
    }
  }

  const getColorClasses = () => {
    switch (type) {
      case "success":
        return "border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-600/10"
      case "error":
        return "border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/10"
      case "warning":
        return "border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-600/10"
      case "info":
        return "border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-blue-600/10"
    }
  }

  if (!isVisible) return null

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-sm w-full animate-slide-in`}>
      <div className={`p-4 backdrop-blur-sm border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${getColorClasses()}`}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-0.5">
            {getIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{message}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => onClose?.(), 300)
            }}
            className="flex-shrink-0 hover:bg-accent/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

interface FloatingActionButtonProps {
  onClick: () => void
  icon: React.ReactNode
  label?: string
  className?: string
}

export function FloatingActionButton({ onClick, icon, label, className = "" }: FloatingActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${className}`}
      size="sm"
    >
      <div className="flex flex-col items-center">
        {icon}
        {label && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    </Button>
  )
}

interface ParticleProps {
  className?: string
}

export function ParticleBackground({ className = "" }: ParticleProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-accent/20 rounded-full animate-float`}
        />
      ))}
    </div>
  )
}
