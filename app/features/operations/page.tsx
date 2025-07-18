"use client"

import { useState, useEffect } from "react"
import type { Operation, OperationStatus, OperationPriority } from "@/app/generated/prisma"
import { Button } from "@/components/ui/button"
import { OperationsLoading } from "@/components/ui/operations-loading"
import { PageTitle } from "@/app/components/page-title"
import { PageSubtitle } from "@/app/components/page-subtitle"
import { OptStats } from "./components/opt-stats"
import { OptList } from "./components/opt-list"
import { OptDetailModal } from "./components/opt-detail-modal"
import { NewOperationModal } from "./components/new-operation-modal"

// Extended operation type with parsed objectives
interface ExtendedOperation extends Omit<Operation, 'status' | 'priority'> {
  status: string
  priority: string
  parsedObjectives: string[]
}

export default function OperationsPage() {
  const [selectedOperation, setSelectedOperation] = useState<ExtendedOperation | null>(null)
  const [operations, setOperations] = useState<ExtendedOperation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showNewOperationModal, setShowNewOperationModal] = useState(false)

  // Fetch operations from the API
  const fetchOperations = async () => {
    try {
      const response = await fetch('/api/operations')
      if (!response.ok) {
        throw new Error('Failed to fetch operations')
      }
      const data: Operation[] = await response.json()
      
      // Transform API data to parse objectives
      const transformedOperations: ExtendedOperation[] = data.map((op) => ({
        ...op,
        parsedObjectives: JSON.parse(op.objectives || '[]'),
      }))
      
      setOperations(transformedOperations)
    } catch (error) {
      console.error('Error fetching operations:', error)
      setError('Failed to load operations')
    }
  }

  useEffect(() => {
    const loadOperations = async () => {
      setLoading(true)
      // Add small delay to demonstrate loading state
      await new Promise(resolve => setTimeout(resolve, 1000))
      await fetchOperations()
      setLoading(false)
    }
    
    loadOperations()
  }, [])

  const handleOperationCreated = () => {
    setLoading(true)
    fetchOperations().finally(() => setLoading(false))
  }

  if (loading) {
    return <OperationsLoading />
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <PageTitle>OPERATIONS CENTER</PageTitle>
          <PageSubtitle>Mission planning and execution oversight</PageSubtitle>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => setShowNewOperationModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            New Operation
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Mission Brief</Button>
        </div>
      </div>

      <OptStats operations={operations} />

      <OptList operations={operations} onSelectOperation={setSelectedOperation} />

      <OptDetailModal 
        operation={selectedOperation} 
        onClose={() => setSelectedOperation(null)}
        onOperationDeleted={fetchOperations}
      />
      
      <NewOperationModal 
        open={showNewOperationModal} 
        onClose={() => setShowNewOperationModal(false)}
        onOperationCreated={handleOperationCreated}
      />
    </div>
  )
}
