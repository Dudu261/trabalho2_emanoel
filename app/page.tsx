import Link from "next/link";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import {
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiLayers,
  FiSearch,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiUsers,
    title: "Experiência guiada",
    text: "Uma navegação mais imersiva para consultar, cadastrar e revisar currículos sem alterar o fluxo atual.",
  },
  {
    icon: FiSearch,
    title: "Busca responsiva",
    text: "A pesquisa continua instantânea, agora apresentada em uma interface mais elegante e focada.",
  },
  {
    icon: FiFileText,
    title: "Cadastro completo",
    text: "Os formulários seguem dinâmicos, mas com acabamento visual totalmente renovado.",
  },
  {
    icon: FiCheckCircle,
    title: "Feedback claro",
    text: "As notificações permanecem as mesmas, só que inseridas em um sistema visual mais sofisticado.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-slate-50">
      <Header />

      <main className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <section className="glass-panel relative w-full overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="absolute inset-0 gridline opacity-30" />
          <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute right-6 top-8 h-56 w-56 rounded-full bg-rose-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <span className="brand-badge">Sistema de currículos</span>
                <div className="space-y-4">
                  <h1 className="page-title max-w-3xl">
                    Uma vitrine de talentos com aparência de produto premium.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Mantivemos as mesmas rotas, formulários, busca e ações do sistema.
                    O que mudou foi o visual inteiro: agora a experiência parece um site totalmente novo.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/sistema/paginas/curriculos"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5"
                >
                  Explorar currículos
                  <FiArrowRight />
                </Link>
                <Link
                  href="/sistema/paginas/curriculos/novo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-300/40 hover:bg-white/10"
                >
                  Criar novo perfil
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="glass-card rounded-[1.5rem] p-4">
                  <div className="text-2xl font-bold tracking-tight">01</div>
                  <p className="mt-2 text-sm text-slate-300">Cadastro completo com validação e campos dinâmicos.</p>
                </div>
                <div className="glass-card rounded-[1.5rem] p-4">
                  <div className="text-2xl font-bold tracking-tight">02</div>
                  <p className="mt-2 text-sm text-slate-300">Listagem com busca em tempo real por nome ou cargo.</p>
                </div>
                <div className="glass-card rounded-[1.5rem] p-4">
                  <div className="text-2xl font-bold tracking-tight">03</div>
                  <p className="mt-2 text-sm text-slate-300">Detalhes e exclusão continuam funcionando como antes.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-[2rem] p-5 shadow-[0_28px_90px_rgba(2,6,23,0.35)]">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5">
                  <div>
                    <p className="section-kicker">Painel</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">Visão geral do sistema</h2>
                  </div>
                  <span className="metric-pill">Ativo</span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-white/8 bg-slate-950/60 p-4">
                    <FiLayers className="text-amber-300" size={22} />
                    <p className="mt-4 text-sm font-semibold text-slate-100">Estrutura fluida</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      As páginas preservam a mesma arquitetura, mas a hierarquia visual ficou mais sofisticada.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-slate-950/60 p-4">
                    <FiShield className="text-amber-300" size={22} />
                    <p className="mt-4 text-sm font-semibold text-slate-100">Sem quebra de fluxo</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Nenhuma regra de negócio foi alterada. Só a apresentação ganhou nova personalidade.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.16),_transparent_45%),rgba(15,23,42,0.72)] p-4">
                  <div className="flex items-center gap-3 text-amber-300">
                    <FiCheckCircle />
                    <span className="text-sm font-semibold">Redesign completo, função intacta</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Esta camada visual foi pensada para parecer outro produto, com contrastes mais fortes,
                    brilho sutil e composição mais editorial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 lg:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="glass-card rounded-[1.75rem] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/12 text-amber-300">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
