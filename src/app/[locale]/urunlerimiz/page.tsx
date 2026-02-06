import { unstable_setRequestLocale } from "next-intl/server";
import PageClient from "./PageClient";

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <PageClient />;
}
