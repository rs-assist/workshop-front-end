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
  },
  {
    name: "Silent Thunder",
    status: OperationStatus.active,
    priority: OperationPriority.critical,
    progress: 65,
    description: "Multi-stage cyber warfare operation targeting military infrastructure",
    location: "Pentagon",
    agents: 8,
    startDate: "2025-05-01",
    estimatedCompletion: "2025-08-30",
    objectives: JSON.stringify(["Penetrate secure networks", "Map command structure", "Plant surveillance tools"]),
    displayId: "OP-THUNDER-006"
  },
  {
    name: "Digital Mirage",
    status: OperationStatus.planning,
    priority: OperationPriority.medium,
    progress: 15,
    description: "Corporate espionage targeting tech giants",
    location: "Silicon Valley",
    agents: 3,
    startDate: "2025-08-01",
    estimatedCompletion: "2025-10-15",
    objectives: JSON.stringify(["Identify insider assets", "Access R&D databases", "Extract intellectual property"]),
    displayId: "OP-MIRAGE-007"
  },
  {
    name: "Arctic Wolf",
    status: OperationStatus.active,
    priority: OperationPriority.high,
    progress: 90,
    description: "Intelligence gathering in harsh northern territories",
    location: "Murmansk",
    agents: 4,
    startDate: "2025-04-15",
    estimatedCompletion: "2025-07-20",
    objectives: JSON.stringify(["Establish listening posts", "Monitor naval activities", "Secure communication channels"]),
    displayId: "OP-ARCTIC-008"
  },
  {
    name: "Phantom Matrix",
    status: OperationStatus.on_hold,
    priority: OperationPriority.critical,
    progress: 25,
    description: "High-value target elimination mission - compromised",
    location: "Istanbul",
    agents: 6,
    startDate: "2025-03-01",
    estimatedCompletion: "2025-05-30",
    objectives: JSON.stringify(["Locate target", "Plan extraction route", "Execute elimination"]),
    displayId: "OP-PHANTOM-009"
  },
  {
    name: "Golden Eagle",
    status: OperationStatus.completed,
    priority: OperationPriority.medium,
    progress: 100,
    description: "Financial intelligence operation successfully completed",
    location: "Zurich",
    agents: 2,
    startDate: "2025-02-01",
    estimatedCompletion: "2025-04-30",
    objectives: JSON.stringify(["Infiltrate banking systems", "Track money flows", "Identify key accounts"]),
    displayId: "OP-EAGLE-010"
  },
  {
    name: "Neon Serpent",
    status: OperationStatus.active,
    priority: OperationPriority.high,
    progress: 55,
    description: "Underground network infiltration in cyberpunk metropolis",
    location: "Hong Kong",
    agents: 5,
    startDate: "2025-05-10",
    estimatedCompletion: "2025-08-10",
    objectives: JSON.stringify(["Map underground networks", "Identify key players", "Establish assets"]),
    displayId: "OP-SERPENT-011"
  },
  {
    name: "Steel Vanguard",
    status: OperationStatus.planning,
    priority: OperationPriority.low,
    progress: 10,
    description: "Industrial facility reconnaissance and assessment",
    location: "Detroit",
    agents: 2,
    startDate: "2025-09-01",
    estimatedCompletion: "2025-11-30",
    objectives: JSON.stringify(["Survey facility layout", "Assess security measures", "Identify vulnerabilities"]),
    displayId: "OP-VANGUARD-012"
  }
]

export async function seedOperations(prisma: PrismaClient) {
  await prisma.operation.deleteMany()
  return prisma.operation.createMany({ data: operationSeeds })
}
