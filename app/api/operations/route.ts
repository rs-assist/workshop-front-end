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
  
  // Validate required fields
  if (!body.name || !body.status || !body.priority || !body.description || 
      !body.location || body.agents === undefined || body.progress === undefined) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    const operation = await prisma.operation.create({
      data: {
        name: body.name,
        status: body.status,
        priority: body.priority,
        description: body.description,
        location: body.location,
        agents: body.agents,
        startDate: body.startDate || new Date().toISOString().split('T')[0],
        estimatedCompletion: body.estimatedCompletion || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        objectives: body.objectives || JSON.stringify([]),
        progress: body.progress,
        displayId: body.displayId || null
      }
    })
    return Response.json(operation, { status: 201 })
  } catch (error) {
    console.error('Error creating operation:', error)
    return Response.json({ error: 'Failed to create operation' }, { status: 500 })
  }
}
