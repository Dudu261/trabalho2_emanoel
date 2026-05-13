import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/70 px-4 py-4 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.5rem] border border-white/8 bg-white/5 px-4 py-3 shadow-[0_18px_60px_rgba(2,6,23,0.28)] sm:px-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20">
            N
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-amber-200/80">
              Nexa
            </span>
            <span className="text-base font-semibold text-slate-50">Currículos</span>
          </span>
        </Link>

        <Nav />
      </div>
    </header>
  );
}
