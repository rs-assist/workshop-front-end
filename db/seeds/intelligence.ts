import { PrismaClient, OperationPriority, Classification } from '../../app/generated/prisma'

export const intelligenceSeeds = [
  {
    title: "Corporate Defense Patterns",
    location: "Neo-Tokyo",
    priority: OperationPriority.high,
    classification: Classification.top_secret,
    sources: 5
  },
  {
    title: "Network Vulnerability Report",
    location: "Night City",
    priority: OperationPriority.medium,
    classification: Classification.secret,
    sources: 3
  }
]

export async function seedIntelligence(prisma: PrismaClient) {
  await prisma.intelligence.deleteMany()
  return prisma.intelligence.createMany({ data: intelligenceSeeds })
}
