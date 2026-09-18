import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/nayon.jpeg"
            alt="Nayon profile"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-400/70"
          />
          <div>
            <p className="text-base font-semibold text-white">Nayon</p>
            <p className="text-xs text-slate-400">Portfolio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-slate-950 sm:inline-flex"
          >
            Hire Me
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 md:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
