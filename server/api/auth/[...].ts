import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"   

const prisma = new PrismaClient()

export default NuxtAuthHandler({
    providers: [],
    adapter: PrismaAdapter(prisma),
})