import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'

// Get activity log by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const log = await prisma.activityLog.findUnique({
    where: { id }
  })

  if (!log) {
    return Response.json({ error: 'Activity log not found' }, { status: 404 })
  }
  return Response.json(log)
}

// Update activity log
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const body = await request.json()
  if (!body.time || !body.event || !body.type) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const log = await prisma.activityLog.update({
      where: { id },
      data: {
        time: body.time,
        event: body.event,
        type: body.type
      }
    })
    return Response.json(log)
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Activity log not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to update activity log' }, { status: 500 })
  }
}

// Delete activity log
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.activityLog.delete({
      where: { id }
    })
    return new Response(null, { status: 204 })
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Activity log not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to delete activity log' }, { status: 500 })
  }
}
