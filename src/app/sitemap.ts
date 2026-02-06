import { MetadataRoute } from "next";

const baseUrl = "https://emrebasinsaat.com";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/urunlerimiz" ? 0.9 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
