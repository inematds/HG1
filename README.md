# 🤖 Academia de Humanoides (HG1)

> **Domine Robôs Humanoides do Zero ao Avançado**
> Plataforma educacional 100% gratuita e open-source sobre robótica humanoide

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus%203-brightgreen.svg)](https://docusaurus.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Deploy Status](https://github.com/inematds/HG1/actions/workflows/deploy.yml/badge.svg)](https://github.com/inematds/HG1/actions)

🌐 **[Acesse o site](https://inematds.github.io/HG1/)**

---

## 📚 Sobre o Projeto

A **Academia de Humanoides (HG1)** é uma jornada de aprendizagem progressiva sobre robôs humanoides, desde fundamentos teóricos até programação avançada com ROS2 e IA.

Inspirada no padrão **FETD (Formação em Engenharia de Tecnologia Digital)**, a plataforma oferece:

- ✅ **100% Gratuito** - Todo conteúdo livre e acessível
- ✅ **Open Source** - Código aberto no GitHub
- ✅ **Progressivo** - Do básico ao avançado, passo a passo
- ✅ **Prático** - Aplicações reais, simuladores e exemplos de código
- ✅ **Atualizado** - Conteúdo sobre modelos 2024 (Tesla Optimus, Unitree H1, Figure 02)

---

## 🎯 Estrutura de Aprendizagem

### 🔵 **Tier 1: Conhecendo Humanoides** (Fundamentos)

**10 módulos completos** explorando os fundamentos da robótica humanoide:

| # | Módulo | Tempo | Conteúdo |
|---|--------|-------|----------|
| 1 | 🤖 Introdução aos Humanoides | 10 min | O que são, história, aplicações |
| 2 | 📜 História e Evolução | 15 min | WABOT-1 até Tesla Optimus (2024) |
| 3 | 🤖 Principais Modelos | 20 min | Unitree H1, Optimus, Figure 02, Atlas |
| 4 | 🎯 Sensores | 18 min | Câmeras, LIDAR, IMU, força, e-skin |
| 5 | 🦾 Atuadores e Controle | 20 min | Servos, QDD, hidráulica, controle de torque |
| 6 | 💻 Computação Embarcada | 16 min | Jetson, MCU, CANbus, arquitetura |
| 7 | 🔋 Energia e Bateria | 14 min | Li-Ion, LFP, BMS, autonomia |
| 8 | 🧠 Software e IA | 22 min | ROS2, RL, LLMs, SLAM, visão |
| 9 | 🏭 Aplicações Práticas | 16 min | Tesla, BMW, Amazon (casos reais) |
| 10 | 🔮 O Futuro dos Humanoides | 18 min | Projeções 2025-2050 |

**Total:** ~3 horas de conteúdo rico com tabs interativos, tabelas comparativas e exemplos de código.

---

### 🟣 **Tier 2: Operando Humanoides** (Em breve)

Aprenda a controlar robôs humanoides:
- Interfaces de controle e telemetria
- Segurança e melhores práticas
- Calibração e manutenção
- Simuladores virtuais (Gazebo, Isaac Sim)

---

### 🟢 **Tier 3: Programando Humanoides** (Em breve)

Programação avançada:
- Python para robótica
- ROS2 e frameworks
- Visão computacional e IA
- Navegação autônoma e manipulação

---

## 🚀 Quick Start - Desenvolvimento Local

### Pré-requisitos

```bash
Node.js 18.0+
pnpm 8.0+
```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/inematds/HG1.git
cd HG1

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm start
```

O site estará disponível em **`http://localhost:3000/HG1/`**

### Build para Produção

```bash
# Gera build estático
pnpm build

# Serve o build localmente
pnpm serve
```

---

## 📁 Estrutura do Projeto

```
HG1/
├── docs/                       # Conteúdo educacional (MDX)
│   ├── tier1/                 # ✅ 10 módulos completos
│   │   ├── introducao.mdx
│   │   ├── 02-historia.mdx
│   │   ├── 03-modelos.mdx
│   │   ├── 04-sensores.mdx
│   │   ├── 05-atuadores.mdx
│   │   ├── 06-computacao.mdx
│   │   ├── 07-energia.mdx
│   │   ├── 08-software.mdx
│   │   ├── 09-aplicacoes.mdx
│   │   └── 10-futuro.mdx
│   ├── tier2/                 # 🔜 Em desenvolvimento
│   └── tier3/                 # 🔜 Roadmap planejado
├── src/
│   ├── components/            # Componentes React customizados
│   ├── pages/
│   │   └── index.tsx          # Homepage com quiz interativo
│   └── css/
│       ├── custom.css         # Estilos customizados
│       └── tier-pages.css     # Estilos específicos dos tiers
├── static/                    # Assets estáticos
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD para GitHub Pages
├── docusaurus.config.ts       # Configuração principal
└── sidebars.ts                # Navegação lateral
```

---

## 🛠️ Tech Stack

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | [Docusaurus 3.5.2](https://docusaurus.io/) |
| **Linguagem** | [TypeScript 5.3](https://www.typescriptlang.org/) |
| **Styling** | CSS Modules + Infima |
| **Deployment** | GitHub Pages (Actions) |
| **Package Manager** | pnpm 8 |
| **Content** | MDX (Markdown + React) |

---

## 🎨 Design e UX

### Padrão FETD/FEI

O projeto segue o padrão de design FETD (Formação em Engenharia de Tecnologia Digital):

- **Homepage Interativa:** Quiz de 3 perguntas que recomenda o tier ideal
- **Cards Visuais:** Grandes ícones, slogans motivadores, benefícios claros
- **Navegação Direta:** Homepage → Conteúdo (máximo 2 cliques)
- **Sistema de Cores:**
  - 🔵 Tier 1: Azul `#3B82F6`
  - 🟣 Tier 2: Roxo `#9b59b6`
  - 🟢 Tier 3: Verde `#10B981`

### Componentes Interativos

- ✅ Tabs (comparações lado a lado)
- ✅ Tabelas responsivas
- ✅ Callouts (tips, info, warnings)
- ✅ Code blocks com syntax highlighting
- ✅ Quiz interativo com estado local

---

## 📜 Scripts Disponíveis

```bash
pnpm start          # Servidor de desenvolvimento (localhost:3000)
pnpm build          # Build para produção (output: ./build)
pnpm serve          # Serve build localmente
pnpm clear          # Limpa cache do Docusaurus
pnpm swizzle        # Customiza componentes Docusaurus
pnpm deploy         # Deploy manual (use GitHub Actions)
```

---

## 🌐 Deploy e CI/CD

### Automático via GitHub Actions

Cada `git push` na branch `main` dispara:

1. ✅ Build do Docusaurus
2. ✅ Testes de compilação
3. ✅ Deploy para GitHub Pages

**Workflow:** `.github/workflows/deploy.yml`

### Configuração do GitHub Pages

1. Vá em **Settings** → **Pages**
2. Source: **GitHub Actions**
3. URL: `https://inematds.github.io/HG1/`

---

## 📊 Estatísticas do Projeto

```
📄 Arquivos MDX: 10 módulos Tier 1
📝 Linhas de código: ~6,000 (conteúdo educacional)
⏱️ Tempo de leitura: ~3 horas (Tier 1)
🎯 Módulos planejados: 25+ (todos os tiers)
📦 Tamanho do build: ~8 MB
🚀 Performance: 95+ (Lighthouse)
```

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork** o repositório
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova seção sobre sensores'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Guidelines

- Use commits semânticos (feat, fix, docs, style, refactor, test, chore)
- MDX: Siga o padrão dos módulos existentes (tabs, callouts, code blocks)
- Imagens: Otimize antes de adicionar (< 200KB)
- Links: Sempre use HTTPS

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos e Referências

### Projetos que Inspiraram

- **FETD, FEI, FEP** - Padrão de design e estrutura de cursos (inematds.github.io)
- **Unitree Robotics** - Documentação técnica e especificações
- **Boston Dynamics** - Vídeos e materiais educacionais
- **Tesla AI** - Blog e updates sobre Optimus

### Comunidade

- [r/robotics](https://reddit.com/r/robotics) - Discussões e novidades
- [ROS Discourse](https://discourse.ros.org/) - Comunidade ROS2
- [Unitree Community](https://www.unitree.com/community) - Fórum oficial

---

## 📞 Contato

- **GitHub Issues:** [Reporte bugs ou sugira features](https://github.com/inematds/HG1/issues)
- **Discussions:** [Perguntas e discussões](https://github.com/inematds/HG1/discussions)
- **Email:** [nmaldaner@example.com](mailto:nmaldaner@example.com)

---

## 🗺️ Roadmap

- [x] **Q4 2024:** Tier 1 completo (10 módulos)
- [ ] **Q1 2025:** Tier 2 - Operação e Simuladores
- [ ] **Q2 2025:** Tier 3 - Programação ROS2
- [ ] **Q3 2025:** Projetos práticos e certificados
- [ ] **Q4 2025:** Integração com simuladores online

---

<div align="center">

**🤖 Feito com ❤️ pela comunidade de robótica**

[🌟 Star no GitHub](https://github.com/inematds/HG1) • [🐛 Reportar Bug](https://github.com/inematds/HG1/issues) • [💡 Sugerir Feature](https://github.com/inematds/HG1/issues/new)

</div>
