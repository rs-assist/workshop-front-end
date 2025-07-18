"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import {
  Shield,
  AlertTriangle,
  Bell,
  MoreHorizontal,
  Target,
  Star,
  Terminal,
  Wifi,
  Activity,
  Check,
  Clock,
  Globe,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommandCenterPage() {
  const [selectedMission, setSelectedMission] = useState<any>(null)

  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "AGENT G-078W COMPROMISED",
      message: "Agent G-078W has missed their check-in window by 45 minutes.",
      timestamp: "5 min ago",
      severity: "high",
    },
    {
      id: 2,
      type: "info",
      title: "MISSION ALPHA-47 COMPLETED",
      message: "Agent G-079X has successfully completed the assigned mission.",
      timestamp: "15 min ago",
      severity: "low",
    },
    {
      id: 3,
      type: "warning",
      title: "UNUSUAL ACTIVITY DETECTED",
      message: "Multiple login attempts detected from unknown IP addresses.",
      timestamp: "22 min ago",
      severity: "medium",
    },
    {
      id: 4,
      type: "alert",
      title: "SECURITY BREACH",
      message: "Unauthorized access attempt at Facility B-12.",
      timestamp: "1 hour ago",
      severity: "high",
    },
  ]

  const missions = [
    {
      id: "M-001",
      name: "OPERATION SHADOW STRIKE",
      status: "active",
      agent: "G-078W",
      location: "Berlin",
      risk: "high",
      progress: 65,
      lastUpdate: "10 min ago",
    },
    {
      id: "M-002",
      name: "OPERATION GHOST PROTOCOL",
      status: "standby",
      agent: "G-079X",
      location: "Tokyo",
      risk: "medium",
      progress: 0,
      lastUpdate: "2 hours ago",
    },
    {
      id: "M-003",
      name: "OPERATION DARK HORIZON",
      status: "completed",
      agent: "G-080Y",
      location: "Moscow",
      risk: "high",
      progress: 100,
      lastUpdate: "1 day ago",
    },
    {
      id: "M-004",
      name: "OPERATION BLACK WIDOW",
      status: "failed",
      agent: "G-081Z",
      location: "Paris",
      risk: "critical",
      progress: 35,
      lastUpdate: "3 days ago",
    },
  ]

  const systems = [
    {
      id: 1,
      name: "COMMS NETWORK",
      status: "operational",
      icon: Wifi,
    },
    {
      id: 2,
      name: "MISSION DATABASE",
      status: "operational",
      icon: Terminal,
    },
    {
      id: 3,
      name: "AGENT TRACKING",
      status: "degraded",
      icon: Target,
    },
    {
      id: 4,
      name: "SECURITY SYSTEMS",
      status: "operational",
      icon: Shield,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">COMMAND CENTER</h1>
          <p className="text-sm text-neutral-400">Mission Control & Operations Hub</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">New Mission</Button>
          <Button variant="outline" className="border-neutral-700 text-neutral-400 hover:bg-neutral-800">
            <Bell className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systems.map((system) => (
          <Card key={system.id} className="bg-neutral-900 border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider">{system.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        system.status === "operational"
                          ? "bg-white"
                          : system.status === "degraded"
                            ? "bg-orange-500"
                            : "bg-red-500"
                      }`}
                    />
                    <p className="text-sm text-white uppercase">{system.status}</p>
                  </div>
                </div>
                <system.icon className="w-8 h-8 text-white" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications */}
        <Card className="lg:col-span-1 bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider flex items-center justify-between">
              ACTIVE ALERTS
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <Alert
                key={notification.id}
                className={`border-l-4 ${
                  notification.severity === "high"
                    ? "border-l-red-500 bg-red-500/10"
                    : notification.severity === "medium"
                      ? "border-l-orange-500 bg-orange-500/10"
                      : "border-l-white bg-white/5"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-1 rounded ${
                      notification.severity === "high"
                        ? "bg-red-500/20 text-red-500"
                        : notification.severity === "medium"
                          ? "bg-orange-500/20 text-orange-500"
                          : "bg-white/20 text-white"
                    }`}
                  >
                    {notification.type === "alert" ? (
                      <AlertTriangle className="w-4 h-4" />
                    ) : notification.type === "warning" ? (
                      <AlertTriangle className="w-4 h-4" />
                    ) : (
                      <Check className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white tracking-wider">{notification.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1">{notification.message}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      <span className="text-xs text-neutral-500">{notification.timestamp}</span>
                    </div>
                  </div>
                </div>
              </Alert>
            ))}
          </CardContent>
        </Card>

        {/* Mission Overview */}
        <Card className="lg:col-span-2 bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">MISSION OVERVIEW</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="space-y-4">
              <TabsList className="bg-neutral-800 border-neutral-700">
                <TabsTrigger value="active" className="data-[state=active]:bg-orange-500">
                  Active
                </TabsTrigger>
                <TabsTrigger value="standby" className="data-[state=active]:bg-orange-500">
                  Standby
                </TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-orange-500">
                  Completed
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                {missions
                  .filter((mission) => mission.status === "active")
                  .map((mission) => (
                    <Card
                      key={mission.id}
                      className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                      onClick={() => setSelectedMission(mission)}
                    >
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div className="lg:col-span-2">
                            <p className="text-xs text-neutral-400">{mission.id}</p>
                            <h3 className="text-sm font-medium text-white mt-1">{mission.name}</h3>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-2">
                                <Target className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">Agent {mission.agent}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{mission.location}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 mb-2">PROGRESS</p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-orange-500 rounded-full"
                                  style={{ width: `${mission.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-white">{mission.progress}%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 mb-2">STATUS</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Activity className="w-3 h-3 text-white" />
                                <span className="text-xs text-white uppercase">{mission.status}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(mission.risk === "critical" ? 3 : mission.risk === "high" ? 2 : 1)].map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        mission.risk === "critical"
                                          ? "text-red-500"
                                          : mission.risk === "high"
                                            ? "text-orange-500"
                                            : "text-white"
                                      }`}
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="standby" className="space-y-4">
                {missions
                  .filter((mission) => mission.status === "standby")
                  .map((mission) => (
                    <Card
                      key={mission.id}
                      className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                      onClick={() => setSelectedMission(mission)}
                    >
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div className="lg:col-span-2">
                            <p className="text-xs text-neutral-400">{mission.id}</p>
                            <h3 className="text-sm font-medium text-white mt-1">{mission.name}</h3>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-2">
                                <Target className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">Agent {mission.agent}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{mission.location}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 mb-2">PROGRESS</p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-orange-500 rounded-full"
                                  style={{ width: `${mission.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-white">{mission.progress}%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 mb-2">STATUS</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Activity className="w-3 h-3 text-neutral-500" />
                                <span className="text-xs text-neutral-500 uppercase">{mission.status}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(mission.risk === "critical" ? 3 : mission.risk === "high" ? 2 : 1)].map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        mission.risk === "critical"
                                          ? "text-red-500"
                                          : mission.risk === "high"
                                            ? "text-orange-500"
                                            : "text-white"
                                      }`}
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                {missions
                  .filter((mission) => mission.status === "completed" || mission.status === "failed")
                  .map((mission) => (
                    <Card
                      key={mission.id}
                      className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-colors cursor-pointer"
                      onClick={() => setSelectedMission(mission)}
                    >
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div className="lg:col-span-2">
                            <p className="text-xs text-neutral-400">{mission.id}</p>
                            <h3 className="text-sm font-medium text-white mt-1">{mission.name}</h3>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-2">
                                <Target className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">Agent {mission.agent}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-3 h-3 text-neutral-400" />
                                <span className="text-xs text-neutral-400">{mission.location}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 mb-2">PROGRESS</p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    mission.status === "completed" ? "bg-white" : "bg-red-500"
                                  }`}
                                  style={{ width: `${mission.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-white">{mission.progress}%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 mb-2">STATUS</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Activity
                                  className={`w-3 h-3 ${
                                    mission.status === "completed" ? "text-white" : "text-red-500"
                                  }`}
                                />
                                <span
                                  className={`text-xs uppercase ${
                                    mission.status === "completed" ? "text-white" : "text-red-500"
                                  }`}
                                >
                                  {mission.status}
                                </span>
                              </div>
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

      {/* Mission Details Modal */}
      {selectedMission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-white tracking-wider">
                  {selectedMission.name}
                </CardTitle>
                <p className="text-sm text-neutral-400 font-mono">{selectedMission.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedMission(null)}
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
                    <Activity
                      className={`w-3 h-3 ${
                        selectedMission.status === "completed"
                          ? "text-white"
                          : selectedMission.status === "failed"
                            ? "text-red-500"
                            : selectedMission.status === "active"
                              ? "text-white"
                              : "text-neutral-500"
                      }`}
                    />
                    <span
                      className={`text-sm uppercase ${
                        selectedMission.status === "completed"
                          ? "text-white"
                          : selectedMission.status === "failed"
                            ? "text-red-500"
                            : selectedMission.status === "active"
                              ? "text-white"
                              : "text-neutral-500"
                      }`}
                    >
                      {selectedMission.status}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">AGENT</p>
                  <div className="flex items-center gap-2">
                    <Target className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white">Agent {selectedMission.agent}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LOCATION</p>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white">{selectedMission.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider mb-1">LAST UPDATE</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <p className="text-sm text-white font-mono">{selectedMission.lastUpdate}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 tracking-wider mb-2">PROGRESS</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        selectedMission.status === "completed"
                          ? "bg-white"
                          : selectedMission.status === "failed"
                            ? "bg-red-500"
                            : "bg-orange-500"
                      }`}
                      style={{ width: `${selectedMission.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-white font-mono">{selectedMission.progress}%</span>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                {selectedMission.status === "active" && (
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
                      Abort Mission
                    </Button>
                  </>
                )}
                {selectedMission.status === "standby" && (
                  <>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Begin Mission</Button>
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                    >
                      Edit Details
                    </Button>
                  </>
                )}
                {(selectedMission.status === "completed" || selectedMission.status === "failed") && (
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
