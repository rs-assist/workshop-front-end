import { StatCard } from '@/components/common/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn, getClassificationColor, getPriorityColor } from '@/lib/utils';
import { intelligence } from '@/data/mockData';
import { Brain, FileText, Shield, Eye } from 'lucide-react';

export function Intelligence() {
  const totalReports = intelligence.length;
  const topSecretReports = intelligence.filter(i => i.classification === 'top-secret').length;
  const highPriorityReports = intelligence.filter(i => i.priority === 'high' || i.priority === 'critical').length;
  const totalSources = intelligence.reduce((acc, i) => acc + i.sources, 0);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Reports"
          value={totalReports.toString()}
          icon={FileText}
          description="Intelligence reports"
        />
        <StatCard
          title="Top Secret"
          value={topSecretReports.toString()}
          icon={Shield}
          description="Classified reports"
        />
        <StatCard
          title="High Priority"
          value={highPriorityReports.toString()}
          icon={Brain}
          description="Critical intelligence"
        />
        <StatCard
          title="Total Sources"
          value={totalSources.toString()}
          icon={Eye}
          description="Intelligence sources"
        />
      </div>

      {/* Intelligence Reports */}
      <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white font-mono">Intelligence Reports</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto glow-scrollbar">
          <div className="space-y-4">
            {intelligence.map((report) => (
              <div key={report.id} className="p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white font-mono">{report.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={cn("font-mono", getPriorityColor(report.priority))}>
                      {report.priority}
                    </Badge>
                    <Badge variant="outline" className={cn("font-mono", getClassificationColor(report.classification))}>
                      {report.classification}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white ml-2 font-mono">{report.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Sources:</span>
                    <span className="text-white ml-2 font-mono">{report.sources} sources</span>
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
