import { PrismaClient } from '../../app/generated/prisma'
import { seedServers } from './servers'
import { seedAgents } from './agents'
import { seedOperations } from './operations'
import { seedIntelligence } from './intelligence'
import { seedActivityLogs } from './activity-logs'

const prisma = new PrismaClient()

async function main() {
  await seedActivityLogs(prisma)
  await seedIntelligence(prisma)
  await seedOperations(prisma)
  await seedAgents(prisma)
  await seedServers(prisma)
  console.log('All seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
