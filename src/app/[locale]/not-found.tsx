"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Home, HardHat } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center px-4">
        <div className="mb-8">
          <HardHat size={80} className="mx-auto text-accent/50 mb-4" />
          <h1 className="text-6xl md:text-8xl font-extrabold text-primary dark:text-white mb-4">
            404
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("title")}</h2>
        <p className="text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
          {t("description")}
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Home size={18} /> {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
