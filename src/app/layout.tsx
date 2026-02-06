import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emrebaş İnşaat ve Madencilik",
  description: "Emrebaş İnşaat ve Madencilik - Yozgat Yerköy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
