import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-200">
      <Link href="/" className="transition hover:text-sky-600">
        Home
      </Link>
      <Link href="/sistema/paginas/curriculos" className="transition hover:text-sky-600">
        Currículos
      </Link>
      <Link href="/sistema/paginas/curriculos/novo" className="transition hover:text-sky-600">
        Cadastrar
      </Link>
    </nav>
  );
}
