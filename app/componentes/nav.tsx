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
    <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">
      {links.map((link) => {
        const isActive =
          pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 transition ${
              isActive
                ? "bg-sky-600 text-white"
                : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
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
