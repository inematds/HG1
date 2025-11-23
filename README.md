# Academia de Humanoides (HG1)

> Democratizando o conhecimento sobre robôs humanoides

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-brightgreen.svg)](https://docusaurus.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

Academia de Humanoides é uma plataforma educacional progressiva e interativa, hospedada no GitHub Pages, que oferece um percurso de aprendizagem estruturado em três níveis sobre robótica humanoide.

## 🎯 Visão Geral

- **Tier 1: Conhecendo Humanoides** - Fundamentos da robótica humanoide (10 módulos)
- **Tier 2: Operando Humanoides** - Operação, segurança e simuladores (5 módulos)
- **Tier 3: Programando Humanoides** - Do básico ao avançado (roadmap completo)

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18.0+
- pnpm 8.0+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/nmaldaner/MindON.git
cd MindON

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm start
```

O site estará disponível em `http://localhost:3000`.

### Build para Produção

```bash
# Gera build estático
pnpm build

# Serve o build localmente
pnpm serve
```

## 📁 Estrutura do Projeto

```
MindON/
├── docs/                      # Conteúdo educacional (MDX)
│   ├── tier1/                # Tier 1: Fundamentos
│   ├── tier2/                # Tier 2: Operação
│   └── tier3/                # Tier 3: Programação
├── src/
│   ├── components/           # Componentes React customizados
│   ├── pages/                # Páginas customizadas
│   └── css/                  # Estilos globais
├── static/                   # Assets estáticos
└── docusaurus.config.ts     # Configuração do Docusaurus
```

## 🛠️ Tech Stack

- **Framework**: [Docusaurus 3](https://docusaurus.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Infima
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Testing**: Jest + React Testing Library
- **Deployment**: GitHub Pages

## 📜 Scripts Disponíveis

```bash
pnpm start          # Inicia servidor de desenvolvimento
pnpm build          # Build para produção
pnpm serve          # Serve build localmente
pnpm clear          # Limpa cache do Docusaurus
pnpm test           # Executa testes
pnpm lint           # Lint do código
pnpm format         # Formata código com Prettier
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Comunidade Unitree por documentação e recursos
- Projeto MindOn Robotics por inspiração
- Todos os contribuidores open source

---

**Feito com ❤️ pela comunidade de robótica**
