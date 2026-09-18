const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Design & UX",
    items: ["Tailwind CSS", "Figma", "Responsive Design", "UI Systems", "Accessibility"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Vercel", "REST APIs", "Agile", "Problem Solving"],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Skills
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Tools and strengths I bring to product work.
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <h2 className="text-xl font-semibold text-cyan-400">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
