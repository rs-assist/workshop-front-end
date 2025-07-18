"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface ExtendedOperation {
  id: number
  status: string
  objectives: string
}

interface OptStatsProps {
  operations: ExtendedOperation[]
}

export function OptStats({ operations }: OptStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">ACTIVE OPS</p>
              <p className="text-2xl font-bold text-white font-mono">
                {operations.filter(op => op.status === 'active').length}
              </p>
            </div>
            <Target className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">COMPLETED</p>
              <p className="text-2xl font-bold text-white font-mono">
                {operations.filter(op => op.status === 'completed').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">ON HOLD</p>
              <p className="text-2xl font-bold text-orange-500 font-mono">
                {operations.filter(op => op.status === 'on_hold').length}
              </p>
            </div>
            <XCircle className="w-8 h-8 text-orange-500" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider">SUCCESS RATE</p>
              <p className="text-2xl font-bold text-white font-mono">
                {operations.length > 0 ? Math.round((operations.filter(op => op.status === 'completed').length / operations.length) * 100) : 0}%
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
