import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
}

export function StatCard({ title, value, icon: Icon, description }: StatCardProps) {
  return (
    <Card className="bg-black/50 border-gray-800 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
        <Icon className="h-4 w-4 text-cyan-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white font-mono">{value}</div>
        <p className="text-xs text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
