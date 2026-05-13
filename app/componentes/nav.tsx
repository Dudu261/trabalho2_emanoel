"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Currículos", href: "/sistema/paginas/curriculos" },
  { label: "Cadastrar", href: "/sistema/paginas/curriculos/novo" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
      {links.map((link) => {
        const isActive =
          pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 transition ${
              isActive
                ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20"
                : "border border-white/8 bg-white/5 text-slate-200 hover:border-amber-300/40 hover:bg-white/10 hover:text-white"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
