import { NextRequest } from 'next/server'
import { prisma } from '../../lib/db'

// Get all servers
export async function GET(request: NextRequest) {
  const servers = await prisma.server.findMany()
  return Response.json(servers)
}

// Create new server
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body.name || !body.status || !body.location || body.cpu === undefined || body.memory === undefined) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    const server = await prisma.server.create({
      data: {
        name: body.name,
        location: body.location,
        status: body.status,
        cpu: body.cpu,
        memory: body.memory
      }
    })
    return Response.json(server, { status: 201 })
  } catch (error) {
    return Response.json({ error: 'Failed to create server' }, { status: 500 })
  }
}
