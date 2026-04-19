// import { notFound } from 'next/navigation'
// import { getPostBySlug, getAllPosts } from '@/data/blog/posts'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/sections/Footer'
// import BlogPostContent from '@/components/blog/BlogPostContent'

// // این برای Static Generation هست
// export async function generateStaticParams() {
//   const posts = getAllPosts()
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// // این Page Component اصلی هست
// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug)

//   if (!post) {
//     notFound()
//   }

//   return (
//     <main className="bg-black text-white min-h-screen">
//       <Navbar />
//       <BlogPostContent post={post} />
//       <Footer />
//     </main>
//   )
// }

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/data/blog/posts';
import BlogPostContent from '@/components/blog/BlogPostContent';

// ✅ در Next.js 15، params یک Promise است
interface Props {
  params: Promise<{ slug: string }>;
}

// تولید پارامترهای استاتیک
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ✅ اضافه شد: جلوگیری از 404 در dynamic routes
export const dynamicParams = false;

// تولید متادیتای داینامیک
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // ✅ await اضافه شد
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'مقاله یافت نشد | وبلاگ',
      description: 'مقاله مورد نظر وجود ندارد.',
    };
  }

  return {
    title: `${post.title} | وبلاگ`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 800,
          alt: post.title,
        },
      ],
    },
  };
}

// ✅ async اضافه شد + await برای params
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
