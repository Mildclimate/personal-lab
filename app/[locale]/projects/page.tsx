import Link from "next/link";
import { isLocale, siteContent, type Locale } from "../../site-content";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";
  const copy = siteContent[locale].projects;
  const prefix = `/${locale}`;
  return <main className="bg-stone-50">
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-24"><div className="max-w-3xl"><p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">{copy.eyebrow}</p><h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">{copy.intro}</p></div></section>
    <section className="border-t border-stone-200 bg-white/80"><div className="mx-auto max-w-7xl">{copy.items.map(([title, category, description, status], index) => <article key={title} className="group border-b border-stone-200 px-6 py-10 transition-colors hover:bg-stone-100 md:px-10 md:py-12"><div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start"><p className="text-sm text-stone-500">0{index + 1}</p><div className="max-w-2xl"><div className="flex flex-wrap items-center gap-3"><h2 className="text-2xl font-medium tracking-tight text-stone-900">{title}</h2><span className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs text-stone-600">{status}</span></div><p className="mt-2 text-sm text-stone-500">{category}</p><p className="mt-5 leading-7 text-stone-600">{description}</p></div><span className="hidden text-xl text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-700 md:block">→</span></div></article>)}</div></section>
    <section className="mx-auto max-w-7xl px-6 py-24"><div className="grid gap-12 md:grid-cols-2"><div><p className="text-sm uppercase tracking-[0.2em] text-stone-500">{copy.philosophy}</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">{copy.philosophyTitle}</h2></div><div className="max-w-xl text-stone-600"><p className="leading-8">{copy.philosophyText}</p><Link href={`${prefix}/research`} className="mt-8 inline-block text-sm text-stone-900 underline underline-offset-4">{copy.philosophyLink} →</Link></div></div></section>
  </main>;
}
