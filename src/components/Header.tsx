"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  ChevronDown,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const localeLabels: Record<string, string> = { tr: "TR", en: "EN", ar: "AR" };

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
    { href: "/arac-parkuru", label: t("fleet") },
    { href: "/projelerimiz", label: t("projects") },
    { href: "/iletisim", label: t("contact") },
  ];

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${currentPath === "/" ? "" : currentPath}`);
    setIsLangOpen(false);
  };

  const isActive = (href: string) => {
    const cleanPath = pathname.replace(`/${locale}`, "") || "/";
    return cleanPath === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 transition-all duration-300">
          <Image
            src="/images/logo.png"
            alt="Emrebaş İnşaat - Kum Ocağı & Hafriyat"
            width={200}
            height={100}
            className={`object-contain transition-all duration-300 ${
              isScrolled
                ? "w-[120px] md:w-[140px] h-auto"
                : "w-[140px] md:w-[180px] h-auto"
            } ${!isScrolled ? "brightness-0 invert" : "dark:brightness-0 dark:invert"}`}
            priority
          />
        </Link>

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
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-light"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <Globe size={16} />
              <span>{localeLabels[locale]}</span>
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-1 right-0 bg-white dark:bg-dark-light rounded-lg shadow-xl border border-gray-200 dark:border-dark-lighter overflow-hidden min-w-[100px]"
                >
                  {Object.entries(localeLabels).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => switchLocale(code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-lighter transition-colors ${
                        locale === code
                          ? "text-accent font-semibold"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {label} {code === "tr" ? "Türkçe" : code === "en" ? "English" : "العربية"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
