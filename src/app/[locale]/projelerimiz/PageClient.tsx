"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, MapPin, Tag } from "lucide-react";

export default function PageClient() {
  const t = useTranslations("projectsPage");
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = t.raw("items") as Array<{
    name: string;
    category: string;
    description: string;
  }>;

  const filters = [
    { key: "all", label: t("all") },
    { key: "excavation", label: t("excavation") },
    { key: "infrastructure", label: t("infrastructure") },
    { key: "construction", label: t("construction") },
    { key: "solar", label: t("solar") },
  ];

  const categoryColors: Record<string, string> = {
    excavation: "from-amber-500 to-orange-600",
    infrastructure: "from-blue-500 to-blue-700",
    construction: "from-gray-500 to-gray-700",
    solar: "from-yellow-400 to-amber-500",
  };

  const filteredItems = items.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1b2838] via-[#0d1b2a] to-[#0a0e17] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t("pageSubtitle")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          {/* Filters */}
          <ScrollAnimationWrapper className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === f.key
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-[var(--muted)] hover:bg-accent/10 text-[var(--foreground)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </ScrollAnimationWrapper>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="card-base overflow-hidden group cursor-pointer h-full"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <div className={`h-52 bg-gradient-to-br ${categoryColors[item.category] || "from-gray-400 to-gray-600"} flex items-center justify-center relative overflow-hidden`}>
                      <MapPin size={48} className="text-white/20" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <ZoomIn
                          size={32}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag size={14} className="text-accent" />
                        <span className="text-xs font-semibold text-accent uppercase">
                          {filters.find((f) => f.key === item.category)?.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-3xl w-full bg-white dark:bg-dark-light rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-64 md:h-80 bg-gradient-to-br ${categoryColors[filteredItems[lightboxIndex]?.category] || "from-gray-400 to-gray-600"} flex items-center justify-center`}>
                <MapPin size={64} className="text-white/30" />
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold text-accent uppercase">
                  {filters.find((f) => f.key === filteredItems[lightboxIndex]?.category)?.label}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {filteredItems[lightboxIndex]?.name}
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  {filteredItems[lightboxIndex]?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
