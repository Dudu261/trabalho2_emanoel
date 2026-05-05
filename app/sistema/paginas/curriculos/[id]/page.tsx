import Header from "../../../../componentes/header";
import Footer from "../../../../componentes/footer";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CurriculoDetalhesPage({ params }: PageProps) {
  const { id } = params;
  const curriculo = {
    nome: `Candidato ${id}`,
    cargo: "Desenvolvedor Full-stack",
    resumo:
      "Este é um exemplo de currículo. Aqui você pode incluir experiência, habilidades e educação do candidato.",
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Detalhes</p>
            <h1 className="mt-2 text-3xl font-semibold">Currículo {curriculo.nome}</h1>
          </div>
          <Link
            href="/sistema/paginas/curriculos"
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Voltar à lista
          </Link>
        </div>

        <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div>
            <h2 className="text-xl font-semibold">Nome</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{curriculo.nome}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Cargo</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{curriculo.cargo}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Resumo</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{curriculo.resumo}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
