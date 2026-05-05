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
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-sky-500",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
  ];

  const color = disabled
    ? ["bg-slate-300", "text-slate-700"]
    : ["bg-sky-600", "text-white", "hover:bg-sky-700"];

  return [...base, ...color, className ?? ""].join(" ").trim();
}

export function Button({ className, disabled, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClassName(disabled, className)} disabled={disabled} {...props} />;
}
