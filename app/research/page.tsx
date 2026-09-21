const researchAreas = [
  {
    number: "01",
    title: "Large Language Models",
    description:
      "Exploring language models, inference, fine-tuning, context management, and practical applications.",
    status: "Active",
  },
  {
    number: "02",
    title: "AI Agents",
    description:
      "Experiments with autonomous systems, tool use, planning, memory, and agent-based workflows.",
    status: "Active",
  },
  {
    number: "03",
    title: "Generative AI",
    description:
      "Investigating generative models across text, image, video, and other creative modalities.",
    status: "Exploring",
  },
  {
    number: "04",
    title: "AI Systems",
    description:
      "Research into model deployment, inference systems, local AI, infrastructure, and performance.",
    status: "Exploring",
  },
];

const notes = [
  {
    date: "2026",
    title: "Understanding Transformer Architecture",
    category: "Notes",
  },
  {
    date: "2026",
    title: "Experiments with Local LLM Inference",
    category: "Experiment",
  },
  {
    date: "2026",
    title: "Building AI Agents from First Principles",
    category: "Research",
  },
];

export default function ResearchPage() {
  return (
    <main className="bg-stone-50">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
            Research
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
            Exploring what&apos;s next.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Research notes, experiments, technical investigations, and ideas
            that emerge from continuous learning and building.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-stone-200 px-6 py-6 md:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              Research Areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {researchAreas.map((area) => (
              <article
                key={area.number}
                className="group border-b border-stone-200 p-8 transition-colors hover:bg-stone-100 md:p-10 md:nth-[odd]:border-r"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="text-sm text-stone-500">{area.number}</p>

                  <span className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-xs text-stone-600">
                    {area.status}
                  </span>
                </div>

                <h2 className="mt-12 text-2xl font-medium tracking-tight text-stone-900">
                  {area.title}
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-stone-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Log */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Research Log
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
              Notes,
              <br />
              experiments &amp; ideas.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-stone-500">
              A chronological record of things I study, test, build, and learn.
            </p>
          </div>

          <div className="border-t border-stone-200">
            {notes.map((note) => (
              <article
                key={note.title}
                className="group grid gap-4 border-b border-stone-200 py-6 transition-colors hover:bg-stone-100 md:grid-cols-[100px_1fr_auto] md:items-center md:px-4"
              >
                <p className="text-sm text-stone-500">{note.date}</p>

                <div>
                  <h3 className="text-base font-medium text-stone-900 transition-colors group-hover:text-stone-700">
                    {note.title}
                  </h3>

                  <p className="mt-1 text-sm text-stone-500">
                    {note.category}
                  </p>
                </div>

                <span className="text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-600">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Method
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
              Learn by building.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              Research in this lab is closely connected to implementation.
              Ideas are explored through experiments, prototypes, benchmarks,
              failures, and documentation rather than existing only as
              theoretical notes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

