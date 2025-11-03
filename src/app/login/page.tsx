'use client'

import { signIn } from "next-auth/react"
import Button from "@/components/ui/Button"

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white space-y-5">
      <h1 className="text-3xl font-bold">ورود به Wiserapp</h1>

      <Button
        variant="primary"
        onClick={() => signIn("google")}
        className="px-5 py-3"
      >
        ورود با حساب گوگل
      </Button>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.currentTarget as HTMLFormElement
          const email = (form.email as any).value
          const password = (form.password as any).value
          signIn("credentials", { email, password, callbackUrl: "/" })
        }}
        className="flex flex-col space-y-3 mt-6 w-72"
      >
        <input
          name="email"
          type="email"
          placeholder="ایمیل"
          className="p-2 text-black rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="p-2 text-black rounded"
        />
        <Button variant="secondary" type="submit">
          ورود
        </Button>
      </form>
    </main>
  )
}
