import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MainContentProps {
  children: ReactNode;
  sidebarCollapsed: boolean;
}

export function MainContent({ children, sidebarCollapsed }: MainContentProps) {
  return (
    <main className={cn(
      "flex-1 overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300 ease-in-out",
      "relative h-full custom-scrollbar"
    )}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(6,182,212,0.03)_49%,_rgba(6,182,212,0.03)_51%,_transparent_52%)] bg-[length:20px_20px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-full">
        {children}
      </div>
    </main>
  );
}
