import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { HTTPException } from 'hono/http-exception'

import { productIncrements, products } from './mocks/product'

const app = new Hono()

app.get('/api/v1/basic/products', (c) => {
  const search = c.req.query('search')
  let filtered = [...products]
  
  if (search) {
   filtered = filtered.filter(product => product.name.includes(search) || product.cpe.includes(search))
  }

  return c.json({
    count: filtered.length,
    next: null,
    previous: null,
    results: filtered
  })
})

app.get('/api/v1/basic/products/:id', (c) => {
  const id = c.req.param('id')
  const product = products.find(product => product.id === parseInt(id))
  if (!product) {
    throw new HTTPException(404, { message: 'Product not found.' })
  }
  return c.json(product)
})

app.get('/api/v1/basic/products/:id/increments', (c) => {
  const id = c.req.param('id')
  const product = products.find(product => product.id === parseInt(id))
  if (!product) {
    throw new HTTPException(404, { message: 'Product not found.' })
  }

  const filtered = productIncrements.filter(increment => product.increments.includes(increment.id)).map(increment => {
    return {
      id: increment.id,
      version: increment.version,
    }
  })
  
  return c.json({
    count: filtered.length,
    next: null,
    previous: null,
    results: filtered
  })
})

app.get('/api/v1/basic/products/:id/increments/:incrementId', (c) => {
  const expand = c.req.query("expand")
  const { id, incrementId } = c.req.param()
  const product = products.find(product => product.id === parseInt(id))
  if (!product) {
    throw new HTTPException(404, { message: 'Product not found.' })
  }

  if (!product.increments.includes(parseInt(incrementId))) {
    throw new HTTPException(404, { message: 'Increment not found.' })
  }

  const increment = productIncrements.find(increment => increment.id === parseInt(incrementId))
  if (!increment) {
    throw new HTTPException(404, { message: 'Increment not found.' })
  }

  if (expand === 'binaries') {
    return c.json(increment)
  }

  return c.json({
    id: increment.id,
    version: increment.version,
  })
})


serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('🚀 Mock server running at http://localhost:3000')
