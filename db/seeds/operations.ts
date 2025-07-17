import { PrismaClient, OperationStatus, OperationPriority } from '../../app/generated/prisma'

export const operationSeeds = [
  {
    name: "Project BlackLight",
    status: OperationStatus.active,
    priority: OperationPriority.critical,
    progress: 75,
    description: "Critical infrastructure penetration testing"
  },
  {
    name: "Operation DarkStar",
    status: OperationStatus.planning,
    priority: OperationPriority.high,
    progress: 30,
    description: "Corporate database extraction mission"
  }
]

export async function seedOperations(prisma: PrismaClient) {
  await prisma.operation.deleteMany()
  return prisma.operation.createMany({ data: operationSeeds })
}
