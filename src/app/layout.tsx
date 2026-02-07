import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emrebaş İnşaat ve Madencilik - Yozgat Kum Ocağı, Çakıl ve Hafriyat Hizmetleri",
  description: "Yozgat ve Yerköy'de 40+ yıllık tecrübe ile kum ocağı, çakıl satışı, hafriyat ve nakliye hizmetleri. Kaliteli inşaat malzemeleri için bizi arayın!",
  metadataBase: new URL("https://emrebasinsaat.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
