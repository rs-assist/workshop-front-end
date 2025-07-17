import { useState } from 'react';
import { StatCard } from '@/components/common/StatCard';
import { OperationProgress } from '@/components/common/OperationProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn, getOperationStatusColor, getPriorityColor } from '@/lib/utils';
import { operations } from '@/data/mockData';
import { Shield, Play, Pause, CheckCircle, Eye } from 'lucide-react';

export function Operations() {
  const [selectedOperation, setSelectedOperation] = useState<typeof operations[0] | null>(null);
  
  const activeOperations = operations.filter(o => o.status === 'active').length;
  const totalOperations = operations.length;
  const completedOperations = operations.filter(o => o.status === 'completed').length;
  const criticalOperations = operations.filter(o => o.priority === 'critical').length;

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Operations"
          value={totalOperations.toString()}
          icon={Shield}
          description="All operations"
        />
        <StatCard
          title="Active Operations"
          value={activeOperations.toString()}
          icon={Play}
          description="Currently running"
        />
        <StatCard
          title="Completed"
          value={completedOperations.toString()}
          icon={CheckCircle}
          description="Successfully completed"
        />
        <StatCard
          title="Critical Priority"
          value={criticalOperations.toString()}
          icon={Pause}
          description="High priority ops"
        />
      </div>

      {/* Operations List */}
      <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white font-mono">Operations Status</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto glow-scrollbar">
          <div className="space-y-4">
            {operations.map((operation) => (
              <div key={operation.id} className="p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-white font-mono">{operation.name}</h3>
                    <Badge variant="outline" className={cn("font-mono", getOperationStatusColor(operation.status))}>
                      {operation.status}
                    </Badge>
                    <Badge variant="outline" className={cn("font-mono", getPriorityColor(operation.priority))}>
                      {operation.priority}
                    </Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:bg-cyan-400/20">
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black/90 border-gray-800 backdrop-blur-sm">
                      <DialogHeader>
                        <DialogTitle className="text-white font-mono">{operation.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-gray-400 text-sm">Status:</span>
                            <Badge variant="outline" className={cn("ml-2 font-mono", getOperationStatusColor(operation.status))}>
                              {operation.status}
                            </Badge>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Priority:</span>
                            <Badge variant="outline" className={cn("ml-2 font-mono", getPriorityColor(operation.priority))}>
                              {operation.priority}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Progress:</span>
                          <div className="mt-2">
                            <OperationProgress 
                              value={operation.progress} 
                              status={operation.status} 
                              className="h-2" 
                            />
                            <span className="text-white text-sm font-mono mt-1">{operation.progress}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Description:</span>
                          <p className="text-white text-sm mt-1 font-mono">{operation.description}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-mono">{operation.progress}%</span>
                  </div>
                  <OperationProgress 
                    value={operation.progress} 
                    status={operation.status} 
                    className="h-2" 
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
