"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Download } from "lucide-react"

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

interface IntDetailModalProps {
  report: ExtendedIntelligence | null
  onClose: () => void
}

export function IntDetailModal({ report, onClose }: IntDetailModalProps) {
  if (!report) return null

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="bg-neutral-900 border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-white tracking-wider">{report.title}</CardTitle>
            <p className="text-sm text-neutral-400 font-mono">{report.displayId || `INT-${report.id.toString().padStart(3, '0')}`}</p>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            ✕
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">CLASSIFICATION</h3>
                <div className="flex gap-2">
                  <Badge className={getClassificationColor(report.classification)}>
                    {report.classification.toUpperCase().replace('_', ' ')}
                  </Badge>
                  <Badge className={getThreatColor(report.threat)}>
                    THREAT: {report.threat.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">SOURCE DETAILS</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Source Type:</span>
                    <span className="text-white font-mono">{report.source}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Location:</span>
                    <span className="text-white">{report.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Date:</span>
                    <span className="text-white font-mono">{report.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Status:</span>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {report.parsedTags.map((tag: string) => (
                    <Badge key={tag} className="bg-neutral-800 text-neutral-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">THREAT ASSESSMENT</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Threat Level</span>
                    <Badge className={getThreatColor(report.threat)}>
                      {report.threat.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        report.threat === "critical"
                          ? "bg-red-500 w-full"
                          : report.threat === "high"
                            ? "bg-orange-500 w-3/4"
                            : report.threat === "medium"
                              ? "bg-neutral-400 w-1/2"
                              : "bg-white w-1/4"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">EXECUTIVE SUMMARY</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">{report.summary}</p>
          </div>

          <div className="flex gap-2 pt-4 border-t border-neutral-700">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Eye className="w-4 h-4 mr-2" />
              View Full Report
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
            >
              Share Intel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
