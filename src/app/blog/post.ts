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
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}
