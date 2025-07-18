import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const agent = await prisma.agent.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(agent)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json()
  const agent = await prisma.agent.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(agent)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.agent.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ success: true })
}
