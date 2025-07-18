"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Activity, Settings } from "lucide-react"

interface System {
  id: string
  status: string
}

interface SysStatsProps {
  systems: System[]
}

export function SysStats({ systems }: SysStatsProps) {
  const totalSystems = systems.length
  const onlineSystems = systems.filter(s => s.status === 'online').length
  const warningSystems = systems.filter(s => s.status === 'warning').length
  const maintenanceSystems = systems.filter(s => s.status === 'maintenance').length
  const avgUptime = systems.length > 0 ? 
    (systems.reduce((sum, s) => sum + (s.status === 'online' ? 100 : 0), 0) / systems.length).toFixed(1) : '0.0'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">SYSTEMS ONLINE</p>
              <p className="text-2xl font-bold text-white font-mono">{onlineSystems}/{totalSystems}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">WARNINGS</p>
              <p className="text-2xl font-bold text-orange-500 font-mono">{warningSystems}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">AVG UPTIME</p>
              <p className="text-2xl font-bold text-white font-mono">{avgUptime}%</p>
            </div>
            <Activity className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">MAINTENANCE</p>
              <p className="text-2xl font-bold text-neutral-300 font-mono">{maintenanceSystems}</p>
            </div>
            <Settings className="w-8 h-8 text-neutral-300" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
