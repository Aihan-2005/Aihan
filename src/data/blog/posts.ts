export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: 'gpt-5-release-2025',
    title: 'GPT-5 رسماً معرفی شد: انقلابی در هوش مصنوعی مکالمه‌ای',
    excerpt:
      'OpenAI از GPT-5 رونمایی کرد. این مدل با قابلیت‌های چندوجهی پیشرفته، استدلال عمیق‌تر و کاهش هذیان‌گویی، مرز جدیدی در AI تعریف کرده است.',
    content: `
## GPT-5 چه تغییراتی آورد؟

در اوایل ۲۰۲۵، OpenAI از GPT-5 رونمایی کرد و این رویداد موج جدیدی در دنیای هوش مصنوعی ایجاد کرد.
این مدل نسبت به GPT-4 پیشرفت‌های چشمگیری در حوزه‌های زیر دارد:

## قابلیت‌های کلیدی

### ۱. استدلال چندمرحله‌ای (Chain-of-Thought پیشرفته)

GPT-5 می‌تواند مسائل پیچیده را به مراحل کوچک تقسیم کرده و هر مرحله را به صورت مستقل حل کند.
این قابلیت به خصوص در حل مسائل ریاضی، کدنویسی و تحلیل داده کاربرد دارد.

### ۲. حافظه بلندمدت بهبود یافته

\`\`\`
پنجره context: 256K token
معادل تقریبی: ۲۰۰،۰۰۰ کلمه یا یک کتاب کامل
\`\`\`

### ۳. کاهش ۷۰٪ هذیان‌گویی (Hallucination)

OpenAI اعلام کرد که GPT-5 نسبت به نسخه قبلی تا ۷۰٪ کمتر اطلاعات نادرست تولید می‌کند.

## تأثیر بر صنعت استارتاپ‌ها

با دسترسی به GPT-5 از طریق API، استارتاپ‌هایی مانند ما می‌توانند:

- محصولات هوشمندتر بسازند
- هزینه‌های پشتیبانی را کاهش دهند
- تجربه کاربری شخصی‌سازی‌شده ارائه دهند

## نتیجه‌گیری

GPT-5 نقطه عطفی در توسعه هوش مصنوعی است. استارتاپ‌هایی که زودتر این فناوری را در محصولات خود ادغام کنند،
مزیت رقابتی قابل توجهی خواهند داشت.
    `,
    author: 'علی محمدی',
    date: '۱۴۰۴/۱۲/۱۵',
    readTime: '۸ دقیقه',
    category: 'هوش مصنوعی',
    tags: ['GPT-5', 'OpenAI', 'LLM', 'هوش مصنوعی'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
    featured: true,
  },
  {
    slug: 'ai-agents-future-startups',
    title: 'AI Agentها: آینده استارتاپ‌های هوش مصنوعی در ۲۰۲۵',
    excerpt:
      'عصر AI Agentها آغاز شده است. از AutoGPT تا Devin، ابزارهای خودکار هوش مصنوعی دارند نحوه کار تیم‌های استارتاپی را متحول می‌کنند.',
    content: `
## AI Agent چیست؟

AI Agent یک سیستم هوش مصنوعی است که می‌تواند به صورت مستقل اهداف پیچیده را دنبال کند،
تصمیم بگیرد و اقدام کند - بدون نیاز به دخالت انسان در هر مرحله.

## مهم‌ترین AI Agentهای ۲۰۲۵

### Devin - اولین مهندس نرم‌افزار AI

Devin ساخته Cognition Labs می‌تواند:
- پروژه‌های کامل کدنویسی را از ابتدا تا انتها مدیریت کند
- باگ‌ها را شناسایی و رفع کند
- با تیم‌های انسانی همکاری کند

### AutoGen مایکروسافت

\`\`\`python
# مثال ساده AutoGen
agent = AssistantAgent(
    name="AI_Developer",
    llm_config={"model": "gpt-4"},
)
# Agent به صورت خودکار task را کامل می‌کند
agent.initiate_chat(task="ساخت API برای مدیریت کاربران")
\`\`\`

## تأثیر بر استارتاپ‌ها

### کاهش هزینه عملیاتی

با استفاده از AI Agentها، استارتاپ‌ها می‌توانند:
- تیم‌های کوچک‌تر با بهره‌وری بالاتر داشته باشند
- فرآیندهای تکراری را کاملاً خودکار کنند
- سرعت توسعه محصول را ۳ تا ۵ برابر افزایش دهند

## نتیجه‌گیری

AI Agentها دیگر آینده نیستند، حال حاضر هستند. استارتاپ‌هایی که این فناوری را زودتر بپذیرند،
در بازار رقابتی امروز پیشرو خواهند بود.
    `,
    author: 'سارا احمدی',
    date: '۱۴۰۴/۱۲/۱۰',
    readTime: '۱۲ دقیقه',
    category: 'استارتاپ',
    tags: ['AI Agent', 'استارتاپ', 'اتوماسیون', 'هوش مصنوعی'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    featured: true,
  },
  {
    slug: 'anthropic-claude-3-5-analysis',
    title: 'Claude 3.5 Sonnet در برابر GPT-4o: کدام برای استارتاپ شما بهتر است؟',
    excerpt:
      'مقایسه جامع دو مدل پیشرو هوش مصنوعی از دیدگاه استارتاپ‌ها - از نظر هزینه، دقت، سرعت و قابلیت‌های API.',
    content: `
## مقایسه کلی

در ۲۰۲۵، دو غول هوش مصنوعی، Anthropic و OpenAI، در رقابت تنگاتنگی هستند.
برای استارتاپ‌ها، انتخاب مدل مناسب می‌تواند تأثیر مستقیم بر هزینه و کیفیت محصول داشته باشد.

## جدول مقایسه

| ویژگی | Claude 3.5 Sonnet | GPT-4o |
|--------|------------------|--------|
| پنجره Context | 200K token | 128K token |
| قیمت ورودی | $3/1M token | $5/1M token |
| سرعت | بالاتر | متوسط |
| کدنویسی | عالی | عالی |
| زبان فارسی | خوب | خوب |

## چه زمانی Claude انتخاب بهتری است؟

- پروژه‌هایی که به پنجره context بزرگ نیاز دارند
- تحلیل اسناد طولانی
- کدنویسی و debug پیچیده

## چه زمانی GPT-4o انتخاب بهتری است؟

- یکپارچه‌سازی با اکوسیستم OpenAI
- پروژه‌هایی که از DALL-E نیز استفاده می‌کنند
- زمانی که به Fine-tuning نیاز دارید

## توصیه برای استارتاپ‌ها

بهترین رویکرد استفاده از یک لایه abstraction است که بتوان مدل را بدون تغییر کد اصلی عوض کرد.
    `,
    author: 'رضا کریمی',
    date: '۱۴۰۴/۱۲/۰۵',
    readTime: '۶ دقیقه',
    category: 'هوش مصنوعی',
    tags: ['Claude', 'GPT-4', 'مقایسه', 'API'],
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800',
  },
  {
    slug: 'openai-sora-video-generation',
    title: 'Sora OpenAI و انقلاب تولید ویدیو با هوش مصنوعی',
    excerpt:
      'Sora می‌تواند ویدیوهای ۶۰ ثانیه‌ای واقع‌گرایانه بسازد. این فناوری چه فرصت‌هایی برای استارتاپ‌های محتوا ایجاد می‌کند؟',
    content: `
## Sora چیست؟

Sora مدل تولید ویدیو OpenAI است که می‌تواند از یک prompt متنی، ویدیوهای با کیفیت سینمایی بسازد.

## قابلیت‌های کلیدی

- تولید ویدیو تا ۶۰ ثانیه
- رزولوشن ۱۰۸۰p
- درک فیزیک واقعی دنیا
- حفظ ثبات شخصیت‌ها در طول ویدیو

## فرصت‌های استارتاپی

### محتوای بازاریابی
استارتاپ‌ها می‌توانند بدون نیاز به تیم تولید ویدیو، محتوای تبلیغاتی باکیفیت بسازند.

### آموزش و E-Learning
ویدیوهای آموزشی شخصی‌سازی‌شده برای هر کاربر.

### پروتوتایپ محصول
نمایش مفهومی محصول قبل از تولید واقعی.

## چالش‌ها

- نگرانی‌های مربوط به deepfake
- حق مؤلف محتوای آموزشی
- هزینه بالای تولید در حجم زیاد

## نتیجه‌گیری

Sora فرصت طلایی برای استارتاپ‌هایی است که در حوزه محتوا، آموزش یا بازاریابی فعالیت می‌کنند.
    `,
    author: 'علی محمدی',
    date: '۱۴۰۴/۱۱/۲۸',
    readTime: '۷ دقیقه',
    category: 'هوش مصنوعی',
    tags: ['Sora', 'OpenAI', 'تولید ویدیو', 'استارتاپ'],
    image: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=800',
  },
  {
    slug: 'vc-investment-ai-startups-2025',
    title: 'سرمایه‌گذاری VC در استارتاپ‌های AI: روند ۲۰۲۵',
    excerpt:
      'در ۲۰۲۵، سرمایه‌گذاران خطرپذیر بیش از ۱۰۰ میلیارد دلار در استارتاپ‌های هوش مصنوعی سرمایه‌گذاری کردند. کدام حوزه‌ها بیشترین توجه را دارند؟',
    content: `
## وضعیت سرمایه‌گذاری در AI

سال ۲۰۲۵ رکورد تاریخی سرمایه‌گذاری در استارتاپ‌های هوش مصنوعی را ثبت کرد.
طبق گزارش CB Insights، فقط در نیمه اول سال بیش از ۶۰ میلیارد دلار سرمایه جذب شد.

## حوزه‌های پرطرفدار

### ۱. AI Infrastructure
- ابزارهای MLOps
- پلتفرم‌های آموزش مدل
- سرویس‌های Vector Database

### ۲. Vertical AI
- AI در حوزه پزشکی
- AI حقوقی
- AI مالی

### ۳. AI for Developers
- ابزارهای کدنویسی هوشمند
- تست خودکار
- مستندسازی خودکار

## بزرگ‌ترین راندهای سرمایه‌گذاری

| شرکت | مبلغ | حوزه |
|------|------|------|
| Anthropic | $4B | LLM |
| Mistral | $1B | Open Source LLM |
| Perplexity | $500M | AI Search |
| Cohere | $450M | Enterprise AI |

## چه چیزی VCها دنبال می‌کنند؟

- **Defensibility**: چه چیزی شما را از رقبا متمایز می‌کند؟
- **Data Moat**: آیا داده اختصاصی دارید؟
- **Unit Economics**: آیا مدل درآمدی پایدار است؟

## توصیه برای استارتاپ‌های ایرانی

فرصت‌های زیادی در بازار خاورمیانه و حل مسائل محلی با AI وجود دارد
که توسط شرکت‌های غربی نادیده گرفته شده‌اند.
    `,
    author: 'سارا احمدی',
    date: '۱۴۰۴/۱۱/۲۰',
    readTime: '۱۰ دقیقه',
    category: 'استارتاپ',
    tags: ['سرمایه‌گذاری', 'VC', 'استارتاپ', 'هوش مصنوعی'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
  },
  {
    slug: 'local-llm-ollama-privacy',
    title: 'اجرای LLM روی سرور شخصی با Ollama: حریم خصوصی کامل',
    excerpt:
      'با Ollama می‌توانید مدل‌های زبانی مانند Llama 3 و Mistral را روی سرور خودتان اجرا کنید. راهنمای کامل راه‌اندازی برای استارتاپ‌ها.',
    content: `
## چرا LLM محلی؟

برای بسیاری از کسب‌وکارها، ارسال داده‌های حساس به APIهای خارجی ریسک امنیتی دارد.
Ollama راه‌حلی است که به شما امکان می‌دهد مدل‌های پیشرفته را روی زیرساخت خودتان اجرا کنید.

## نصب و راه‌اندازی

\`\`\`bash
# نصب Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# دانلود مدل Llama 3
ollama pull llama3

# اجرای مدل
ollama run llama3
\`\`\`

## استفاده از API

\`\`\`typescript
const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  body: JSON.stringify({
    model: 'llama3',
    prompt: 'سوال شما اینجا',
    stream: false,
  }),
});

const data = await response.json();
console.log(data.response);
\`\`\`

## مقایسه مدل‌های محبوب

| مدل | حجم | کیفیت | سرعت |
|-----|-----|-------|------|
| Llama 3 8B | 4.7GB | خوب | سریع |
| Mistral 7B | 4.1GB | خوب | سریع |
| Llama 3 70B | 40GB | عالی | کند |

## موارد استفاده ایده‌آل

- پردازش اسناد محرمانه
- سیستم‌های RAG داخلی
- chatbot اختصاصی شرکت
- تحلیل داده‌های حساس مشتریان

## نتیجه‌گیری

Ollama ابزار ایده‌آلی برای استارتاپ‌هایی است که به حریم خصوصی داده‌ها اهمیت می‌دهند
و می‌خواهند از وابستگی به APIهای خارجی رها شوند.
    `,
    author: 'رضا کریمی',
    date: '۱۴۰۴/۱۱/۱۵',
    readTime: '۹ دقیقه',
    category: 'فناوری',
    tags: ['Ollama', 'LLM', 'حریم خصوصی', 'Self-hosted'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
  },
];

// ─── توابع کمکی ────────────────────────────────────────────────────────────────

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((p) => p.featured);
}

export function getRecentPosts(count: number = 6): BlogPost[] {
  return posts.slice(0, count);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return posts.filter((p) => p.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((p) => p.category))];
}

export function getAllTags(): string[] {
  return [...new Set(posts.flatMap((p) => p.tags))];
}
