import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'

// Get server by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const server = await prisma.server.findUnique({
    where: { id }
  })

  if (!server) {
    return Response.json({ error: 'Server not found' }, { status: 404 })
  }
  return Response.json(server)
}

// Update server
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const body = await request.json()
  if (!body.name || !body.status || !body.location || body.cpu === undefined || body.memory === undefined) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const server = await prisma.server.update({
      where: { id },
      data: {
        name: body.name,
        location: body.location,
        status: body.status,
        cpu: body.cpu,
        memory: body.memory
      }
    })
    return Response.json(server)
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Server not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to update server' }, { status: 500 })
  }
}

// Delete server
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.server.delete({
      where: { id }
    })
    return new Response(null, { status: 204 })
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Server not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to delete server' }, { status: 500 })
  }
}
