import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const baseUrl = "https://emrebasinsaat.com";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const canonicalUrl = locale === "tr" ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        tr: baseUrl,
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      type: "website",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : "ar_SA",
    },
  };
}

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <HomeClient />;
}
