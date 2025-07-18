import { NextRequest, NextResponse } from 'next/server'
import prisma from '../prisma'

export async function GET() {
  const operations = await prisma.operation.findMany()
  return NextResponse.json(operations)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const operation = await prisma.operation.create({ data })
  return NextResponse.json(operation)
}
