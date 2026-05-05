import Link from "next/link";
import Header from "../../../componentes/header";
import Footer from "../../../componentes/footer";

const curriculos = [
  { id: "1", nome: "Maria Silva", cargo: "Desenvolvedora Front-end" },
  { id: "2", nome: "João Souza", cargo: "Analista de Dados" },
  { id: "3", nome: "Ana Pereira", cargo: "Designer UX/UI" },
];

export default function CurriculosPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Currículos</p>
            <h1 className="mt-2 text-3xl font-semibold">Lista de currículos</h1>
          </div>
          <Link
            href="/sistema/paginas/curriculos/novo"
            className="rounded-full bg-sky-600 px-5 py-3 text-white transition hover:bg-sky-700"
          >
            Cadastrar novo
          </Link>
        </div>

        <div className="space-y-4">
          {curriculos.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{item.nome}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.cargo}</p>
                </div>
                <Link
                  href={`/sistema/paginas/curriculos/${item.id}`}
                  className="text-sky-600 hover:text-sky-700"
                >
                  Ver detalhes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
