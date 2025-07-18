import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface IntelligenceLoadingProps {
  className?: string
}

export function IntelligenceLoading({ className }: IntelligenceLoadingProps) {
  return (
    <div className={cn("p-6 space-y-6", className)}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">INTELLIGENCE CENTER</h1>
          <p className="text-sm text-neutral-400">Classified reports and threat analysis</p>
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-neutral-700 rounded w-28 animate-pulse"></div>
          <div className="h-10 bg-neutral-700 rounded w-20 animate-pulse"></div>
        </div>
      </div>

      {/* Stats and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 bg-neutral-900 border-neutral-700 animate-pulse">
          <CardContent className="p-4">
            <div className="h-10 bg-neutral-700 rounded w-full"></div>
          </CardContent>
        </Card>

        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-700 animate-pulse">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-700 rounded w-20"></div>
                  <div className="h-8 bg-neutral-700 rounded w-12"></div>
                </div>
                <div className="h-8 w-8 bg-neutral-700 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Intelligence Reports Table */}
      <Card className="bg-neutral-900 border-neutral-700 animate-pulse">
        <CardHeader>
          <div className="h-4 bg-neutral-700 rounded w-40"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 py-2">
              <div className="col-span-4 h-3 bg-neutral-700 rounded"></div>
              <div className="col-span-2 h-3 bg-neutral-700 rounded"></div>
              <div className="col-span-2 h-3 bg-neutral-700 rounded"></div>
              <div className="col-span-2 h-3 bg-neutral-700 rounded"></div>
              <div className="col-span-2 h-3 bg-neutral-700 rounded"></div>
            </div>
            
            {/* Table Rows */}
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-3 border-b border-neutral-700">
                <div className="col-span-4 space-y-2">
                  <div className="h-4 bg-neutral-700 rounded w-full"></div>
                  <div className="h-3 bg-neutral-700 rounded w-24"></div>
                </div>
                <div className="col-span-2 h-5 bg-neutral-700 rounded w-20"></div>
                <div className="col-span-2 h-3 bg-neutral-700 rounded w-16"></div>
                <div className="col-span-2 h-5 bg-neutral-700 rounded w-16"></div>
                <div className="col-span-2 flex gap-2">
                  <div className="h-6 w-6 bg-neutral-700 rounded"></div>
                  <div className="h-6 w-6 bg-neutral-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Loading Spinner with Message */}
      <div className="flex items-center justify-center h-32">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" />
          <div className="text-white text-sm">Loading intelligence reports...</div>
        </div>
      </div>
    </div>
  )
}
