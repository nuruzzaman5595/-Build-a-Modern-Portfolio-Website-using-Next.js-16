const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A sales analytics dashboard built for a modern retail brand, focusing on conversion insights and product performance tracking.",
    tags: ["Next.js", "Charts", "UI/UX"],
  },
  {
    title: "Portfolio Platform",
    description:
      "A responsive portfolio experience designed to highlight work, personal branding, and client credibility in a clean layout.",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    title: "Learning Management App",
    description:
      "An LMS interface that simplified course discovery, content access, and student progress tracking.",
    tags: ["TypeScript", "Design System", "Product"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Projects
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Selected work and product experiences.
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition-transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-500/20" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
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
      </div>
    </main>
  );
}
