import { PrismaClient, OperationStatus, OperationPriority } from '../../app/generated/prisma'

export const operationSeeds = [
  {
    name: "Project BlackLight",
    status: OperationStatus.active,
    priority: OperationPriority.critical,
    progress: 75,
    description: "Critical infrastructure penetration testing",
    location: "Eastern Europe",
    agents: 5,
    startDate: "2025-06-15",
    estimatedCompletion: "2025-07-30",
    objectives: JSON.stringify(["Penetrate target network", "Extract sensitive data", "Maintain operational security"]),
    displayId: "OP-BLACKLIGHT-001"
  },
  {
    name: "Operation DarkStar",
    status: OperationStatus.planning,
    priority: OperationPriority.high,
    progress: 30,
    description: "Corporate database extraction mission",
    location: "Seoul",
    agents: 3,
    startDate: "2025-07-01",
    estimatedCompletion: "2025-08-15",
    objectives: JSON.stringify(["Identify entry points", "Map network architecture", "Execute extraction protocol"]),
    displayId: "OP-DARKSTAR-002"
  },
  {
    name: "Shadow Protocol",
    status: OperationStatus.active,
    priority: OperationPriority.critical,
    progress: 85,
    description: "High-value target surveillance in Moscow",
    location: "Moscow",
    agents: 6,
    startDate: "2025-05-20",
    estimatedCompletion: "2025-07-25",
    objectives: JSON.stringify(["Establish surveillance network", "Track target movements", "Gather intelligence"]),
    displayId: "OP-SHADOW-003"
  },
  {
    name: "Ghost Fire",
    status: OperationStatus.completed,
    priority: OperationPriority.medium,
    progress: 100,
    description: "Cybercrime network infiltration completed",
    location: "Berlin",
    agents: 2,
    startDate: "2025-04-10",
    estimatedCompletion: "2025-06-15",
    objectives: JSON.stringify(["Infiltrate network", "Identify key players", "Gather evidence"]),
    displayId: "OP-GHOSTFIRE-004"
  },
  {
    name: "Crimson Tide",
    status: OperationStatus.on_hold,
    priority: OperationPriority.high,
    progress: 40,
    description: "Asset extraction operation temporarily suspended",
    location: "Cairo",
    agents: 4,
    startDate: "2025-06-01",
    estimatedCompletion: "2025-08-01",
    objectives: JSON.stringify(["Secure extraction point", "Neutralize threats", "Extract asset safely"]),
    displayId: "OP-CRIMSON-005"
  }
]

export async function seedOperations(prisma: PrismaClient) {
  await prisma.operation.deleteMany()
  return prisma.operation.createMany({ data: operationSeeds })
}
