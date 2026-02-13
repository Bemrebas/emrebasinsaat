import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const baseUrl = "https://emrebasinsaat.com/tr";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: baseUrl,
      type: "website",
      locale: "tr_TR",
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
