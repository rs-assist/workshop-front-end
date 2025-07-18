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
  },
  {
    time: new Date(Date.now() - 5400000).toISOString(),
    event: "Mission PHANTOM PROTOCOL completed successfully",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 7200000).toISOString(),
    event: "Security breach detected in Database Cluster Beta",
    type: ActivityType.warning
  },
  {
    time: new Date(Date.now() - 10800000).toISOString(),
    event: "Agent Shadow Walker lost communication",
    type: ActivityType.error
  },
  {
    time: new Date(Date.now() - 14400000).toISOString(),
    event: "New intelligence report received from Berlin",
    type: ActivityType.info
  },
  {
    time: new Date(Date.now() - 18000000).toISOString(),
    event: "Firewall upgrade completed successfully",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 21600000).toISOString(),
    event: "Agent Cyber Phantom extracted from Moscow",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 25200000).toISOString(),
    event: "Backup system synchronization warning",
    type: ActivityType.warning
  },
  {
    time: new Date(Date.now() - 28800000).toISOString(),
    event: "Operation DIGITAL SHADOW initiated",
    type: ActivityType.info
  }
]

export async function seedActivityLogs(prisma: PrismaClient) {
  await prisma.activityLog.deleteMany()
  return prisma.activityLog.createMany({ data: activityLogSeeds })
}
