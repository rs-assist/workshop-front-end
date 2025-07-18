"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./components/sidebar"
import { Header } from "./components/header"
import CommandCenterPage from "./features/command-center/page"
import AgentNetworkPage from "./features/agent-network/page"
import OperationsPage from "./features/operations/page"
import IntelligencePage from "./features/intelligence/page"
import SystemsPage from "./features/systems/page"

interface SidebarStats {
  systemsOnline: number
  totalSystems: number
  activeAgents: number
  ongoingMissions: number
}

export default function TacticalDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarStats, setSidebarStats] = useState<SidebarStats>({
    systemsOnline: 0,
    totalSystems: 0,
    activeAgents: 0,
    ongoingMissions: 0
  })

  useEffect(() => {
    const fetchSidebarStats = async () => {
      try {
        // Fetch systems data
        const systemsResponse = await fetch('/api/servers')
        const systemsData = await systemsResponse.json()
        const onlineSystems = systemsData.filter((s: any) => s.status === 'online').length
        
        // Fetch agents data
        const agentsResponse = await fetch('/api/agents')
        const agentsData = await agentsResponse.json()
        const activeAgents = agentsData.filter((a: any) => a.status === 'active').length
        
        // Fetch operations data
        const operationsResponse = await fetch('/api/operations')
        const operationsData = await operationsResponse.json()
        const ongoingMissions = operationsData.filter((o: any) => o.status === 'active').length
        
        setSidebarStats({
          systemsOnline: onlineSystems,
          totalSystems: systemsData.length,
          activeAgents: activeAgents,
          ongoingMissions: ongoingMissions
        })
      } catch (error) {
        console.error('Error fetching sidebar stats:', error)
      }
    }

    fetchSidebarStats()
  }, [])

  return (
    <div className="flex h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarStats={sidebarStats}
      />

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${!sidebarCollapsed ? "md:ml-0" : ""}`}>
        <Header activeSection={activeSection} />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          {activeSection === "overview" && <CommandCenterPage />}
          {activeSection === "agents" && <AgentNetworkPage />}
          {activeSection === "operations" && <OperationsPage />}
          {activeSection === "intelligence" && <IntelligencePage />}
          {activeSection === "systems" && <SystemsPage />}
        </div>
      </div>
    </div>
  )
}
