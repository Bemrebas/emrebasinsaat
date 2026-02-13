import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog - Yozgat Kum, Çakıl ve Hafriyat Rehberleri | Emrebaş İnşaat",
  description:
    "Yozgat'ta kum, çakıl ve hafriyat hakkında faydalı bilgiler, rehberler ve güncel fiyat bilgileri. Emrebaş İnşaat blog sayfası.",
  alternates: {
    canonical: "https://emrebasinsaat.com/tr/blog",
  },
  openGraph: {
    title: "Blog - Yozgat Kum, Çakıl ve Hafriyat Rehberleri | Emrebaş İnşaat",
    description:
      "Yozgat'ta kum, çakıl ve hafriyat hakkında faydalı bilgiler, rehberler ve güncel fiyat bilgileri.",
    url: "https://emrebasinsaat.com/tr/blog",
    type: "website",
    locale: "tr_TR",
  },
};

export default function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <BlogListClient />;
}
