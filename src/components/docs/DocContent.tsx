import { desc, div } from "framer-motion/client";
import CodeBlock from "./CodeBlock";
import TabSwitcher from "./TabSwitcher";
import { useState } from "react";
import { title } from "process";
type Props = {
  active: string;
};

export default function DocContent({ active }: Props) {
  const [selectedTier , setSelectedTier] = useState<string | null>(null);
  const [selectedUseCase , setSelectedUseCase] = useState<any | null>(null);
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
          <h2 className="text-2xl font-bold mt-7 ">⚡ شروع سریع</h2>
          <p className="text-white/60">در ۳ مرحله اولین درخواست خود را ارسال کنید.</p>
          <p className="text-white/60">در این بخش می‌توانید در کمترین زمان استفاده از API وایزر را آغاز کنید. ابتدا یک API Key از داشبورد خود دریافت کنید و سپس با استفاده از آن اولین درخواست خود را به سرویس ارسال نمایید. در مثال زیر، یک درخواست ساده برای تولید متن به مدل ارسال می‌شود تا نحوه احراز هویت، ساختار درخواست و پارامترهای اصلی API را مشاهده کنید.
        <br />
پس از ارسال درخواست، پاسخ API به صورت JSON برگردانده می‌شود که شامل متن تولید شده، مدل استفاده شده و اطلاعاتی مانند تعداد توکن‌های مصرف شده و زمان پردازش است. این ساختار پاسخ به شما کمک می‌کند خروجی مدل را به راحتی در برنامه خود پردازش کرده و از قابلیت‌های هوش مصنوعی در اپلیکیشن یا سرویس خود استفاده کنید.</p>

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
        <div className="space-y-6 mt-7">
          <h2 className="text-2xl font-bold">🔐 احراز هویت API</h2>
          <p className="text-white/60">این صفحه نقطه شروع استفاده از API در مستندات است و نحوه احراز هویت درخواست‌ها را توضیح می‌دهد. برای استفاده از API باید کلید دسترسی خود را در هدر `Authorization` هر درخواست ارسال کنید. مقدار این هدر به صورت `Bearer YOUR_API_KEY` تنظیم می‌شود تا سرور بتواند هویت درخواست را تشخیص داده و دسترسی آن را بررسی کند. نگهداری امن این کلید بسیار مهم است و توصیه می‌شود آن را در کدهای عمومی یا مخازن عمومی قرار ندهید.
          <br/><br/>

در همین بخش همچنین سطوح مختلف دسترسی به API معرفی شده‌اند. این سطوح شامل Basic، Pro و Enterprise هستند که هر کدام امکانات و ظرفیت متفاوتی برای استفاده از سرویس ارائه می‌دهند. بسته به نیاز پروژه، حجم استفاده و قابلیت‌های مورد نیاز می‌توانید یکی از این سطوح را انتخاب کنید و از API در برنامه یا سرویس خود بهره ببرید.</p>
          <CodeBlock language="bash" code={`Authorization: Bearer YOUR_API_KEY`} />
          <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-yellow-300 text-sm">
            ⚠️ کلید API خود را هرگز در کد عمومی یا ریپازیتوری قرار ندهید.
          </div>
          <h3 className="text-lg font-semibold">سطوح دسترسی</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
                  {[
                    {name:"Basic", desc:"دسترسی به مدل‌های پایه"},
                    {name:"pro", desc:"تمام مدل‌های متنی و چت"},
                    {name:"Enterprise",desc:"مدل‌های سفارشی + SLA"},
                  ].map((tier)=>(
                    <div 
                    key={tier.name}
                    onClick={()=>setSelectedTier(tier.name)}
                    className="p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:border-blue-500/40 transition-all"
                    >
                      <p className="font-semibold text-sm">{tier.name}</p>
                    </div>  
                  ))}
            </div>
            {selectedTier &&(
              <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200">
                  {selectedTier === "Basic" && "مناسب برای تست اولیه و استفاده در پروژه‌های کوچک."}
                  {selectedTier === "pro" && "دسترسی کامل به مدل‌های متنی و مکالمه برای استفاده در محصولات."}
                  {selectedTier === "Enterprise" && "مناسب سازمان‌ها با نیاز به مدل سفارشی، SLA و ظرفیت بالا."}
              </div>
            )}
          </div>
        </div>
      );

    case "models":
    case "models-text":
    case "models-chat":
    case "models-vision":
    case "models-multi":

    const allModels = [
    {
      id: "models-text",
      category: "متنی",
      models: [
        { name: "Wiser-DANA-X", desc: "مدل پیشرفته تولید متن فارسی و انگلیسی" },
        { name: "Wiser-MEHR-Core", desc: "مناسب برای تحلیل محتوا و خلاصه‌سازی" },
        { name: "Wiser-SAHAR-Alpha", desc: "مدل سبک برای پردازش سریع" },
      ],
    },
    {
      id: "models-chat",
      category: "مکالمه",
      models: [
        { name: "Wiser-HOMA-Dialogue", desc: "چت‌بات هوشمند چندمرحله‌ای" },
        { name: "Wiser-GOYA-Chat", desc: "مناسب برای پشتیبانی مشتری" },
      ],
    },
    {
      id: "models-vision",
      category: "بینایی",
      models: [
        { name: "Wiser-BINA-Vision", desc: "تحلیل و توصیف تصویر" },
        { name: "Wiser-SIMORGH-Spectra", desc: "پردازش اسناد تصویری و OCR" },
      ],
    },
    {
      id: "models-multi",
      category: "مولتی‌مدال",
      models: [
        { name: "Wiser-AZAR-Fusion", desc: "ترکیب متن و تصویر" },
        { name: "Wiser-AFRA-Unity", desc: "پردازش همزمان چند نوع داده" },
      ],
    },
  ];

  const visibleModels = 
  active === "models"
  ?allModels
  :allModels.filter((g)=>g.id === active);

      return (
        <div className="space-y-6 mt-7">
          <h2 className="text-2xl font-bold">🤖 مدل‌های WiserAI</h2>
          {visibleModels.map((group) => (
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

      case "api":
  return (
    <div className="space-y-6 mt-7">
      <h2 className="text-2xl font-bold">📡 درخواست‌های API</h2>

      <p className="text-white/60 leading-relaxed">
        برای استفاده از قابلیت‌های هوش مصنوعی WiserAI، تمامی تعاملات با سیستم از
        طریق درخواست‌های API انجام می‌شود. توسعه‌دهندگان می‌توانند با ارسال
        درخواست‌های استاندارد HTTP به سرورهای WiserAI به مدل‌های مختلف مانند
        مدل‌های متنی، مکالمه‌ای، بینایی و مولتی‌مدال دسترسی پیدا کنند. هر
        درخواست شامل یک endpoint مشخص، هدر احراز هویت و داده‌های ورودی است که
        مدل بر اساس آن پاسخ مناسب را تولید می‌کند.
      </p>

      <p className="text-white/60 leading-relaxed">
        برای ارسال درخواست باید کلید API خود را در هدر Authorization قرار دهید.
        سپس با استفاده از متد POST داده‌های موردنظر را به endpoint مربوط به مدل
        ارسال می‌کنید. پاسخ سرور به صورت JSON بازگردانده می‌شود و شامل خروجی
        مدل، اطلاعات مصرف توکن و زمان پردازش درخواست است.
      </p>

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-sm font-semibold mb-3">نمونه درخواست</p>

        <CodeBlock
          language="bash"
          code={`curl -X POST https://api.wiser.ai/wiser/v1/brain/text/dana-x \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt":"یک متن درباره هوش مصنوعی بنویس"}'`}
        />
      </div>

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-sm font-semibold mb-3">نمونه پاسخ</p>

        <CodeBlock
          language="json"
          code={`{
  "model": "wiser-dana-x",
  "output": "متن تولید شده توسط مدل...",
  "tokens_used": 120,
  "latency_ms": 310
}`}
        />
      </div>
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
      const useCases = [
        {title:"پشتیبانی مشتری هوشمند", desc:"چت‌بات برای پاسخ‌دهی ۲۴/۷", full:"با استفاده از مدل HOMA-Dialogue می‌توانید یک سیستم پشتیبانی مشتری خودکار ایجاد کنید که به سوالات کاربران پاسخ می‌دهد، تیکت‌ها را دسته‌بندی می‌کند و تجربه مشتری را بهبود می‌دهد."},
        {title:"تولید محتوای بازاریابی", desc:"تولید خودکار پست و مقاله" , full:"مدل DANA-X می‌تواند برای تولید پست‌های شبکه اجتماعی، توضیحات محصول و مقالات وبلاگ استفاده شود و فرآیند تولید محتوا را چندین برابر سریع‌تر کند."},
        {title:"تحلیل اسناد حقوقی", desc:"خلاصه‌سازی قراردادها", full:"مدل MEHR-Core می‌تواند اسناد طولانی مانند قراردادها را تحلیل کرده و خلاصه‌ای از نکات مهم آن ارائه دهد."},
        {title:"دسته‌بندی تصاویر محصول",desc:"تحلیل تصاویر فروشگاهی", full:"مدل BINA-Vision تصاویر محصولات را تحلیل کرده و دسته‌بندی مناسب برای آن‌ها ایجاد می‌کند."},
        {title:"تحلیل احساسات مشتری", desc:"Sentiment Analysis", full:"می‌توانید نظرات مشتریان را تحلیل کرده و احساسات مثبت یا منفی را شناسایی کنید."},
        {title:"خلاصه‌سازی مقالات", desc:"خلاصه متن‌های طولانی", full:"مقالات و گزارش‌های طولانی را به خلاصه‌های کوتاه و قابل استفاده تبدیل کنید."},
        { title:"جستجوی هوشمند", desc:"Semantic Search", full:"با استفاده از مدل‌های زبانی می‌توانید جستجوی معنایی روی داده‌های خود ایجاد کنید."},

        { title:"دستیار داخلی شرکت", desc:"AI Assistant", full:"یک دستیار داخلی بسازید که به کارکنان در پیدا کردن اطلاعات کمک کند."},

        { title:"تحلیل داده‌های متنی", desc:"پردازش داده‌های بزرگ", full:"می‌توانید هزاران متن را پردازش کرده و اطلاعات مهم را استخراج کنید."},

       { title:"اتوماسیون ایمیل", desc:"پاسخ خودکار ایمیل", full:"مدل می‌تواند ایمیل‌های دریافتی را تحلیل کرده و پاسخ مناسب تولید کند."},

       { title:"تحلیل فرم‌ها", desc:"استخراج اطلاعات", full:"از فرم‌ها و اسناد اطلاعات مهم را استخراج کنید."},

       { title:"دستیار فروش", desc:"پیشنهاد محصول", full:"یک دستیار فروش هوشمند ایجاد کنید که محصولات مناسب را به مشتری پیشنهاد دهد."}
      ];

      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">💼 موارد استفاده</h2>
          <p className="text-white/60">نمونه‌های واقعی از استفاده WiserAI در کسب‌وکارها</p>
          {/* <div className="space-y-4">
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
          </div> */}
          <div className="grid grid-cols-3 gap-4">
      {useCases.map((uc) => (
        <div
          key={uc.title}
          onClick={()=>setSelectedUseCase(uc)}
          className="p-4 rounded-xl border border-white/10 hover:border-blue-500/40 bg-white/5 transition-all cursor-pointer"
        >
          <p className="font-semibold text-sm mb-1">{uc.title}</p>
          <p className="text-xs text-white/40">{uc.desc}</p>
        </div>
      ))}
    </div>

    {selectedUseCase && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
        <div className="w-[500px] p-6 rounded-xl border border-white/10 bg-[#0f172a]">
          <h3 className="text-lg font-semibold mb-3">
            {selectedUseCase.title}
          </h3>

          <p className="text-sm text-white/60 leading-relaxed">
            {selectedUseCase.full}
          </p>

          <button
            onClick={()=>setSelectedUseCase(null)}
            className="mt-6 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
          >
            بستن
          </button>
        </div>
      </div>
    )}
        </div>
      );

    case "errors":
      const [errorText, setErrorText] = useState("");
      const [submitted, setSubmitted] = useState(false);

      return (
          <div className="space-y-6 mt-7">
    <h2 className="text-2xl font-bold">⚠️ کدهای خطا</h2>

    <div className="space-y-3">
      {[
        { code: "400", label: "Bad Request", desc: "پارامترهای ارسالی نادرست است." },
        { code: "401", label: "Unauthorized", desc: "کلید API نامعتبر یا منقضی شده." },
        { code: "403", label: "Forbidden", desc: "دسترسی به این مدل برای پلن شما مجاز نیست." },
        { code: "429", label: "Rate Limited", desc: "از محدودیت نرخ فراخوانی عبور کرده‌اید." },
        { code: "500", label: "Server Error", desc: "خطای داخلی هسته پردازشی." },
      ].map((err) => (
        <div
          key={err.code}
          className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all"
        >
          <span
            className={`text-sm font-mono font-bold px-2 py-0.5 rounded ${
              err.code.startsWith("4")
                ? "bg-yellow-500/20 text-yellow-300"
                : "bg-red-500/20 text-red-300"
            }`}
          >
            {err.code}
          </span>
          <div>
            <p className="text-sm font-semibold">{err.label}</p>
            <p className="text-xs text-white/40 mt-0.5">{err.desc}</p>
          </div>
        </div>
      ))}
    </div>
      <div className="mt-6 p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
      <h3 className="text-lg font-semibold mb-2">ارسال گزارش خطا</h3>
      <p className="text-sm text-white/50 mb-4">
        در صورتی که هنگام استفاده از API با خطایی مواجه شدید، جزئیات را در کادر زیر وارد کنید تا تیم فنی بررسی کند.
      </p>

      {!submitted ? (
        <>
          <textarea
            value={errorText}
            onChange={(e) => setErrorText(e.target.value)}
            placeholder="توضیح خطا یا رفتار غیرمنتظره را اینجا بنویسید..."
            className="w-full h-28 p-3 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/40 focus:outline-none text-white"
          />
          <button
            onClick={() => {
              if (errorText.trim().length > 0) {
                setSubmitted(true);
              }
            }}
            className="mt-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm transition-all"
          >
            ارسال گزارش
          </button>
        </>
      ) : (
        <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/10 text-green-300 text-sm text-center">
          ✅ گزارش شما با موفقیت ثبت شد. بزودی بررسی می‌شود.
        </div>
      )}
    </div>
  </div>
      );

    case "faq":
      const [messageText, setMessageText] = useState("");
      const [sent, setSent] = useState(false);

      return (
          <div className="space-y-6 mt-7">
    <h2 className="text-2xl font-bold">❓ سوالات متداول</h2>

    <div className="space-y-3">
      {[
        {
          q: "چطور API Key بگیرم؟",
          a: "از داشبورد WiserAI بخش API Keys را باز کنید و یک کلید جدید بسازید."
        },
        {
          q: "آیا مدل‌های سفارشی هم داریم؟",
          a: "بله در پلن Enterprise امکان Fine‑tuning برای مدل‌های شما وجود دارد."
        },
        {
          q: "محدودیت نرخ چیست؟",
          a: "بسته به پلن شما: Basic 60 req/min، Pro 300 req/min."
        },
        {
          q: "آیا داده‌های من ذخیره می‌شوند؟",
          a: "خیر، داده‌های درخواست‌ها پس از پردازش حذف می‌شوند."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all"
        >
          <p className="font-semibold text-sm">{item.q}</p>
          <p className="text-xs text-white/50 mt-1">{item.a}</p>
        </div>
      ))}
    </div>
        <div className="mt-6 p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
      <h3 className="text-lg font-semibold mb-2">
        سوال شما در لیست نبود؟
      </h3>

      <p className="text-sm text-white/50 mb-4">
        اگر پاسخ سوال خود را پیدا نکردید، می‌توانید پیام بفرستید یا با پشتیبانی تماس بگیرید.
      </p>

      {!sent ? (
        <>
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="سوال خود را اینجا بنویسید..."
            className="w-full h-28 p-3 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/40 focus:outline-none text-white"
          />

          <button
            onClick={() => {
              if (messageText.trim()) {
                setSent(true);
              }
            }}
            className="mt-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm transition-all"
          >
            ارسال پیام
          </button>
        </>
      ) : (
        <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/10 text-green-300 text-sm text-center">
          ✅ پیام شما ارسال شد. تیم پشتیبانی به زودی پاسخ می‌دهد.
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-white/10 text-sm text-white/60">
        📞 تماس با پشتیبانی:  
        <span className="text-blue-400 mr-2">
          021-12345678
        </span>
      </div>
    </div>
  </div>
      );

    default:
      return <div className="text-white/40">بخش یافت نشد.</div>;
  }
}
