"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BlogPost, BlogSection } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, ChevronRight, Phone } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={index} className="text-[var(--foreground)]/80 leading-relaxed mb-6">
          {section.content}
        </p>
      );
    case "heading2":
      return (
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mt-10 mb-4"
        >
          {section.content}
        </h2>
      );
    case "heading3":
      return (
        <h3
          key={index}
          className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mt-8 mb-3"
        >
          {section.content}
        </h3>
      );
    case "list":
      return (
        <div key={index} className="mb-6">
          <p className="text-[var(--foreground)]/80 leading-relaxed mb-3">
            {section.content}
          </p>
          <ul className="space-y-2 ml-1">
            {section.items?.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[var(--foreground)]/80"
              >
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "highlight":
      return (
        <div
          key={index}
          className="border-l-4 border-accent bg-accent/5 p-5 rounded-r-lg my-8"
        >
          <p className="text-[var(--foreground)]/90 leading-relaxed font-medium">
            {section.content}
          </p>
        </div>
      );
    case "cta":
      return (
        <div
          key={index}
          className="bg-gradient-to-r from-accent to-accent-dark text-white p-8 rounded-xl my-8 text-center"
        >
          <p className="text-lg font-semibold mb-4">{section.content}</p>
          <a
            href="tel:+905435933566"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all hover:scale-105"
          >
            <Phone size={18} />
            0543 593 35 66
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://emrebasinsaat.com${post.image}`,
    datePublished: post.dateISO,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Emrebaş İnşaat",
      url: "https://emrebasinsaat.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#1b2838] via-[#0d1b2a] to-[#0a0e17]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent line-clamp-1">{post.title}</span>
          </nav>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime} dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <ScrollAnimationWrapper>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-10">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            </ScrollAnimationWrapper>

            {/* Article Body */}
            <ScrollAnimationWrapper>
              <article className="prose-custom">
                {post.content.map((section, index) =>
                  renderSection(section, index)
                )}
              </article>
            </ScrollAnimationWrapper>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[var(--border)]">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-[var(--muted)] text-[var(--muted-foreground)] text-xs px-3 py-1.5 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} />
                Tüm Yazılara Dön
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent-dark">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Yozgat&apos;ta Kum, Çakıl ve Hafriyat İçin Teklif Alın
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Profesyonel hizmet ve uygun fiyatlar için hemen bize ulaşın.
          </p>
          <a
            href="tel:+905435933566"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-100 font-bold text-lg py-3 px-8 rounded-xl transition-all hover:scale-105"
          >
            0543 593 35 66
          </a>
        </div>
      </section>
    </>
  );
}
