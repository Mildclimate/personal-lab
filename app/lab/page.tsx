const services = [
  {
    name: "Next.js",
    description: "Personal Lab website",
    status: "Online",
  },
  {
    name: "Cloudflare Tunnel",
    description: "Public network access",
    status: "Connected",
  },
  {
    name: "Git",
    description: "Source control",
    status: "Online",
  },
  {
    name: "Local AI",
    description: "Local model experiments",
    status: "Experimental",
  },
];

const infrastructure = [
  {
    label: "Host",
    value: "MacBook Pro",
  },
  {
    label: "Operating System",
    value: "macOS",
  },
  {
    label: "Runtime",
    value: "Node.js",
  },
  {
    label: "Framework",
    value: "Next.js",
  },
];

const experiments = [
  {
    number: "01",
    title: "Self-hosted Web Infrastructure",
    description:
      "Running a production-like personal website directly from local hardware.",
    status: "Active",
  },
  {
    number: "02",
    title: "Local AI Environment",
    description:
      "Exploring local inference, model serving, and AI development workflows.",
    status: "Experimental",
  },
  {
    number: "03",
    title: "Home Network",
    description:
      "Building and documenting a small personal network and service environment.",
    status: "Planned",
  },
];

export default function LabPage() {
  return (
    <main className="bg-stone-50">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
            Home Lab
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
            The infrastructure behind the lab.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            A self-hosted environment for development, AI experiments,
            services, networking, and infrastructure research.
          </p>
        </div>
      </section>

      {/* System Status */}
      <section className="border-y border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-b border-stone-200 px-6 py-6 sm:flex-row sm:items-center md:px-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                System Status
              </p>

              <h2 className="mt-2 text-lg font-medium text-stone-900">
                Personal Lab Infrastructure
              </h2>
            </div>

            <div className="flex items-center gap-3 text-sm text-stone-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Operational
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-stone-200 sm:grid-cols-4">
            <div className="px-6 py-8 md:px-10">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Web
              </p>

              <p className="mt-3 text-lg font-medium text-stone-900">Online</p>
            </div>

            <div className="px-6 py-8 md:px-10">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Network
              </p>

              <p className="mt-3 text-lg font-medium text-stone-900">Connected</p>
            </div>

            <div className="border-t border-stone-200 px-6 py-8 sm:border-t-0 md:px-10">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Services
              </p>

              <p className="mt-3 text-lg font-medium text-stone-900">04</p>
            </div>

            <div className="border-t border-stone-200 px-6 py-8 sm:border-t-0 md:px-10">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Environment
              </p>

              <p className="mt-3 text-lg font-medium text-stone-900">Local</p>
            </div>
          </div>
        </div>
      </section>

      {/* Host */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Host
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
              Local hardware,
              <br />
              personal infrastructure.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-stone-600">
              This lab is built around locally controlled hardware and
              self-hosted services. The goal is to understand not only the
              software being built, but also the infrastructure required to
              run it.
            </p>
          </div>

          <div className="border-t border-stone-200">
            {infrastructure.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-stone-200 py-5"
              >
                <span className="text-sm text-stone-500">{item.label}</span>

                <span className="text-sm text-stone-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-stone-200 px-6 py-6 md:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="border-b border-stone-200 p-8 transition-colors hover:bg-stone-100 md:p-10 md:nth-[odd]:border-r"
              >
                <div className="flex items-center justify-between gap-6">
                  <h2 className="text-lg font-medium text-stone-900">{service.name}</h2>

                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        service.status === "Online" ||
                        service.status === "Connected"
                          ? "bg-emerald-500"
                          : "bg-stone-400"
                      }`}
                    />

                    {service.status}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Architecture
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
            From local machine
            <br />
            to the public web.
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="flex min-w-[700px] items-center gap-4">
            <div className="flex-1 border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Internet
              </p>

              <p className="mt-3 font-medium text-stone-900">Public Web</p>
            </div>

            <span className="text-stone-400">→</span>

            <div className="flex-1 border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Network
              </p>

              <p className="mt-3 font-medium text-stone-900">Cloudflare</p>
            </div>

            <span className="text-stone-400">→</span>

            <div className="flex-1 border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Tunnel
              </p>

              <p className="mt-3 font-medium text-stone-900">Cloudflare Tunnel</p>
            </div>

            <span className="text-stone-400">→</span>

            <div className="flex-1 border border-stone-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                Host
              </p>

              <p className="mt-3 font-medium text-stone-900">MacBook Pro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Infrastructure Experiments
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
                Building the
                <br />
                environment itself.
              </h2>
            </div>

            <div className="border-t border-stone-200">
              {experiments.map((experiment) => (
                <article
                  key={experiment.number}
                  className="grid gap-5 border-b border-stone-200 py-7 md:grid-cols-[60px_1fr_auto]"
                >
                  <p className="text-sm text-stone-500">
                    {experiment.number}
                  </p>

                  <div>
                    <h3 className="font-medium text-stone-900">{experiment.title}</h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
                      {experiment.description}
                    </p>
                  </div>

                  <span className="text-xs text-stone-500">
                    {experiment.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Statement */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Home Lab
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
              The lab is part of
              <br />
              the experiment.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              Software, hardware, networking, deployment, and infrastructure
              are all part of the same learning process. The environment is
              continuously built, tested, documented, and improved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

