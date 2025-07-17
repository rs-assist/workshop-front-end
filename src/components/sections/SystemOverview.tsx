import { StatCard } from '@/components/common/StatCard';
import { ServerProgress } from '@/components/common/ServerProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn, getStatusColor } from '@/lib/utils';
import { servers } from '@/data/mockData';
import { Server, Activity, Zap, HardDrive } from 'lucide-react';

export function SystemOverview() {
  const onlineServers = servers.filter(s => s.status === 'online').length;
  const totalServers = servers.length;
  const avgCpu = Math.round(servers.reduce((acc, s) => acc + s.cpu, 0) / servers.length);
  const avgMemory = Math.round(servers.reduce((acc, s) => acc + s.memory, 0) / servers.length);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Servers"
          value={totalServers.toString()}
          icon={Server}
          description="Active server instances"
        />
        <StatCard
          title="Online Servers"
          value={onlineServers.toString()}
          icon={Activity}
          description="Currently operational"
        />
        <StatCard
          title="Average CPU"
          value={`${avgCpu}%`}
          icon={Zap}
          description="Across all servers"
        />
        <StatCard
          title="Average Memory"
          value={`${avgMemory}%`}
          icon={HardDrive}
          description="Memory utilization"
        />
      </div>

      {/* Server Details */}
      <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white font-mono">Server Status</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto glow-scrollbar">
          <div className="space-y-6">
            {servers.map((server) => (
              <div key={server.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-white font-mono">{server.name}</h3>
                    <Badge variant="outline" className={cn("font-mono", getStatusColor(server.status))}>
                      {server.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">{server.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">CPU Usage</span>
                      <span className="text-white font-mono">{server.cpu}%</span>
                    </div>
                    <ServerProgress value={server.cpu} type="cpu" className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Memory Usage</span>
                      <span className="text-white font-mono">{server.memory}%</span>
                    </div>
                    <ServerProgress value={server.memory} type="memory" className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional test content to verify scrolling */}
      <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white font-mono">System Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-700 rounded-lg">
                <h4 className="text-cyan-400 font-mono text-sm mb-2">Network Traffic</h4>
                <p className="text-gray-300 text-sm">Current throughput: 2.3 GB/s</p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg">
                <h4 className="text-cyan-400 font-mono text-sm mb-2">Database Queries</h4>
                <p className="text-gray-300 text-sm">Avg response time: 15ms</p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg">
                <h4 className="text-cyan-400 font-mono text-sm mb-2">Active Connections</h4>
                <p className="text-gray-300 text-sm">Current sessions: 1,247</p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg">
                <h4 className="text-cyan-400 font-mono text-sm mb-2">System Load</h4>
                <p className="text-gray-300 text-sm">Average load: 0.78</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
