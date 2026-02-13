import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageClient from "./PageClient";

const baseUrl = "https://emrebasinsaat.com/tr";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about.meta" });
  const path = "/hakkimizda";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}${path}`,
      type: "website",
      locale: "tr_TR",
    },
  };
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <PageClient />;
}
