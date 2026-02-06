import { unstable_setRequestLocale } from "next-intl/server";
import PageClient from "./PageClient";

export default function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <PageClient />;
}
