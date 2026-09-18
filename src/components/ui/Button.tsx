import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20",
    secondary:
      "border border-slate-700 bg-slate-900 text-white hover:border-cyan-400 hover:text-cyan-300",
    ghost: "text-cyan-300 hover:bg-slate-800",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
