"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../../componentes/header";
import Footer from "../../../componentes/footer";
import { Curriculo, loadCurriculos } from "./data";
import { FiSearch } from "react-icons/fi";

export default function CurriculosPage() {
  const [curriculos] = useState<Curriculo[]>(() => loadCurriculos());
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(query.trim().toLowerCase());
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const filteredCurriculos = useMemo(
    () =>
      curriculos.filter((item) => {
        const term = search;
        if (!term) return true;
        return (
          item.nome.toLowerCase().includes(term) ||
          item.cargo.toLowerCase().includes(term)
        );
      }),
    [curriculos, search],
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Currículos</p>
            <h1 className="mt-2 text-3xl font-semibold">Lista de currículos</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Busque por nome ou cargo e veja currículos armazenados no localStorage.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-auto">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nome ou cargo"
                className="w-full rounded-full border border-zinc-200 bg-zinc-100 py-3 pl-11 pr-4 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>
            <Link
              href="/sistema/paginas/curriculos/novo"
              className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Cadastrar novo
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredCurriculos.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              Nenhum currículo encontrado. Tente outro termo de pesquisa.
            </div>
          ) : (
            filteredCurriculos.map((item) => (
              <article
                key={item.id}
                className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">{item.nome}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.cargo}</p>
                    <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.resumo}
                    </p>
                  </div>
                  <Link
                    href={`/sistema/paginas/curriculos/${item.id}`}
                    className="inline-flex items-center rounded-full border border-sky-600 px-4 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-50"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
