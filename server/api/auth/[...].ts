import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"   
import GoogleProvider from "next-auth/providers/google";

const runtimeConfig = useRuntimeConfig()

const prisma = new PrismaClient()

export default NuxtAuthHandler({
    secret: runtimeConfig.auth.secret,
    providers: [
         GoogleProvider({
            clientId: runtimeConfig.auth.google.clientId,
            clientSecret: runtimeConfig.auth.google.clientSecret,
        })
    ],
    callbacks: {
        async signIn(credentials) {
            console.log(credentials)
            return true
        }
    },
    adapter: PrismaAdapter(prisma),
})