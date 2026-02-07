"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Ruler,
  X,
  ZoomIn,
  MessageCircle,
  Phone,
  CheckCircle,
} from "lucide-react";

const productImages: Record<string, string> = {
  sand: "/images/products/0-3-kum.png",
  gravel7: "/images/products/7-15-cakil.png",
  gravel15: "/images/products/15-30-cakil.png",
  crushed: "/images/products/kirmatas.png",
  rubble: "/images/products/moloz.png",
};

const productColors: Record<string, string> = {
  sand: "from-yellow-500 to-amber-600",
  gravel7: "from-gray-400 to-gray-600",
  gravel15: "from-stone-400 to-stone-600",
  crushed: "from-slate-400 to-slate-700",
  rubble: "from-amber-600 to-yellow-800",
};

const productKeys = ["sand", "gravel7", "gravel15", "crushed", "rubble"];

export default function PageClient() {
  const t = useTranslations("products");
  const [lightboxKey, setLightboxKey] = useState<string | null>(null);

  const whatsappMessage = (productName: string) => {
    const text = encodeURIComponent(
      `Merhaba, ${productName} hakkında fiyat bilgisi almak istiyorum.`
    );
    return `https://wa.me/905435933566?text=${text}`;
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1b2838] via-[#0d1b2a] to-[#0a0e17] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#2a4a6b] rounded-full blur-3xl" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productKeys.map((key, i) => {
              const usageItems = t(`items.${key}.usage`).split(",").map((s: string) => s.trim());

              return (
                <ScrollAnimationWrapper key={key} delay={i * 0.1}>
                  <div className="card-base overflow-hidden group h-full flex flex-col">
                    {/* Image */}
                    <div
                      className="relative h-56 overflow-hidden cursor-pointer"
                      onClick={() => setLightboxKey(key)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={productImages[key]}
                        alt={t(`items.${key}.alt`)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <ZoomIn size={22} className="text-gray-800" />
                        </div>
                      </div>
                      {/* Size badge */}
                      <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <Ruler size={12} />
                        {t(`items.${key}.size`)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${productColors[key]} flex items-center justify-center flex-shrink-0`}>
                          <Layers size={18} className="text-white" />
                        </div>
                        <h2 className="text-xl font-bold leading-tight">
                          {t(`items.${key}.name`)}
                        </h2>
                      </div>

                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
                        {t(`items.${key}.description`)}
                      </p>

                      {/* Usage Areas */}
                      <div className="bg-[var(--muted)] rounded-xl p-4 mb-5">
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-accent mb-2">
                          {t("usageAreas")}
                        </h4>
                        <ul className="space-y-1.5">
                          {usageItems.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                              <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Buttons */}
                      <div className="mt-auto flex flex-col sm:flex-row gap-2">
                        <a
                          href={whatsappMessage(t(`items.${key}.name`))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2 text-sm"
                        >
                          <MessageCircle size={16} />
                          {t("whatsappQuote")}
                        </a>
                        <Link
                          href="/iletisim"
                          className="flex-1 bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2 text-sm"
                        >
                          <Phone size={16} />
                          {t("getQuote")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-custom mx-auto">
          <ScrollAnimationWrapper className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("allProducts")}
            </h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <div className="card-base overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary-light text-white">
                    <th className="text-left py-4 px-6 font-semibold">{t("allProducts")}</th>
                    <th className="text-left py-4 px-6 font-semibold">{t("sizeLabel")}</th>
                    <th className="text-left py-4 px-6 font-semibold">{t("usageAreas")}</th>
                    <th className="text-center py-4 px-6 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {productKeys.map((key, i) => (
                    <tr
                      key={key}
                      className={`border-b border-[var(--card-border)] hover:bg-accent/5 transition-colors ${
                        i % 2 === 0 ? "bg-[var(--background)]" : ""
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={productImages[key]}
                            alt={t(`items.${key}.alt`)}
                            className="w-12 h-12 rounded-lg object-cover"
                            loading="lazy"
                          />
                          <span className="font-semibold">{t(`items.${key}.name`)}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-accent/10 text-accent font-semibold text-xs px-3 py-1 rounded-full">
                          {t(`items.${key}.size`)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[var(--muted-foreground)]">
                        {t(`items.${key}.usage`)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <a
                          href={whatsappMessage(t(`items.${key}.name`))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline"
                        >
                          {t("getQuote")} <ArrowRight size={14} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("getQuote")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905435933566"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
              <a
                href="tel:+905435933566"
                className="bg-white text-accent hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3 text-lg"
              >
                <Phone size={24} />
                0543 593 35 66
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxKey && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxKey(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              onClick={() => setLightboxKey(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-4xl w-full bg-white dark:bg-dark-light rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={productImages[lightboxKey]}
                alt={t(`items.${lightboxKey}.alt`)}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">
                    {t(`items.${lightboxKey}.name`)}
                  </h3>
                  <span className="bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    {t(`items.${lightboxKey}.size`)}
                  </span>
                </div>
                <p className="text-[var(--muted-foreground)] mb-4 text-lg">
                  {t(`items.${lightboxKey}.description`)}
                </p>
                <div className="bg-[var(--muted)] rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">{t("usageAreas")}:</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t(`items.${lightboxKey}.usage`)}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappMessage(t(`items.${lightboxKey}.name`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 px-6 rounded-lg transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    {t("whatsappQuote")}
                  </a>
                  <a
                    href="tel:+905435933566"
                    className="flex-1 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    {t("getQuote")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
