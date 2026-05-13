# Sistema de Gestão de Currículos

Uma aplicação web moderna para criar, gerenciar e validar currículos com experiência de usuário aprimorada. Desenvolvida com Next.js, Tailwind CSS e formulários dinâmicos com validação rigorosa.

## ✨ Funcionalidades Principais

- **Landing Page**: Apresentação dos benefícios do sistema com interface moderna
- **Lista de Currículos**: Exibição de cards com resumos (Nome, Cargo, Resumo)
- **Busca em Tempo Real**: Filtro instantâneo por nome ou cargo com debounce (200ms)
- **Formulário Dinâmico**: Adicionar/remover campos de experiências profissionais e formações acadêmicas
- **Validação Rigorosa**: Esquema de validação com Yup para todos os campos
- **Feedback Visual**: Notificações de sucesso/erro com Sonner mostrando erros específicos
- **Detalhes do Currículo**: Visualização completa com todas as informações do candidato
- **Persistência em localStorage**: Dados mockados salvos localmente
- **Upload de Imagem Simulado**: Prévia de imagem com armazenamento em URL.createObjectURL()
- **Dark Mode**: Suporte completo a tema escuro
- **Responsivo**: Adaptação fluida para mobile, tablet e desktop

## 🛠️ Stack Tecnológico

### Framework & Estilização
- **Next.js 16.2.4** - App Router
- **React 19.2.4** - Biblioteca UI
- **Tailwind CSS 4** - Estilização com design system
- **TypeScript 5** - Type safety

### Formulários & Validação
- **React Hook Form 7.75** - Gerenciamento de formulários
- **Yup 1.7.1** - Validação de esquemas
- **react-input-mask 2.0.4** - Máscaras de entrada (CPF, Telefone)

### Componentes & UI
- **shadcn/ui** - Componentes reutilizáveis (Button, Input, Textarea)
- **React Icons 5.6** - Ícones SVG
- **Sonner 2.0** - Notificações toast

## 📁 Estrutura do Projeto

```
app/
├── page.tsx                          # Landing page
├── layout.tsx                        # Root layout com Toaster
├── globals.css                       # Estilos globais
├── componentes/
│   ├── header.tsx                    # Header com navegação
│   ├── footer.tsx                    # Footer
│   ├── nav.tsx                       # Navegação com active state
│   ├── toaster.tsx                   # Provider Sonner
│   └── ui/                           # Componentes shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
└── sistema/paginas/
    └── curriculos/
        ├── page.tsx                  # Lista com busca em tempo real
        ├── data.ts                   # Mock data + localStorage
        ├── [id]/
        │   └── page.tsx              # Detalhes dinâmicos
        └── novo/
            └── page.tsx              # Formulário de cadastro
```

## 🚀 Como Começar

### Instalação

```bash
# Clonar repositório
git clone <url-do-repositorio>
cd trabalho

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build

```bash
npm run build
npm start
```

## 📋 Campos do Formulário

O formulário de cadastro valida os seguintes campos:

- **Nome** - Obrigatório, mínimo 3 caracteres
- **Cargo Desejado** - Obrigatório, mínimo 3 caracteres
- **E-mail** - Obrigatório, formato válido
- **Telefone** - Obrigatório, máscara (99) 99999-9999
- **CPF** - Obrigatório, máscara 999.999.999-99
- **Resumo Profissional** - Obrigatório, mínimo 30 caracteres
- **Habilidades** - Obrigatório, separadas por vírgula
- **Foto do Candidato** - Upload simulado com prévia
- **Experiências Profissionais** - Dinâmicas, mínimo 1
  - Empresa
  - Cargo
  - Período
  - Descrição (mínimo 20 caracteres)
- **Formações Acadêmicas** - Dinâmicas, mínimo 1
  - Instituição
  - Curso
  - Período

## 🎨 Design & UX

- **Contraste**: Paleta de cores Zinc e Sky para melhor legibilidade
- **Espaçamento**: Grid system com Tailwind para consistência
- **Interatividade**: Estados hover, focus-visible e disabled em todos os elementos
- **Acessibilidade**: Links com aria-current, inputs com labels, e focus indicators
- **Animações**: Transições suaves sem impacto no desempenho

## 📊 Funcionalidades Avançadas Implementadas

### 1. Formulário Dinâmico com useFieldArray
- Adicionar/remover campos de experiência e formação
- Validação em cascata para cada item
- Sincronização automática com React Hook Form

### 2. Busca em Tempo Real
- Debounce de 200ms para otimizar performance
- Filtro por nome ou cargo
- Feedback imediato ao usuário

### 3. Gerenciamento de Estado
- useState para UI local
- localStorage para persistência
- Mock data como fallback

## 🔒 Segurança & Validação

Todos os dados são validados no cliente usando Yup com mensagens de erro específicas:
- Validação de campos obrigatórios
- Tamanhos mínimos de texto
- Formatos válidos (email)
- Máscaras de entrada para dados estruturados

## 📱 Responsividade

O projeto é totalmente responsivo usando Tailwind CSS:
- **Mobile First**: Design começando em mobile
- **Breakpoints**: sm, lg para otimizar layout
- **Toque**: Botões e elementos otimizados para toque

## 🌙 Dark Mode

O site suporta tema claro e escuro com transições suaves usando classes `dark:` do Tailwind.

## 📝 Dados Mockados

Os currículos são salvos em localStorage com a chave `sistema_curriculos_v1`. Dois currículos de exemplo são fornecidos como dados iniciais:

1. **Maria Silva** - Desenvolvedora Front-end (5 anos experiência)
2. **João Pereira** - Analista de Dados (4 anos experiência)

## 🔄 Fluxo de Uso

1. Acesse a home para conhecer o sistema
2. Clique em "Ver currículos" para listar os existentes
3. Use a busca para filtrar por nome ou cargo
4. Clique em "Ver detalhes" para visualizar informações completas
5. Clique em "Cadastrar novo" para adicionar um novo currículo
6. Preencha o formulário com validação em tempo real
7. Adicione experiências e formações dinamicamente
8. Clique em "Salvar" para persistir no localStorage

## ✅ Requisitos Atendidos

- ✅ Next.js com App Router
- ✅ Tailwind CSS com responsividade
- ✅ shadcn/ui para componentes
- ✅ React Hook Form + Yup
- ✅ react-input-mask para máscaras
- ✅ Sonner para notificações
- ✅ React Icons para ícones
- ✅ Formulários dinâmicos com useFieldArray
- ✅ Busca em tempo real com debounce
- ✅ Validação rigorosa
- ✅ Estados de UI (hover, focus, disabled)
- ✅ Navegação com active state

## 🚀 Próximas Melhorias

- Integração com API backend
- Autenticação e autorização
- Upload real de imagens
- Exportação de PDF
- Editor de currículos já salvos

## 📄 Licença

Projeto educacional - 2026
