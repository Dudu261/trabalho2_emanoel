"use client";

import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import { Controller, FieldErrors, Resolver, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from 'react-imask';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "../../../../componentes/header";
import Footer from "../../../../componentes/footer";
import { Button } from "../../../../componentes/ui/button";
import { Textarea } from "../../../../componentes/ui/textarea";
import { Curriculo, Formacao, Experiencia, loadCurriculos, saveCurriculos } from "../data";
import * as yup from "yup";

type FormValues = {
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  cpf: string;
  resumo: string;
  habilidades: string;
  avatar: FileList | null | undefined;
  experiencias: Experiencia[];
  formacoes: Formacao[];
};

const schema = yup.object({
  nome: yup.string().required("Nome é obrigatório").min(3, "Nome precisa ter ao menos 3 caracteres."),
  cargo: yup.string().required("Cargo é obrigatório").min(3, "Cargo precisa ter ao menos 3 caracteres."),
  email: yup.string().required("E-mail é obrigatório").email("Digite um e-mail válido."),
  telefone: yup.string().required("Telefone é obrigatório").min(14, "Telefone incompleto."),
  cpf: yup.string().required("CPF é obrigatório").min(14, "CPF incompleto."),
  resumo: yup.string().required("Resumo profissional é obrigatório").min(30, "Resumo deve ter ao menos 30 caracteres."),
  habilidades: yup.string().required("Habilidades são obrigatórias").min(5, "Liste ao menos uma habilidade."),
  avatar: yup.mixed().nullable(),
  experiencias: yup
    .array()
    .of(
      yup.object({
        empresa: yup.string().required("Empresa é obrigatória."),
        cargo: yup.string().required("Cargo é obrigatório."),
        periodo: yup.string().required("Período é obrigatório."),
        descricao: yup.string().required("Descrição é obrigatória.").min(20, "Descrição muito curta."),
      }),
    )
    .min(1, "Adicione ao menos uma experiência profissional."),
  formacoes: yup
    .array()
    .of(
      yup.object({
        instituicao: yup.string().required("Instituição é obrigatória."),
        curso: yup.string().required("Curso é obrigatório."),
        periodo: yup.string().required("Período é obrigatório."),
      }),
    )
    .min(1, "Adicione ao menos uma formação acadêmica."),
});

function generateCurriculoId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `curr-${Math.random().toString(36).slice(2, 10)}`;
}

const defaultValues: FormValues = {
  nome: "",
  cargo: "",
  email: "",
  telefone: "",
  cpf: "",
  resumo: "",
  habilidades: "",
  avatar: null,
  experiencias: [{ empresa: "", cargo: "", periodo: "", descricao: "" }],
  formacoes: [{ instituicao: "", curso: "", periodo: "" }],
};

function extractErrorMessage(errors: FieldErrors<FormValues>): string {
  if (!errors) return "Erro na validação.";
  const error = Object.values(errors)[0];
  if (!error) return "Erro na validação.";
  if (typeof error === "string") return error;
  if (Array.isArray(error)) return extractErrorMessage(error as unknown as FieldErrors<FormValues>);
  return typeof error.message === "string" ? error.message : "Erro na validação.";
}

