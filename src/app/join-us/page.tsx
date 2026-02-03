"use client"

import { motion } from "framer-motion"
import { useState, ChangeEvent, FormEvent } from "react"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

type CooperationType = "fulltime" | "parttime" | "freelance" | "intern" | ""

interface FormData {
  fullName: string
  email: string
  skill: string
  cooperationType: CooperationType
  about: string
  resume: string
}

interface FormErrors {
  fullName?: string
  email?: string
  skill?: string
  cooperationType?: string
  resume?: string
}

type FormField = keyof FormData

export default function JoinUsPage(): JSX.Element {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    skill: "",
    cooperationType: "",
    about: "",
    resume: ""
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    
    if (errors[name as FormField]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validate = (): FormErrors => {
    const err: FormErrors = {}

    if (!form.fullName.trim()) {
      err.fullName = "نام و نام خانوادگی الزامی است"
    }

    if (!form.skill.trim()) {
      err.skill = "تخصص خود را وارد کنید"
    }

    if (!form.email.trim()) {
      err.email = "ایمیل الزامی است"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      err.email = "فرمت ایمیل صحیح نیست"
    }

    if (!form.cooperationType) {
      err.cooperationType = "نوع همکاری را انتخاب کنید"
    }

    if (form.resume && !/^https?:\/\/.+/.test(form.resume)) {
      err.resume = "لینک معتبر وارد کنید (باید با http:// یا https:// شروع شود)"
    }

    return err
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      // 🔌 اینجا درخواست به بک‌اند ارسال می‌شود
      // const response = await fetch('/api/submit-resume', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form)
      // })
      
      console.log("Form submitted:", form)
      setSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
    }
  }

  const resetForm = (): void => {
    setSubmitted(false)
    setForm({
      fullName: "",
      email: "",
      skill: "",
      cooperationType: "",
      about: "",
      resume: ""
    })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              به تیم WiserAI بپیوند
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              اگر عاشق ساخت محصولات واقعی با هوش مصنوعی هستی،
              رزومه‌ت رو بفرست. ما همیشه دنبال آدم‌های خلاقیم.
            </p>
          </motion.div>
        </Container>

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
      </section>

      <section className="pb-28 relative z-10">
        <Container className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white/10 backdrop-blur-2xl
              border border-white/15 rounded-2xl
              p-8 md:p-10
              shadow-[0_0_60px_-15px_rgba(59,130,246,0.4)]
            "
          >
            {!submitted ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  ارسال رزومه
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-300">
                      نام و نام خانوادگی <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl bg-white/5 border 
                        ${errors.fullName ? "border-red-500" : "border-white/10"}
                        text-white placeholder:text-gray-500
                        focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                        outline-none transition-all duration-200
                      `}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                      ایمیل <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      dir="ltr"
                      className={`
                        w-full px-4 py-3 rounded-xl bg-white/5 border 
                        ${errors.email ? "border-red-500" : "border-white/10"}
                        text-white placeholder:text-gray-500
                        focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                        outline-none transition-all duration-200
                      `}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="skill" className="block mb-2 text-sm font-medium text-gray-300">
                      تخصص اصلی <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="skill"
                      type="text"
                      name="skill"
                      value={form.skill}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl bg-white/5 border 
                        ${errors.skill ? "border-red-500" : "border-white/10"}
                        text-white placeholder:text-gray-500
                        focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                        outline-none transition-all duration-200
                      `}
                    />
                    {errors.skill && (
                      <p className="text-sm text-red-400 mt-1">{errors.skill}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cooperationType" className="block mb-2 text-sm font-medium text-gray-300">
                      نوع همکاری <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="cooperationType"
                      name="cooperationType"
                      value={form.cooperationType}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl bg-white/5 border 
                        ${errors.cooperationType ? "border-red-500" : "border-white/10"}
                        text-white
                        focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                        outline-none transition-all duration-200
                      `}
                    >
                      <option value="" className="bg-gray-900">انتخاب کنید</option>
                      <option value="fulltime" className="bg-gray-900">تمام‌وقت</option>
                      <option value="parttime" className="bg-gray-900">پاره‌وقت</option>
                      <option value="freelance" className="bg-gray-900">فریلنس</option>
                      <option value="intern" className="bg-gray-900">کارآموزی</option>
                    </select>
                    {errors.cooperationType && (
                      <p className="text-sm text-red-400 mt-1">{errors.cooperationType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-300">
                      درباره خودت
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      value={form.about}
                      onChange={handleChange}
                      placeholder="چند خط درباره تجربه‌هات و چیزی که دوست داری روش کار کنی بنویس..."
                      className="
                        w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                        text-white placeholder:text-gray-500
                        focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                        outline-none resize-none transition-all duration-200
                      "
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-300">
                      لینک رزومه / گیت‌هاب / لینکدین
                    </label>
                    <input
                      id="resume"
                      type="url"
                      name="resume"
                      value={form.resume}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      dir="ltr"
                      className={`
                        w-full px-4 py-3 rounded-xl bg-white/5 border 
                        ${errors.resume ? "border-red-500" : "border-white/10"}
                        text-white placeholder:text-gray-500
                        focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                        outline-none transition-all duration-200
                      `}
                    />
                    {errors.resume && (
                      <p className="text-sm text-red-400 mt-1">{errors.resume}</p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="
                        w-full py-4 font-semibold text-base
                        bg-gradient-to-r from-blue-500 to-indigo-600
                        hover:from-blue-600 hover:to-indigo-700
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-blue-500/50
                        active:scale-[0.98]
                      "
                    >
                      ارسال درخواست همکاری
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg 
                      className="w-10 h-10 text-green-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    ✅ رزومه با موفقیت ارسال شد
                  </h3>
                  <p className="text-gray-300 mb-8">
                    در صورت تطابق، خیلی زود باهات تماس می‌گیریم 🌱
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="
                      text-blue-400 hover:text-blue-300 
                      transition-colors duration-200
                      underline underline-offset-4
                    "
                  >
                    ارسال رزومه جدید
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
