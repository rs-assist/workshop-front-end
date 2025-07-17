import { PrismaClient, ActivityType } from '../../app/generated/prisma'

export const activityLogSeeds = [
  {
    time: new Date().toISOString(),
    event: "Agent Ghost Runner deployed to Neo-Tokyo",
    type: ActivityType.info
  },
  {
    time: new Date(Date.now() - 3600000).toISOString(),
    event: "Server Night-City-Edge entered maintenance mode",
    type: ActivityType.info
  }
]

export async function seedActivityLogs(prisma: PrismaClient) {
  await prisma.activityLog.deleteMany()
  return prisma.activityLog.createMany({ data: activityLogSeeds })
}
