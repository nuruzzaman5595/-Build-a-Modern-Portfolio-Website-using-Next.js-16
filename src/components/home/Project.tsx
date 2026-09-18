const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A sales analytics dashboard built for a modern retail brand, focused on conversion tracking and product insights.",
    tags: ["Next.js", "Analytics", "UI Design"],
  },
  {
    title: "Portfolio Platform",
    description:
      "A custom portfolio experience designed for personal branding, storytelling, and case study presentation.",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    title: "Learning App",
    description:
      "An interactive education platform for course browsing, content delivery, and progress tracking.",
    tags: ["TypeScript", "UX", "Product"],
  },
];

export default function Project() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Recent work and product experiences.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition-transform hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
