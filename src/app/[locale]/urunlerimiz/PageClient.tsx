"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Mountain, ArrowRight, Layers } from "lucide-react";

export default function PageClient() {
  const t = useTranslations("products");

  const products = [
    { key: "sand", gradient: "from-yellow-500 to-amber-600", size: "0-3mm" },
    { key: "gravel7", gradient: "from-gray-400 to-gray-600", size: "7-15mm" },
    { key: "gravel15", gradient: "from-stone-400 to-stone-600", size: "15-30mm" },
    { key: "rubble", gradient: "from-amber-600 to-yellow-800", size: "30mm+" },
    { key: "crushed", gradient: "from-slate-400 to-slate-700", size: "Özel" },
  ];

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

      {/* Products Grid */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          <div className="space-y-12">
            {products.map((product, i) => (
              <ScrollAnimationWrapper key={product.key}>
                <div className="card-base overflow-hidden">
                  <div className={`grid lg:grid-cols-3 ${i % 2 !== 0 ? "" : ""}`}>
                    {/* Image */}
                    <div className={`h-56 lg:h-auto bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden ${i % 2 !== 0 ? "lg:order-2 lg:col-span-1" : "lg:col-span-1"}`}>
                      <div className="text-center">
                        <Mountain size={60} className="text-white/30 mx-auto mb-2" />
                        <span className="text-white/60 text-2xl font-bold">{product.size}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-10 lg:col-span-2 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <Layers size={20} className="text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                          {t(`items.${product.key}.name`)}
                        </h2>
                      </div>

                      <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed text-lg">
                        {t(`items.${product.key}.description`)}
                      </p>

                      <div className="bg-[var(--muted)] rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-sm mb-2">{t("usageAreas")}:</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          {t(`items.${product.key}.usage`)}
                        </p>
                      </div>

                      <Link
                        href="/iletisim"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        {t("getQuote")} <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
