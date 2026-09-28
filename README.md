# NEXA

### Sua operação. No piloto automático.

**NEXA** é uma landing page SaaS fictícia criada para explorar **frontend moderno, design de produto, animações interativas e experiências digitais orientadas por IA**.

> **“O trabalho repetitivo não deveria ser seu trabalho.”**

A proposta da NEXA é representar uma plataforma de automação inteligente capaz de conectar ferramentas, interpretar processos e transformar tarefas repetitivas em workflows automatizados.

---

## ✨ O projeto

A NEXA foi construída como um projeto de portfólio com foco em uma experiência visual premium, inspirada em produtos SaaS modernos.

A interface combina:

- Dark UI
- Glassmorphism
- Microinterações
- Animações baseadas em scroll
- Parallax e efeitos de profundidade
- Elementos interativos
- Componentização
- Responsividade
- Experiência mobile
- Motion design orientado à hierarquia visual

A ideia é que o movimento tenha função: **guiar a atenção, reforçar feedback e criar percepção de profundidade**, sem transformar a interface em uma coleção de efeitos aleatórios.

---

## 🧠 Conceito

A ideia central da NEXA é simples:

> Empresas não deveriam gastar tempo executando tarefas que podem ser automatizadas.

O usuário define o processo.

**A NEXA executa.**

### Exemplo de workflow

```text
Novo lead
    ↓
NEXA AI
    ↓
Análise e qualificação
    ↓
CRM atualizado
    ↓
Follow-up automático
```

---

## 🚀 Destaques da experiência

### 🤖 Inteligência artificial

A interface apresenta a NEXA como uma camada inteligente capaz de:

- Interpretar processos
- Identificar oportunidades de automação
- Qualificar informações
- Gerar ações automaticamente
- Otimizar workflows

### ⚡ Workflows inteligentes

A landing page apresenta três cenários conceituais:

**Sales**

```text
New Lead
→ AI Qualification
→ CRM Update
→ Follow-up
```

**Marketing**

```text
Segmentation
→ Content
→ Distribution
→ Analytics
```

**Operations**

```text
Data Collection
→ Analysis
→ Insight
→ Action
```

### 📊 Dashboard conceitual

O projeto inclui uma representação visual de uma plataforma SaaS com:

- Processos automatizados
- Métricas
- Atividades recentes
- Workflows
- Analytics
- Status da operação
- NEXA AI

Todos os dados exibidos são **fictícios** e utilizados exclusivamente para composição da interface.

---

## ✨ Motion & Interações

A experiência foi construída para responder ao usuário em diferentes níveis.

Entre os efeitos implementados estão:

- Hero com parallax reativo ao mouse
- Spotlight global acompanhando o cursor
- Cursor trail sutil
- Spotlight individual nos cards
- Tilt 3D nos cards
- Microinterações em botões
- Navbar com estado ativo por seção
- Métricas com count-up
- Conexões animadas entre etapas de workflow
- AI Orb interativa
- Backgrounds com aurora animada
- Progress bar de scroll
- Reveals cinematográficos por viewport
- Automation Showcase com animações controladas por scroll
- CTA final com entrada cinematográfica
- Respeito a `prefers-reduced-motion`

---

## 📱 Responsividade

A interface foi desenvolvida para diferentes tamanhos de tela e recebeu ajustes específicos para mobile.

O projeto foi testado em **dispositivo móvel real**, incluindo:

- Navbar mobile
- Pricing cards
- Tipografia responsiva
- CTA final
- AI Orb
- Espaçamentos
- Elementos gráficos
- Overflow horizontal
- Interações adaptadas para touch

---

## 🧩 Estrutura da página

```text
Navbar
│
├── Hero
├── Product Showcase
├── Workflow
├── Features
├── Automation Showcase
├── Intelligence
├── Pricing
├── Final CTA
└── Footer
```

---

## 🎨 Design System

| Elemento | Direção |
| --- | --- |
| Background | Preto / grafite |
| Tipografia | Sans-serif moderna |
| Contraste | Branco / tons de cinza |
| Cards | Glassmorphism |
| Bordas | Baixo contraste |
| Sombras | Suaves |
| Animações | Sutis e fluidas |
| Espaçamento | Generoso |
| Layout | Minimalista |
| Destaques | Glow e profundidade |

A direção visual busca transmitir uma tecnologia sofisticada sem sacrificar clareza e legibilidade.

---

## 🛠️ Stack

### Frontend

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**

### Animações

- **Motion**
- **GSAP**
- **ScrollTrigger**

### Ícones

- **Lucide React**

### Desenvolvimento

- **Node.js**
- **npm**
- **Git**
- **GitHub**

---

## 🏗️ Arquitetura

