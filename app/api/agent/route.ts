import { NextRequest, NextResponse } from 'next/server'
import prisma from '../prisma'

export async function GET() {
  const agents = await prisma.agent.findMany()
  return NextResponse.json(agents)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const agent = await prisma.agent.create({ data })
  return NextResponse.json(agent)
}
