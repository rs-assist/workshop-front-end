"use client"

import { useState, useEffect } from "react"
import { AgtAgentStatus } from "../agent-network/components/agt-agent-status"
import { AgtActivityLog } from "../agent-network/components/agt-activity-log"
import { OptMissionChart } from "../operations/components/opt-mission-chart"
import { OptMissionInfo } from "../operations/components/opt-mission-info"
import { CmdChatActivity } from "./components/cmd-chat-activity"

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
        <AgtAgentStatus agents={agents} />
        <AgtActivityLog activityLogs={activityLogs} />
        <CmdChatActivity />
        <OptMissionChart />
        <OptMissionInfo />
      </div>
    </div>
  )
}
