export interface Server {
  id: number;
  name: string;
  status: 'online' | 'maintenance' | 'offline';
  cpu: number;
  memory: number;
  location: string;
}

export interface Agent {
  id: number;
  name: string;
  location: string;
  mission: string;
  risk: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'standby' | 'offline';
}

export interface Operation {
  id: number;
  name: string;
  status: 'active' | 'completed' | 'planning' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  description: string;
}

export interface Intelligence {
  id: number;
  title: string;
  location: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  classification: 'classified' | 'secret' | 'top-secret';
  sources: number;
}

export interface ActivityLog {
  time: string;
  event: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export type ActiveSection = 'system-overview' | 'agents-overview' | 'operations' | 'intelligence';
