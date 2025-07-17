import { Server, Agent, Operation, Intelligence, ActivityLog } from '@/types';

export const servers: Server[] = [
  { id: 1, name: "Alpha-01", status: "online", cpu: 45, memory: 67, location: "New York" },
  { id: 2, name: "Beta-02", status: "online", cpu: 23, memory: 34, location: "London" },
  { id: 3, name: "Gamma-03", status: "maintenance", cpu: 0, memory: 0, location: "Tokyo" },
  { id: 4, name: "Delta-04", status: "online", cpu: 78, memory: 89, location: "Berlin" },
  { id: 5, name: "Epsilon-05", status: "online", cpu: 56, memory: 72, location: "San Francisco" },
  { id: 6, name: "Zeta-06", status: "offline", cpu: 0, memory: 0, location: "Sydney" },
  { id: 7, name: "Eta-07", status: "online", cpu: 89, memory: 91, location: "Mumbai" },
  { id: 8, name: "Theta-08", status: "maintenance", cpu: 12, memory: 15, location: "Moscow" },
  { id: 9, name: "Iota-09", status: "online", cpu: 34, memory: 28, location: "Singapore" },
  { id: 10, name: "Kappa-10", status: "online", cpu: 67, memory: 73, location: "Toronto" },
];

export const agents: Agent[] = [
  { id: 1, name: "Agent Shadow", location: "Moscow", mission: "Data Extraction", risk: "high", status: "active" },
  { id: 2, name: "Agent Cipher", location: "Hong Kong", mission: "Surveillance", risk: "medium", status: "standby" },
  { id: 3, name: "Agent Phoenix", location: "Dubai", mission: "Infiltration", risk: "critical", status: "active" },
  { id: 4, name: "Agent Viper", location: "São Paulo", mission: "Counter-Intel", risk: "low", status: "offline" },
  { id: 5, name: "Agent Frost", location: "Stockholm", mission: "Cyber Defense", risk: "medium", status: "active" },
  { id: 6, name: "Agent Blade", location: "Seoul", mission: "Asset Recovery", risk: "high", status: "active" },
  { id: 7, name: "Agent Raven", location: "Cairo", mission: "Intelligence Gathering", risk: "critical", status: "standby" },
  { id: 8, name: "Agent Wolf", location: "Vancouver", mission: "Sabotage", risk: "high", status: "active" },
  { id: 9, name: "Agent Echo", location: "Bangkok", mission: "Deep Cover", risk: "medium", status: "active" },
  { id: 10, name: "Agent Storm", location: "Lagos", mission: "Extraction", risk: "low", status: "standby" },
];

export const operations: Operation[] = [
  { id: 1, name: "Operation Blackout", status: "active", priority: "high", progress: 75, description: "Cyber warfare operation targeting enemy infrastructure" },
  { id: 2, name: "Operation Phantom", status: "completed", priority: "medium", progress: 100, description: "Stealth reconnaissance mission in hostile territory" },
  { id: 3, name: "Operation Nexus", status: "planning", priority: "critical", progress: 15, description: "Major intelligence gathering operation" },
  { id: 4, name: "Operation Echo", status: "on-hold", priority: "low", progress: 60, description: "Communication disruption mission" },
];

export const intelligence: Intelligence[] = [
  { id: 1, title: "Threat Assessment Alpha", location: "Eastern Europe", priority: "high", classification: "top-secret", sources: 12 },
  { id: 2, title: "Economic Analysis Beta", location: "Asia-Pacific", priority: "medium", classification: "classified", sources: 8 },
  { id: 3, title: "Political Instability Report", location: "Middle East", priority: "critical", classification: "top-secret", sources: 25 },
  { id: 4, title: "Cyber Threat Landscape", location: "Global", priority: "high", classification: "secret", sources: 18 },
];

export const activityLog: ActivityLog[] = [
  { time: "14:32", event: "Server Alpha-01 backup completed", type: "info" },
  { time: "14:28", event: "Agent Shadow reported in", type: "success" },
  { time: "14:15", event: "Operation Blackout progress updated", type: "info" },
  { time: "14:02", event: "Security breach detected on Gamma-03", type: "error" },
  { time: "13:45", event: "Intelligence report classified", type: "warning" },
];
