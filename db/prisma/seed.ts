import { PrismaClient } from '../../app/generated/prisma'
import { ServerStatus, RiskLevel, AgentStatus, OperationStatus, OperationPriority, Classification, ActivityType } from '../../app/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.activityLog.deleteMany()
  await prisma.intelligence.deleteMany()
  await prisma.operation.deleteMany()
  await prisma.agent.deleteMany()
  await prisma.server.deleteMany()

  // Create Servers
  await prisma.server.createMany({
    data: [
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
  })

  // Create Agents
  await prisma.agent.createMany({
    data: [
      {
        name: "Ghost Runner",
        location: "Neo-Tokyo",
        mission: "Network Infiltration",
        risk: RiskLevel.high,
        status: AgentStatus.active
      },
      {
        name: "Cyber Shadow",
        location: "Night City",
        mission: "Data Extraction",
        risk: RiskLevel.medium,
        status: AgentStatus.standby
      }
    ]
  })

  // Create Operations
  await prisma.operation.createMany({
    data: [
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
  })

  // Create Intelligence
  await prisma.intelligence.createMany({
    data: [
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
  })

  // Create Activity Logs
  await prisma.activityLog.createMany({
    data: [
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
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
