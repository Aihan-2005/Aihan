import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 1,
    slug: 'smart-assistant',
    name: 'دستیار هوشمند',
    tagline: 'دستیار AI که هرگز خسته نمی‌شود',
    description: 'دستیار هوشمند مبتنی بر AI که می‌تواند به سوالات پیچیده پاسخ دهد',
    longDescription: `دستیار هوشمند ما با استفاده از پیشرفته‌ترین مدل‌های زبانی و یادگیری عمیق، 
    قادر است به صورت شبانه‌روزی به سوالات مشتریان شما پاسخ دهد. این سیستم با یادگیری مداوم از 
    تعاملات، هر روز هوشمندتر می‌شود و تجربه کاربری بهتری ارائه می‌دهد.`,
    image: '/images/artificial-intelligence.jpg',
    icon: 'MessageSquare',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    tag: 'محبوب‌ترین',
    
    features: [
      {
        title: 'پاسخگویی ۲۴/۷',
        description: 'بدون نیاز به نیروی انسانی، همیشه در دسترس مشتریان شما',
        icon: 'Clock'
      },
      {
        title: 'یادگیری هوشمند',
        description: 'با هر تعامل، دقیق‌تر و هوشمندتر می‌شود',
        icon: 'Brain'
      },
      {
        title: 'پشتیبانی چند زبانه',
        description: 'فارسی، انگلیسی و ۵۰+ زبان دیگر',
        icon: 'Languages'
      },
      {
        title: 'یکپارچگی آسان',
        description: 'اتصال به وب‌سایت، تلگرام، واتساپ و...',
        icon: 'Zap'
      }
    ],
    
    benefits: [
      'کاهش ۷۰٪ هزینه‌های پشتیبانی',
      'افزایش رضایت مشتریان',
      'پاسخ فوری به هزاران درخواست همزمان',
      'تحلیل رفتار و نیاز مشتریان'
    ],
    
    useCases: [
      'فروشگاه‌های آنلاین',
      'شرکت‌های خدماتی',
      'پلتفرم‌های آموزشی',
      'بانک‌ها و موسسات مالی'
    ],
    
    pricing: [
      {
        plan: 'استارتاپی',
        price: '۲,۵۰۰,۰۰۰ تومان/ماه',
        features: [
          'تا ۱۰۰۰ مکالمه در ماه',
          'پشتیبانی ایمیلی',
          'یک کانال ارتباطی',
          'داشبورد اولیه'
        ]
      },
      {
        plan: 'حرفه‌ای',
        price: '۵,۰۰۰,۰۰۰ تومان/ماه',
        recommended: true,
        features: [
          'مکالمه نامحدود',
          'پشتیبانی ۲۴/۷',
          'چند کانال ارتباطی',
          'داشبورد پیشرفته',
          'API اختصاصی',
          'تحلیل‌های هوشمند'
        ]
      },
      {
        plan: 'سازمانی',
        price: 'تماس بگیرید',
        features: [
          'تمام امکانات حرفه‌ای',
          'سفارشی‌سازی کامل',
          'سرور اختصاصی',
          'مشاور اختصاصی',
          'SLA تضمینی',
          'آموزش تیم'
        ]
      }
    ],
    
    faqs: [
      {
        question: 'چقدر طول می‌کشد تا دستیار آماده شود؟',
        answer: 'معمولاً ظرف ۲-۳ روز کاری، دستیار شما آموزش دیده و آماده استفاده می‌شود.'
      },
      {
        question: 'آیا می‌توانم دستیار را سفارشی کنم؟',
        answer: 'بله، کاملاً! شما می‌توانید شخصیت، لحن و دانش دستیار را متناسب با برند خود تنظیم کنید.'
      },
      {
        question: 'آیا با سیستم‌های فعلی من یکپارچه می‌شود؟',
        answer: 'بله، ما API و webhook فراهم می‌کنیم که با اکثر سیستم‌ها قابل اتصال است.'
      }
    ],
    
    gallery: [
      '/images/assistant-demo-1.jpg',
      '/images/assistant-demo-2.jpg',
      '/images/assistant-demo-3.jpg'
    ],
    
    technologies: ['GPT-4', 'LangChain', 'Vector DB', 'RAG', 'FastAPI'],
    
    stats: {
      accuracy: '۹۸٪',
      speed: '< ۲ ثانیه',
      clients: '۱۰۰+'
    }
  },
  
  // محصولات دیگر رو به همین شکل اضافه می‌کنیم
  // فعلاً یک نمونه ساده برای محصول دوم:
  {
    id: 2,
    slug: 'content-generator',
    name: 'تولید محتوا',
    tagline: 'محتوای خلاقانه در چند ثانیه',
    description: 'سیستم تولید محتوای خلاق و حرفه‌ای برای شبکه‌های اجتماعی',
    longDescription: 'توضیحات کامل...',
    image: '/images/robot-analyzing-dark-neon.png',
    icon: 'Sparkles',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    tag: 'جدید',
    features: [],
    benefits: [],
    useCases: [],
    pricing: [],
    faqs: [],
    gallery: [],
    technologies: [],
    stats: {}
  }
  
  // بقیه محصولات...
]

// Helper function برای پیدا کردن محصول بر اساس ID یا Slug
export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
