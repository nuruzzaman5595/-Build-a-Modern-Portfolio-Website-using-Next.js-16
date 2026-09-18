export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s Nayon contact page .
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Get in touch</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                <span className="font-medium text-white">Email:</span> hello@example.com
              </p>
              <p>
                <span className="font-medium text-white">Location:</span> Remote / Worldwide
              </p>
              <p>
                <span className="font-medium text-white">Availability:</span> Open for freelance and product work
              </p>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>

              <label className="block text-sm text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-slate-300">
              Subject
              <input
                type="text"
                placeholder="Project inquiry"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>

            <label className="mt-5 block text-sm text-slate-300">
              Message
              <textarea
                rows={6}
                placeholder="Tell me a bit about your project..."
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
