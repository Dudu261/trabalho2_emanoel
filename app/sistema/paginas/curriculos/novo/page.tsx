import Header from "../../../../componentes/header";
import Footer from "../../../../componentes/footer";
import Link from "next/link";

export default function NovoCurriculoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Cadastrar</p>
            <h1 className="mt-2 text-3xl font-semibold">Novo currículo</h1>
          </div>
          <Link
            href="/sistema/paginas/curriculos"
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Voltar à lista
          </Link>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-400">
            Use este formulário para adicionar um novo currículo. Você pode substituir este conteúdo pelo formulário real em breve.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Cargo desejado</label>
              <input
                type="text"
                placeholder="Cargo desejado"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Resumo</label>
            <textarea
              rows={5}
              placeholder="Descreva a experiência e habilidades"
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </div>

          <button className="mt-6 rounded-full bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700">
            Salvar currículo
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
