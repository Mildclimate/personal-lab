import Link from "next/link";
import { isLocale, siteContent, type Locale } from "../site-content";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";
  const copy = siteContent[locale].home;
  const prefix = `/${locale}`;

  return (
    <main className="bg-stone-50">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32"><div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-stone-500">{copy.eyebrow}</p>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-7xl">{copy.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">{copy.intro}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href={`${prefix}/projects`} className="w-full rounded-full border border-slate-900 bg-white px-6 py-3 text-center text-sm font-medium shadow-[0_0_0_1px_rgba(15,23,42,0.05)] transition duration-200 hover:bg-stone-100 sm:w-auto">{copy.exploreProjects}</Link>
          <Link href={`${prefix}/research`} className="w-full rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-100 sm:w-auto">{copy.research}</Link>
        </div>
      </div></section>
      <section className="border-t border-stone-200 bg-white/80"><div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0">
        {copy.cards.map(([title, description, link], index) => <Link key={title} href={`${prefix}/${index === 0 ? "projects" : index === 1 ? "research" : "lab"}`} className="group p-8 transition hover:bg-stone-100 md:p-10"><p className="mb-12 text-sm text-stone-500">0{index + 1}</p><h2 className="text-2xl font-medium text-stone-900">{title}</h2><p className="mt-4 leading-7 text-stone-600">{description}</p><span className="mt-8 inline-block text-sm text-stone-500 transition group-hover:text-stone-900">{link} →</span></Link>)}
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-24"><div className="grid gap-12 md:grid-cols-2"><div><p className="text-sm uppercase tracking-[0.2em] text-stone-500">{copy.aboutEyebrow}</p><h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-stone-900">{copy.aboutTitle}</h2></div><div className="max-w-xl text-stone-600"><p className="leading-8">{copy.aboutText}</p><Link href={`${prefix}/about`} className="mt-8 inline-block text-sm text-stone-900 underline underline-offset-4">{copy.aboutLink} →</Link></div></div></section>
    </main>
  );
}
