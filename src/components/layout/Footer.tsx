import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
              alt="Nayon profile"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-400/70"
            />
            <div>
              <p className="text-base font-semibold text-white">Nayon</p>
              <p className="text-xs text-slate-400">Frontend Developer</p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Building polished digital experiences with creativity, performance, and user-first thinking.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cyan-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="mailto:hello@example.com" className="transition-colors hover:text-cyan-400">
                hello@example.com
              </a>
            </li>
            <li>
              <a href="https://github.com" className="transition-colors hover:text-cyan-400">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="transition-colors hover:text-cyan-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Nayon. All rights reserved.</p>
          <p>Made with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
