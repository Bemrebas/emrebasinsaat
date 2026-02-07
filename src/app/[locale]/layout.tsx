import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../globals.css";

const locales = ["tr", "en", "ar"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: {
      default: t("title"),
      template: `%s | Emrebaş İnşaat ve Madencilik`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Emrebaş İnşaat ve Madencilik" }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://emrebasinsaat.com",
      siteName: "Emrebaş İnşaat ve Madencilik",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: "https://emrebasinsaat.com",
      languages: {
        tr: "https://emrebasinsaat.com/tr",
        en: "https://emrebasinsaat.com/en",
        ar: "https://emrebasinsaat.com/ar",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const isRTL = locale === "ar";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Emrebaş İnşaat ve Madencilik",
    description:
      "Yozgat Yerköy'de 20+ yıllık tecrübe ile hafriyat, kum ocağı, mıcır satışı, taş kırma, nakliye ve inşaat hizmetleri.",
    url: "https://emrebasinsaat.com",
    telephone: "+905435933566",
    email: "emrebastic@hotmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kızıl Gedik Fabrika Sahası Ankara Yolu 5.km",
      addressLocality: "Yerköy",
      addressRegion: "Yozgat",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7236,
      longitude: 34.4531,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
    areaServed: ["Yozgat", "Yerköy", "Kırşehir", "Kırıkkale", "Ankara"],
    serviceType: [
      "Hafriyat",
      "Kum Ocağı",
      "Mıcır Satışı",
      "Taş Kırma",
      "Nakliye",
      "İnşaat",
      "İş Makinesi Kiralama",
    ],
  };

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
