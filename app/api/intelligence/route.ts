import { NextRequest, NextResponse } from 'next/server'
import prisma from '../prisma'

export async function GET() {
  const intelligence = await prisma.intelligence.findMany()
  return NextResponse.json(intelligence)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const report = await prisma.intelligence.create({ data })
  return NextResponse.json(report)
}
