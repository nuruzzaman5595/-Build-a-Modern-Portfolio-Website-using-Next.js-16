const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX Design",
  "Frontend Architecture",
];

const stats = [
  { label: "Projects Completed", value: "40+" },
  { label: "Years Experience", value: "4+" },
  { label: "Client Satisfaction", value: "98%" },
];

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Hello, I&apos;m Nayon
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              I design and build modern digital experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I&apos;m a frontend developer focused on creating fast, beautiful, and user-friendly products that help brands grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-4 shadow-2xl shadow-cyan-950/40">
              <img
                src="/images/nayon.jpeg"
                alt="Nayon portrait"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Crafting experiences people remember.</h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I help startups and businesses turn ideas into sleek, functional interfaces using modern frontend tools and a strong product mindset.
            </p>
            <p>
              My process combines design thinking, clean code, and a deep focus on the user journey to build experiences that look great and perform even better.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">Skills</p>
          <h2 className="mt-3 text-3xl font-bold">Tools and technologies I use.</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}