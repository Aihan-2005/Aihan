"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Register:", formData)
  }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-[#23242a] py-5 px-4">
      <div className="relative shadow-lg shadow-[rgb(21,145,240)]/50 w-[400px] bg-[#1c1c1c] rounded-[5px] overflow-hidden">

        <div className="absolute top-[-50%] left-[-50%] w-[400px] h-[600px] bg-gradient-to-r from-transparent via-[rgb(21,145,240)] to-[rgb(150,205,250)] animate-gradient-rotate origin-bottom-right" />

        <div className="absolute inset-[2px] bg-[#28292d] rounded-[5px] p-8 z-10">
          <h1 className="text-[rgb(21,145,240)] text-center text-2xl font-bold mb-6">
            ثبت‌نام
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[#9eb3b5] block mb-2">نام کاربری</label>
              <input
                type="text"
                required
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.2)] rounded-[15px] p-3 text-white outline-none focus:ring-2 focus:ring-[rgb(21,145,240)]/50"
              />
            </div>

            <div>
              <label className="text-[#9eb3b5] block mb-2">ایمیل</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.2)] rounded-[15px] p-3 text-white outline-none focus:ring-2 focus:ring-[rgb(21,145,240)]/50"
              />
            </div>

            <div>
              <label className="text-[#9eb3b5] block mb-2">رمز عبور</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.2)] rounded-[15px] p-3 text-white outline-none focus:ring-2 focus:ring-[rgb(21,145,240)]/50"
              />
            </div>

            <div>
              <label className="text-[#9eb3b5] block mb-2">تکرار رمز عبور</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.2)] rounded-[15px] p-3 text-white outline-none focus:ring-2 focus:ring-[rgb(21,145,240)]/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(21,145,240)] text-[#16100e] py-3 rounded-[15px] font-semibold drop-shadow-[0_5px_10px_rgb(21,145,240)] hover:brightness-110 transition-all"
            >
              ثبت‌نام
            </button>

            <p className="text-[rgb(21,145,240)] text-sm text-center mt-4">
              قبلاً ثبت‌نام کرده‌اید؟{" "}
              <Link href="/login" className="text-[rgb(127,230,248)] font-bold hover:underline">
                ورود
              </Link>
            </p>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradient-rotate {
          animation: gradient-rotate 6s linear infinite;
        }
      `}</style>
    </div>
  )
}
