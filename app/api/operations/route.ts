import { NextRequest } from 'next/server'
import { prisma } from '../../lib/db'

// Get all operations
export async function GET(request: NextRequest) {
  const operations = await prisma.operation.findMany()
  return Response.json(operations)
}

// Create new operation
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body.name || !body.status || !body.priority || !body.description || body.progress === undefined) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    const operation = await prisma.operation.create({
      data: {
        name: body.name,
        status: body.status,
        priority: body.priority,
        description: body.description,
        progress: body.progress
      }
    })
    return Response.json(operation, { status: 201 })
  } catch (error) {
    return Response.json({ error: 'Failed to create operation' }, { status: 500 })
  }
}
