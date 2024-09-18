import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from "@/prisma" 

export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    // strategy: "jwt",
    providers: [Google({
        clientId: process.env.GoogleId,
        clientSecret: process.env.gooleseret
    }),
Credentials({

})],
})