import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import BlogDetailClient from "./BlogDetailClient";

const baseUrl = "https://emrebasinsaat.com/tr";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${baseUrl}/blog/${post.slug}`,
      type: "article",
      locale: "tr_TR",
      publishedTime: post.dateISO,
      authors: [post.author],
      images: [
        {
          url: `${baseUrl}${post.image}`,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogDetailClient post={post} />;
}
