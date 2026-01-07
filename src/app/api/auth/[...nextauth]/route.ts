import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    // ورود با ایمیل و پسورد
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "ایمیل", type: "email" },
        password: { label: "رمز عبور", type: "password" }
      },
      async authorize(credentials) {
        // فعلاً یک کاربر تستی برمی‌گردونیم
        // بعداً از دیتابیس می‌خونیم
        if (credentials?.email === 'admin@example.com' && credentials?.password === 'admin123') {
          return {
            id: '1',
            name: 'ادمین',
            email: 'admin@example.com',
            role: 'admin'
          }
        }
        return null
      }
    }),

    // ورود با گوگل (اختیاری)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 روز
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
      }
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
