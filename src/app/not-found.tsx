import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-950 px-6 py-20 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-lg text-slate-300">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}
