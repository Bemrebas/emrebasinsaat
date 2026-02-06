"use client";

import { useTranslations } from "next-intl";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Shield, Award, Clock, Heart, Users } from "lucide-react";

export default function PageClient() {
  const t = useTranslations("about");

  const values = [
    { key: "reliability", icon: Shield, color: "from-blue-600 to-primary" },
    { key: "quality", icon: Award, color: "from-accent to-amber-600" },
    { key: "delivery", icon: Clock, color: "from-green-600 to-emerald-700" },
    { key: "satisfaction", icon: Heart, color: "from-red-500 to-rose-600" },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-primary-light rounded-full blur-3xl" />
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

      {/* Story */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper direction="left">
              <div className="aspect-[4/3] rounded-2xl placeholder-image flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30" />
                <Users size={80} className="text-primary/40 dark:text-white/20 relative z-10" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-dark/90 backdrop-blur rounded-xl p-4">
                  <p className="text-sm font-semibold text-center">Emrebaş Ekibi</p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper direction="right">
              <h2 className="text-3xl font-bold mb-6">{t("story.title")}</h2>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p>{t("story.p3")}</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimationWrapper delay={0}>
              <div className="card-base p-8 h-full border-t-4 border-t-accent">
                <h3 className="text-2xl font-bold mb-4">{t("mission.title")}</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">{t("mission.text")}</p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.15}>
              <div className="card-base p-8 h-full border-t-4 border-t-primary">
                <h3 className="text-2xl font-bold mb-4">{t("vision.title")}</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">{t("vision.text")}</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          <ScrollAnimationWrapper className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">{t("values.title")}</h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <ScrollAnimationWrapper key={val.key} delay={i * 0.1}>
                <div className="card-base p-6 text-center h-full group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${val.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <val.icon size={28} className="text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{t(`values.${val.key}`)}</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t(`values.${val.key}Desc`)}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
