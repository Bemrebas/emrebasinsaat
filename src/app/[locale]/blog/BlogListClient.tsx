"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { Search, Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export default function BlogListClient() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesCategory =
        activeCategory === "Tümü" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());

  return (
    <>
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
            <span className="text-accent">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Yozgat Kum, Çakıl ve Hafriyat Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Yozgat&apos;ta kum, çakıl ve hafriyat sektörü hakkında faydalı
            bilgiler, rehberler ve güncel gelişmeler.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[var(--muted)] border-b border-[var(--border)]">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-accent text-white"
                      : "bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-accent/10 hover:text-accent border border-[var(--border)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
              />
              <input
                type="text"
                placeholder="Makalelerde ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--muted-foreground)] text-lg">
                Aramanızla eşleşen makale bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <ScrollAnimationWrapper key={post.slug} delay={i * 0.1}>
                  <article className="card-base overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {post.readingTime} dk okuma
                        </span>
                      </div>

                      <h2 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-3 transition-all mt-auto"
                      >
                        Devamını Oku <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
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
