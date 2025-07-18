"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Agent {
  id: string
  displayId: string
  name: string
  status: string
  location: string
  mission: string
  lastSeen: string
  createdAt: string
  updatedAt: string
}

interface AgtAgentStatusProps {
  agents: Agent[]
}

export function AgtAgentStatus({ agents }: AgtAgentStatusProps) {
  const activeAgents = agents.filter(a => a.status === 'active').length
  const undercover = agents.filter(a => a.status === 'undercover').length
  const training = agents.filter(a => a.status === 'training').length

  return (
    <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">AGENT ALLOCATION</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-mono">{activeAgents}</div>
            <div className="text-xs text-neutral-500">Active Field</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-mono">{undercover}</div>
            <div className="text-xs text-neutral-500">Undercover</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white font-mono">{training}</div>
            <div className="text-xs text-neutral-500">Training</div>
          </div>
        </div>

        <div className="space-y-2">
          {agents.slice(0, 4).map((agent) => (
            <div
              key={agent.id}
              className="flex items-center justify-between p-2 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    agent.status === "active"
                      ? "bg-white"
                      : agent.status === "standby"
                        ? "bg-neutral-500"
                        : agent.status === "compromised"
                          ? "bg-red-500"
                          : "bg-orange-500"
                  }`}
                ></div>
                <div>
                  <div className="text-xs text-white font-mono">{agent.displayId}</div>
                  <div className="text-xs text-neutral-500">{agent.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
