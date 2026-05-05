import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-zinc-950 dark:text-white">
          Sistema de Currículos
        </Link>
        <Nav />
      </div>
    </header>
  );
}
