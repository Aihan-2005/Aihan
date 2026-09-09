import { FileText } from 'lucide-react'

export default function Documents() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24 text-white"
      aria-labelledby="documents-coming-soon-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <FileText className="h-8 w-8 text-purple-300" aria-hidden="true" />
        </div>

        <h1
          id="documents-coming-soon-title"
          className="text-4xl font-black tracking-tight text-white sm:text-5xl"
        >
          مستندات
        </h1>
        <p className="mt-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          به‌زودی
        </p>
      </div>
    </section>
  )
}
