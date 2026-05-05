import Link from "next/link";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-160px)] max-w-5xl flex-col items-center justify-center gap-8 px-6 py-16">
        <h1 className="text-4xl font-semibold">Bem-vindo ao sistema</h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Aqui você pode ver a lista de currículos, conferir detalhes e cadastrar novos currículos.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/sistema/paginas/curriculos"
            className="rounded-xl bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
          >
            Ver currículos
          </Link>
          <Link
            href="/sistema/paginas/curriculos/novo"
            className="rounded-xl border border-sky-600 px-6 py-3 text-sky-600 transition hover:bg-sky-50 dark:hover:bg-white/5"
          >
            Cadastrar currículo
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
