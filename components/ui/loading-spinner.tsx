import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-orange-500",
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingCardProps {
  className?: string
}

export function LoadingCard({ className }: LoadingCardProps) {
  return (
    <div className={cn("bg-neutral-900 border border-neutral-700 rounded-lg p-4 animate-pulse", className)}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-4 bg-neutral-700 rounded w-1/3"></div>
          <div className="h-4 bg-neutral-700 rounded w-8"></div>
        </div>
        <div className="h-3 bg-neutral-700 rounded w-1/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-neutral-700 rounded w-full"></div>
          <div className="h-3 bg-neutral-700 rounded w-3/4"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-5 bg-neutral-700 rounded w-16"></div>
          <div className="h-5 bg-neutral-700 rounded w-12"></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 bg-neutral-700 rounded w-16"></div>
            <div className="h-3 bg-neutral-700 rounded w-8"></div>
          </div>
          <div className="h-2 bg-neutral-700 rounded w-full"></div>
        </div>
      </div>
    </div>
  )
}

interface LoadingStateProps {
  title: string
  description?: string
}

export function LoadingState({ title, description }: LoadingStateProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">{title}</h1>
          {description && <p className="text-sm text-neutral-400">{description}</p>}
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-neutral-700 rounded w-32 animate-pulse"></div>
          <div className="h-10 bg-neutral-700 rounded w-28 animate-pulse"></div>
        </div>
      </div>

      {/* Loading Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>

      {/* Loading Spinner with Message */}
      <div className="flex items-center justify-center h-32">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" />
          <div className="text-white text-sm">Loading data...</div>
        </div>
      </div>
    </div>
  )
}
