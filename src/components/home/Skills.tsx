const skills = [
  { name: "Next.js", level: 95 },
  { name: "React", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 94 },
  { name: "UI/UX Design", level: 88 },
  { name: "Responsive Design", level: 93 },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My core strengths and technical toolkit.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-base font-medium text-white">{skill.name}</span>
              <span className="text-sm text-cyan-300">{skill.level}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
