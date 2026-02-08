"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import CounterAnimation from "@/components/CounterAnimation";
import {
  Mountain,
  Truck,
  Building2,
  ArrowRight,
  Phone,
  Landmark,
  HardHat,
  Sun,
  ChevronRight,
} from "lucide-react";

export default function HomeClient() {
  const t = useTranslations();

  const productItems = [
    { key: "sand", gradient: "from-yellow-600 to-amber-500", image: "/images/products/0-3-kum.png" },
    { key: "gravel7", gradient: "from-gray-500 to-gray-600", image: "/images/products/7-15-cakil.png" },
    { key: "gravel15", gradient: "from-stone-500 to-stone-600", image: "/images/products/15-30-cakil.png" },
    { key: "crushed", gradient: "from-slate-500 to-slate-700", image: "/images/products/kirmatas.png" },
    { key: "rubble", gradient: "from-amber-700 to-yellow-800", image: "/images/products/moloz.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2838] via-[#0d1b2a] to-[#0a0e17] z-0">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2a4a6b] rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
          </div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 container-custom mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              20+ {t("stats.years")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-xl md:text-2xl text-accent font-semibold mb-4"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/iletisim" className="btn-primary text-lg flex items-center justify-center gap-2">
              {t("hero.getQuote")} <ArrowRight size={20} />
            </Link>
            <a href="tel:+905435933566" className="btn-outline text-lg flex items-center justify-center gap-2">
              <Phone size={20} /> {t("hero.callUs")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("featuredServices.title")}
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              {t("featuredServices.subtitle")}
            </p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mountain,
                title: t("featuredServices.sand.title"),
                desc: t("featuredServices.sand.description"),
                color: "from-accent to-amber-600",
                featured: true,
                image: "/images/services/kepcekamyon.jpg",
              },
              {
                icon: Truck,
                title: t("featuredServices.excavation.title"),
                desc: t("featuredServices.excavation.description"),
                color: "from-primary to-primary-light",
                featured: false,
                image: "/images/services/kepcekamyonn2.jpg",
              },
              {
                icon: Building2,
                title: t("featuredServices.construction.title"),
                desc: t("featuredServices.construction.description"),
                color: "from-dark to-dark-light",
                featured: false,
                image: "/images/services/insaat.jpeg",
              },
            ].map((item, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.15}>
                <div
                  className={`card-base p-8 h-full group relative overflow-hidden ${
                    item.featured ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {item.image && (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover opacity-30 group-hover:opacity-55 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/70 to-[var(--card)]/40 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500" />
                    </>
                  )}
                  {item.featured && (
                    <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                      #1
                    </div>
                  )}
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon size={28} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${item.image ? "group-hover:text-white" : ""}`}>{item.title}</h3>
                    <p className={`text-[var(--muted-foreground)] text-sm leading-relaxed mb-6 transition-colors duration-500 ${item.image ? "group-hover:text-gray-200" : ""}`}>
                      {item.desc}
                    </p>
                    <Link
                      href="/hizmetlerimiz"
                      className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all"
                    >
                      {t("featuredServices.learnMore")} <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-custom mx-auto">
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("products.title")}
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productItems.map((item, i) => (
              <ScrollAnimationWrapper key={item.key} delay={i * 0.1}>
                <div className="card-base overflow-hidden group hover:-translate-y-1">
                  <div className="h-36 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={t(`products.items.${item.key}.name`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1">
                      {t(`products.items.${item.key}.name`)}
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] line-clamp-2">
                      {t(`products.items.${item.key}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper className="text-center mt-10">
            <Link href="/urunlerimiz" className="btn-primary inline-flex items-center gap-2">
              {t("featuredServices.learnMore")} <ArrowRight size={18} />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1b2838] via-[#0d1b2a] to-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2a4a6b] rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 relative z-10">
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {t("stats.title")}
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterAnimation end={20} label={t("stats.years")} />
            <CounterAnimation end={50} label={t("stats.projects")} />
            <CounterAnimation end={10} label={t("stats.vehicles")} />
            <CounterAnimation end={1000} label={t("stats.clients")} />
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("references.title")}
            </h2>
            <p className="text-[var(--muted-foreground)]">{t("references.subtitle")}</p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: t("references.municipalities"),
                desc: t("references.municipalitiesDesc"),
              },
              {
                icon: HardHat,
                title: t("references.infrastructure"),
                desc: t("references.infrastructureDesc"),
              },
              {
                icon: Sun,
                title: t("references.solar"),
                desc: t("references.solarDesc"),
              },
            ].map((item, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.15}>
                <div className="card-base p-8 text-center h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">{t("cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905435933566"
                className="bg-white text-accent hover:bg-gray-100 font-bold text-xl py-4 px-10 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <Phone size={24} /> {t("cta.phone")}
              </a>
              <Link
                href="/iletisim"
                className="border-2 border-white text-white hover:bg-white hover:text-accent font-semibold py-4 px-10 rounded-xl transition-all inline-flex items-center justify-center gap-2"
              >
                {t("cta.contactForm")} <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
