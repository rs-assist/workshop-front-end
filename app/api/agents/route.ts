import { NextRequest } from 'next/server'
import { prisma } from '../../lib/db'

// Get all agents
export async function GET(request: NextRequest) {
  const agents = await prisma.agent.findMany()
  return Response.json(agents)
}

// Create new agent
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body.name || !body.status || !body.location || !body.mission || !body.risk) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    const agent = await prisma.agent.create({
      data: {
        name: body.name,
        location: body.location,
        mission: body.mission,
        status: body.status,
        risk: body.risk
      }
    })
    return Response.json(agent, { status: 201 })
  } catch (error) {
    return Response.json({ error: 'Failed to create agent' }, { status: 500 })
  }
}
