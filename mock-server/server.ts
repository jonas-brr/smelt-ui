import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/api/v1/overview/released', (c) => {
  return c.json([])
})

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('🚀 Mock server running at http://localhost:3000')
