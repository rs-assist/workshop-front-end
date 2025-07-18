import { NextRequest, NextResponse } from 'next/server'
import prisma from '../prisma'

export async function GET() {
  const logs = await prisma.activityLog.findMany()
  return NextResponse.json(logs)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const log = await prisma.activityLog.create({ data })
  return NextResponse.json(log)
}
