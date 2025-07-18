import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface OperationsLoadingProps {
  className?: string
}

export function OperationsLoading({ className }: OperationsLoadingProps) {
  return (
    <div className={cn("p-6 space-y-6", className)}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">OPERATIONS CENTER</h1>
          <p className="text-sm text-neutral-400">Mission planning and execution oversight</p>
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-neutral-700 rounded w-32 animate-pulse"></div>
          <div className="h-10 bg-neutral-700 rounded w-28 animate-pulse"></div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
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

      {/* Operations Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <Card key={i} className="bg-neutral-900 border-neutral-700 animate-pulse">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-700 rounded w-32"></div>
                  <div className="h-3 bg-neutral-700 rounded w-24"></div>
                </div>
                <div className="h-4 w-4 bg-neutral-700 rounded"></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="h-5 bg-neutral-700 rounded w-16"></div>
                <div className="h-5 bg-neutral-700 rounded w-12"></div>
              </div>

              <div className="h-4 bg-neutral-700 rounded w-full"></div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-neutral-700 rounded"></div>
                  <div className="h-3 bg-neutral-700 rounded w-20"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-neutral-700 rounded"></div>
                  <div className="h-3 bg-neutral-700 rounded w-24"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-neutral-700 rounded"></div>
                  <div className="h-3 bg-neutral-700 rounded w-28"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 bg-neutral-700 rounded w-16"></div>
                  <div className="h-3 bg-neutral-700 rounded w-8"></div>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2">
                  <div className="bg-neutral-700 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
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
          <div className="text-white text-sm">Loading operations...</div>
        </div>
      </div>
    </div>
  )
}
