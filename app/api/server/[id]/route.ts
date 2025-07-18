import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const server = await prisma.server.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(server)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json()
  const server = await prisma.server.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(server)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.server.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ success: true })
}
