import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const report = await prisma.intelligence.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(report)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json()
  const report = await prisma.intelligence.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(report)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.intelligence.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ success: true })
}
