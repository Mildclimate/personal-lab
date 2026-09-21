const focusAreas = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Exploring large language models, generative AI, agents, local inference, and intelligent systems.",
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Building practical systems across web applications, developer tools, automation, and infrastructure.",
  },
  {
    number: "03",
    title: "Animation & Creative Technology",
    description:
      "Combining animation, visual expression, procedural systems, and emerging technologies.",
  },
];

const principles = [
  {
    number: "01",
    title: "Build",
    description:
      "Turn ideas into working systems instead of keeping them at the level of theory.",
  },
  {
    number: "02",
    title: "Experiment",
    description:
      "Use small experiments to understand technologies through direct implementation.",
  },
  {
    number: "03",
    title: "Document",
    description:
      "Record what works, what fails, and what is learned along the way.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Continuously refine both the systems being built and the way they are understood.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-stone-50">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
            About
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
            A laboratory for
            <br />
            learning by building.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            Henry&apos;s Personal Lab is a personal technical environment for
            exploring AI, software, creative technology, and self-hosted
            infrastructure.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-stone-200 bg-white/80">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="border-b border-stone-200 p-8 md:border-b-0 md:border-r md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              The Idea
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900">
              Not just a portfolio.
            </h2>
          </div>

          <div className="p-8 md:p-12">
            <p className="leading-8 text-stone-600">
              This website is designed as an ongoing laboratory rather than a
              finished portfolio. Projects, research notes, experiments,
              infrastructure, and technical failures are all part of the same
              process.
            </p>

            <p className="mt-6 leading-8 text-stone-600">
              The goal is to build things, understand how they work, document
              the process, and gradually turn experiments into useful systems.
            </p>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Focus
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
              Areas of
              <br />
              exploration.
            </h2>
          </div>

          <div className="border-t border-stone-200">
            {focusAreas.map((area) => (
              <article
                key={area.number}
                className="grid gap-5 border-b border-stone-200 py-8 md:grid-cols-[60px_1fr]"
              >
                <p className="text-sm text-stone-500">{area.number}</p>

                <div>
                  <h3 className="text-lg font-medium text-stone-900">{area.title}</h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="border-y border-stone-200 bg-white/80">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[1fr_2fr]">
          <div className="border-b border-stone-200 p-8 md:border-b-0 md:border-r md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Background
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">
              From animation
              <br />
              to AI.
            </h2>
          </div>

          <div className="p-8 md:p-12">
            <p className="max-w-2xl leading-8 text-stone-600">
              My background began in animation and creative work before moving
              deeper into programming and artificial intelligence.
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-stone-600">
              That transition continues to shape the way I approach technology:
              combining technical systems with visual thinking, experimentation,
              and creative problem solving.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                  Field
                </p>
                <p className="mt-3 text-sm text-stone-900">
                  AI / Technology
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                  Background
                </p>
                <p className="mt-3 text-sm text-stone-900">
                  Animation
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                  Approach
                </p>
                <p className="mt-3 text-sm text-stone-900">
                  Build & Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Principles
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
            How the lab
            <br />
            works.
          </h2>
        </div>

        <div className="mt-12 grid border-t border-stone-200 md:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-b border-stone-200 p-8 md:p-10 md:nth-[odd]:border-r"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm text-stone-500">
                  {principle.number}
                </span>

                <h3 className="text-xl font-medium text-stone-900">{principle.title}</h3>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-stone-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Personal Lab
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
              Still building.
              <br />
              Still learning.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              The laboratory is intentionally unfinished. New projects,
              experiments, research, and infrastructure will continue to be
              added as the system evolves.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}