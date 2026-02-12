import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kum, Çakıl ve Hafriyat - Yozgat | Emrebaş İnşaat",
  description: "Yozgat'ta kum, çakıl ve hafriyat ihtiyaçlarınız için Emrebaş İnşaat hizmetinizde. Yozgat kum ocağı, çakıl satışı, hafriyat ve nakliye hizmetleri.",
  metadataBase: new URL("https://emrebasinsaat.com"),
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/images/logo.png" }],
    apple: [{ url: "/images/logo.png", sizes: "512x512" }],
  },
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
