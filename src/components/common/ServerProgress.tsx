import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface ServerProgressProps {
  value: number;
  className?: string;
  type?: 'cpu' | 'memory' | 'default';
}

export function ServerProgress({ value, className, type = 'default' }: ServerProgressProps) {
  const getProgressColor = (val: number, progressType: string) => {
    if (progressType === 'cpu') {
      if (val >= 80) return 'bg-gradient-to-r from-red-500 to-red-600';
      if (val >= 60) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      return 'bg-gradient-to-r from-green-500 to-emerald-500';
    }
    
    if (progressType === 'memory') {
      if (val >= 85) return 'bg-gradient-to-r from-red-500 to-red-600';
      if (val >= 70) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    }
    
    return 'bg-gradient-to-r from-cyan-400 to-blue-500';
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
            getProgressColor(value, type)
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
