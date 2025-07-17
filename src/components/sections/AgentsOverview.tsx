import { StatCard } from '@/components/common/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn, getStatusColor, getRiskColor } from '@/lib/utils';
import { agents } from '@/data/mockData';
import { Users, MapPin, Shield, Activity } from 'lucide-react';

export function AgentsOverview() {
  const activeAgents = agents.filter(a => a.status === 'active').length;
  const totalAgents = agents.length;
  const highRiskAgents = agents.filter(a => a.risk === 'high' || a.risk === 'critical').length;
  const onlineAgents = agents.filter(a => a.status !== 'offline').length;

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Agents"
          value={totalAgents.toString()}
          icon={Users}
          description="Deployed agents"
        />
        <StatCard
          title="Active Agents"
          value={activeAgents.toString()}
          icon={Activity}
          description="Currently active"
        />
        <StatCard
          title="High Risk"
          value={highRiskAgents.toString()}
          icon={Shield}
          description="Critical/High risk missions"
        />
        <StatCard
          title="Online"
          value={onlineAgents.toString()}
          icon={MapPin}
          description="Connected agents"
        />
      </div>

      {/* Agent Details */}
      <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white font-mono">Agent Status</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto glow-scrollbar">
          <div className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.id} className="p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white font-mono">{agent.name}</h3>
                  <Badge variant="outline" className={cn("font-mono", getStatusColor(agent.status))}>
                    {agent.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white ml-2 font-mono">{agent.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Mission:</span>
                    <span className="text-white ml-2 font-mono">{agent.mission}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400">Risk Level:</span>
                    <Badge variant="outline" className={cn("ml-2 font-mono", getRiskColor(agent.risk))}>
                      {agent.risk}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
