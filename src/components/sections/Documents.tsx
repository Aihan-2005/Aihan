"use client"

export default function Documents() {
  return (
    <section className="w-full min-h-screen py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-8">
          مستندات WiserAI
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          این بخش راهنمای کامل استفاده از API، ساخت کلیدها، مدل‌ها، هزینه توکن‌ها،
          مثال‌ها، خطاها و سایر بخش‌های فنی سرویس هوش مصنوعی WiserAI را شامل می‌شود.
          در ادامه ساختار مستندات را مرحله‌به‌مرحله ایجاد می‌کنیم.
        </p>

        <div className="text-gray-300 space-y-4">
          <p>
            در مراحل بعدی به این صفحه موارد زیر اضافه می‌شود:
          </p>

          <ul className="list-disc pr-6 leading-loose">
            <li>Sidebar ثابت مثل Stripe / Vercel Docs</li>
            <li>بخش Overview</li>
            <li>بخش Quickstart</li>
            <li>بخش Authentication</li>
            <li>API Reference</li>
            <li>Models و Token Billing</li>
            <li>Errors و مثال‌های واقعی</li>
          </ul>

          <p>
            ابتدا ساختار پایه را ایجاد می‌کنیم و بعداً محتوا را کامل می‌کنیم.
          </p>
        </div>

      </div>
    </section>
  )
}
