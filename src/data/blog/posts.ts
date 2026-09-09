export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  source: string
  featured?: boolean
}

export const posts: BlogPost[] = [
  {
    slug: 'chatgpt-images-2-5-september-2026',
    title: 'ChatGPT Images 2.5 منتشر شد؛ ویرایش دقیق‌تر و ساخت تصویر سریع‌تر',
    excerpt:
      'OpenAI در ۸ سپتامبر ۲۰۲۶ Images 2.5 را معرفی کرد؛ نسخه‌ای با جزئیات بهتر، ویرایش دقیق‌تر، سرعت بالاتر و قابلیت‌هایی مثل Template و Sketch-to-Image.',
    content: `
## چه چیزی منتشر شده است؟

OpenAI در ۸ سپتامبر ۲۰۲۶ ChatGPT Images 2.5 را معرفی کرد. طبق توضیحات رسمی، تمرکز این نسخه روی حفظ بهتر جزئیات هنگام ویرایش، کیفیت بالاتر خروجی و کاهش زمان تولید تصویر است. این تغییر برای تیم‌هایی که چند بار روی یک تصویر iteration انجام می‌دهند مهم است، چون حفظ عناصر اصلی در ویرایش‌های متوالی یکی از چالش‌های رایج ابزارهای مولد تصویر بوده است.

## قابلیت‌های جدید برای کاربر

در ChatGPT امکان شروع از Template اضافه شده تا کاربر برای قالب‌های رایج نقطه شروع آماده داشته باشد. روی موبایل نیز Sketch اجازه می‌دهد طرح اولیه دستی کشیده شود و همان طرح به‌عنوان بخشی از درخواست تولید تصویر استفاده شود. قابلیت Edit and comment هم مسیر اصلاح تصویر را مستقیم‌تر می‌کند و کاربر می‌تواند روی تصویر درباره تغییر موردنظر توضیح بدهد.

## چرا برای تیم محصول و محتوا مهم است؟

این نوع ابزارها می‌توانند مرحله prototype و تولید draft بصری را سریع‌تر کنند؛ برای مثال ساخت چند نسخه از یک بنر، mockup یا ایده اولیه کمپین. با این حال خروجی مولد همچنان باید از نظر هویت بصری برند، حقوق استفاده از دارایی‌ها و صحت متن داخل تصویر بازبینی شود. سرعت بیشتر، جای کنترل کیفیت را نمی‌گیرد.

## جمع‌بندی

Images 2.5 نشان می‌دهد رقابت تولید تصویر فقط روی «ساخت یک تصویر زیبا» نیست و به سمت workflow کامل‌تر برای ساخت، اصلاح و اشتراک‌گذاری می‌رود. برای استفاده حرفه‌ای، بهترین الگو این است که AI مرحله ایده و iteration را سریع کند و تصمیم نهایی طراحی همچنان تحت بازبینی انسانی باقی بماند.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۷',
    readTime: '۵ دقیقه',
    category: 'هوش مصنوعی مولد',
    tags: ['OpenAI', 'Image Generation', 'Generative AI'],
    image: '/images/AI-Content-Creation.jpg',
    source: 'OpenAI — 8 Sep 2026',
    featured: true,
  },
  {
    slug: 'microsoft-mdash-agentic-security-2026',
    title: 'مایکروسافت MDASH را به Azure Government آورد؛ اسکن امنیتی با عامل‌های AI',
    excerpt:
      'مایکروسافت در ۸ سپتامبر از استقرار آزمایشی MDASH در Azure Government خبر داد؛ سامانه‌ای چندمدلی برای یافتن و کمک به رفع ضعف‌های امنیتی نرم‌افزار.',
    content: `
## MDASH چیست؟

مایکروسافت MDASH را به‌عنوان یک سامانه agentic برای اسکن امنیتی نرم‌افزار معرفی کرده است. این سرویس در Azure Government برای گروهی از مشتریان دولتی آمریکا و شرکای مجاز در دسترس preview قرار گرفته و هدف آن کمک به مدافعان برای پیدا کردن آسیب‌پذیری‌ها پیش از سوءاستفاده مهاجمان است.

## تفاوت رویکرد agentic با یک اسکنر ساده

در یک اسکنر سنتی، مجموعه‌ای از ruleها یا تست‌های از پیش تعریف‌شده روی کد و سرویس اجرا می‌شود. در رویکرد agentic، مدل می‌تواند یافته‌ها را در زمینه بزرگ‌تری بررسی کند، مسیرهای مختلف تحلیل را دنبال کند و نتایج چند مدل یا ابزار را کنار هم بگذارد. این به معنی حذف ابزارهای کلاسیک امنیت نیست؛ بلکه AI به لایه تحلیل و orchestration اضافه می‌شود.

## نکته مهم برای تیم‌های فنی

استفاده از AI در امنیت باید با validation سخت‌گیرانه همراه باشد. یک مدل می‌تواند false positive تولید کند یا اهمیت یک یافته را اشتباه ارزیابی کند. بنابراین یافته‌های agent باید با ابزارهای تخصصی، تست قابل بازتولید و بازبینی متخصص امنیت تأیید شوند. همچنین دسترسی agent به کد، credential و محیط باید بر اساس اصل least privilege محدود شود.

## جمع‌بندی

ورود MDASH به محیط دولتی نشان می‌دهد agentic security از مرحله demo به سمت deployment کنترل‌شده حرکت کرده است. برای شرکت‌ها، پیام اصلی این نیست که «AI امنیت را خودکار می‌کند»، بلکه این است که orchestration هوشمند می‌تواند سرعت triage و کشف را بالا ببرد؛ به شرط آنکه کنترل دسترسی و تأیید انسانی حفظ شود.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۷',
    readTime: '۶ دقیقه',
    category: 'امنیت و AI',
    tags: ['Microsoft', 'Agentic AI', 'Cybersecurity'],
    image: '/images/ai-agents.jpg',
    source: 'Microsoft — 8 Sep 2026',
    featured: true,
  },
  {
    slug: 'google-lyria-3-5-2026',
    title: 'Lyria 3.5 گوگل وارد Gemini و API شد؛ نسل جدید تولید موسیقی با AI',
    excerpt:
      'گوگل در ۴ سپتامبر ۲۰۲۶ Lyria 3.5 را برای Gemini app و Gemini API عرضه کرد؛ مدلی برای ساخت موسیقی با وکال بیان‌گرتر و تنظیم‌های غنی‌تر.',
    content: `
## Lyria 3.5 چه تغییری کرده است؟

گوگل Lyria 3.5 را به‌عنوان نسخه جدید مدل تولید موسیقی خود معرفی کرده است. طبق اعلام رسمی، این مدل روی کیفیت شنیداری، بیان وکال و غنای arrangement بهبود دارد و هم در Gemini app و هم برای توسعه‌دهندگان از طریق Gemini API ارائه شده است.

## کنترل بیشتر روی خروجی

کاربر می‌تواند ژانر را انتخاب یا توصیف کند و بین خروجی vocal و instrumental تصمیم بگیرد. Templateهای آماده نیز برای سناریوهایی مثل موسیقی پس‌زمینه یا قطعه مناسبتی ارائه شده‌اند. امکان انتخاب قطعه کوتاه یا طولانی‌تر هم باعث می‌شود مدل برای use caseهای متفاوت مناسب‌تر باشد.

## کاربرد برای تیم‌های محتوا

تولید موسیقی با AI می‌تواند برای prototype صوتی، backing track، ایده جینگل یا نسخه اولیه موسیقی ویدیو مفید باشد. اما استفاده تجاری نیازمند بررسی سیاست استفاده سرویس، مجوزهای لازم و قواعد برند است. در پروژه حرفه‌ای بهتر است خروجی AI بخشی از workflow خلاق باشد، نه اینکه بدون ارزیابی مستقیماً منتشر شود.

## جمع‌بندی

اضافه شدن Lyria 3.5 به API نشان می‌دهد تولید صوت و موسیقی بیش از گذشته به یک قابلیت قابل ترکیب در محصول تبدیل شده است. توسعه‌دهنده می‌تواند generation را داخل workflow محتوا قرار دهد، اما مدیریت حقوق، moderation و کنترل خروجی همچنان بخش مهم طراحی محصول است.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۳',
    readTime: '۵ دقیقه',
    category: 'هوش مصنوعی مولد',
    tags: ['Google', 'Lyria', 'Music AI'],
    image: '/images/speech-processing.png',
    source: 'Google — 4 Sep 2026',
  },
  {
    slug: 'gpt-6-astra-september-2026',
    title: 'GPT-6 Astra معرفی شد؛ تمرکز OpenAI روی کارهای چندمرحله‌ای، کدنویسی و ابزارها',
    excerpt:
      'OpenAI در ۳ سپتامبر ۲۰۲۶ GPT-6 Astra را معرفی کرد؛ مدلی جدید برای کارهای حرفه‌ای، نرم‌افزار، مرور وب، computer use و سناریوهای پیچیده چندمرحله‌ای.',
    content: `
## Astra چه جایگاهی دارد؟

OpenAI در ۳ سپتامبر ۲۰۲۶ GPT-6 Astra را معرفی کرد و آن را قدرتمندترین مدل خود در استقرار گسترده توصیف کرد. طبق اطلاعات رسمی، حوزه‌های اصلی بهبود شامل software engineering، browsing، computer use، science و کارهای حرفه‌ای چندمرحله‌ای است. rollout مدل ابتدا محدود است و دسترسی گسترده‌تر به‌تدریج انجام می‌شود.

## نکته مهم برای توسعه‌دهندگان

در مستندات API، قابلیت‌هایی مثل async tool calling و mid-turn steering برای Astra برجسته شده‌اند. async tool calling برای workflowهایی مهم است که مدل نباید هنگام اجرای یک ابزار کاملاً متوقف بماند. mid-turn steering نیز اجازه می‌دهد دستور جدید در میانه اجرای طولانی وارد شود؛ قابلیتی که برای agentهای طولانی‌مدت و تجربه‌های interactive مفید است.

## امنیت چرا پررنگ‌تر شده است؟

OpenAI هم‌زمان یک safety overview برای Astra منتشر کرده و اعلام کرده این مدل در ارزیابی داخلی به سطح بالاتری از قابلیت سایبری رسیده است. نتیجه عملی برای تیم‌ها این است که دسترسی ابزار، شبکه، credential و محیط اجرا باید محدود و قابل audit باشد. قوی‌تر شدن مدل، نیاز به sandbox و permission design را کمتر نمی‌کند؛ بیشتر می‌کند.

## جمع‌بندی

Astra روندی را تقویت می‌کند که در آن مدل زبانی فقط پاسخ‌دهنده متن نیست و به orchestrator ابزار و taskهای طولانی تبدیل می‌شود. معماری درست برای چنین مدل‌هایی باید timeout، budget، permission، human approval و logging را از ابتدا در نظر بگیرد.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۲',
    readTime: '۷ دقیقه',
    category: 'مدل‌های زبانی',
    tags: ['OpenAI', 'GPT-6 Astra', 'Agents'],
    image: '/images/Blog-images-scaled.jpg',
    source: 'OpenAI — 3 Sep 2026',
    featured: true,
  },
  {
    slug: 'gemini-3-8-flash-cyber-2026',
    title: 'Gemini 3.8 Flash و Flash Cyber معرفی شدند؛ تمرکز روی agentها و امنیت',
    excerpt:
      'گوگل در ۲ سپتامبر ۲۰۲۶ Gemini 3.8 Flash و نسخه تخصصی Flash Cyber را معرفی کرد؛ نسل جدیدی برای reasoning، coding، agentic workflows و دفاع سایبری.',
    content: `
## Gemini 3.8 چه چیزی اضافه می‌کند؟

گوگل Gemini 3.8 Flash را در ۲ سپتامبر ۲۰۲۶ معرفی کرد. این شرکت می‌گوید نسخه جدید نسبت به نسل قبل در software engineering، کارهای agentic و reasoning چندمرحله‌ای بهبود دارد، در حالی که هدف آن حفظ سرعت و هزینه پایین خانواده Flash است.

## Flash Cyber چیست؟

در کنار مدل عمومی، Google یک نسخه Flash Cyber برای سناریوهای دفاعی امنیت سایبری معرفی کرده است. این نسخه برای یافتن و اصلاح آسیب‌پذیری در چارچوب دسترسی کنترل‌شده ارائه می‌شود. نکته مهم این است که قابلیت سایبری قوی، نیازمند محدودیت دسترسی و governance دقیق است و نباید مانند یک مدل عمومی بدون کنترل در محیط حساس قرار گیرد.

## چه زمانی مدل Flash مناسب است؟

مدل‌های Flash معمولاً وقتی جذاب هستند که تعداد درخواست زیاد، latency مهم یا workflow دارای چند tool call باشد. با این حال انتخاب مدل نباید فقط بر اساس نام نسخه انجام شود. بهتر است یک eval set از taskهای واقعی محصول ساخته شود و کیفیت، هزینه و زمان پاسخ چند مدل روی همان مجموعه مقایسه شوند.

## جمع‌بندی

معرفی هم‌زمان Flash و Flash Cyber یک روند واضح را نشان می‌دهد: مدل‌های عمومی در کنار مدل یا configuration تخصصی برای دامنه‌های حساس عرضه می‌شوند. برای تیم مهندسی، معماری evaluation و permission از خود انتخاب مدل مهم‌تر می‌شود.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۱',
    readTime: '۶ دقیقه',
    category: 'مدل‌های زبانی',
    tags: ['Google', 'Gemini', 'Cybersecurity'],
    image: '/images/Firefly_Gemini Flash_A robot  analysing data. The theme should be dark with neon colours.  The picture sho 152106.png',
    source: 'Google — 2 Sep 2026',
  },
  {
    slug: 'gemini-agentic-video-understanding-2026',
    title: 'Agentic Video در Gemini؛ مدل به‌جای دیدن ثابت، بخش‌های مهم ویدیو را جستجو می‌کند',
    excerpt:
      'گوگل در ۱ سپتامبر قابلیت Agentic Video Understanding را معرفی کرد؛ روشی که به Gemini اجازه می‌دهد بخش‌های مرتبط ویدیو را پویا اسکن و بازبینی کند.',
    content: `
## مشکل پردازش ثابت ویدیو چیست؟

در روش ساده، مدل ویدیو را با نرخ فریم مشخص نمونه‌برداری می‌کند. این کار برای ویدیوهای طولانی می‌تواند token زیادی مصرف کند و در عین حال لحظه‌های بسیار کوتاه بین نمونه‌ها از دست بروند. Google برای حل این مسئله Agentic Video Understanding را معرفی کرده است.

## رویکرد agentic چگونه کار می‌کند؟

مدل می‌تواند بر اساس سوال تصمیم بگیرد کدام بخش ویدیو را با چه دقتی بررسی کند و بین frame، audio و transcript جابه‌جا شود. به‌جای ingest ثابت کل ویدیو، سیستم به‌صورت هدفمند windowهای مرتبط را بارگذاری می‌کند و در صورت نیاز یک بخش را دوباره با FPS متفاوت می‌بیند.

## نتایج اعلام‌شده توسط گوگل

Google در benchmarkهای خود گزارش کرده این روش در برخی سناریوها مصرف token را تا ۸۸ درصد و هزینه تحلیل را تا ۶۶ درصد کاهش داده و هم‌زمان کیفیت را تا ۷ درصد بهتر کرده است. این اعداد نتایج گزارش‌شده توسط سازنده روی benchmarkهای مشخص هستند و نباید بدون تست روی workload واقعی به همه پروژه‌ها تعمیم داده شوند.

## کاربردهای عملی

جستجوی یک لحظه کوتاه در ویدیوی چندساعته، anomaly detection، شمارش حرکت یا شیء و تحلیل آموزش‌های طولانی از use caseهای مطرح‌شده هستند. برای محصول واقعی، مسئله latency، هزینه ذخیره ویدیو، حریم خصوصی و retention باید هم‌زمان با کیفیت مدل طراحی شوند.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۰',
    readTime: '۶ دقیقه',
    category: 'بینایی ماشین',
    tags: ['Google', 'Gemini', 'Video AI'],
    image: '/images/data-analysis.jpg',
    source: 'Google — 1 Sep 2026',
  },
  {
    slug: 'claude-fable-mythos-5-1-2026',
    title: 'Claude Fable 5.1 و Mythos 5.1 معرفی شدند؛ Anthropic مدل‌های جدید خود را عرضه کرد',
    excerpt:
      'Anthropic در ۱ سپتامبر ۲۰۲۶ Fable 5.1 و Mythos 5.1 را معرفی کرد؛ مدل‌هایی با تمرکز بر coding، knowledge work و research، با دسترسی محدودتر برای Mythos.',
    content: `
## دو مدل با دو سطح دسترسی

Anthropic در ۱ سپتامبر ۲۰۲۶ Claude Fable 5.1 و Claude Mythos 5.1 را معرفی کرد. طبق Newsroom شرکت، این دو از پیشرفته‌ترین مدل‌های Anthropic برای coding و knowledge work هستند و قابلیت‌های research آن‌ها نیز پررنگ شده است.

## تفاوت Fable و Mythos

Mythos برای حوزه‌هایی مثل cybersecurity و biology قابلیت‌های حساس‌تری دارد و دسترسی به آن برای گروه محدودی از سازمان‌های بررسی‌شده ارائه می‌شود. Fable 5.1 مدل قابل‌دسترس‌تر است اما همچنان safeguardهای ویژه‌ای برای درخواست‌های حساس دارد و بعضی queryها ممکن است به مدل‌های محدودتر route شوند.

## پیام برای تیم‌های محصول

این شیوه انتشار نشان می‌دهد «یک مدل برای همه کاربردها» کم‌کم جای خود را به tierهای مختلف قابلیت و دسترسی می‌دهد. تیمی که مدل را وارد محصول می‌کند باید علاوه بر quality و cost، محدودیت دامنه، retention، policy و رفتار fallback را در integration تست کند.

## جمع‌بندی

برای ارزیابی مدل‌های جدید، benchmark عمومی کافی نیست. یک مجموعه تست از taskهای واقعی کسب‌وکار، شامل نمونه‌های سخت، حساس و edge caseها ساخته شود و کیفیت مدل در همان context سنجیده شود. این رویکرد از تصمیم‌گیری بر اساس hype نسخه جدید جلوگیری می‌کند.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۱۰',
    readTime: '۶ دقیقه',
    category: 'مدل‌های زبانی',
    tags: ['Anthropic', 'Claude', 'LLM'],
    image: '/images/chatgpt-vs-claude.jpg',
    source: 'Anthropic — 1 Sep 2026',
  },
  {
    slug: 'ollama-transparent-pricing-august-2026',
    title: 'Ollama قیمت‌گذاری شفاف مبتنی بر Token را برای پلن‌های Cloud معرفی کرد',
    excerpt:
      'Ollama در ۳۱ اوت ۲۰۲۶ ساختار جدید Pro، Max و Team را معرفی کرد که مصرف cloud را با نرخ per-token و اعتبار ماهانه شفاف‌تر محاسبه می‌کند.',
    content: `
## چه چیزی در Ollama تغییر کرده است؟

Ollama در ۳۱ اوت ۲۰۲۶ اعلام کرد پلن‌های Pro، Max و Team در ساختار جدید از قیمت‌گذاری per-token استفاده می‌کنند و هر پلن یک pool اعتبار ماهانه دارد. هدف اعلام‌شده این است که هزینه مدل‌های cloud نسبت به روش‌های مبهم‌تر GPU-time قابل پیش‌بینی‌تر شود.

## چرا برای توسعه‌دهندگان مهم است؟

برای agentها و workflowهای طولانی، هزینه فقط به تعداد request وابسته نیست؛ context بزرگ، output طولانی و tool loopها می‌توانند token مصرفی را بالا ببرند. per-token pricing باعث می‌شود بتوان هزینه را در سطح task تخمین زد و budget یا alert برای workflow تعریف کرد.

## Local و Cloud همچنان دو مسئله متفاوت هستند

Ollama بیشتر با اجرای local مدل‌های open شناخته می‌شود، اما cloud access سناریوی دیگری است. انتخاب local می‌تواند کنترل داده و زیرساخت را بیشتر کند، ولی نیازمند سخت‌افزار و عملیات است. Cloud راه‌اندازی را ساده‌تر می‌کند اما هزینه مصرف و سیاست retention باید بررسی شود. تصمیم درست به اندازه مدل، latency، حساسیت داده و حجم استفاده وابسته است.

## جمع‌بندی

برای هر provider بهتر است هزینه واقعی یک task end-to-end اندازه‌گیری شود: token ورودی، token خروجی، retry، ابزارها و concurrency. مقایسه صرف قیمت «هر یک میلیون token» بدون workload واقعی تصویر کاملی از هزینه محصول نمی‌دهد.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۰۹',
    readTime: '۵ دقیقه',
    category: 'مدل‌های متن‌باز',
    tags: ['Ollama', 'Open Models', 'AI Infrastructure'],
    image: '/images/ollama.png',
    source: 'Ollama — 31 Aug 2026',
  },
  {
    slug: 'anthropic-model-hardware-standard-2026',
    title: 'Anthropic از Model Hardware Standard رونمایی کرد؛ استانداردی برای اتصال Agentها به سخت‌افزار',
    excerpt:
      'Anthropic در ۲۷ اوت ۲۰۲۶ پیش‌نمایش تحقیقاتی MHS را منتشر کرد؛ مشخصاتی مشترک برای اینکه عامل‌های AI بتوانند ابزارهای آزمایشگاهی و صنعتی را با کنترل ایمنی مدیریت کنند.',
    content: `
## Model Hardware Standard چیست؟

Anthropic در ۲۷ اوت ۲۰۲۶ research preview استاندارد Model Hardware Standard یا MHS را معرفی کرد. هدف MHS تعریف یک لایه مشترک برای ارتباط agentهای AI با دستگاه‌های قابل برنامه‌ریزی مثل میکروسکوپ، liquid handler یا بازوی رباتیک است.

## مسئله‌ای که MHS حل می‌کند

در آزمایشگاه و تولید، بسیاری از دستگاه‌ها interfaceهای متفاوت دارند و یکپارچه‌سازی آن‌ها به integration سفارشی نیاز دارد. یک استاندارد مشترک می‌تواند adapter و کنترل دستگاه را از منطق agent جدا کند و orchestration چند دستگاه را ساده‌تر سازد. Anthropic این پروژه را ابتدا با HHMI Janelia Research Campus توسعه داده است.

## ایمنی در اتصال AI به دنیای فیزیکی

وقتی خروجی مدل به حرکت دستگاه واقعی تبدیل می‌شود، خطا دیگر فقط یک پاسخ متنی اشتباه نیست. محدودیت پارامتر، interlock، مجوز عمل، simulation، تأیید انسانی و emergency stop باید در لایه سیستم وجود داشته باشند و نباید صرفاً به prompt اعتماد شود. استاندارد interface می‌تواند این کنترل‌ها را قابل‌تکرارتر کند.

## جمع‌بندی

MHS هنوز research preview است، اما جهت مهمی را نشان می‌دهد: agentها از نرم‌افزار به سمت ابزارهای فیزیکی حرکت می‌کنند. موفقیت این مسیر به اندازه هوشمندی مدل به استانداردهای interface، observability و safety engineering وابسته خواهد بود.
    `,
    author: 'تیم تحریریه WiserTeam',
    date: '۱۴۰۵/۰۶/۰۵',
    readTime: '۶ دقیقه',
    category: 'رباتیک و Agent',
    tags: ['Anthropic', 'Agents', 'Robotics'],
    image: '/images/humanoid-robots-manufacturing-floors-2026.png',
    source: 'Anthropic — 27 Aug 2026',
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((post) => post.featured)
}

export function getRecentPosts(count = 6): BlogPost[] {
  return posts.slice(0, count)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return posts.filter((post) => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((post) => post.category)))
}

export function getAllTags(): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags)))
}
