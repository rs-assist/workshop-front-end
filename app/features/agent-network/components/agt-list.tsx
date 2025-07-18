"use client"

import type { Agent } from "@/app/generated/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, MapPin } from "lucide-react"

interface AgtListProps {
  filteredAgents: Agent[]
  setSelectedAgent: (agent: Agent) => void
}

export function AgtList({ filteredAgents, setSelectedAgent }: AgtListProps) {
  return (
    <Card className="bg-neutral-900 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">AGENT ROSTER</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">AGENT ID</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">CODENAME</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">STATUS</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">LOCATION</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">MISSION</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">RISK</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent, index) => (
                <tr
                  key={agent.id}
                  className={`border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer ${
                    index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-850"
                  }`}
                  onClick={() => setSelectedAgent(agent)}
                >
                  <td className="py-3 px-4 text-sm text-white font-mono">AG-{agent.id.toString().padStart(4, '0')}</td>
                  <td className="py-3 px-4 text-sm text-white">{agent.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          agent.status === "active"
                            ? "bg-white"
                            : agent.status === "standby"
                              ? "bg-neutral-500"
                              : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-neutral-300 uppercase tracking-wider">{agent.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span className="text-sm text-neutral-300">{agent.location}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-neutral-300">{agent.mission}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                        agent.risk === "critical"
                          ? "bg-red-500/20 text-red-500"
                          : agent.risk === "high"
                            ? "bg-orange-500/20 text-orange-500"
                            : agent.risk === "medium"
                              ? "bg-neutral-500/20 text-neutral-300"
                              : "bg-white/20 text-white"
                      }`}
                    >
                      {agent.risk}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
