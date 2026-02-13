"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
} from "lucide-react";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/hakkimizda", label: t("about") },
    { href: "/hizmetlerimiz", label: t("services") },
    { href: "/urunlerimiz", label: t("products") },
    { href: "/projelerimiz", label: t("projects") },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: t("contact") },
  ];

  const isActive = (href: string) => {
    const cleanPath = pathname.replace(`/${locale}`, "") || "/";
    return cleanPath === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg py-1"
          : "bg-black/30 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4">
        {/* Logo - sadece scroll sonrası görünür */}
        <div className="flex-shrink-0 min-h-[50px] flex items-center">
          <div
            style={{
              opacity: isScrolled ? 1 : 0,
              transform: isScrolled ? "scale(1) translateX(0)" : "scale(0.8) translateX(-20px)",
              transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            }}
          >
            {isScrolled && (
              <Link href="/" className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Emrebaş İnşaat - Yozgat Kum Ocağı, Çakıl ve Hafriyat"
                  width={140}
                  height={70}
                  className="object-contain h-auto w-[100px] md:w-[120px] dark:brightness-0 dark:invert"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-accent bg-accent/10"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-200 hover:text-accent hover:bg-accent/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-lg transition-all ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-light"
                  : "text-white/90 hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Call Button - Desktop */}
          <a
            href="tel:+905435933566"
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <Phone size={16} />
            <span>{t("callUs")}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all ${
              isScrolled
                ? "text-gray-700 dark:text-gray-200"
                : "text-white"
            }`}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className="lg:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light"
          style={{ animation: "fadeInDown 0.3s ease-out" }}
        >
          <nav className="container-custom mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+905435933566"
              className="flex items-center gap-2 mt-4 bg-accent text-white px-4 py-3 rounded-lg font-semibold justify-center"
            >
              <Phone size={18} />
              {t("callUs")}: 0543 593 35 66
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
