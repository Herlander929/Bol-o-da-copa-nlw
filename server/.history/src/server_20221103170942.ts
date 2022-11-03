import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import {z} from 'zod'

import shortUniqueId from 'short-unique-id'


const prisma = new PrismaClient({
    log: ['query'],

})

async function bootstrap(){
 const fastify = Fastify({
    logger: true,
 })

await fastify.register(cors, {
    origin: true,
})

 fastify.get('/pools/count', async () => {
   const count = await prisma.pool.count()

    return { count }
 })
 fastify.post('/pools', async (request, reply) => {
    const createPoolbody = z.object({
        title: z.string(),
    })
  const {title} = createPoolbody.parse(request.body)

  const generate = new shortUniqueId({length: 6})
  const code  = String(generate()).toUpperCase()
  await prisma.pool.create({
    data: {
        title,
        code
    }
  })

  return reply.status(201).send({title})
  //return {title}
  })
 await fastify.listen({port: 3333, /*host: '0.0.0.0'*/})
}

bootstrap()