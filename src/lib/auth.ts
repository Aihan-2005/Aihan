import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"
import { compare } from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "EmailLogin",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await findUserByEmail(credentials?.email || "") // بعداً وصل به دیتابیس
        if (!user) return null
        const valid = await compare(credentials!.password, user.password)
        if (!valid) return null
        return user
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { stnrategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
}
