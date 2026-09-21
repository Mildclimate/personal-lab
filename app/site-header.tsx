"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, siteContent, type Locale } from "./site-content";

export default function SiteHeader() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale: Locale = isLocale(segment) ? segment : "en";
  const copy = siteContent[locale];
  const prefix = `/${locale}`;

  const navigation = [
    { name: copy.nav.home, href: prefix },
    { name: copy.nav.projects, href: `${prefix}/projects` },
    { name: copy.nav.research, href: `${prefix}/research` },
    { name: copy.nav.lab, href: `${prefix}/lab` },
    { name: copy.nav.about, href: `${prefix}/about` },
  ];

  return (
    <header className="border-b border-stone-200/90 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link href={prefix} className="group flex items-center gap-3">
          <span className="text-sm font-semibold tracking-tight text-stone-900">
            Henry&apos;s Personal Lab
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 transition group-hover:text-stone-700 sm:inline">
            LAB / 01
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-4 text-sm sm:gap-6">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-stone-600 transition-colors hover:text-stone-900">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 border-l border-stone-200 pl-4 text-xs">
            <Link href={locale === "zh" ? pathname.replace(/^\/zh/, "/en") || "/en" : pathname.replace(/^\/en/, "/zh") || "/zh"} className="text-stone-500 transition hover:text-stone-900">
              {locale === "zh" ? "EN" : "中"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
