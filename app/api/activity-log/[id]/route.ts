import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const log = await prisma.activityLog.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(log)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json()
  const log = await prisma.activityLog.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(log)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.activityLog.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ success: true })
}