O projeto utiliza uma estrutura baseada em componentes reutilizáveis e seções independentes:

```text
src/
│
├── components/
│   ├── AIOrb.tsx
│   ├── AuroraBackground.tsx
│   ├── Button.tsx
│   ├── CursorTrail.tsx
│   ├── GlobalSpotlight.tsx
│   ├── Navbar.tsx
│   ├── ScrollProgress.tsx
│   ├── SplitText.tsx
│   └── SpotlightCard.tsx
│
├── sections/
│   ├── AutomationShowcase.tsx
│   ├── Features.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Intelligence.tsx
│   ├── Pricing.tsx
│   ├── ProductShowcase.tsx
│   └── Workflow.tsx
│
├── App.tsx
├── index.css
└── main.tsx
```

Essa organização permite evoluir cada seção de forma independente e manter a interface modular.

---

## 🧱 Componentes de destaque

### `AIOrb`

Elemento visual utilizado para representar a inteligência da NEXA.

Inclui:

- Anéis orbitais
- Glow
- Nós flutuantes
- Ícone central
- Movimento contínuo
- Interação com o cursor
- Layout responsivo

### `SpotlightCard`

Cards que respondem ao movimento do mouse através de:

- Spotlight localizado
- Tilt 3D
- Spring animations
- Efeito de profundidade

### `GlobalSpotlight`

Cria uma iluminação sutil que acompanha o cursor globalmente.

### `CursorTrail`

Adiciona um rastro de cursor discreto para reforçar a sensação de responsividade da interface.

### `ScrollProgress`

Exibe uma barra de progresso no topo da página durante a navegação.

### `SplitText`

Permite criar animações de entrada palavra por palavra em títulos de destaque.

### `AuroraBackground`

Background animado utilizado para criar profundidade visual nas áreas de maior destaque.

---

## 💰 Pricing

A interface apresenta três planos conceituais:

| Plano | Preço |
| --- | ---: |
| Starter | R$ 49/mês |
| Growth | R$ 149/mês |
| Scale | R$ 399/mês |

> Os preços, funcionalidades e métricas apresentados são fictícios e fazem parte exclusivamente do conceito visual da landing page.

---

## 💻 Como executar localmente

### Pré-requisitos

- Node.js
- npm
- Git

### Clone o projeto

```bash
git clone https://github.com/LucaswBohrer/nexa-landing-page.git
cd nexa-landing-page
```

### Instale as dependências

```bash
npm install
```

### Execute em desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:5173
```

### Build de produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

---

## 🔍 Qualidade e validação

Durante o desenvolvimento foram realizados testes de:

- Build de produção
- Navegação entre seções
- Responsividade
- Hover e microinterações
- Animações de entrada
- Scroll-driven animations
- Navegação mobile
- Layout em dispositivo móvel real
- Overflow horizontal
- Pricing cards
- CTA final
- Elementos gráficos responsivos
- `prefers-reduced-motion`

---

## 🗺️ Próximos passos

O projeto está estruturado para receber futuras evoluções, como:

- [ ] Deploy público
- [ ] Screenshots oficiais do projeto
- [ ] Favicon personalizado
- [ ] Open Graph image
- [ ] Página interna do dashboard
- [ ] Simulação funcional de workflows
- [ ] Integração com API de IA
- [ ] Sistema de autenticação conceitual
- [ ] Testes automatizados

---

## 🎯 Objetivo

O NEXA foi desenvolvido como um projeto de **portfólio**, demonstrando conhecimentos em:

- Desenvolvimento frontend
- React
- TypeScript
- Tailwind CSS
- Motion design
- GSAP
- UX/UI
- Design de interfaces SaaS
- Componentização
- Responsividade
- Git e GitHub
- Desenvolvimento orientado à experiência do usuário

Mais do que uma landing page, o projeto explora como **design, movimento e tecnologia podem trabalhar juntos para comunicar um produto digital**.

---

## 👨‍💻 Autor

**Lucas Bohrer**

Estudante de Engenharia Elétrica e desenvolvedor interessado em:

- Software
- Inteligência Artificial
- Automação
- Desenvolvimento Web
- Sistemas embarcados
- Experiências digitais

### Links

- GitHub: [@LucaswBohrer](https://github.com/LucaswBohrer)
- Projeto: [NEXA](https://github.com/LucaswBohrer/nexa-landing-page)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de **portfólio e estudo**.

O conceito, identidade visual e conteúdo da NEXA são fictícios.

---

<p align="center">
  Desenvolvido com React, TypeScript, Tailwind CSS, Motion e GSAP.
</p>

<p align="center">
  <strong>NEXA — Sua operação. No piloto automático.</strong>
</p>
