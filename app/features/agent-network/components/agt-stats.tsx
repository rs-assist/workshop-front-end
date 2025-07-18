"use client"

import type { Agent } from "@/app/generated/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

interface AgtStatsProps {
  agents: Agent[]
}

export function AgtStats({ agents }: AgtStatsProps) {
  const activeAgents = agents.filter(agent => agent.status === "active").length
  const highRiskAgents = agents.filter(agent => agent.risk === "critical" || agent.risk === "high").length
  const standbyAgents = agents.filter(agent => agent.status === "standby").length

  return (
    <>
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">ACTIVE AGENTS</p>
              <p className="text-2xl font-bold text-white font-mono">{activeAgents}</p>
            </div>
            <Shield className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">HIGH RISK</p>
              <p className="text-2xl font-bold text-red-500 font-mono">{highRiskAgents}</p>
            </div>
            <Shield className="w-8 h-8 text-red-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">STANDBY</p>
              <p className="text-2xl font-bold text-orange-500 font-mono">{standbyAgents}</p>
            </div>
            <Shield className="w-8 h-8 text-orange-500" />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
