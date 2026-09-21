import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "AI Research",
    category: "AI / Research",
    description:
      "Experiments and systems focused on large language models, agents, generative AI, and intelligent applications.",
    status: "Active",
  },
  {
    number: "02",
    title: "Personal Lab",
    category: "Infrastructure",
    description:
      "A self-hosted environment for development, experimentation, services, automation, and AI workloads.",
    status: "Active",
  },
  {
    number: "03",
    title: "Animation & Creative",
    category: "Animation / Creative",
    description:
      "Creative projects exploring the intersection of animation, technology, procedural systems, and visual expression.",
    status: "Archive",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-stone-50">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
            Projects
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
            Things I&apos;ve built.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            A collection of software, AI, animation, and technical projects
            developed through experiments, research, and practical work.
          </p>
        </div>
      </section>

      {/* Project List */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-b border-stone-200 px-6 py-10 transition-colors hover:bg-stone-100 md:px-10 md:py-12"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start">
                {/* Number */}
                <p className="text-sm text-stone-500">{project.number}</p>

                {/* Content */}
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-medium tracking-tight text-stone-900">
                      {project.title}
                    </h2>

                    <span className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs text-stone-600">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-stone-500">
                    {project.category}
                  </p>

                  <p className="mt-5 leading-7 text-stone-600">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.title
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="mt-7 inline-block text-sm text-stone-600 transition-colors group-hover:text-stone-900"
                  >
                    View Project →
                  </Link>
                </div>

                {/* Arrow */}
                <div className="hidden text-xl text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-700 md:block">
                  →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
              Build first,
              <br />
              document everything.
            </h2>
          </div>

          <div className="max-w-xl text-stone-600">
            <p className="leading-8">
              Projects in this lab are not only finished products. They are
              experiments, learning processes, and technical records. Some
              projects may evolve over time, while others remain as snapshots
              of a particular idea or stage of development.
            </p>

            <Link
              href="/research"
              className="mt-8 inline-block text-sm text-stone-900 underline underline-offset-4"
            >
              Explore Research →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

