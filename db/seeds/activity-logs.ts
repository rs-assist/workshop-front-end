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
  },
  {
    time: new Date(Date.now() - 32400000).toISOString(),
    event: "Agent Phoenix Blade deployed to Singapore",
    type: ActivityType.info
  },
  {
    time: new Date(Date.now() - 36000000).toISOString(),
    event: "Critical intelligence report received from Tel Aviv",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 39600000).toISOString(),
    event: "Server maintenance completed on SYS-005",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 43200000).toISOString(),
    event: "Unauthorized access attempt blocked",
    type: ActivityType.warning
  },
  {
    time: new Date(Date.now() - 46800000).toISOString(),
    event: "Agent Iron Wolf established secure comms",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 50400000).toISOString(),
    event: "Database encryption update failed",
    type: ActivityType.error
  },
  {
    time: new Date(Date.now() - 54000000).toISOString(),
    event: "Operation Silent Thunder progressing on schedule",
    type: ActivityType.info
  },
  {
    time: new Date(Date.now() - 57600000).toISOString(),
    event: "Agent Quantum Echo returned from London",
    type: ActivityType.success
  },
  {
    time: new Date(Date.now() - 61200000).toISOString(),
    event: "Network intrusion detected and contained",
    type: ActivityType.warning
  },
  {
    time: new Date(Date.now() - 64800000).toISOString(),
    event: "Agent Void Stalker communication compromised",
    type: ActivityType.error
  },
  {
    time: new Date(Date.now() - 68400000).toISOString(),
    event: "New threat assessment uploaded to intelligence database",
    type: ActivityType.info
  },
  {
    time: new Date(Date.now() - 72000000).toISOString(),
    event: "Operation Arctic Wolf entering final phase",
    type: ActivityType.info
  },
  {
    time: new Date(Date.now() - 75600000).toISOString(),
    event: "Server cluster performance optimization completed",
    type: ActivityType.success
  }
]

export async function seedActivityLogs(prisma: PrismaClient) {
  await prisma.activityLog.deleteMany()
  return prisma.activityLog.createMany({ data: activityLogSeeds })
}