export default function NovoCurriculoPage() {
  const router = useRouter();
  const [preview, setPreview] = useState("/next.svg");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormValues>({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(schema) as Resolver<FormValues>,
  });

  const experiencias = useFieldArray({ control, name: "experiencias" });
  const formacoes = useFieldArray({ control, name: "formacoes" });

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setValue("avatar", files);

    if (files && files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setPreview(url);
    } else {
      setPreview("/next.svg");
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const skills = data.habilidades
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const novo: Curriculo = {
      id: generateCurriculoId(),
      nome: data.nome,
      cargo: data.cargo,
      email: data.email,
      telefone: data.telefone,
      cpf: data.cpf,
      resumo: data.resumo,
      experiencias: data.experiencias,
      formacoes: data.formacoes,
      habilidades: skills,
      avatar: preview || "/next.svg",
    };

    saveCurriculos([novo, ...loadCurriculos()]);
    toast.success("Currículo salvo com sucesso.");
    reset(defaultValues);
    router.push("/sistema/paginas/curriculos");
  };

  const onError = (formErrors: FieldErrors<FormValues>) => {
    toast.error(extractErrorMessage(formErrors));
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-600">Cadastrar</p>
            <h1 className="mt-2 text-3xl font-semibold">Novo currículo</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Insira os dados completos do candidato e use campos dinâmicos para histórico profissional.
            </p>
          </div>
          <Link
            href="/sistema/paginas/curriculos"
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Voltar à lista
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-8 rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Nome</label>
              <input
                {...register("nome")}
                type="text"
                placeholder="Nome completo"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
              {errors.nome && <p className="mt-2 text-sm text-red-600">{errors.nome.message?.toString()}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Cargo desejado</label>
              <input
                {...register("cargo")}
                type="text"
                placeholder="Cargo desejado"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
              {errors.cargo && <p className="mt-2 text-sm text-red-600">{errors.cargo.message?.toString()}</p>}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">E-mail</label>
              <input
                {...register("email")}
                type="email"
                placeholder="nome@exemplo.com"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message?.toString()}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Telefone</label>
              <Controller
                name="telefone"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    mask="(00) 00000-0000"
                    placeholder="(99) 99999-9999"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                  />
                )}
              />
              {errors.telefone && <p className="mt-2 text-sm text-red-600">{errors.telefone.message?.toString()}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">CPF</label>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    mask="000.000.000-00"
                    placeholder="000.000.000-00"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                  />
                )}
              />
              {errors.cpf && <p className="mt-2 text-sm text-red-600">{errors.cpf.message?.toString()}</p>}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Resumo profissional</label>
            <Textarea
              {...register("resumo")}
              placeholder="Descreva a experiência e principais competências"
              className="bg-zinc-50 dark:bg-zinc-950"
            />
            {errors.resumo && <p className="mt-2 text-sm text-red-600">{errors.resumo.message?.toString()}</p>}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr]">
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Habilidades</label>
              <input
                {...register("habilidades")}
                type="text"
                placeholder="React, Next.js, TypeScript"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Separe as habilidades por vírgula.</p>
              {errors.habilidades && <p className="mt-2 text-sm text-red-600">{errors.habilidades.message?.toString()}</p>}
            </div>
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Foto do candidato</label>
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <Image src={preview} alt="Avatar" width={64} height={64} className="h-16 w-16 rounded-3xl object-cover" />
                <div className="flex-1">
                  <Controller
                    name="avatar"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          field.onChange(event.target.files);
                          handleAvatarChange(event);
                        }}
                        className="block w-full text-sm text-zinc-900 file:mr-4 file:rounded-full file:border-0 file:bg-sky-600 file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-sky-700 dark:text-zinc-100"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Experiências profissionais</h2>
                <button
                  type="button"
                  onClick={() => experiencias.append({ empresa: "", cargo: "", periodo: "", descricao: "" })}
                  className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Adicionar
                </button>
              </div>
              {experiencias.fields.map((field, index) => (
                <div key={field.id} className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Experiência {index + 1}</p>
                    <button
                      type="button"
                      onClick={() => experiencias.remove(index)}
                      className="rounded-full border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600/10"
                    >
                      Remover
                    </button>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Empresa</label>
                      <input
                        {...register(`experiencias.${index}.empresa` as const)}
                        type="text"
                        placeholder="Nome da empresa"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Cargo</label>
                      <input
                        {...register(`experiencias.${index}.cargo` as const)}
                        type="text"
                        placeholder="Cargo ocupado"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Período</label>
                      <input
                        {...register(`experiencias.${index}.periodo` as const)}
                        type="text"
                        placeholder="2021 - 2024"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Descrição</label>
                      <Textarea
                        {...register(`experiencias.${index}.descricao` as const)}
                        placeholder="Descreva sua responsabilidade e resultados"
                        className="bg-zinc-50 dark:bg-zinc-950"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {errors.experiencias && <p className="text-sm text-red-600">{extractErrorMessage(errors.experiencias)}</p>}
            </div>

            <div className="space-y-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Formação acadêmica</h2>
                <button
                  type="button"
                  onClick={() => formacoes.append({ instituicao: "", curso: "", periodo: "" })}
                  className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Adicionar
                </button>
              </div>
              {formacoes.fields.map((field, index) => (
                <div key={field.id} className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Formação {index + 1}</p>
                    <button
                      type="button"
                      onClick={() => formacoes.remove(index)}
                      className="rounded-full border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600/10"
                    >
                      Remover
                    </button>
                  </div>
                  <div className="grid gap-4">
                    <input
                      {...register(`formacoes.${index}.instituicao` as const)}
                      type="text"
                      placeholder="Instituição"
                      className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                    />
                    <div className="grid gap-4 lg:grid-cols-2">
                      <input
                        {...register(`formacoes.${index}.curso` as const)}
                        type="text"
                        placeholder="Curso"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                      <input
                        {...register(`formacoes.${index}.periodo` as const)}
                        type="text"
                        placeholder="Período"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {errors.formacoes && <p className="text-sm text-red-600">{extractErrorMessage(errors.formacoes)}</p>}
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? "Salvando..." : "Salvar currículo"}
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
