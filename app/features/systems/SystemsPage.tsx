"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import {
  Activity,
  AlertTriangle,
  Box,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Lock,
  Network,
  Server,
  Settings,
  Shield,
  Wifi,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface SystemStatus {
  id: string
  name: string
  status: string
  load: number
  uptime: string
  lastCheck: string
  type: string
}

interface Alert {
  id: string
  type: string
  message: string
  severity: string
  timestamp: string
  status: string
}

export default function SystemsPage() {
  const [selectedSystem, setSelectedSystem] = useState<SystemStatus | null>(null)
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null)

  const systems: SystemStatus[] = [
    {
      id: "SYS-001",
      name: "MAIN SERVER CLUSTER",
      status: "operational",
      load: 67,
      uptime: "45d 12h 32m",
      lastCheck: "2 min ago",
      type: "server",
    },
    {
      id: "SYS-002",
      name: "BACKUP DATABASE",
      status: "operational",
      load: 42,
      uptime: "45d 12h 32m",
      lastCheck: "5 min ago",
      type: "database",
    },
    {
      id: "SYS-003",
      name: "SECURITY NETWORK",
      status: "degraded",
      load: 89,
      uptime: "15d 06h 45m",
      lastCheck: "1 min ago",
      type: "network",
    },
    {
      id: "SYS-004",
      name: "COMMS ARRAY",
      status: "operational",
      load: 55,
      uptime: "45d 12h 32m",
      lastCheck: "3 min ago",
      type: "communications",
    },
    {
      id: "SYS-005",
      name: "QUANTUM PROCESSOR",
      status: "maintenance",
      load: 0,
      uptime: "0d 0h 45m",
      lastCheck: "15 min ago",
      type: "processor",
    },
    {
      id: "SYS-006",
      name: "SATELLITE UPLINK",
      status: "operational",
      load: 72,
      uptime: "30d 08h 15m",
      lastCheck: "4 min ago",
      type: "communications",
    },
    {
      id: "SYS-007",
      name: "AI CORE",
      status: "operational",
      load: 95,
      uptime: "90d 00h 00m",
      lastCheck: "1 min ago",
      type: "processor",
    },
    {
      id: "SYS-008",
      name: "STORAGE ARRAY",
      status: "warning",
      load: 92,
      uptime: "45d 12h 32m",
      lastCheck: "6 min ago",
      type: "storage",
    },
  ]

  const alerts: Alert[] = [
    {
      id: "ALT-001",
      type: "performance",
      message: "High CPU usage detected on AI Core",
      severity: "warning",
      timestamp: "5 min ago",
      status: "active",
    },
    {
      id: "ALT-002",
      type: "security",
      message: "Unauthorized access attempt detected",
      severity: "critical",
      timestamp: "10 min ago",
      status: "investigating",
    },
    {
      id: "ALT-003",
      type: "hardware",
      message: "Storage capacity reaching critical levels",
      severity: "warning",
      timestamp: "15 min ago",
      status: "active",
    },
    {
      id: "ALT-004",
      type: "network",
      message: "Network latency above threshold",
      severity: "low",
      timestamp: "30 min ago",
      status: "resolved",
    },
  ]

  const getSystemIcon = (type: string) => {
    switch (type) {
      case "server":
        return Server
      case "database":
        return Database
      case "network":
        return Network
      case "communications":
        return Wifi
      case "processor":
        return Cpu
      case "storage":
        return HardDrive
      default:
        return Box
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">SYSTEMS</h1>
          <p className="text-sm text-neutral-400">Infrastructure & Network Status</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">System Diagnostics</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">SYSTEM STATUS</p>
                <p className="text-2xl font-bold text-white font-mono">ONLINE</p>
              </div>
              <Activity className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE ALERTS</p>
                <p className="text-2xl font-bold text-orange-500 font-mono">3</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">SECURITY</p>
                <p className="text-2xl font-bold text-white font-mono">HIGH</p>
              </div>
              <Shield className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">NETWORK</p>
                <p className="text-2xl font-bold text-white font-mono">92%</p>
              </div>
              <Globe className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Systems Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {systems.map((system) => {
            const SystemIcon = getSystemIcon(system.type)
            return (
              <Card
                key={system.id}
                className="bg-neutral-900 border-neutral-700 hover:bg-neutral-800 transition-colors cursor-pointer"
                onClick={() => setSelectedSystem(system)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div className="space-y-0.5">
                        <p className="text-xs text-neutral-400">{system.id}</p>
                        <h3 className="text-sm font-medium text-white tracking-wider">{system.name}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            system.status === "operational"
                              ? "bg-white"
                              : system.status === "degraded"
                                ? "bg-orange-500"
                                : system.status === "warning"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                          }`}
                        />
                        <span className="text-xs text-neutral-300 uppercase tracking-wider">{system.status}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-400">Load</span>
                          <span className="text-white">{system.load}%</span>
                        </div>
                        <Progress
                          value={system.load}
                          className={`h-1 ${
                            system.load > 90
                              ? "bg-red-500"
                              : system.load > 75
                                ? "bg-orange-500"
                                : system.load > 50
                                  ? "bg-yellow-500"
                                  : "bg-white"
                          }`}
                        />
                      </div>
                    </div>
                    <SystemIcon className="w-8 h-8 text-neutral-400" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Alerts */}
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">SYSTEM ALERTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                className={`border-l-4 ${
                  alert.severity === "critical"
                    ? "border-l-red-500 bg-red-500/10"
                    : alert.severity === "warning"
                      ? "border-l-orange-500 bg-orange-500/10"
                      : "border-l-white bg-white/5"
                }`}
                onClick={() => setSelectedAlert(alert)}
              >
                <div className="flex items-start gap-4 cursor-pointer">
                  <div
                    className={`p-1 rounded ${
                      alert.type === "security"
                        ? "bg-red-500/20 text-red-500"
                        : alert.type === "performance"
                          ? "bg-orange-500/20 text-orange-500"
                          : alert.type === "hardware"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-white/20 text-white"
                    }`}
                  >
                    {alert.type === "security" ? (
                      <Lock className="w-4 h-4" />
                    ) : alert.type === "performance" ? (
                      <Activity className="w-4 h-4" />
                    ) : alert.type === "hardware" ? (
                      <Server className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white tracking-wider">{alert.message}</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span
                        className={`text-xs uppercase ${
                          alert.status === "active"
                            ? "text-red-500"
                            : alert.status === "investigating"
                              ? "text-orange-500"
                              : "text-white"
                        }`}
                      >
                        {alert.status}
                      </span>
                      <span className="text-xs text-neutral-500">{alert.timestamp}</span>
                    </div>
                  </div>
                </div>
              </Alert>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* System Detail Modal */}
      {selectedSystem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">
                  {selectedSystem.name}
                </CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedSystem.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedSystem(null)}
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
                        selectedSystem.status === "operational"
                          ? "bg-white"
                          : selectedSystem.status === "degraded"
                            ? "bg-orange-500"
                            : selectedSystem.status === "warning"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                      }`}
                    />
                    <span className="text-sm text-white uppercase">{selectedSystem.status}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">TYPE</p>
                  <span className="text-sm text-white uppercase">{selectedSystem.type}</span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">UPTIME</p>
                  <p className="text-sm text-white font-mono">{selectedSystem.uptime}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LAST CHECK</p>
                  <p className="text-sm text-white font-mono">{selectedSystem.lastCheck}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">SYSTEM LOAD</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">{selectedSystem.load}%</span>
                    <span
                      className={`text-xs ${
                        selectedSystem.load > 90
                          ? "text-red-500"
                          : selectedSystem.load > 75
                            ? "text-orange-500"
                            : selectedSystem.load > 50
                              ? "text-yellow-500"
                              : "text-white"
                      }`}
                    >
                      {selectedSystem.load > 90
                        ? "CRITICAL"
                        : selectedSystem.load > 75
                          ? "HIGH"
                          : selectedSystem.load > 50
                            ? "MODERATE"
                            : "NORMAL"}
                    </span>
                  </div>
                  <Progress
                    value={selectedSystem.load}
                    className={`h-2 ${
                      selectedSystem.load > 90
                        ? "bg-red-500"
                        : selectedSystem.load > 75
                          ? "bg-orange-500"
                          : selectedSystem.load > 50
                            ? "bg-yellow-500"
                            : "bg-white"
                    }`}
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Run Diagnostics</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  View Logs
                </Button>
                {selectedSystem.status !== "operational" && (
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-red-500 hover:bg-red-500/20 hover:text-red-400 bg-transparent"
                  >
                    Emergency Shutdown
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Alert Detail Modal */}
      {selectedAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">System Alert</CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedAlert.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedAlert(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">TYPE</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedAlert.type === "security"
                        ? "bg-red-500/20 text-red-500"
                        : selectedAlert.type === "performance"
                          ? "bg-orange-500/20 text-orange-500"
                          : selectedAlert.type === "hardware"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-white/20 text-white"
                    }`}
                  >
                    {selectedAlert.type}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">SEVERITY</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedAlert.severity === "critical"
                        ? "bg-red-500/20 text-red-500"
                        : selectedAlert.severity === "warning"
                          ? "bg-orange-500/20 text-orange-500"
                          : "bg-white/20 text-white"
                    }`}
                  >
                    {selectedAlert.severity}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">STATUS</p>
                  <span
                    className={`text-sm uppercase ${
                      selectedAlert.status === "active"
                        ? "text-red-500"
                        : selectedAlert.status === "investigating"
                          ? "text-orange-500"
                          : "text-white"
                    }`}
                  >
                    {selectedAlert.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">DETECTED</p>
                  <p className="text-sm text-white font-mono">{selectedAlert.timestamp}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">MESSAGE</p>
                <p className="text-sm text-white">{selectedAlert.message}</p>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Investigate</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  View Details
                </Button>
                {selectedAlert.status === "active" && (
                  <Button
                    variant="outline"
                    className="border-neutral-700 text-red-500 hover:bg-red-500/20 hover:text-red-400 bg-transparent"
                  >
                    Silence Alert
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
