import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../globals.css";

const locales = ["tr"];

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
        { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: [
        { url: "/images/logo.png" },
      ],
      apple: [
        { url: "/images/logo.png", sizes: "512x512" },
      ],
    },
    manifest: "/manifest.json",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://emrebasinsaat.com/tr",
      siteName: "Emrebaş İnşaat ve Madencilik",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "https://emrebasinsaat.com/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Emrebaş İnşaat - Yozgat Kum Ocağı, Çakıl ve Hafriyat",
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
      canonical: "https://emrebasinsaat.com/tr",
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://emrebasinsaat.com/#business",
    name: "Emrebaş İnşaat - Yozgat Kum Ocağı, Çakıl ve Hafriyat",
    alternateName: "Emrebaş İnşaat ve Madencilik",
    description:
      "Yozgat'ta kum, çakıl ve hafriyat ihtiyaçlarınız için Emrebaş İnşaat hizmetinizde. Yozgat kum ocağı, çakıl satışı, hafriyat ve nakliye hizmetleri.",
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
      address: "Yozgat, Türkiye",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Yozgat" },
      { "@type": "City", name: "Yerköy" },
      { "@type": "City", name: "Kırşehir" },
      { "@type": "City", name: "Kırıkkale" },
      { "@type": "City", name: "Ankara" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kum",
          description: "Yozgat kum ocağından üretilen kaliteli kum satışı",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Çakıl",
          description: "Yozgat'ta her boyutta çakıl ve mıcır satışı",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hafriyat",
          description: "Yozgat hafriyat hizmetleri - kazı, dolgu ve arazi düzenleme",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yozgat Kum, Çakıl ve Hafriyat Hizmetleri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yozgat Kum Ocağı İşletmeciliği" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yozgat Hafriyat Hizmetleri" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yozgat Çakıl ve Mıcır Satışı" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taş Kırma ve Kum Üretimi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kum ve Hafriyat Nakliye Hizmetleri" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yozgat İnşaat Hizmetleri" } },
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
      availableLanguage: ["Turkish"],
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
    name: "Emrebaş İnşaat - Yozgat Kum, Çakıl ve Hafriyat",
    url: "https://emrebasinsaat.com",
    publisher: { "@id": "https://emrebasinsaat.com/#organization" },
    inLanguage: "tr",
  };

  return (
    <html lang="tr" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1b2838" />
        <link rel="preload" as="image" href="/images/logo.png" />
        <meta name="msapplication-TileColor" content="#1b2838" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/images/logo.png" />
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
