import { notFound } from "next/navigation";
import { isLocale, locales, siteContent, type Locale } from "../site-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale: Locale = value;
  return {
    title: locale === "zh" ? "Henry 的个人实验室" : "Henry's Personal Lab",
    description: siteContent[locale].home.intro,
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return children;
}
