"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Target, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface ExtendedOperation {
  id: number
  name: string
  displayId: string | null
  status: string
  priority: string
  description: string
  location: string
  agents: number
  estimatedCompletion: string
  progress: number
  parsedObjectives: string[]
  startDate: string
  objectives: string
}

interface OptListProps {
  operations: ExtendedOperation[]
  onSelectOperation: (operation: ExtendedOperation) => void
}

export function OptList({ operations, onSelectOperation }: OptListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-white/20 text-white"
      case "planning":
        return "bg-orange-500/20 text-orange-500"
      case "completed":
        return "bg-green-500/20 text-green-500"
      case "on_hold":
        return "bg-yellow-500/20 text-yellow-500"
      default:
        return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Target className="w-4 h-4" />
      case "planning":
        return <Clock className="w-4 h-4" />
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "on_hold":
        return <XCircle className="w-4 h-4" />
      default:
        return <AlertTriangle className="w-4 h-4" />
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {operations.map((operation) => (
        <Card
          key={operation.id}
          className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
          onClick={() => onSelectOperation(operation)}
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-sm font-bold text-white tracking-wider">{operation.name}</CardTitle>
                <p className="text-xs text-neutral-400 font-mono">{operation.displayId || `OP-${operation.id.toString().padStart(3, '0')}`}</p>
              </div>
              <div className="flex items-center gap-2">{getStatusIcon(operation.status)}</div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Badge className={getStatusColor(operation.status)}>{operation.status.toUpperCase()}</Badge>
              <Badge className={getPriorityColor(operation.priority)}>{operation.priority.toUpperCase()}</Badge>
            </div>

            <p className="text-sm text-neutral-300">{operation.description}</p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-3 h-3" />
                <span>{operation.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Users className="w-3 h-3" />
                <span>{operation.agents} agents assigned</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-3 h-3" />
                <span>Est. completion: {operation.estimatedCompletion}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Progress</span>
                <span className="text-white font-mono">{operation.progress}%</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${operation.progress}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
