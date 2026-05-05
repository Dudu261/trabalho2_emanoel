import Link from "next/link";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import { FiArrowRight, FiCheckCircle, FiFileText, FiSearch, FiUsers } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <section className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-900/20 dark:text-sky-300">
                Sistema de Currículos
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                  Crie, gerencie e valide currículos com UX moderna.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  Aplicação construída com Next.js, Tailwind CSS e formulários dinâmicos. Cadastre currículos, visualize detalhes e use busca em tempo real.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/sistema/paginas/curriculos"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Ver currículos
                  <FiArrowRight />
                </Link>
                <Link
                  href="/sistema/paginas/curriculos/novo"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-600 px-6 py-3 text-sm font-semibold text-sky-600 transition hover:bg-sky-50"
                >
                  Cadastrar novo
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] bg-sky-50 p-8 dark:bg-zinc-950/70">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                  <div className="flex items-center gap-3 text-sky-600">
                    <FiUsers size={20} />
                    <span className="font-semibold">Experiência de usuário</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Interface limpa para navegação rápida entre lista, detalhes e cadastro.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                  <div className="flex items-center gap-3 text-sky-600">
                    <FiSearch size={20} />
                    <span className="font-semibold">Filtro em tempo real</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Busca instantânea por nome ou cargo direto na lista de currículos.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                  <div className="flex items-center gap-3 text-sky-600">
                    <FiFileText size={20} />
                    <span className="font-semibold">Formulário avançado</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Campos dinâmicos para experiências e formação acadêmica com validação de Yup.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                  <div className="flex items-center gap-3 text-sky-600">
                    <FiCheckCircle size={20} />
                    <span className="font-semibold">Feedback visual</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Notificações de sucesso e erros usando Sonner para cada ação do usuário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
