import { PrismaClient, AgentStatus, RiskLevel } from '../../app/generated/prisma'

export const agentSeeds = [
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
  },
  {
    name: "Phoenix Blade",
    location: "Singapore",
    mission: "Corporate Surveillance",
    risk: RiskLevel.high,
    status: AgentStatus.active
  },
  {
    name: "Digital Phantom",
    location: "Berlin",
    mission: "Infrastructure Assessment",
    risk: RiskLevel.low1,
    status: AgentStatus.offline
  },
  {
    name: "Neon Viper",
    location: "Los Angeles",
    mission: "Counter-Intelligence",
    risk: RiskLevel.critical,
    status: AgentStatus.active
  },
  {
    name: "Iron Wolf",
    location: "Moscow",
    mission: "Deep Cover Operations",
    risk: RiskLevel.high,
    status: AgentStatus.active
  },
  {
    name: "Quantum Echo",
    location: "London",
    mission: "Technical Reconnaissance",
    risk: RiskLevel.medium,
    status: AgentStatus.standby
  },
  {
    name: "Storm Wraith",
    location: "Dubai",
    mission: "Asset Recovery",
    risk: RiskLevel.high,
    status: AgentStatus.active
  },
  {
    name: "Void Stalker",
    location: "Hong Kong",
    mission: "Information Warfare",
    risk: RiskLevel.critical,
    status: AgentStatus.offline
  },
  {
    name: "Code Breaker",
    location: "San Francisco",
    mission: "Cryptographic Analysis",
    risk: RiskLevel.low1,
    status: AgentStatus.standby
  },
  {
    name: "Silent Strike",
    location: "Seoul",
    mission: "Tactical Operations",
    risk: RiskLevel.medium,
    status: AgentStatus.active
  },
  {
    name: "Dark Cipher",
    location: "Tel Aviv",
    mission: "Electronic Warfare",
    risk: RiskLevel.high,
    status: AgentStatus.active
  }
]

export async function seedAgents(prisma: PrismaClient) {
  await prisma.agent.deleteMany()
  return prisma.agent.createMany({ data: agentSeeds })
}
