export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          About
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Building thoughtful digital experiences.
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I&apos;m a developer focused on creating clean, user-centered interfaces that
            balance elegance with performance.
          </p>
          <p>
            My work blends product thinking, front-end craft, and a strong attention to
            detail, helping teams turn ideas into polished, useful experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Years of experience", value: "4+" },
            { label: "Projects shipped", value: "20+" },
            { label: "Focus", value: "UI/UX" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="text-3xl font-bold text-cyan-400">{item.value}</div>
              <div className="mt-2 text-sm text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
