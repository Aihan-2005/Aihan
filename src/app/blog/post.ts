// export interface BlogPost {
//   id: number
//   slug: string
//   image: string
//   title: string
//   description: string
//   date: string
//   category: string
//   author: string
//   readTime: string
//   tags: string[]
// }

// export const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     slug: "ai-trends-2024",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
//     title: "تازه‌ترین ترندهای هوش مصنوعی در سال 2024",
//     description: "مروری جامع بر جدیدترین تحولات و پیشرفت‌های شگرف در دنیای هوش مصنوعی که صنایع مختلف را متحول کرده است",
//     date: "۱۴۰۴/۱۱/۰۶",
//     category: "هوش مصنوعی",
//     author: "علی احمدی",
//     readTime: "۸ دقیقه",
//     tags: ["AI", "Machine Learning", "Technology"]
//   }
// ]

// export function getPostBySlug(slug: string): BlogPost | undefined {
//   return blogPosts.find(post => post.slug === slug)
// }

// export function getAllPosts(): BlogPost[] {
//   return blogPosts
// }
// src/data/blog/posts.ts

export interface BlogPost {
  id: number
  slug: string
  image: string
  title: string
  description: string
  date: string
  category: string
  author: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ai-trends-2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    title: "تازه‌ترین ترندهای هوش مصنوعی در سال 2024",
    description: "مروری جامع بر جدیدترین تحولات و پیشرفت‌های شگرف در دنیای هوش مصنوعی که صنایع مختلف را متحول کرده است",
    date: "۱۴۰۴/۱۱/۰۶",
    category: "هوش مصنوعی",
    author: "علی احمدی",
    readTime: "۸ دقیقه",
    tags: ["AI", "Machine Learning", "Technology"]
  },
  {
    id: 2,
    slug: "deep-learning-beginners",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    title: "یادگیری عمیق برای مبتدیان",
    description: "آموزش جامع و گام به گام مفاهیم پایه‌ای شبکه‌های عصبی و یادگیری عمیق برای علاقه‌مندان به این حوزه",
    date: "۱۴۰۴/۱۱/۰۳",
    category: "یادگیری ماشین",
    author: "سارا محمدی",
    readTime: "۱۲ دقیقه",
    tags: ["Deep Learning", "Neural Networks", "Tutorial"]
  },
  {
    id: 3,
    slug: "data-science-startups",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "علم داده در کسب‌وکارهای نوپا",
    description: "چگونه از قدرت تحلیل داده و هوش تجاری برای رشد سریع و پایدار استارتاپ‌ها بهره‌برداری کنیم",
    date: "۱۴۰۴/۱۰/۲۸",
    category: "علم داده",
    author: "محمد رضایی",
    readTime: "۱۰ دقیقه",
    tags: ["Data Science", "Startups", "Analytics"]
  },
  {
    id: 4,
    slug: "ai-ethics",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    title: "اخلاق در هوش مصنوعی",
    description: "بررسی عمیق چالش‌های اخلاقی و اجتماعی توسعه سیستم‌های هوشمند و تأثیر آن‌ها بر جامعه",
    date: "۱۴۰۴/۱۰/۲۵",
    category: "اخلاق AI",
    author: "فاطمه کریمی",
    readTime: "۱۵ دقیقه",
    tags: ["AI Ethics", "Society", "Philosophy"]
  },
  {
    id: 5,
    slug: "blockchain-future",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    title: "آینده بلاک‌چین و رمزارزها",
    description: "نگاهی به پتانسیل‌های بلاک‌چین در تحول صنایع مختلف و تأثیر آن بر اقتصاد دیجیتال",
    date: "۱۴۰۴/۱۰/۲۰",
    category: "بلاک‌چین",
    author: "حسین نوری",
    readTime: "۹ دقیقه",
    tags: ["Blockchain", "Cryptocurrency", "Web3"]
  },
  {
    id: 6,
    slug: "iot-smart-cities",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    title: "اینترنت اشیا و شهرهای هوشمند",
    description: "کاربرد تکنولوژی IoT در ایجاد شهرهای هوشمند و بهبود کیفیت زندگی شهروندان",
    date: "۱۴۰۴/۱۰/۱۵",
    category: "اینترنت اشیا",
    author: "مریم اکبری",
    readTime: "۱۱ دقیقه",
    tags: ["IoT", "Smart Cities", "Sustainability"]
  },
  {
    id: 7,
    slug: "quantum-computing",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    title: "محاسبات کوانتوم: انقلاب آینده",
    description: "آشنایی با مفاهیم پایه محاسبات کوانتوم و تأثیر آن بر آینده فناوری و امنیت",
    date: "۱۴۰۴/۱۰/۱۰",
    category: "محاسبات کوانتوم",
    author: "دکتر امیر حسینی",
    readTime: "۲۰ دقیقه",
    tags: ["Quantum Computing", "Physics", "Cryptography"]
  },
  {
    id: 8,
    slug: "cybersecurity-2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    title: "امنیت سایبری در عصر دیجیتال",
    description: "بررسی جدیدترین تهدیدات سایبری و راهکارهای محافظت از داده‌ها در محیط دیجیتال",
    date: "۱۴۰۴/۱۰/۰۵",
    category: "امنیت سایبری",
    author: "رضا موسوی",
    readTime: "۱۳ دقیقه",
    tags: ["Cybersecurity", "Data Protection", "Privacy"]
  },
  {
    id: 9,
    slug: "ar-vr-metaverse",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    title: "واقعیت مجازی و متاورس",
    description: "کاوش در دنیای واقعیت مجازی، افزوده و پتانسیل‌های بی‌نظیر متاورس در آینده",
    date: "۱۴۰۴/۰۹/۳۰",
    category: "واقعیت مجازی",
    author: "نیما پارسا",
    readTime: "۱۴ دقیقه",
    tags: ["AR", "VR", "Metaverse"]
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}
