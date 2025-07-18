"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface IntSearchProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

export function IntSearch({ searchTerm, onSearchChange }: IntSearchProps) {
  return (
    <Card className="lg:col-span-2 bg-neutral-900 border-neutral-700">
      <CardContent className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            placeholder="Search intelligence reports..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400"
          />
        </div>
      </CardContent>
    </Card>
  )
}
