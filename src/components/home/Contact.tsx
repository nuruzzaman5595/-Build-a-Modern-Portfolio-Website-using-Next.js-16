export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I&apos;m available for freelance projects, product work, and long-term collaborations.
            </p>
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-slate-700 bg-slate-950 p-6">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a href="mailto:hello@example.com" className="mt-1 block text-lg text-white hover:text-cyan-400">
                hello@example.com
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 text-lg text-white">Remote / Worldwide</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Social</p>
              <div className="mt-2 flex gap-4 text-sm text-cyan-300">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
