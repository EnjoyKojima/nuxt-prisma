import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"   
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const runtimeConfig = useRuntimeConfig()

const connectionString = runtimeConfig.databaseUrl

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

export default NuxtAuthHandler({
    providers: [],
    adapter: PrismaAdapter(prisma),
})