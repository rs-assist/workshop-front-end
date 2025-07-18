"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OptMissionChart() {
  return (
    <Card className="lg:col-span-8 bg-neutral-900 border-neutral-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
          MISSION ACTIVITY OVERVIEW
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 relative">
          {/* Chart Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-neutral-700"></div>
            ))}
          </div>

          {/* Chart Line */}
          <svg className="absolute inset-0 w-full h-full">
            <polyline
              points="0,120 50,100 100,110 150,90 200,95 250,85 300,100 350,80"
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
            />
            <polyline
              points="0,140 50,135 100,130 150,125 200,130 250,135 300,125 350,120"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-neutral-500 -ml-5 font-mono">
            <span>500</span>
            <span>400</span>
            <span>300</span>
            <span>200</span>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-neutral-500 -mb-6 font-mono">
            <span>Jan 28, 2025</span>
            <span>Feb 28, 2025</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
