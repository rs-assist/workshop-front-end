import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'

// Get operation by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const operation = await prisma.operation.findUnique({
    where: { id }
  })

  if (!operation) {
    return Response.json({ error: 'Operation not found' }, { status: 404 })
  }
  return Response.json(operation)
}

// Update operation
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const body = await request.json()
  if (!body.name || !body.status || !body.priority || !body.description || body.progress === undefined) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const operation = await prisma.operation.update({
      where: { id },
      data: {
        name: body.name,
        status: body.status,
        priority: body.priority,
        description: body.description,
        progress: body.progress
      }
    })
    return Response.json(operation)
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Operation not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to update operation' }, { status: 500 })
  }
}

// Delete operation
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.operation.delete({
      where: { id }
    })
    return new Response(null, { status: 204 })
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return Response.json({ error: 'Operation not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to delete operation' }, { status: 500 })
  }
}
