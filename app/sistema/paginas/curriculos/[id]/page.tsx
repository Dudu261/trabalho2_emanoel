"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "../../../../componentes/header";
import Footer from "../../../../componentes/footer";
import { findCurriculo, loadCurriculos, saveCurriculos } from "../data";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CurriculoDetalhesPage({ params }: PageProps) {
  const router = useRouter();
  const curriculo = findCurriculo(params.id) ?? null;

  const handleDelete = () => {
    if (!curriculo) return;

    const current = loadCurriculos().filter((item) => item.id !== curriculo.id);
    saveCurriculos(current);
    toast.success("Currículo excluído com sucesso.");
    router.push("/sistema/paginas/curriculos");
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Detalhes do currículo</p>
            <h1 className="mt-2 text-3xl font-semibold">Detalhes do candidato</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sistema/paginas/curriculos"
              className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Voltar à lista
            </Link>
            <button
              type="button"
              onClick={handleDelete}
              className="rounded-full bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
            >
              Excluir currículo
            </button>
          </div>
        </div>

        {curriculo ? (
          <section className="space-y-8 rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
                  <Image src={curriculo.avatar} alt={curriculo.nome} width={80} height={80} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-sky-600">{curriculo.cargo}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">{curriculo.nome}</h2>
                </div>
              </div>
              <div className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                {curriculo.email}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Telefone</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">{curriculo.telefone}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">CPF</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">{curriculo.cpf}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Resumo profissional</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{curriculo.resumo}</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Experiências profissionais</h3>
                {curriculo.experiencias.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-zinc-200 p-4 dark:border-zinc-800">
                    <p className="font-semibold text-zinc-950 dark:text-white">{item.empresa}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.cargo} • {item.periodo}</p>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.descricao}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Formação acadêmica</h3>
                {curriculo.formacoes.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-zinc-200 p-4 dark:border-zinc-800">
                    <p className="font-semibold text-zinc-950 dark:text-white">{item.instituicao}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.curso}</p>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.periodo}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Habilidades</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {curriculo.habilidades.map((skill) => (
                  <span key={skill} className="rounded-full bg-sky-100 px-4 py-2 text-sm text-sky-700 dark:bg-sky-900/30 dark:text-sky-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="rounded-[28px] border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            Currículo não encontrado. Verifique se o ID está correto.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
