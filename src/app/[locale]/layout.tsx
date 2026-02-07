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
    metadataBase: new URL("https://emrebasinsaat.com"),
    title: {
      default: t("title"),
      template: `%s | Emrebaş İnşaat`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Emrebaş İnşaat ve Madencilik" }],
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/images/logo.png" },
      ],
    },
    manifest: "/manifest.json",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "tr" ? "https://emrebasinsaat.com" : `https://emrebasinsaat.com/${locale}`,
      siteName: "Emrebaş İnşaat ve Madencilik",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : "ar_SA",
      type: "website",
      images: [
        {
          url: "https://emrebasinsaat.com/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Emrebaş İnşaat ve Madencilik - Yozgat Kum Ocağı & Hafriyat",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: locale === "tr" ? "https://emrebasinsaat.com" : `https://emrebasinsaat.com/${locale}`,
      languages: {
        tr: "https://emrebasinsaat.com",
        en: "https://emrebasinsaat.com/en",
        ar: "https://emrebasinsaat.com/ar",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "msapplication-TileColor": "#1b2838",
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://emrebasinsaat.com/#business",
    name: "Emrebaş İnşaat ve Madencilik",
    alternateName: "Emrebaş İnşaat - Kum Ocağı & Hafriyat",
    description:
      "Yozgat Yerköy'de 40+ yıllık ticari geçmiş ve 20+ yıllık sektör tecrübesi ile hafriyat, kum ocağı, çakıl satışı, mıcır satışı, taş kırma, nakliye ve inşaat hizmetleri.",
    url: "https://emrebasinsaat.com",
    logo: "https://emrebasinsaat.com/images/logo.png",
    image: "https://emrebasinsaat.com/images/og-image.png",
    telephone: "+905435933566",
    email: "emrebastic@hotmail.com",
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kızıl Gedik Fabrika Sahası Ankara Yolu 5.km",
      addressLocality: "Yerköy",
      addressRegion: "Yozgat",
      postalCode: "66900",
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
    areaServed: [
      { "@type": "City", name: "Yozgat" },
      { "@type": "City", name: "Yerköy" },
      { "@type": "City", name: "Kırşehir" },
      { "@type": "City", name: "Kırıkkale" },
      { "@type": "City", name: "Ankara" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hizmetlerimiz",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kum Ocağı İşletmeciliği" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hafriyat Hizmetleri" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mıcır ve Çakıl Satışı" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taş Kırma" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nakliye Hizmetleri" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "İnşaat Hizmetleri" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "İş Makinesi Kiralama" } },
      ],
    },
    sameAs: [],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://emrebasinsaat.com/#organization",
    name: "Emrebaş İnşaat ve Madencilik",
    url: "https://emrebasinsaat.com",
    logo: "https://emrebasinsaat.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+905435933566",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English", "Arabic"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kızıl Gedik Fabrika Sahası Ankara Yolu 5.km",
      addressLocality: "Yerköy",
      addressRegion: "Yozgat",
      postalCode: "66900",
      addressCountry: "TR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://emrebasinsaat.com/#website",
    name: "Emrebaş İnşaat ve Madencilik",
    url: "https://emrebasinsaat.com",
    publisher: { "@id": "https://emrebasinsaat.com/#organization" },
    inLanguage: ["tr", "en", "ar"],
  };

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1b2838" />
        <link rel="preload" as="image" href="/images/logo.png" />
        <meta name="msapplication-TileColor" content="#1b2838" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
