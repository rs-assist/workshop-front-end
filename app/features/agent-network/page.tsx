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
  const [isAgentDancing, setIsAgentDancing] = useState(false)
  const [deploymentText, setDeploymentText] = useState("AGENT DEPLOYMENT IN PROGRESS")

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

  const handleDeployAgent = () => {
    setIsAgentDancing(true)
    setDeploymentText("AGENT DEPLOYMENT IN PROGRESS")
    
    // Change text during animation
    setTimeout(() => setDeploymentText("CALIBRATING DANCE MOVES"), 1000)
    setTimeout(() => setDeploymentText("SYNCHRONIZING RHYTHM"), 2000)
    setTimeout(() => setDeploymentText("ACTIVATING SWAGGER PROTOCOL"), 3000)
    setTimeout(() => setDeploymentText("DEPLOYMENT COMPLETE!"), 4000)
    
    // Stop the animation after 5 seconds
    setTimeout(() => {
      setIsAgentDancing(false)
      setDeploymentText("AGENT DEPLOYMENT IN PROGRESS")
    }, 5000)
  }

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
          <Button 
            onClick={handleDeployAgent}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Deploy Agent
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Dancing Agent Animation */}
      {isAgentDancing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="text-center">
            {/* Main Dancing Agent */}
            <div className="relative mb-6">
              <div className="text-8xl animate-bounce" style={{
                animation: 'bounce 0.5s infinite alternate, wiggle 1s ease-in-out infinite'
              }}>🕺</div>
              {/* Sparkles around the agent */}
              <div className="absolute -top-4 -left-4 text-2xl animate-spin">✨</div>
              <div className="absolute -top-4 -right-4 text-2xl animate-ping">⭐</div>
              <div className="absolute -bottom-2 -left-6 text-xl animate-bounce delay-200">💫</div>
              <div className="absolute -bottom-2 -right-6 text-xl animate-pulse">🌟</div>
            </div>
            
            {/* Text */}
            <div className="text-orange-500 text-2xl font-mono tracking-wider mb-4 animate-pulse">
              {deploymentText}
            </div>
            
            {/* Loading dots */}
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-200"></div>
            </div>
            
            {/* Additional dancing emojis */}
            <div className="flex justify-center space-x-8 text-4xl">
              <div className="animate-bounce delay-300">💃</div>
              <div className="animate-bounce delay-500">🕺</div>
              <div className="animate-bounce delay-700">💃</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <AgtSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AgtStats agents={agents} />
      </div>

      <AgtList filteredAgents={filteredAgents} setSelectedAgent={setSelectedAgent} />
      
      <AgtDetail selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />
    </div>
  )
}
