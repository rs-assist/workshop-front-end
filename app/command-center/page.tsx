"use client"

import { useState, useEffect } from "react"
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

interface ActivityLog {
  id: number
  time: string
  event: string
  type: string
}

interface Operation {
  id: string
  displayId: string
  name: string
  status: string
  priority: string
  location: string
  objectives: string
  createdAt: string
  updatedAt: string
}

export default function CommandCenterPage() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([])
  const [operations, setOperations] = useState<Operation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch agents data
        const agentsResponse = await fetch('/api/agents')
        const agentsData = await agentsResponse.json()
        setAgents(agentsData)

        // Fetch activity logs
        const logsResponse = await fetch('/api/activity-logs')
        const logsData = await logsResponse.json()
        setActivityLogs(logsData)

        // Fetch operations data
        const operationsResponse = await fetch('/api/operations')
        const operationsData = await operationsResponse.json()
        setOperations(operationsData)
      } catch (error) {
        console.error('Error fetching command center data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Calculate agent statistics
  const activeAgents = agents.filter(a => a.status === 'active').length
  const undercover = agents.filter(a => a.status === 'undercover').length
  const training = agents.filter(a => a.status === 'training').length
  const standby = agents.filter(a => a.status === 'standby').length

  // Calculate mission statistics
  const completedMissions = operations.filter(o => o.status === 'completed').length
  const activeMissions = operations.filter(o => o.status === 'active').length
  const failedMissions = operations.filter(o => o.status === 'failed').length

  if (loading) {
    return (
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Loading skeleton */}
          <div className="lg:col-span-4 bg-neutral-900 border-neutral-700 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-neutral-700 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-8 bg-neutral-700 rounded"></div>
              <div className="h-8 bg-neutral-700 rounded"></div>
              <div className="h-8 bg-neutral-700 rounded"></div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-neutral-900 border-neutral-700 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-neutral-700 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-8 bg-neutral-700 rounded"></div>
              <div className="h-8 bg-neutral-700 rounded"></div>
              <div className="h-8 bg-neutral-700 rounded"></div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-neutral-900 border-neutral-700 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-neutral-700 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-8 bg-neutral-700 rounded"></div>
              <div className="h-8 bg-neutral-700 rounded"></div>
              <div className="h-8 bg-neutral-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="p-6 space-y-6">
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Agent Status Overview */}
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

        {/* Activity Log */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">ACTIVITY LOG</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {activityLogs.slice(0, 8).map((log) => {
                const logTime = new Date(log.time).toLocaleString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })
                
                const getTypeColor = (type: string) => {
                  switch (type) {
                    case 'success': return 'border-green-500'
                    case 'warning': return 'border-orange-500'
                    case 'error': return 'border-red-500'
                    default: return 'border-orange-500'
                  }
                }
                
                return (
                  <div
                    key={log.id}
                    className={`text-xs border-l-2 ${getTypeColor(log.type)} pl-3 hover:bg-neutral-800 p-2 rounded transition-colors`}
                  >
                    <div className="text-neutral-500 font-mono">{logTime}</div>
                    <div className="text-white">
                      {log.event.split(/(Agent [A-Z][a-z]+ [A-Z][a-z]+|Agent [A-Z][a-z]+)/).map((part, index) => {
                        if (part.startsWith('Agent ')) {
                          return (
                            <span key={index} className="text-orange-500 font-mono">
                              {part}
                            </span>
                          )
                        }
                        return part
                      })}
                    </div>
                  </div>
                )
              })}
              {activityLogs.length === 0 && (
                <div className="text-xs text-neutral-500 text-center py-8">
                  No activity logs available
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Encrypted Chat Activity */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              ENCRYPTED CHAT ACTIVITY
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {/* Wireframe Sphere */}
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 border-2 border-white rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute inset-2 border border-white rounded-full opacity-40"></div>
              <div className="absolute inset-4 border border-white rounded-full opacity-20"></div>
              {/* Grid lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-white opacity-30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-white opacity-30"></div>
              </div>
            </div>

            <div className="text-xs text-neutral-500 space-y-1 w-full font-mono">
              <div className="flex justify-between">
                <span># 2025-06-17 14:23 UTC</span>
              </div>
              <div className="text-white">{"> [AGT:gh0stfire] ::: INIT >> ^^^ loading secure channel"}</div>
              <div className="text-orange-500">{"> CH#2 | 1231.9082464.500...xR3"}</div>
              <div className="text-white">{"> KEY LOCKED"}</div>
              <div className="text-neutral-400">
                {'> MSG >> "...mission override initiated... awaiting delta node clearance"'}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Activity Chart */}
        <Card className="lg:col-span-8 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              MISSION ACTIVITY OVERVIEW
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative">
              {/* Chart Grid */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-neutral-700"></div>
                ))}
              </div>

              {/* Chart Line */}
              <svg className="absolute inset-0 w-full h-full">
                <polyline
                  points="0,120 50,100 100,110 150,90 200,95 250,85 300,100 350,80"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                />
                <polyline
                  points="0,140 50,135 100,130 150,125 200,130 250,135 300,125 350,120"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-neutral-500 -ml-5 font-mono">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-neutral-500 -mb-6 font-mono">
                <span>Jan 28, 2025</span>
                <span>Feb 28, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Information */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">MISSION INFORMATION</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xs text-white font-medium">Mission Status</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">Active Missions</span>
                    <span className="text-white font-bold font-mono">{activeMissions}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">Completed Missions</span>
                    <span className="text-white font-bold font-mono">{completedMissions}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">Failed Missions</span>
                    <span className="text-red-500 font-bold font-mono">{failedMissions}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-orange-500 font-medium">Agent Status</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">Active Agents</span>
                    <span className="text-white font-bold font-mono">{activeAgents}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">Undercover</span>
                    <span className="text-white font-bold font-mono">{undercover}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">In Training</span>
                    <span className="text-white font-bold font-mono">{training}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
