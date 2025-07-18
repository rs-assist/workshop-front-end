"use client"

import { useState, useEffect } from "react"
import type { Intelligence, IntelligenceStatus, ThreatLevel, Classification } from "@/app/generated/prisma"
import { Button } from "@/components/ui/button"
import { IntelligenceLoading } from "@/components/ui/intelligence-loading"
import { PageTitle } from "@/app/components/page-title"
import { PageSubtitle } from "@/app/components/page-subtitle"
import { IntSearch } from "./components/int-search"
import { IntStats } from "./components/int-stats"
import { IntReports } from "./components/int-reports"
import { IntDetailModal } from "./components/int-detail-modal"
import { Filter } from "lucide-react"

// Extended intelligence type with parsed tags
interface ExtendedIntelligence extends Omit<Intelligence, 'status' | 'threat' | 'classification' | 'priority' | 'source'> {
  status: string
  threat: string
  classification: string
  priority: string
  source: string
  parsedTags: string[]
}

export default function IntelligencePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedReport, setSelectedReport] = useState<ExtendedIntelligence | null>(null)
  const [reports, setReports] = useState<ExtendedIntelligence[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch intelligence reports from the API
  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Add small delay to demonstrate loading state
        await new Promise(resolve => setTimeout(resolve, 1200))
        
        const response = await fetch('/api/intelligence')
        if (!response.ok) {
          throw new Error('Failed to fetch intelligence reports')
        }
        const data: Intelligence[] = await response.json()
        
        // Transform API data to parse tags
        const transformedReports: ExtendedIntelligence[] = data.map((report) => ({
          ...report,
          parsedTags: JSON.parse(report.tags || '[]'),
        }))
        
        setReports(transformedReports)
      } catch (error) {
        console.error('Error fetching intelligence reports:', error)
        setError('Failed to load intelligence reports')
      } finally {
        setLoading(false)
      }
    }
    
    fetchReports()
  }, [])

  if (loading) {
    return <IntelligenceLoading />
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

  const filteredReports = reports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (report.displayId && report.displayId.toLowerCase().includes(searchTerm.toLowerCase())) ||
      report.parsedTags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <PageTitle>INTELLIGENCE CENTER</PageTitle>
          <PageSubtitle>Classified reports and threat analysis</PageSubtitle>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">New Report</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <IntSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <IntStats reports={reports} />
      </div>

      <IntReports reports={filteredReports} onSelectReport={setSelectedReport} />

      <IntDetailModal report={selectedReport} onClose={() => setSelectedReport(null)} />
    </div>
  )
}
