"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import {
  Mountain,
  Shovel,
  Truck,
  Package,
  Building2,
  Check,
  ArrowRight,
  Star,
} from "lucide-react";

export default function PageClient() {
  const t = useTranslations("services");

  const services = [
    {
      key: "quarry",
      icon: Mountain,
      color: "from-accent to-amber-600",
      featured: true,
    },
    {
      key: "excavation",
      icon: Shovel,
      color: "from-primary to-primary-light",
      featured: false,
    },
    {
      key: "rental",
      icon: Truck,
      color: "from-emerald-600 to-green-700",
      featured: false,
    },
    {
      key: "transport",
      icon: Package,
      color: "from-blue-600 to-blue-800",
      featured: false,
    },
    {
      key: "construction",
      icon: Building2,
      color: "from-gray-600 to-gray-800",
      featured: false,
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
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

      {/* Services */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto space-y-16">
          {services.map((service, i) => {
            const features: string[] = t.raw(`${service.key}.features`) as string[];
            const note = service.key === "rental" ? (t.raw(`${service.key}.note`) as string) : null;

            return (
              <ScrollAnimationWrapper key={service.key}>
                <div
                  className={`card-base overflow-hidden ${
                    service.featured ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {service.featured && (
                    <div className="bg-accent text-white text-sm font-semibold py-2 px-4 flex items-center gap-2">
                      <Star size={16} /> #1 Hizmetimiz
                    </div>
                  )}
                  <div className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image placeholder */}
                    <div className={`h-64 lg:h-auto bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <service.icon size={80} className="text-white/30" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {t(`${service.key}.title`)}
                      </h2>
                      <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                        {t(`${service.key}.description`)}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {features.map((feature: string, fi: number) => (
                          <li key={fi} className="flex items-start gap-2">
                            <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {note && (
                        <p className="text-sm text-accent font-medium mb-6 bg-accent/10 p-3 rounded-lg">
                          {note}
                        </p>
                      )}
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
            );
          })}
        </div>
      </section>
    </>
  );
}
