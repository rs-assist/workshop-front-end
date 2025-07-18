import { NextRequest, NextResponse } from 'next/server'
import prisma from '../prisma'

export async function GET() {
  const servers = await prisma.server.findMany()
  return NextResponse.json(servers)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const server = await prisma.server.create({ data })
  return NextResponse.json(server)
}
