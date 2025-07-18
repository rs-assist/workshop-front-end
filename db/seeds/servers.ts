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
  }
]

export async function seedServers(prisma: PrismaClient) {
  await prisma.server.deleteMany()
  return prisma.server.createMany({ data: serverSeeds })
}
