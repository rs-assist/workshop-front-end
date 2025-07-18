"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Globe, Shield } from "lucide-react"

interface ExtendedIntelligence {
  id: number
  title: string
  displayId: string | null
  summary: string
  parsedTags: string[]
  classification: string
  threat: string
  status: string
  location: string
  source: string
  date: string
  priority: string
  sources: number
  tags: string
}

interface IntReportsProps {
  reports: ExtendedIntelligence[]
  onSelectReport: (report: ExtendedIntelligence) => void
}

export function IntReports({ reports, onSelectReport }: IntReportsProps) {
  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "top_secret":
        return "bg-red-500/20 text-red-500"
      case "secret":
        return "bg-orange-500/20 text-orange-500"
      case "classified":
        return "bg-neutral-500/20 text-neutral-300"
      default:
        return "bg-white/20 text-white"
    }
  }

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "critical":
        return "bg-red-500/20 text-red-500"
      case "high":
        return "bg-orange-500/20 text-orange-500"
      case "medium":
        return "bg-neutral-500/20 text-neutral-300"
      case "low":
        return "bg-white/20 text-white"
      default:
        return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-500/20 text-green-500"
      case "pending":
        return "bg-orange-500/20 text-orange-500"
      case "active":
        return "bg-blue-500/20 text-blue-500"
      default:
        return "bg-neutral-500/20 text-neutral-300"
    }
  }

  return (
    <Card className="bg-neutral-900 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">INTELLIGENCE REPORTS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="border border-neutral-700 rounded p-4 hover:border-orange-500/50 transition-colors cursor-pointer"
              onClick={() => onSelectReport(report)}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-neutral-400 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white tracking-wider">{report.title}</h3>
                      <p className="text-xs text-neutral-400 font-mono">{report.displayId || `INT-${report.id.toString().padStart(3, '0')}`}</p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 ml-8">{report.summary}</p>

                  <div className="flex flex-wrap gap-2 ml-8">
                    {report.parsedTags.map((tag: string) => (
                      <Badge key={tag} className="bg-neutral-800 text-neutral-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getClassificationColor(report.classification)}>{report.classification.toUpperCase().replace('_', ' ')}</Badge>
                    <Badge className={getThreatColor(report.threat)}>{report.threat.toUpperCase()}</Badge>
                    <Badge className={getStatusColor(report.status)}>{report.status.toUpperCase()}</Badge>
                  </div>

                  <div className="text-xs text-neutral-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      <span>{report.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3" />
                      <span>{report.source}</span>
                    </div>
                    <div className="font-mono">{report.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
