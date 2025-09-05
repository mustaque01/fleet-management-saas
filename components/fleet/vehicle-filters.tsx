"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"

interface VehicleFiltersProps {
  filters: {
    status: string
    type: string
    location: string
  }
  onFiltersChange: (filters: { status: string; type: string; location: string }) => void
}

export function VehicleFilters({ filters, onFiltersChange }: VehicleFiltersProps) {
  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "on-route", label: "On Route" },
    { value: "idle", label: "Idle" },
    { value: "maintenance", label: "Maintenance" },
  ]

  const typeOptions = [
    { value: "all", label: "All Types" },
    { value: "Delivery Van", label: "Delivery Van" },
    { value: "Truck", label: "Truck" },
    { value: "Cargo Van", label: "Cargo Van" },
  ]

  const locationOptions = [
    { value: "all", label: "All Locations" },
    { value: "downtown", label: "Downtown" },
    { value: "industrial", label: "Industrial Zone" },
    { value: "highway", label: "Highway" },
  ]

  const updateFilter = (key: string, value: string) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const activeFiltersCount = Object.values(filters).filter((value) => value !== "all").length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="relative bg-transparent">
          <Filter className="mr-2 h-3 w-3" />
          Filters
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
        {statusOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => updateFilter("status", option.value)}
            className={filters.status === option.value ? "bg-accent/10" : ""}
          >
            {option.label}
            {filters.status === option.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
        {typeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => updateFilter("type", option.value)}
            className={filters.type === option.value ? "bg-accent/10" : ""}
          >
            {option.label}
            {filters.type === option.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => onFiltersChange({ status: "all", type: "all", location: "all" })}>
          Clear All Filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
