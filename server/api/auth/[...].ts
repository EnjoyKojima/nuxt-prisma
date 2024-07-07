import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const runtimeConfig = useRuntimeConfig();

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  secret: runtimeConfig.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [],
});
