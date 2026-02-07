"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Emrebaş İnşaat - Kum Ocağı & Hafriyat"
                width={180}
                height={90}
                className="w-[160px] h-auto object-contain brightness-0 invert"
                loading="eager"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              {t("companyInfo")}
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-dark-light hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: nav("home") },
                { href: "/hakkimizda", label: nav("about") },
                { href: "/hizmetlerimiz", label: nav("services") },
                { href: "/urunlerimiz", label: nav("products") },
                { href: "/arac-parkuru", label: nav("fleet") },
                { href: "/projelerimiz", label: nav("projects") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t("ourServices")}</h3>
            <ul className="space-y-3">
              {[
                t("sandSales"),
                t("excavationService"),
                t("machineRental"),
                t("transportService"),
                t("constructionService"),
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/hizmetlerimiz"
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t("contactInfo")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+905435933566" className="hover:text-accent transition-colors block">
                    0543 593 35 66
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:emrebastic@hotmail.com" className="text-sm hover:text-accent transition-colors">
                  emrebastic@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Yozgat/Yerköy Kızıl Gedik Fabrika Sahası Ankara Yolu 5.km
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-light">
        <div className="container-custom mx-auto px-4 py-5 text-center text-sm text-gray-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
