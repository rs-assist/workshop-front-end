"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function OptMissionInfo() {
  const missionStats = [
    { label: "Total Missions", value: "2,345", change: "+12%", status: "up" },
    { label: "Active Operations", value: "87", change: "+5%", status: "up" },
    { label: "Success Rate", value: "94.2%", change: "+1.2%", status: "up" },
    { label: "Avg Duration", value: "4h 32m", change: "-8m", status: "up" },
  ]

  const topMissions = [
    { name: "Operation Nightfall", status: "Active", priority: "Critical", progress: 85 },
    { name: "Project Shadowmere", status: "Planning", priority: "High", progress: 45 },
    { name: "Mission Blackout", status: "Active", priority: "Medium", progress: 72 },
  ]

  return (
    <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
          MISSION STATISTICS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {missionStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-xs text-neutral-500 uppercase tracking-wide">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-white font-mono">{stat.value}</span>
                <span className="text-xs text-green-400 font-mono">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Missions */}
        <div className="space-y-3">
          <h4 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Top Missions
          </h4>
          <div className="space-y-3">
            {topMissions.map((mission) => (
              <div key={mission.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-mono">{mission.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={mission.status === "Active" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {mission.status}
                    </Badge>
                    <Badge
                      variant={
                        mission.priority === "Critical"
                          ? "destructive"
                          : mission.priority === "High"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {mission.priority}
                    </Badge>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-neutral-800 rounded-full h-1.5">
                  <div
                    className="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${mission.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">Progress</span>
                  <span className="text-xs text-neutral-400 font-mono">{mission.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
