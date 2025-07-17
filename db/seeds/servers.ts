import { PrismaClient, ServerStatus } from '../../app/generated/prisma'

export const serverSeeds = [
  {
    name: "Neo-Tokyo-01",
    status: ServerStatus.online,
    cpu: 85,
    memory: 64,
    location: "Neo-Tokyo"
  },
  {
    name: "Night-City-Edge",
    status: ServerStatus.maintenance,
    cpu: 32,
    memory: 128,
    location: "Night City"
  }
]

export async function seedServers(prisma: PrismaClient) {
  await prisma.server.deleteMany()
  return prisma.server.createMany({ data: serverSeeds })
}
