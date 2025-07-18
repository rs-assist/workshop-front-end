"use client"

import { useState, useEffect } from "react"
import type { Agent } from "@/app/generated/prisma"
import { Button } from "@/components/ui/button"
import { AgentNetworkLoading } from "@/components/ui/agent-network-loading"
import { PageTitle } from "@/app/components/page-title"
import { PageSubtitle } from "@/app/components/page-subtitle"
import { AgtSearch } from "./components/agt-search"
import { AgtStats } from "./components/agt-stats"
import { AgtList } from "./components/agt-list"
import { AgtDetail } from "./components/agt-detail"
import { Filter } from "lucide-react"

export default function AgentNetworkPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch agents from the API
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        // Add small delay to demonstrate loading state
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const response = await fetch('/api/agents')
        if (!response.ok) {
          throw new Error('Failed to fetch agents')
        }
        const data = await response.json()
        setAgents(data)
      } catch (error) {
        console.error('Error fetching agents:', error)
        setError('Failed to load agents')
      } finally {
        setLoading(false)
      }
    }
    
    fetchAgents()
  }, [])

  if (loading) {
    return <AgentNetworkLoading />
  }

  if (error) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center h-96">
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    )
  }

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `AG-${agent.id.toString().padStart(4, '0')}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <PageTitle>AGENT NETWORK</PageTitle>
          <PageSubtitle>Manage and monitor field operatives</PageSubtitle>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Deploy Agent</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <AgtSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AgtStats agents={agents} />
      </div>

      <AgtList filteredAgents={filteredAgents} setSelectedAgent={setSelectedAgent} />
      
      <AgtDetail selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />
    </div>
  )
}
