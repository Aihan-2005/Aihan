import CodeBlock from "./CodeBlock";
import TabSwitcher from "./TabSwitcher";

type Props = {
  active: string;
};

export default function DocContent({ active }: Props) {
  switch (active) {
    case "overview":
      return (
        <div className="space-y-6">
          <div>
            <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">v1.0</span>
            <h1 className="text-3xl font-bold mt-3 mb-2">مستندات WiserAI</h1>
            <p className="text-white/60 leading-relaxed">
              WiserAI یک پلتفرم هوش مصنوعی B2B است که به کسب‌وکارها کمک می‌کند
              با استفاده از مدل‌های پیشرفته، فرآیندهای خود را هوشمند کنند و رشد کنند.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "شروع سریع", desc: "در کمتر از ۵ دقیقه اولین درخواست را بزنید", id: "quickstart" },
              { title: "مدل‌ها", desc: "انتخاب مدل مناسب برای نیاز کسب‌وکار شما", id: "models" },
              { title: "SDK ها", desc: "کتابخانه‌های آماده برای Python و JS", id: "sdks" },
              { title: "موارد استفاده", desc: "مثال‌های واقعی از استقرار در کسب‌وکار", id: "usecases" },
            ].map((card) => (
              <div
                key={card.id}
                className="p-4 rounded-xl border border-white/10 hover:border-blue-500/50 bg-white/5 transition-all cursor-pointer"
              >
                <h3 className="text-sm font-semibold mb-1">{card.title}</h3>
                <p className="text-xs text-white/40">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "quickstart":
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">⚡ شروع سریع</h2>
          <p className="text-white/60">در ۳ مرحله اولین درخواست خود را ارسال کنید.</p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm font-semibold mb-2">۱. دریافت API Key از داشبورد</p>
              <p className="text-xs text-white/40">وارد داشبورد WiserAI شوید و یک کلید جدید بسازید.</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm font-semibold mb-2">۲. ارسال اولین درخواست</p>
              <TabSwitcher
                tabs={[
                  {
                    label: "cURL",
                    content: (
                      <CodeBlock
                        language="bash"
                        code={`curl -X POST https://api.wiser.ai/wiser/v1/brain/text/dana-x \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "یک متن آزمایشی تولید کن."}'`}
                      />
                    ),
                  },
                  {
                    label: "Python",
                    content: (
                      <CodeBlock
                        language="python"
                        code={`import requests

res = requests.post(
  "https://api.wiser.ai/wiser/v1/brain/text/dana-x",
  headers={"Authorization": "Bearer YOUR_API_KEY"},
  json={"prompt": "یک متن آزمایشی تولید کن."}
)
print(res.json())`}
                      />
                    ),
                  },
                  {
                    label: "JavaScript",
                    content: (
                      <CodeBlock
                        language="javascript"
                        code={`const res = await fetch("https://api.wiser.ai/wiser/v1/brain/text/dana-x", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ prompt: "یک متن آزمایشی تولید کن." })
});
const data = await res.json();
console.log(data);`}
                      />
                    ),
                  },
                ]}
              />
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm font-semibold mb-2">۳. پاسخ دریافتی</p>
              <CodeBlock
                language="json"
                code={`{
  "model": "wiser-dana-x",
  "output": "متن تولید شده توسط WiserAI...",
  "tokens_used": 142,
  "latency_ms": 320
}`}
              />
            </div>
          </div>
        </div>
      );

    case "auth":
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">🔐 احراز هویت API</h2>
          <p className="text-white/60">تمام درخواست‌ها باید هدر Authorization داشته باشند.</p>
          <CodeBlock language="bash" code={`Authorization: Bearer YOUR_API_KEY`} />
          <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-yellow-300 text-sm">
            ⚠️ کلید API خود را هرگز در کد عمومی یا ریپازیتوری قرار ندهید.
          </div>
          <h3 className="text-lg font-semibold">سطوح دسترسی</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Basic", desc: "دسترسی به مدل‌های پایه" },
              { name: "Pro", desc: "تمام مدل‌های متنی و چت" },
              { name: "Enterprise", desc: "مدل‌های سفارشی + SLA" },
            ].map((tier) => (
              <div key={tier.name} className="p-3 rounded-lg border border-white/10 bg-white/5">
                <p className="font-semibold text-sm">{tier.name}</p>
                <p className="text-xs text-white/40 mt-1">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "models":
    case "models-text":
    case "models-chat":
    case "models-vision":
    case "models-multi":
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">🤖 مدل‌های WiserAI</h2>
          {[
            {
              category: "متنی",
              models: [
                { name: "Wiser-DANA-X", desc: "مدل پیشرفته تولید متن فارسی و انگلیسی" },
                { name: "Wiser-MEHR-Core", desc: "مناسب برای تحلیل محتوا و خلاصه‌سازی" },
                { name: "Wiser-SAHAR-Alpha", desc: "مدل سبک برای پردازش سریع" },
              ],
            },
            {
              category: "مکالمه",
              models: [
                { name: "Wiser-HOMA-Dialogue", desc: "چت‌بات هوشمند چندمرحله‌ای" },
                { name: "Wiser-GOYA-Chat", desc: "مناسب برای پشتیبانی مشتری" },
              ],
            },
            {
              category: "بینایی",
              models: [
                { name: "Wiser-BINA-Vision", desc: "تحلیل و توصیف تصویر" },
                { name: "Wiser-SIMORGH-Spectra", desc: "پردازش اسناد تصویری و OCR" },
              ],
            },
            {
              category: "مولتی‌مدال",
              models: [
                { name: "Wiser-AZAR-Fusion", desc: "ترکیب متن و تصویر" },
                { name: "Wiser-AFRA-Unity", desc: "پردازش همزمان چند نوع داده" },
              ],
            },
          ].map((group) => (
            <div key={group.category}>
              <h3 className="text-sm text-white/40 uppercase tracking-widest mb-3">{group.category}</h3>
              <div className="space-y-2">
                {group.models.map((m) => (
                  <div key={m.name} className="flex items-start gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all">
                    <div>
                      <p className="text-sm font-mono font-semibold text-blue-300">{m.name}</p>
                      <p className="text-xs text-white/40 mt-0.5">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "sdks":
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">📦 SDK های WiserAI</h2>
          <p className="text-white/60">کتابخانه‌های رسمی برای ادغام سریع در پروژه‌تان.</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { lang: "Python", install: "pip install wiserai" },
              { lang: "JavaScript / Node.js", install: "npm install wiserai" },
            ].map((sdk) => (
              <div key={sdk.lang} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="font-semibold mb-2">{sdk.lang}</p>
                <CodeBlock language="bash" code={sdk.install} />
              </div>
            ))}
          </div>
        </div>
      );

    case "usecases":
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">💼 موارد استفاده</h2>
          <p className="text-white/60">نمونه‌های واقعی از استفاده WiserAI در کسب‌وکارها</p>
          <div className="space-y-4">
            {[
              { title: "پشتیبانی مشتری هوشمند", desc: "ادغام HOMA-Dialogue با سیستم CRM برای پاسخ‌دهی ۲۴/۷" },
              { title: "تولید محتوای بازاریابی", desc: "استفاده از DANA-X برای تولید خودکار پست‌های شبکه اجتماعی" },
              { title: "تحلیل اسناد حقوقی", desc: "خلاصه‌سازی قراردادها با MEHR-Core" },
              { title: "دسته‌بندی تصاویر محصول", desc: "استفاده از BINA-Vision برای کاتالوگ محصولات" },
            ].map((uc) => (
              <div key={uc.title} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="font-semibold text-sm mb-1">{uc.title}</p>
                <p className="text-xs text-white/40">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "errors":
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">⚠️ کدهای خطا</h2>
          <div className="space-y-3">
            {[
              { code: "400", label: "Bad Request", desc: "پارامترهای ارسالی نادرست است." },
              { code: "401", label: "Unauthorized", desc: "کلید API نامعتبر یا منقضی شده." },
              { code: "403", label: "Forbidden", desc: "دسترسی به این مدل برای پلن شما مجاز نیست." },
              { code: "429", label: "Rate Limited", desc: "از محدودیت نرخ فراخوانی عبور کرده‌اید." },
              { code: "500", label: "Server Error", desc: "خطای داخلی هسته پردازشی." },
            ].map((err) => (
              <div key={err.code} className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                <span className={`text-sm font-mono font-bold px-2 py-0.5 rounded ${
                  err.code.startsWith("4") ? "bg-yellow-500/20 text-yellow-300" : "bg-red-500/20 text-red-300"
                }`}>{err.code}</span>
                <div>
                  <p className="text-sm font-semibold">{err.label}</p>
                  <p className="text-xs text-white/40 mt-0.5">{err.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "faq":
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">❓ سوالات متداول</h2>
          {[
            { q: "چطور API Key بگیرم؟", a: "از داشبورد WiserAI بخش API Keys را باز کنید و یک کلید جدید بسازید." },
            { q: "آیا مدل‌های سفارشی دارید؟", a: "بله، در پلن Enterprise امکان Fine-tuning روی داده‌های شما وجود دارد." },
            { q: "محدودیت نرخ چیست؟", a: "بسته به پلن: Basic 60 req/min، Pro 300 req/min، Enterprise بدون محدودیت." },
            { q: "آیا داده‌های من ذخیره می‌شود؟", a: "خیر. تمام درخواست‌ها پس از پردازش حذف می‌شوند." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="font-semibold text-sm mb-1">{item.q}</p>
              <p className="text-sm text-white/50">{item.a}</p>
            </div>
          ))}
        </div>
      );

    default:
      return <div className="text-white/40">بخش یافت نشد.</div>;
  }
}
