"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import {
  Activity,
  AlertTriangle,
  Clock,
  Filter,
  Globe,
  MapPin,
  MoreHorizontal,
  Star,
  Target,
  Wifi,
} from "lucide-react"

interface Operation {
  id: string
  name: string
  status: string
  agent: string
  location: string
  risk: string
  progress: number
  lastUpdate: string
  type: string
}

export default function OperationsPage() {
  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null)

  const operations: Operation[] = [
    {
      id: "OP-001",
      name: "OPERATION MIDNIGHT SURGE",
      status: "active",
      agent: "G-078W",
      location: "Berlin",
      risk: "high",
      progress: 65,
      lastUpdate: "10 min ago",
      type: "infiltration",
    },
    {
      id: "OP-002",
      name: "OPERATION SILENT ECHO",
      status: "standby",
      agent: "G-079X",
      location: "Tokyo",
      risk: "medium",
      progress: 0,
      lastUpdate: "2 hours ago",
      type: "surveillance",
    },
    {
      id: "OP-003",
      name: "OPERATION CRYSTAL SHIELD",
      status: "completed",
      agent: "G-080Y",
      location: "Moscow",
      risk: "high",
      progress: 100,
      lastUpdate: "1 day ago",
      type: "defense",
    },
    {
      id: "OP-004",
      name: "OPERATION SHADOW PROTOCOL",
      status: "failed",
      agent: "G-081Z",
      location: "Paris",
      risk: "critical",
      progress: 35,
      lastUpdate: "3 days ago",
      type: "extraction",
    },
    {
      id: "OP-005",
      name: "OPERATION GHOST WIRE",
      status: "active",
      agent: "G-082A",
      location: "London",
      risk: "medium",
      progress: 78,
      lastUpdate: "30 min ago",
      type: "cyber",
    },
    {
      id: "OP-006",
      name: "OPERATION DARK HORIZON",
      status: "active",
      agent: "G-083B",
      location: "New York",
      risk: "high",
      progress: 42,
      lastUpdate: "1 hour ago",
      type: "infiltration",
    },
    {
      id: "OP-007",
      name: "OPERATION SILENT STORM",
      status: "standby",
      agent: "G-084C",
      location: "Hong Kong",
      risk: "medium",
      progress: 0,
      lastUpdate: "5 hours ago",
      type: "surveillance",
    },
    {
      id: "OP-008",
      name: "OPERATION QUANTUM BREACH",
      status: "completed",
      agent: "G-085D",
      location: "Singapore",
      risk: "high",
      progress: 100,
      lastUpdate: "2 days ago",
      type: "cyber",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">OPERATIONS</h1>
          <p className="text-sm text-neutral-400">Field Operations & Mission Status</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">New Operation</Button>
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
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE OPS</p>
                <p className="text-2xl font-bold text-white font-mono">3</p>
              </div>
              <Activity className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">AGENTS DEPLOYED</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">8</p>
              </div>
              <Target className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">NETWORK STATUS</p>
                <p className="text-2xl font-bold text-white font-mono">OK</p>
              </div>
              <Wifi className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ALERTS</p>
                <p className="text-2xl font-bold text-red-500 font-mono">2</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Operations List */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
            ACTIVE OPERATIONS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">
                    OPERATION ID
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">NAME</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">TYPE</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">STATUS</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">AGENT</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">LOCATION</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">PROGRESS</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">RISK</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {operations.map((operation, index) => (
                  <tr
                    key={operation.id}
                    className={`border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer ${
                      index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-850"
                    }`}
                    onClick={() => setSelectedOperation(operation)}
                  >
                    <td className="py-3 px-4 text-sm text-white font-mono">{operation.id}</td>
                    <td className="py-3 px-4 text-sm text-white">{operation.name}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                          operation.type === "infiltration"
                            ? "bg-orange-500/20 text-orange-500"
                            : operation.type === "surveillance"
                              ? "bg-neutral-500/20 text-neutral-300"
                              : operation.type === "defense"
                                ? "bg-white/20 text-white"
                                : operation.type === "cyber"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {operation.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            operation.status === "active"
                              ? "bg-white"
                              : operation.status === "standby"
                                ? "bg-neutral-500"
                                : operation.status === "completed"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                          }`}
                        ></div>
                        <span className="text-xs text-neutral-300 uppercase tracking-wider">
                          {operation.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Target className="w-3 h-3 text-neutral-400" />
                        <span className="text-sm text-neutral-300">{operation.agent}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span className="text-sm text-neutral-300">{operation.location}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 w-24 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              operation.status === "completed"
                                ? "bg-white"
                                : operation.status === "failed"
                                  ? "bg-red-500"
                                  : "bg-orange-500"
                            }`}
                            style={{ width: `${operation.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-white font-mono">{operation.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {[...Array(operation.risk === "critical" ? 3 : operation.risk === "high" ? 2 : 1)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                operation.risk === "critical"
                                  ? "text-red-500"
                                  : operation.risk === "high"
                                    ? "text-orange-500"
                                    : "text-white"
                              }`}
                            />
                          ),
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Operation Detail Modal */}
      {selectedOperation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">
                  {selectedOperation.name}
                </CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedOperation.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedOperation(null)}
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
                    <div
                      className={`w-2 h-2 rounded-full ${
                        selectedOperation.status === "active"
                          ? "bg-white"
                          : selectedOperation.status === "standby"
                            ? "bg-neutral-500"
                            : selectedOperation.status === "completed"
                              ? "bg-green-500"
                              : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm text-white uppercase">{selectedOperation.status}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">TYPE</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedOperation.type === "infiltration"
                        ? "bg-orange-500/20 text-orange-500"
                        : selectedOperation.type === "surveillance"
                          ? "bg-neutral-500/20 text-neutral-300"
                          : selectedOperation.type === "defense"
                            ? "bg-white/20 text-white"
                            : selectedOperation.type === "cyber"
                              ? "bg-blue-500/20 text-blue-500"
                              : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {selectedOperation.type}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">AGENT</p>
                  <div className="flex items-center gap-2">
                    <Target className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white">Agent {selectedOperation.agent}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LOCATION</p>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white">{selectedOperation.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LAST UPDATE</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white font-mono">{selectedOperation.lastUpdate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">RISK LEVEL</p>
                  <div className="flex items-center gap-1">
                    {[...Array(selectedOperation.risk === "critical" ? 3 : selectedOperation.risk === "high" ? 2 : 1)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            selectedOperation.risk === "critical"
                              ? "text-red-500"
                              : selectedOperation.risk === "high"
                                ? "text-orange-500"
                                : "text-white"
                          }`}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">PROGRESS</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        selectedOperation.status === "completed"
                          ? "bg-white"
                          : selectedOperation.status === "failed"
                            ? "bg-red-500"
                            : "bg-orange-500"
                      }`}
                      style={{ width: `${selectedOperation.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-white font-mono">{selectedOperation.progress}%</span>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                {selectedOperation.status === "active" && (
                  <>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Update Status</Button>
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                    >
                      Contact Agent
                    </Button>
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-red-500 hover:bg-red-500/20 hover:text-red-400 bg-transparent"
                    >
                      Abort Operation
                    </Button>
                  </>
                )}
                {selectedOperation.status === "standby" && (
                  <>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Begin Operation</Button>
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                    >
                      Edit Details
                    </Button>
                  </>
                )}
                {(selectedOperation.status === "completed" || selectedOperation.status === "failed") && (
                  <>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Report</Button>
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                    >
                      Download Logs
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
