import { PrismaClient, ServerStatus } from '../../app/generated/prisma'

export const serverSeeds = [
  {
    name: "COMMAND SERVER ALPHA",
    displayId: "SYS-001",
    type: "Primary Server",
    status: ServerStatus.online,
    health: 98,
    cpu: 45,
    memory: 67,
    storage: 34,
    uptime: "247 days",
    location: "Data Center 1",
    lastMaintenance: "2025-05-15"
  },
  {
    name: "DATABASE CLUSTER BETA",
    displayId: "SYS-002",
    type: "Database",
    status: ServerStatus.online,
    health: 95,
    cpu: 72,
    memory: 84,
    storage: 78,
    uptime: "189 days",
    location: "Data Center 2",
    lastMaintenance: "2025-06-01"
  },
  {
    name: "SECURITY GATEWAY",
    displayId: "SYS-003",
    type: "Firewall",
    status: ServerStatus.warning,
    health: 87,
    cpu: 23,
    memory: 45,
    storage: 12,
    uptime: "156 days",
    location: "DMZ",
    lastMaintenance: "2025-04-20"
  },
  {
    name: "COMMUNICATION HUB",
    displayId: "SYS-004",
    type: "Network",
    status: ServerStatus.online,
    health: 92,
    cpu: 38,
    memory: 52,
    storage: 23,
    uptime: "203 days",
    location: "Network Core",
    lastMaintenance: "2025-05-28"
  },
  {
    name: "BACKUP STORAGE ARRAY",
    displayId: "SYS-005",
    type: "Storage",
    status: ServerStatus.maintenance,
    health: 76,
    cpu: 15,
    memory: 28,
    storage: 89,
    uptime: "0 days",
    location: "Backup Facility",
    lastMaintenance: "2025-06-17"
  },
  {
    name: "ANALYTICS ENGINE",
    displayId: "SYS-006",
    type: "Processing",
    status: ServerStatus.online,
    health: 94,
    cpu: 89,
    memory: 76,
    storage: 45,
    uptime: "134 days",
    location: "Data Center 1",
    lastMaintenance: "2025-05-10"
  },
  {
    name: "QUANTUM PROCESSOR ARRAY",
    displayId: "SYS-007",
    type: "Quantum Computing",
    status: ServerStatus.online,
    health: 99,
    cpu: 23,
    memory: 41,
    storage: 12,
    uptime: "398 days",
    location: "Data Center 3",
    lastMaintenance: "2025-04-20"
  },
  {
    name: "NEURAL NETWORK CLUSTER",
    displayId: "SYS-008",
    type: "AI Processing",
    status: ServerStatus.maintenance,
    health: 87,
    cpu: 0,
    memory: 0,
    storage: 67,
    uptime: "0 days",
    location: "Data Center 2",
    lastMaintenance: "2025-07-18"
  },
  {
    name: "SURVEILLANCE HUB",
    displayId: "SYS-009",
    type: "Monitoring",
    status: ServerStatus.online,
    health: 96,
    cpu: 56,
    memory: 73,
    storage: 89,
    uptime: "203 days",
    location: "Data Center 4",
    lastMaintenance: "2025-06-05"
  },
  {
    name: "ENCRYPTION GATEWAY",
    displayId: "SYS-010",
    type: "Security",
    status: ServerStatus.offline,
    health: 45,
    cpu: 0,
    memory: 0,
    storage: 34,
    uptime: "0 days",
    location: "Data Center 1",
    lastMaintenance: "2025-07-17"
  },
  {
    name: "COMMUNICATION RELAY",
    displayId: "SYS-011",
    type: "Network",
    status: ServerStatus.online,
    health: 91,
    cpu: 67,
    memory: 58,
    storage: 23,
    uptime: "156 days",
    location: "Data Center 2",
    lastMaintenance: "2025-05-25"
  },
  {
    name: "THREAT ANALYSIS SYSTEM",
    displayId: "SYS-012",
    type: "Security",
    status: ServerStatus.online,
    health: 93,
    cpu: 78,
    memory: 82,
    storage: 56,
    uptime: "287 days",
    location: "Data Center 3",
    lastMaintenance: "2025-04-15"
  },
  {
    name: "DISTRIBUTED CACHE CLUSTER",
    displayId: "SYS-013",
    type: "Cache",
    status: ServerStatus.maintenance,
    health: 88,
    cpu: 15,
    memory: 25,
    storage: 78,
    uptime: "2 days",
    location: "Data Center 4",
    lastMaintenance: "2025-07-16"
  }
]

export async function seedServers(prisma: PrismaClient) {
  await prisma.server.deleteMany()
  return prisma.server.createMany({ data: serverSeeds })
}
