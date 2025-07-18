import { PrismaClient } from '../../app/generated/prisma'
import { ServerStatus, RiskLevel, AgentStatus, OperationStatus, OperationPriority, Classification, ActivityType, IntelligenceSource, IntelligenceStatus, ThreatLevel } from '../../app/generated/prisma'

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
        name: "COMMAND SERVER ALPHA",
        status: ServerStatus.online,
        cpu: 45,
        memory: 67,
        location: "Data Center 1",
        type: "Primary Server",
        health: 98,
        storage: 34,
        uptime: "247 days",
        lastMaintenance: "2025-05-15",
        displayId: "SYS-001"
      },
      {
        name: "DATABASE CLUSTER BETA",
        status: ServerStatus.online,
        cpu: 72,
        memory: 84,
        location: "Data Center 2",
        type: "Database",
        health: 95,
        storage: 78,
        uptime: "189 days",
        lastMaintenance: "2025-06-01",
        displayId: "SYS-002"
      },
      {
        name: "SECURITY GATEWAY",
        status: ServerStatus.warning,
        cpu: 23,
        memory: 45,
        location: "DMZ",
        type: "Firewall",
        health: 87,
        storage: 12,
        uptime: "156 days",
        lastMaintenance: "2025-04-20",
        displayId: "SYS-003"
      },
      {
        name: "COMMUNICATION HUB",
        status: ServerStatus.online,
        cpu: 38,
        memory: 52,
        location: "Network Core",
        type: "Network",
        health: 92,
        storage: 23,
        uptime: "203 days",
        lastMaintenance: "2025-05-28",
        displayId: "SYS-004"
      },
      {
        name: "BACKUP STORAGE ARRAY",
        status: ServerStatus.maintenance,
        cpu: 15,
        memory: 28,
        location: "Backup Facility",
        type: "Storage",
        health: 76,
        storage: 89,
        uptime: "0 days",
        lastMaintenance: "2025-06-17",
        displayId: "SYS-005"
      },
      {
        name: "ANALYTICS ENGINE",
        status: ServerStatus.online,
        cpu: 89,
        memory: 76,
        location: "Data Center 1",
        type: "Processing",
        health: 94,
        storage: 45,
        uptime: "134 days",
        lastMaintenance: "2025-05-10",
        displayId: "SYS-006"
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
  })

  // Create Intelligence
  await prisma.intelligence.createMany({
    data: [
      {
        title: "CYBERCRIME NETWORK ANALYSIS",
        location: "Eastern Europe",
        priority: OperationPriority.high,
        classification: Classification.top_secret,
        sources: 5,
        source: IntelligenceSource.SIGINT,
        date: "2025-06-17",
        status: IntelligenceStatus.verified,
        threat: ThreatLevel.high,
        summary: "Detailed analysis of emerging cybercrime syndicate operating across multiple jurisdictions",
        tags: JSON.stringify(["cybercrime", "international", "financial"]),
        displayId: "INT-2025-001"
      },
      {
        title: "ROGUE AGENT COMMUNICATIONS",
        location: "Berlin",
        priority: OperationPriority.critical,
        classification: Classification.secret,
        sources: 3,
        source: IntelligenceSource.HUMINT,
        date: "2025-06-16",
        status: IntelligenceStatus.pending,
        threat: ThreatLevel.critical,
        summary: "Intercepted communications suggesting potential security breach in European operations",
        tags: JSON.stringify(["internal", "security", "communications"]),
        displayId: "INT-2025-002"
      },
      {
        title: "ARMS TRAFFICKING ROUTES",
        location: "Middle East",
        priority: OperationPriority.medium,
        classification: Classification.classified,
        sources: 4,
        source: IntelligenceSource.OSINT,
        date: "2025-06-15",
        status: IntelligenceStatus.verified,
        threat: ThreatLevel.medium,
        summary: "Updated intelligence on weapons smuggling corridors through Mediterranean region",
        tags: JSON.stringify(["trafficking", "weapons", "maritime"]),
        displayId: "INT-2025-003"
      },
      {
        title: "TERRORIST CELL SURVEILLANCE",
        location: "North Africa",
        priority: OperationPriority.critical,
        classification: Classification.top_secret,
        sources: 6,
        source: IntelligenceSource.HUMINT,
        date: "2025-06-14",
        status: IntelligenceStatus.active,
        threat: ThreatLevel.critical,
        summary: "Ongoing surveillance of suspected terrorist cell planning coordinated attacks",
        tags: JSON.stringify(["terrorism", "surveillance", "coordinated"]),
        displayId: "INT-2025-004"
      },
      {
        title: "DIPLOMATIC INTELLIGENCE BRIEF",
        location: "Asia Pacific",
        priority: OperationPriority.low,
        classification: Classification.secret,
        sources: 2,
        source: IntelligenceSource.DIPLOMATIC,
        date: "2025-06-13",
        status: IntelligenceStatus.verified,
        threat: ThreatLevel.low,
        summary: "Political developments affecting regional security and operational considerations",
        tags: JSON.stringify(["diplomatic", "political", "regional"]),
        displayId: "INT-2025-005"
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
