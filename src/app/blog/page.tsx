const posts = [
  {
    title: "Designing interfaces that feel effortless",
    excerpt:
      "A look at how thoughtful spacing, hierarchy, and interaction patterns can make products feel more intuitive.",
    date: "May 12, 2026",
  },
  {
    title: "Why performance still matters in modern web apps",
    excerpt:
      "Performance is a product feature. Fast experiences improve trust, conversions, and overall satisfaction.",
    date: "April 22, 2026",
  },
  {
    title: "Building a sustainable frontend workflow",
    excerpt:
      "Practical tips for keeping a design system, component library, and development process maintainable over time.",
    date: "March 08, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Blog
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Writing about product, design, and code.
        </h1>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-colors hover:border-cyan-500/50"
            >
              <p className="text-sm text-cyan-400">{post.date}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 max-w-3xl text-slate-300">{post.excerpt}</p>
              <button className="mt-6 inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300">
                Read article
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
