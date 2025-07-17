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
  }
]

export async function seedAgents(prisma: PrismaClient) {
  await prisma.agent.deleteMany()
  return prisma.agent.createMany({ data: agentSeeds })
}
