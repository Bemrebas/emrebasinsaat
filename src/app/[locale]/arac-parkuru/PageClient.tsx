"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Hash } from "lucide-react";

export default function PageClient() {
  const t = useTranslations("fleet");
  const [filter, setFilter] = useState("all");

  const vehicles = [
    { key: "excavator", icon: "🏗️" },
    { key: "loader", icon: "🚜" },
    { key: "truck", icon: "🚛" },
    { key: "semi", icon: "🚚" },
    { key: "poolTrailer", icon: "📦" },
    { key: "lowbed", icon: "🔧" },
  ];

  const filters = [
    { key: "all", label: t("all") },
    { key: "excavators", label: t("excavators") },
    { key: "transport", label: t("transport") },
  ];

  const filteredVehicles = vehicles.filter((v) => {
    if (filter === "all") return true;
    const category = t(`items.${v.key}.category`);
    return category === filter;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
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

      {/* Fleet */}
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
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.key}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-base overflow-hidden group h-full">
                    <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 dark:from-primary/20 dark:via-accent/10 dark:to-primary/20 flex items-center justify-center relative">
                      <span className="text-6xl group-hover:scale-110 transition-transform">
                        {vehicle.icon}
                      </span>
                      <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Hash size={12} />
                        {t(`items.${vehicle.key}.count`)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {t(`items.${vehicle.key}.name`)}
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-sm mb-4">
                        {t(`items.${vehicle.key}.capacity`)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                          {t(`items.${vehicle.key}.category`) === "excavators"
                            ? t("excavators")
                            : t("transport")}
                        </span>
                        <Link
                          href="/iletisim"
                          className="text-accent font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {t("rentQuote")} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
