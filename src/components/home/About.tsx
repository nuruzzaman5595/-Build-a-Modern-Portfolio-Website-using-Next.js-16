const highlights = [
  "Frontend development",
  "UI/UX thinking",
  "Responsive design",
  "Performance-focused builds",
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-2xl" />
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              About me
            </div>
            <img
              src="/images/nayon.jpeg"
              alt="Nayon portrait"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Who I am
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            I build digital experiences that feel premium and work beautifully.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m a frontend developer passionate about designing clean, intuitive interfaces that make products feel effortless to use.
            </p>
            <p>
              I combine visual design with modern engineering to create websites and apps that are both beautiful and high-performing.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}