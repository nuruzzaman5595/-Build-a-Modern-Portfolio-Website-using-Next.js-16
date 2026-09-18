import Link from "next/link";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "mailto:hello@example.com", label: "Email" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-full max-w-xs flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-sm">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-semibold text-slate-950">
            JD
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Jane Doe</p>
            <p className="text-sm text-slate-400">Frontend Developer</p>
          </div>
        </div>

        <nav aria-label="Main navigation" className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                "text-slate-300 hover:bg-slate-800 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-5 border-t border-white/10 pt-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Connect
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-900/80 p-4 text-sm text-slate-300">
          <p className="font-medium text-white">Available for projects</p>
          <p className="mt-1 text-slate-400">Open to freelance and full-time opportunities.</p>
        </div>
      </div>
    </aside>
  );
}
