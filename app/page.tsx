export default function Home() {
  return (
    <main className="bg-stone-50">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
            Personal Laboratory
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-7xl">
            Building at the intersection of
            <span className="block text-stone-500">
              AI, Animation & Technology.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            A personal space for projects, research, experiments,
            development logs, and self-hosted infrastructure.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/projects"
              className="w-full rounded-full border border-slate-900 bg-white px-6 py-3 text-center text-sm font-medium hover:bg-stone-100 shadow-[0_0_0_1px_rgba(15,23,42,0.05)] transition duration-200 sm:w-auto"
            >
              Explore Projects
            </a>

            <a
              href="/research"
              className="w-full rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-100 sm:w-auto"
            >
              Research
            </a>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          <a
            href="/projects"
            className="group p-8 transition hover:bg-stone-100 md:p-10"
          >
            <p className="mb-12 text-sm text-stone-500">01</p>

            <h2 className="text-2xl font-medium text-stone-900">Projects</h2>

            <p className="mt-4 leading-7 text-stone-600">
              Games, animation, AI, web applications, and other
              technical projects.
            </p>

            <span className="mt-8 inline-block text-sm text-stone-500 transition group-hover:text-stone-900">
              View Projects →
            </span>
          </a>

          <a
            href="/research"
            className="group p-8 transition hover:bg-stone-100 md:p-10"
          >
            <p className="mb-12 text-sm text-stone-500">02</p>

            <h2 className="text-2xl font-medium text-stone-900">Research</h2>

            <p className="mt-4 leading-7 text-stone-600">
              Research notes, experiments, technical investigations,
              and ongoing work.
            </p>

            <span className="mt-8 inline-block text-sm text-stone-500 transition group-hover:text-stone-900">
              View Research →
            </span>
          </a>

          <a
            href="/lab"
            className="group p-8 transition hover:bg-stone-100 md:p-10"
          >
            <p className="mb-12 text-sm text-stone-500">03</p>

            <h2 className="text-2xl font-medium text-stone-900">Home Lab</h2>

            <p className="mt-4 leading-7 text-stone-600">
              Self-hosted infrastructure, servers, services,
              networking, and experiments.
            </p>

            <span className="mt-8 inline-block text-sm text-stone-500 transition group-hover:text-stone-900">
              Explore Lab →
            </span>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              About
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
              A place to build,
              <br />
              experiment and document.
            </h2>
          </div>

          <div className="max-w-xl text-stone-600">
            <p className="leading-8">
              This website is both a portfolio and an ongoing technical
              project. It documents what I build, what I research,
              what I learn, and how the underlying infrastructure works.
            </p>

            <a
              href="/about"
              className="mt-8 inline-block text-sm text-stone-900 underline underline-offset-4"
            >
              More about me →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}