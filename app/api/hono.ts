import { Hono } from 'hono'
import prisma from './prisma'
import { z } from 'zod'

const app = new Hono()

// Server CRUD
app.get('/server', async (c) => {
  const servers = await prisma.server.findMany()
  return c.json(servers)
})
app.post('/server', async (c) => {
  const data = await c.req.json()
  const server = await prisma.server.create({ data })
  return c.json(server)
})
app.get('/server/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const server = await prisma.server.findUnique({ where: { id } })
  return c.json(server)
})
app.put('/server/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const data = await c.req.json()
  const server = await prisma.server.update({ where: { id }, data })
  return c.json(server)
})
app.delete('/server/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await prisma.server.delete({ where: { id } })
  return c.json({ success: true })
})

// Agent CRUD
app.get('/agent', async (c) => {
  const agents = await prisma.agent.findMany()
  return c.json(agents)
})
app.post('/agent', async (c) => {
  const data = await c.req.json()
  const agent = await prisma.agent.create({ data })
  return c.json(agent)
})
app.get('/agent/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const agent = await prisma.agent.findUnique({ where: { id } })
  return c.json(agent)
})
app.put('/agent/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const data = await c.req.json()
  const agent = await prisma.agent.update({ where: { id }, data })
  return c.json(agent)
})
app.delete('/agent/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await prisma.agent.delete({ where: { id } })
  return c.json({ success: true })
})

// Operation CRUD
app.get('/operation', async (c) => {
  const operations = await prisma.operation.findMany()
  return c.json(operations)
})
app.post('/operation', async (c) => {
  const data = await c.req.json()
  const operation = await prisma.operation.create({ data })
  return c.json(operation)
})
app.get('/operation/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const operation = await prisma.operation.findUnique({ where: { id } })
  return c.json(operation)
})
app.put('/operation/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const data = await c.req.json()
  const operation = await prisma.operation.update({ where: { id }, data })
  return c.json(operation)
})
app.delete('/operation/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await prisma.operation.delete({ where: { id } })
  return c.json({ success: true })
})

// Intelligence CRUD
app.get('/intelligence', async (c) => {
  const intelligence = await prisma.intelligence.findMany()
  return c.json(intelligence)
})
app.post('/intelligence', async (c) => {
  const data = await c.req.json()
  const report = await prisma.intelligence.create({ data })
  return c.json(report)
})
app.get('/intelligence/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const report = await prisma.intelligence.findUnique({ where: { id } })
  return c.json(report)
})
app.put('/intelligence/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const data = await c.req.json()
  const report = await prisma.intelligence.update({ where: { id }, data })
  return c.json(report)
})
app.delete('/intelligence/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await prisma.intelligence.delete({ where: { id } })
  return c.json({ success: true })
})

// ActivityLog CRUD
app.get('/activity-log', async (c) => {
  const logs = await prisma.activityLog.findMany()
  return c.json(logs)
})
app.post('/activity-log', async (c) => {
  const data = await c.req.json()
  const log = await prisma.activityLog.create({ data })
  return c.json(log)
})
app.get('/activity-log/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const log = await prisma.activityLog.findUnique({ where: { id } })
  return c.json(log)
})
app.put('/activity-log/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const data = await c.req.json()
  const log = await prisma.activityLog.update({ where: { id }, data })
  return c.json(log)
})
app.delete('/activity-log/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await prisma.activityLog.delete({ where: { id } })
  return c.json({ success: true })
})

export default app
