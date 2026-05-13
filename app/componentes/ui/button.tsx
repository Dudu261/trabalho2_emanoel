import type { ButtonHTMLAttributes } from "react";

function buttonClassName(disabled?: boolean, className?: string) {
  const base = [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "px-5",
    "py-3",
    "text-sm",
    "font-semibold",
    "transition-all",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-amber-400/60",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
    "shadow-lg",
  ];

  const color = disabled
    ? ["bg-slate-700", "text-slate-300"]
    : [
        "bg-gradient-to-r",
        "from-amber-400",
        "via-orange-500",
        "to-rose-500",
        "text-slate-950",
        "hover:-translate-y-0.5",
        "hover:shadow-amber-500/25",
      ];

  return [...base, ...color, className ?? ""].join(" ").trim();
}

export function Button({ className, disabled, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClassName(disabled, className)} disabled={disabled} {...props} />;
}
