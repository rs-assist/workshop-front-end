"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, AlertTriangle, Globe } from "lucide-react"

interface ExtendedIntelligence {
  id: number
  threat: string
  sources: number
  priority: string
  tags: string
}

interface IntStatsProps {
  reports: ExtendedIntelligence[]
}

export function IntStats({ reports }: IntStatsProps) {
  return (
    <>
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">TOTAL REPORTS</p>
              <p className="text-2xl font-bold text-white font-mono">{reports.length}</p>
            </div>
            <FileText className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">CRITICAL THREATS</p>
              <p className="text-2xl font-bold text-red-500 font-mono">
                {reports.filter(r => r.threat === 'critical').length}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">ACTIVE SOURCES</p>
              <p className="text-2xl font-bold text-white font-mono">
                {reports.reduce((sum, r) => sum + r.sources, 0)}
              </p>
            </div>
            <Globe className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
