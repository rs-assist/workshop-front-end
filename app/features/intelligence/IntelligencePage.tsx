"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Eye,
  FileText,
  Lock,
  Shield,
  Briefcase,
  Key,
  Globe,
  Wifi,
  Network,
  AlertTriangle,
  Check,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Report {
  id: string
  title: string
  type: string
  agent: string
  date: string
  location: string
  status: string
  classification: string
}

interface Breach {
  id: string
  type: string
  target: string
  severity: string
  timestamp: string
  status: string
}

export default function IntelligencePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)
  const [selectedBreach, setSelectedBreach] = useState<Breach | null>(null)

  const reports: Report[] = [
    {
      id: "R-2025-001",
      title: "OPERATION BLACKOUT ANALYSIS",
      type: "mission-report",
      agent: "G-078W",
      date: "2025-07-15",
      location: "Berlin",
      status: "verified",
      classification: "top-secret",
    },
    {
      id: "R-2025-002",
      title: "INFRASTRUCTURE VULNERABILITY ASSESSMENT",
      type: "analysis",
      agent: "G-079X",
      date: "2025-07-14",
      location: "Tokyo",
      status: "pending",
      classification: "classified",
    },
    {
      id: "R-2025-003",
      title: "AGENT COMPROMISE INVESTIGATION",
      type: "incident",
      agent: "G-080Y",
      date: "2025-07-13",
      location: "Moscow",
      status: "verified",
      classification: "top-secret",
    },
    {
      id: "R-2025-004",
      title: "NETWORK INFILTRATION PATTERNS",
      type: "analysis",
      agent: "G-081Z",
      date: "2025-07-12",
      location: "London",
      status: "verified",
      classification: "secret",
    },
  ]

  const breaches: Breach[] = [
    {
      id: "B-001",
      type: "network",
      target: "Central Database",
      severity: "high",
      timestamp: "10 min ago",
      status: "active",
    },
    {
      id: "B-002",
      type: "physical",
      target: "Facility B-12",
      severity: "medium",
      timestamp: "1 hour ago",
      status: "contained",
    },
    {
      id: "B-003",
      type: "data",
      target: "Agent Records",
      severity: "critical",
      timestamp: "30 min ago",
      status: "investigating",
    },
    {
      id: "B-004",
      type: "network",
      target: "Communications Array",
      severity: "low",
      timestamp: "2 hours ago",
      status: "resolved",
    },
  ]

  const filteredReports = reports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">INTELLIGENCE CENTER</h1>
          <p className="text-sm text-neutral-400">Analysis & Information Hub</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">New Report</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE THREATS</p>
                <p className="text-2xl font-bold text-red-500 font-mono">12</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">SECURITY SCORE</p>
                <p className="text-2xl font-bold text-white font-mono">87%</p>
              </div>
              <Shield className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ENCRYPTED DATA</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">2.1TB</p>
              </div>
              <Lock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">TOTAL REPORTS</p>
                <p className="text-2xl font-bold text-white font-mono">847</p>
              </div>
              <FileText className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search and Reports */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <Card className="bg-neutral-900 border-neutral-700">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* Reports List */}
          <Card className="bg-neutral-900 border-neutral-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
                INTELLIGENCE REPORTS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="bg-neutral-800 border-neutral-700">
                  <TabsTrigger value="all" className="data-[state=active]:bg-orange-500">
                    All Reports
                  </TabsTrigger>
                  <TabsTrigger value="mission" className="data-[state=active]:bg-orange-500">
                    Mission Reports
                  </TabsTrigger>
                  <TabsTrigger value="analysis" className="data-[state=active]:bg-orange-500">
                    Analysis
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {filteredReports.map((report) => (
                    <Card
                      key={report.id}
                      className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                      onClick={() => setSelectedReport(report)}
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs text-neutral-400">{report.id}</p>
                              <h3 className="text-sm font-medium text-white mt-1">{report.title}</h3>
                            </div>
                            <div
                              className={`px-2 py-1 rounded text-xs uppercase tracking-wider ${
                                report.classification === "top-secret"
                                  ? "bg-red-500/20 text-red-500"
                                  : report.classification === "secret"
                                    ? "bg-orange-500/20 text-orange-500"
                                    : "bg-neutral-500/20 text-neutral-300"
                              }`}
                            >
                              {report.classification}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-3 h-3 text-neutral-400" />
                              <span className="text-xs text-neutral-400">{report.type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Key className="w-3 h-3 text-neutral-400" />
                              <span className="text-xs text-neutral-400">Agent {report.agent}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="w-3 h-3 text-neutral-400" />
                              <span className="text-xs text-neutral-400">{report.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-neutral-500">{report.date}</span>
                            <div className="flex items-center gap-1">
                              {report.status === "verified" ? (
                                <Check className="w-3 h-3 text-white" />
                              ) : (
                                <Eye className="w-3 h-3 text-orange-500" />
                              )}
                              <span
                                className={`text-xs uppercase ${
                                  report.status === "verified" ? "text-white" : "text-orange-500"
                                }`}
                              >
                                {report.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="mission" className="space-y-4">
                  {filteredReports
                    .filter((report) => report.type === "mission-report")
                    .map((report) => (
                      <Card
                        key={report.id}
                        className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                        onClick={() => setSelectedReport(report)}
                      >
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-xs text-neutral-400">{report.id}</p>
                                <h3 className="text-sm font-medium text-white mt-1">{report.title}</h3>
                              </div>
                              <div
                                className={`px-2 py-1 rounded text-xs uppercase tracking-wider ${
                                  report.classification === "top-secret"
                                    ? "bg-red-500/20 text-red-500"
                                    : report.classification === "secret"
                                      ? "bg-orange-500/20 text-orange-500"
                                      : "bg-neutral-500/20 text-neutral-300"
                                }`}
                              >
                                {report.classification}
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{report.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Key className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">Agent {report.agent}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{report.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-neutral-500">{report.date}</span>
                              <div className="flex items-center gap-1">
                                {report.status === "verified" ? (
                                  <Check className="w-3 h-3 text-white" />
                                ) : (
                                  <Eye className="w-3 h-3 text-orange-500" />
                                )}
                                <span
                                  className={`text-xs uppercase ${
                                    report.status === "verified" ? "text-white" : "text-orange-500"
                                  }`}
                                >
                                  {report.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="analysis" className="space-y-4">
                  {filteredReports
                    .filter((report) => report.type === "analysis")
                    .map((report) => (
                      <Card
                        key={report.id}
                        className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                        onClick={() => setSelectedReport(report)}
                      >
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-xs text-neutral-400">{report.id}</p>
                                <h3 className="text-sm font-medium text-white mt-1">{report.title}</h3>
                              </div>
                              <div
                                className={`px-2 py-1 rounded text-xs uppercase tracking-wider ${
                                  report.classification === "top-secret"
                                    ? "bg-red-500/20 text-red-500"
                                    : report.classification === "secret"
                                      ? "bg-orange-500/20 text-orange-500"
                                      : "bg-neutral-500/20 text-neutral-300"
                                }`}
                              >
                                {report.classification}
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{report.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Key className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">Agent {report.agent}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{report.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-neutral-500">{report.date}</span>
                              <div className="flex items-center gap-1">
                                {report.status === "verified" ? (
                                  <Check className="w-3 h-3 text-white" />
                                ) : (
                                  <Eye className="w-3 h-3 text-orange-500" />
                                )}
                                <span
                                  className={`text-xs uppercase ${
                                    report.status === "verified" ? "text-white" : "text-orange-500"
                                  }`}
                                >
                                  {report.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Security Breaches */}
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              SECURITY BREACHES
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {breaches.map((breach) => (
              <Card
                key={breach.id}
                className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                onClick={() => setSelectedBreach(breach)}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {breach.type === "network" ? (
                          <Network className="w-4 h-4 text-neutral-400" />
                        ) : breach.type === "physical" ? (
                          <Lock className="w-4 h-4 text-neutral-400" />
                        ) : (
                          <Wifi className="w-4 h-4 text-neutral-400" />
                        )}
                        <div>
                          <p className="text-xs text-neutral-400 uppercase">{breach.type} BREACH</p>
                          <h3 className="text-sm font-medium text-white mt-1">{breach.target}</h3>
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded text-xs uppercase tracking-wider ${
                          breach.severity === "critical"
                            ? "bg-red-500/20 text-red-500"
                            : breach.severity === "high"
                              ? "bg-orange-500/20 text-orange-500"
                              : breach.severity === "medium"
                                ? "bg-yellow-500/20 text-yellow-500"
                                : "bg-neutral-500/20 text-neutral-300"
                        }`}
                      >
                        {breach.severity}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-neutral-500">{breach.timestamp}</span>
                      <span
                        className={`text-xs uppercase ${
                          breach.status === "active"
                            ? "text-red-500"
                            : breach.status === "investigating"
                              ? "text-orange-500"
                              : breach.status === "contained"
                                ? "text-yellow-500"
                                : "text-white"
                        }`}
                      >
                        {breach.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">
                  {selectedReport.title}
                </CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedReport.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedReport(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">STATUS</p>
                  <div className="flex items-center gap-2">
                    {selectedReport.status === "verified" ? (
                      <Check className="w-3 h-3 text-white" />
                    ) : (
                      <Eye className="w-3 h-3 text-orange-500" />
                    )}
                    <span
                      className={`text-sm uppercase ${
                        selectedReport.status === "verified" ? "text-white" : "text-orange-500"
                      }`}
                    >
                      {selectedReport.status}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">CLASSIFICATION</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedReport.classification === "top-secret"
                        ? "bg-red-500/20 text-red-500"
                        : selectedReport.classification === "secret"
                          ? "bg-orange-500/20 text-orange-500"
                          : "bg-neutral-500/20 text-neutral-300"
                    }`}
                  >
                    {selectedReport.classification}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">AGENT</p>
                  <div className="flex items-center gap-2">
                    <Key className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white">Agent {selectedReport.agent}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LOCATION</p>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white">{selectedReport.location}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Full Report</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  Download
                </Button>
                {selectedReport.status !== "verified" && (
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-white hover:bg-white/20 hover:text-white bg-transparent"
                  >
                    Verify Report
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Breach Detail Modal */}
      {selectedBreach && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">
                  {selectedBreach.type.toUpperCase()} BREACH
                </CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedBreach.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedBreach(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">TARGET</p>
                  <p className="text-sm text-white">{selectedBreach.target}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">SEVERITY</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedBreach.severity === "critical"
                        ? "bg-red-500/20 text-red-500"
                        : selectedBreach.severity === "high"
                          ? "bg-orange-500/20 text-orange-500"
                          : selectedBreach.severity === "medium"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-neutral-500/20 text-neutral-300"
                    }`}
                  >
                    {selectedBreach.severity}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">STATUS</p>
                  <span
                    className={`text-sm uppercase ${
                      selectedBreach.status === "active"
                        ? "text-red-500"
                        : selectedBreach.status === "investigating"
                          ? "text-orange-500"
                          : selectedBreach.status === "contained"
                            ? "text-yellow-500"
                            : "text-white"
                    }`}
                  >
                    {selectedBreach.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">DETECTED</p>
                  <p className="text-sm text-white font-mono">{selectedBreach.timestamp}</p>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Investigate</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  View Logs
                </Button>
                {selectedBreach.status === "active" && (
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-red-500 hover:bg-red-500/20 hover:text-red-400 bg-transparent"
                  >
                    Lockdown System
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
