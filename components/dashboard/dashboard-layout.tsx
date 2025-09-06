"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Truck, BarChart3, MapPin, Package, Users, Settings, Menu, X, Bell, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: BarChart3 },
  { name: "Fleet", href: "/dashboard/fleet", icon: Truck },
  { name: "Tracking", href: "/dashboard/tracking", icon: MapPin },
  { name: "Assignments", href: "/dashboard/assignments", icon: Package },
  { name: "Drivers", href: "/dashboard/drivers", icon: Users },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-sidebar to-sidebar/95 border-r border-border/50 backdrop-blur-xl">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-lg">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <span className="text-lg font-bold text-sidebar-foreground">FleetFlow</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="text-sidebar-foreground hover:bg-sidebar-accent/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="px-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-accent/20 to-purple-600/20 text-accent border border-accent/20 shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/20 hover:text-accent hover:scale-105"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-gradient-to-b from-sidebar to-sidebar/95 border-r border-border/50 backdrop-blur-xl">
          <div className="flex items-center space-x-2 p-6">
            <div className="p-2 bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-lg">
              <Truck className="h-6 w-6 text-accent" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">FleetFlow</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-accent/20 to-purple-600/20 text-accent border border-accent/20 shadow-md"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/20 hover:text-accent hover:scale-105"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <header className="bg-background/80 backdrop-blur-xl border-b border-border/50 px-6 py-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSidebarOpen(true)} 
                className="lg:hidden hover:bg-accent/10"
              >
                <Menu className="h-4 w-4" />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search vehicles, drivers, packages..."
                  className="pl-10 w-80 bg-input/50 backdrop-blur-sm border-border/50 focus:bg-input/80 transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="relative hover:bg-accent/10">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-gradient-to-r from-accent to-purple-600 rounded-full animate-pulse"></span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </div>
  )
}
