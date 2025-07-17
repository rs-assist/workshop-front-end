import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServerProgress } from '@/components/common/ServerProgress';
import { cn, getActivityLogColor, getStatusColor } from '@/lib/utils';
import { servers, activityLog } from '@/data/mockData';
import { ActiveSection } from '@/types';
import { Activity, BarChart3, Shield, Users, Zap, Server } from 'lucide-react';

interface SidebarProps {
  activeSection: ActiveSection;
  navigateToSection: (section: ActiveSection) => void;
  sidebarCollapsed: boolean;
}

export function Sidebar({ activeSection, navigateToSection, sidebarCollapsed }: SidebarProps) {
  const sidebarItems = [
    { id: 'system-overview' as ActiveSection, icon: BarChart3, label: 'System Overview' },
    { id: 'agents-overview' as ActiveSection, icon: Users, label: 'Agents' },
    { id: 'operations' as ActiveSection, icon: Shield, label: 'Operations' },
    { id: 'intelligence' as ActiveSection, icon: Zap, label: 'Intelligence' },
  ];

  return (
    <aside className={cn(
      "bg-black/50 backdrop-blur-sm border-r border-gray-800 transition-all duration-300 ease-in-out",
      "h-full overflow-y-auto custom-scrollbar",
      sidebarCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4">
        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-left transition-all duration-200 font-mono",
                activeSection === item.id
                  ? "bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50",
                sidebarCollapsed ? "px-2" : "px-4"
              )}
              onClick={() => navigateToSection(item.id)}
            >
              <item.icon className={cn("h-4 w-4", sidebarCollapsed ? "mr-0" : "mr-2")} />
              {!sidebarCollapsed && item.label}
            </Button>
          ))}
        </nav>

        {/* Server Status Widget */}
        {!sidebarCollapsed && (
          <div className="mt-8">
            <Card className="bg-black/50 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center text-gray-300 font-mono">
                  <Server className="h-4 w-4 mr-2" />
                  Server Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-32 overflow-y-auto thin-scrollbar">
                {servers.slice(0, 3).map((server) => (
                  <div key={server.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-mono">{server.name}</span>
                      <span className={cn("text-xs font-mono", getStatusColor(server.status))}>
                        {server.status}
                      </span>
                    </div>
                    <ServerProgress value={server.cpu} type="cpu" className="h-1" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Activity Log Widget */}
        {!sidebarCollapsed && (
          <div className="mt-4">
            <Card className="bg-black/50 border-gray-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center text-gray-300 font-mono">
                  <Activity className="h-4 w-4 mr-2" />
                  Activity Log
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 max-h-32 overflow-y-auto thin-scrollbar">
                {activityLog.slice(0, 4).map((log, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-xs text-gray-500 font-mono min-w-[35px]">{log.time}</span>
                    <span className={cn("text-xs font-mono", getActivityLogColor(log.type))}>
                      {log.event}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </aside>
  );
}
