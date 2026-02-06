"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function PageClient() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1500);
    setTimeout(() => setFormState("idle"), 4000);
  };

  const serviceOptions = t.raw("serviceOptions") as Record<string, string>;

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t("pageSubtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--background)]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollAnimationWrapper direction="left">
              <div>
                <h2 className="text-2xl font-bold mb-8">{t("info")}</h2>
                <div className="space-y-6">
                  {/* Phone 1 */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Phone size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t("phone1")}</p>
                      <a href="tel:+905438093897" className="text-[var(--muted-foreground)] hover:text-accent transition-colors">
                        0543 809 38 97
                      </a>
                    </div>
                  </div>

                  {/* Phone 2 */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Phone size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t("phone2")}</p>
                      <a href="tel:+905435933566" className="text-[var(--muted-foreground)] hover:text-accent transition-colors">
                        0543 593 35 66
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Mail size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t("email")}</p>
                      <a href="mailto:emrebastic@hotmail.com" className="text-[var(--muted-foreground)] hover:text-accent transition-colors">
                        emrebastic@hotmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <MapPin size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t("address")}</p>
                      <p className="text-[var(--muted-foreground)] text-sm">{t("addressText")}</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Clock size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t("hours")}</p>
                      <p className="text-[var(--muted-foreground)] text-sm">{t("hoursText")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Form */}
            <ScrollAnimationWrapper direction="right">
              <div className="card-base p-8">
                <h2 className="text-2xl font-bold mb-6">{t("formTitle")}</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("name")}</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder={t("name")}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t("phone")}</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t("emailField")}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder={t("emailField")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("service")}</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    >
                      <option value="">{t("service")}</option>
                      {Object.entries(serviceOptions).map(([key, val]) => (
                        <option key={key} value={key}>
                          {val}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("message")}</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t("message")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState !== "idle"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {formState === "idle" && (
                      <>
                        <Send size={18} /> {t("send")}
                      </>
                    )}
                    {formState === "sending" && t("sending")}
                    {formState === "sent" && (
                      <>
                        <CheckCircle size={18} /> {t("success")}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Map */}
          <ScrollAnimationWrapper className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t("location")}</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-[var(--muted)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48876.45541407774!2d34.4531!3d39.7236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40806c7c8a1e5e5d%3A0x7c3b1d8f0e1a2b3c!2sYerk%C3%B6y%2C%20Yozgat!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emrebaş İnşaat Konum"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
