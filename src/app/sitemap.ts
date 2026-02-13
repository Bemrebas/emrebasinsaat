import { MetadataRoute } from "next";

const baseUrl = "https://emrebasinsaat.com";

const routes = [
  "",
  "/hakkimizda",
  "/hizmetlerimiz",
  "/urunlerimiz",
  "/projelerimiz",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}/tr${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/hizmetlerimiz" || route === "/urunlerimiz" ? 0.9 : route === "/iletisim" ? 0.85 : 0.8,
  }));
}
