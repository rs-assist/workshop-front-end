import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const operation = await prisma.operation.findUnique({ where: { id: Number(params.id) } })
  return NextResponse.json(operation)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json()
  const operation = await prisma.operation.update({ where: { id: Number(params.id) }, data })
  return NextResponse.json(operation)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.operation.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ success: true })
}
