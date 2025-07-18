"use client"

import { Bell, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const getSectionTitle = (section: string) => {
    switch (section) {
      case "overview":
        return "OVERVIEW"
      case "agents":
        return "AGENT NETWORK"
      case "operations":
        return "OPERATIONS"
      case "intelligence":
        return "INTELLIGENCE"
      case "systems":
        return "SYSTEMS"
      default:
        return "OVERVIEW"
    }
  }

  return (
    <div className="h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-neutral-400">
          TACTICAL COMMAND / <span className="text-orange-500">{getSectionTitle(activeSection)}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-xs text-neutral-500">LAST UPDATE: 05/06/2025 20:00 UTC</div>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
