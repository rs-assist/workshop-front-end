"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ActivityLog {
  id: number
  time: string
  event: string
  type: string
}

interface AgtActivityLogProps {
  activityLogs: ActivityLog[]
}

export function AgtActivityLog({ activityLogs }: AgtActivityLogProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500'
      case 'warning': return 'border-orange-500'
      case 'error': return 'border-red-500'
      default: return 'border-orange-500'
    }
  }

  return (
    <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">ACTIVITY LOG</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {activityLogs.slice(0, 8).map((log) => {
            const logTime = new Date(log.time).toLocaleString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
            
            return (
              <div
                key={log.id}
                className={`text-xs border-l-2 ${getTypeColor(log.type)} pl-3 hover:bg-neutral-800 p-2 rounded transition-colors`}
              >
                <div className="text-neutral-500 font-mono">{logTime}</div>
                <div className="text-white">
                  {log.event.split(/(Agent [A-Z][a-z]+ [A-Z][a-z]+|Agent [A-Z][a-z]+)/).map((part, index) => {
                    if (part.startsWith('Agent ')) {
                      return (
                        <span key={index} className="text-orange-500 font-mono">
                          {part}
                        </span>
                      )
                    }
                    return part
                  })}
                </div>
              </div>
            )
          })}
          {activityLogs.length === 0 && (
            <div className="text-xs text-neutral-500 text-center py-8">
              No activity logs available
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
