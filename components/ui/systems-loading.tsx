import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface SystemsLoadingProps {
  className?: string
}

export function SystemsLoading({ className }: SystemsLoadingProps) {
  return (
    <div className={cn("p-6 space-y-6", className)}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">SYSTEMS MONITOR</h1>
          <p className="text-sm text-neutral-400">Infrastructure health and performance monitoring</p>
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-neutral-700 rounded w-28 animate-pulse"></div>
          <div className="h-10 bg-neutral-700 rounded w-32 animate-pulse"></div>
        </div>
      </div>

      {/* System Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-700 animate-pulse">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-700 rounded w-24"></div>
                  <div className="h-8 bg-neutral-700 rounded w-16"></div>
                </div>
                <div className="h-8 w-8 bg-neutral-700 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-700 animate-pulse cursor-pointer hover:border-orange-500/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 bg-neutral-700 rounded"></div>
                  <div className="space-y-1">
                    <div className="h-4 bg-neutral-700 rounded w-32"></div>
                    <div className="h-3 bg-neutral-700 rounded w-20"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-neutral-700 rounded"></div>
                  <div className="h-5 bg-neutral-700 rounded w-16"></div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-700 rounded w-8"></div>
                  <div className="h-2 bg-neutral-700 rounded w-full"></div>
                  <div className="h-3 bg-neutral-700 rounded w-8"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-700 rounded w-12"></div>
                  <div className="h-2 bg-neutral-700 rounded w-full"></div>
                  <div className="h-3 bg-neutral-700 rounded w-8"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-700 rounded w-12"></div>
                  <div className="h-2 bg-neutral-700 rounded w-full"></div>
                  <div className="h-3 bg-neutral-700 rounded w-8"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 bg-neutral-700 rounded w-12"></div>
                  <div className="h-3 bg-neutral-700 rounded w-16"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-3 bg-neutral-700 rounded w-16"></div>
                  <div className="h-3 bg-neutral-700 rounded w-20"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Loading Spinner with Message */}
      <div className="flex items-center justify-center h-32">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" />
          <div className="text-white text-sm">Loading systems data...</div>
        </div>
      </div>
    </div>
  )
}
