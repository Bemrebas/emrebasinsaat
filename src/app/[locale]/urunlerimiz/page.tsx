import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageClient from "./PageClient";

const baseUrl = "https://emrebasinsaat.com";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "products.meta" });
  const path = "/urunlerimiz";
  const canonicalUrl = locale === "tr" ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": `${baseUrl}${path}`,
        tr: `${baseUrl}${path}`,
        en: `${baseUrl}/en${path}`,
        ar: `${baseUrl}/ar${path}`,
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

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <PageClient />;
}
