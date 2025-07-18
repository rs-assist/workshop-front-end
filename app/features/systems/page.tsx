"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SystemsLoading } from "@/components/ui/systems-loading"
import { PageTitle } from "@/app/components/page-title"
import { PageSubtitle } from "@/app/components/page-subtitle"
import { SysStats } from "./components/sys-stats"
import { SysGrid } from "./components/sys-grid"
import { SysDetailModal } from "./components/sys-detail-modal"

interface System {
  id: string
  displayId: string
  name: string
  type: string
  status: string
  health: number
  cpu: number
  memory: number
  storage: number
  uptime: string
  location: string
  lastMaintenance: string
  createdAt: string
  updatedAt: string
}

export default function SystemsPage() {
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null)
  const [systems, setSystems] = useState<System[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSystems = async () => {
      try {
        const response = await fetch('/api/servers')
        if (!response.ok) {
          throw new Error('Failed to fetch systems')
        }
        const data = await response.json()
        setSystems(data)
      } catch (error) {
        console.error('Error fetching systems:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSystems()
  }, [])

  if (loading) {
    return <SystemsLoading />
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <PageTitle>SYSTEMS MONITOR</PageTitle>
          <PageSubtitle>Infrastructure health and performance monitoring</PageSubtitle>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">System Scan</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Maintenance Mode</Button>
        </div>
      </div>

      <SysStats systems={systems} />

      <SysGrid systems={systems} onSelectSystem={setSelectedSystem} />

      <SysDetailModal system={selectedSystem} onClose={() => setSelectedSystem(null)} />
    </div>
  )
}
