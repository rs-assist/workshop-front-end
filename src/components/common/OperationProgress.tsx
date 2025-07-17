import { cn } from "@/lib/utils";

interface OperationProgressProps {
  value: number;
  status: string;
  className?: string;
}

export function OperationProgress({ value, status, className }: OperationProgressProps) {
  const getProgressColor = (val: number, operationStatus: string) => {
    if (operationStatus === 'completed') {
      return 'bg-gradient-to-r from-green-500 to-emerald-500';
    }
    if (operationStatus === 'on-hold') {
      return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
    if (operationStatus === 'planning') {
      return 'bg-gradient-to-r from-yellow-500 to-amber-500';
    }
    
    // Active operations - color by progress
    if (val >= 80) return 'bg-gradient-to-r from-blue-500 to-indigo-500';
    if (val >= 50) return 'bg-gradient-to-r from-cyan-500 to-blue-500';
    return 'bg-gradient-to-r from-purple-500 to-cyan-500';
  };

  return (
    <div className="relative">
      <div className={cn(
        "bg-gray-800/50 relative h-2 w-full overflow-hidden rounded-full border border-gray-700/50",
        className
      )}>
        <div
          className={cn(
            "h-full transition-all duration-300 ease-out shadow-sm",
            getProgressColor(value, status)
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
