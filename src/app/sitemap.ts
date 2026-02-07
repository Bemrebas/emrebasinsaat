import { MetadataRoute } from "next";

const baseUrl = "https://emrebasinsaat.com";
const defaultLocale = "tr";
const locales = ["tr", "en", "ar"];

const routes = [
  "",
  "/hakkimizda",
  "/hizmetlerimiz",
  "/urunlerimiz",
  "/arac-parkuru",
  "/projelerimiz",
  "/iletisim",
];

function getUrl(locale: string, route: string) {
  if (locale === defaultLocale) {
    return `${baseUrl}${route || "/"}`;
  }
  return `${baseUrl}/${locale}${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = getUrl(l, route);
      }

      sitemapEntries.push({
        url: getUrl(locale, route),
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/hizmetlerimiz" || route === "/urunlerimiz" ? 0.9 : route === "/iletisim" ? 0.85 : 0.8,
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
