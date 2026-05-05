import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={
        "min-h-[120px] w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 " +
        className
      }
      {...props}
    />
  );
}
