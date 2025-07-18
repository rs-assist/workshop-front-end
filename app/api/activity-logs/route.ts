import { NextRequest } from 'next/server'
import { prisma } from '../../lib/db'

// Get all activity logs
export async function GET(request: NextRequest) {
  const logs = await prisma.activityLog.findMany({
    orderBy: {
      time: 'desc'
    }
  })
  return Response.json(logs)
}

// Create new activity log
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body.time || !body.event || !body.type) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    const log = await prisma.activityLog.create({
      data: {
        time: body.time,
        event: body.event,
        type: body.type
      }
    })
    return Response.json(log, { status: 201 })
  } catch (error) {
    return Response.json({ error: 'Failed to create activity log' }, { status: 500 })
  }
}
