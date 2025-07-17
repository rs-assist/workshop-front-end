import { PrismaClient } from '../../app/generated/prisma'

const prisma = new PrismaClient()

async function verifyData() {
  try {
    // Query all tables and log results
    const servers = await prisma.server.findMany()
    console.log('\n=== Servers ===')
    console.table(servers)

    const agents = await prisma.agent.findMany()
    console.log('\n=== Agents ===')
    console.table(agents)

    const operations = await prisma.operation.findMany()
    console.log('\n=== Operations ===')
    console.table(operations)

    const intelligence = await prisma.intelligence.findMany()
    console.log('\n=== Intelligence ===')
    console.table(intelligence)

    const activityLogs = await prisma.activityLog.findMany()
    console.log('\n=== Activity Logs ===')
    console.table(activityLogs)

    // Additional verification queries
    const onlineServers = await prisma.server.count({
      where: { status: 'online' }
    })
    console.log('\n=== Verification Results ===')
    console.log(`Online servers: ${onlineServers}`)

    const activeAgents = await prisma.agent.count({
      where: { status: 'active' }
    })
    console.log(`Active agents: ${activeAgents}`)

    const criticalOps = await prisma.operation.count({
      where: { priority: 'critical' }
    })
    console.log(`Critical priority operations: ${criticalOps}`)

    const topSecretIntel = await prisma.intelligence.count({
      where: { classification: 'top_secret' }
    })
    console.log(`Top secret intelligence items: ${topSecretIntel}`)

  } catch (error) {
    console.error('Error verifying data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

verifyData()
