export interface ProductFeature {
  title: string
  description: string
  icon: string
}

export interface ProductPrice {
  plan: string
  price: string
  features: string[]
  recommended?: boolean
}

export interface ProductFAQ {
  question: string
  answer: string
}

export interface Product {
  id: number
  slug: string                    // برای URL (مثلاً: "smart-assistant")
  name: string
  tagline: string                 // یک جمله کوتاه توضیحی
  description: string
  longDescription: string         // توضیحات کامل
  image: string
  icon: string                    // نام آیکون از lucide-react
  color: string
  gradient: string
  tag?: string
  
  // جزئیات بیشتر
  features: ProductFeature[]
  benefits: string[]              // مزایای استفاده
  useCases: string[]             // موارد استفاده
  pricing: ProductPrice[]
  faqs: ProductFAQ[]
  
  // تصاویر و دمو
  gallery: string[]              // تصاویر بیشتر
  demoVideo?: string             // لینک ویدیو دمو (اختیاری)
  
  // تکنولوژی‌ها
  technologies: string[]         // تکنولوژی‌های استفاده شده
  
  // آمار
  stats: {
    accuracy?: string
    speed?: string
    clients?: string
    [key: string]: string | undefined
  }
}
