import { NextRequest } from "next/server"
import { prisma } from '../../../lib/db'

// Get agent by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const agent = await prisma.agent.findUnique({
    where: { id }
  })

  if (!agent) {
    return Response.json({ error: 'Agent not found' }, { status: 404 })
  }
  return Response.json(agent)
}

// Update agent
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const body = await request.json()
  if (!body.name || !body.status || !body.location || !body.mission || !body.risk) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const agent = await prisma.agent.update({
      where: { id },
      data: {
        name: body.name,
        location: body.location,
        mission: body.mission,
        status: body.status,
        risk: body.risk
      }
    })
    return Response.json(agent)
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Agent not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to update agent' }, { status: 500 })
  }
}

// Delete agent
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.agent.delete({
      where: { id }
    })
    return new Response(null, { status: 204 })
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Agent not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to delete agent' }, { status: 500 })
  }
}
