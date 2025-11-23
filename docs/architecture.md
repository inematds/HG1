# Academia de Humanoides (HG1) - Frontend Architecture Document

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-11-22 | 1.0 | Initial frontend architecture for Docusaurus-based platform | Architect Winston |

---

## Template and Framework Selection

### Framework Decision: Docusaurus 3

**Chosen Framework:** Docusaurus 3.x

**Rationale:**
Based on the PRD's Technical Assumptions section, Docusaurus 3 was selected over Next.js for the following reasons:

1. **Documentation-First Design:** Built specifically for documentation and educational content
2. **Excellent SEO Out-of-the-Box:** Meets NFR11-NFR15 requirements without additional configuration
3. **MDX Native Support:** Satisfies FR7 (MDX format) requirement natively
4. **Built-in Features:**
   - Versioning system (future-ready for content updates)
   - Algolia DocSearch integration (FR22 - search functionality)
   - Internationalization support (future multilingual expansion per NFR29)
   - Blog functionality (disabled for MVP, available for future)
5. **Performance Optimized:** Static Site Generation meets all performance NFRs (NFR1-NFR6)
6. **Less Configuration:** Faster time-to-MVP (6-8 week timeline)
7. **Community & Ecosystem:** Large documentation site community, proven patterns

**Trade-offs Accepted:**
- Less flexibility than Next.js for custom features (acceptable for MVP scope)
- Opinionated structure (benefit: consistency and best practices enforced)
- Plugin-based extensibility (vs Next.js full flexibility)

**Migration Path:** If future requirements exceed Docusaurus capabilities, migration to Next.js is possible (both React-based, similar component patterns).

### No Starter Template

This project will use **vanilla Docusaurus 3** initialized via `npx create-docusaurus@latest`. No third-party starter template will be used to maintain full control over configuration and avoid unnecessary dependencies.

**Setup Command:**
```bash
npx create-docusaurus@latest academia-humanoides classic --typescript
```

This provides:
- TypeScript support (type safety for custom components)
- Classic preset (documentation site optimized)
- Clean foundation without bloat

---

## Frontend Tech Stack

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|-----------|---------|---------|-----------|
| **Framework** | Docusaurus | 3.x (latest stable) | Static site generation, documentation structure | Documentation-optimized, excellent SEO, MDX native, versioning support |
| **Runtime** | React | 18.x | Component rendering, interactivity | Docusaurus dependency, modern hooks API, wide ecosystem |
| **Language** | TypeScript | 5.x | Type safety, developer experience | Prevents runtime errors, better IDE support, self-documenting code |
| **Build Tool** | Webpack | 5.x (via Docusaurus) | Bundling, optimization, code splitting | Docusaurus default, battle-tested, extensive plugin ecosystem |
| **Package Manager** | pnpm | 8.x | Dependency management | Faster than npm/yarn, disk space efficient, strict dependency resolution |
| **Styling** | Tailwind CSS + Infima | Tailwind 3.x, Infima (Docusaurus default) | Utility-first styling + base design system | Rapid development, small bundle (PurgeCSS), extends Docusaurus theme |
| **Component Library** | shadcn/ui (adapted) | Latest | Accessible, customizable UI components | Unstyled primitives, Tailwind-compatible, WCAG AA compliant |
| **State Management** | React Context + Hooks | N/A (React 18 built-in) | Progress tracking, user preferences | No external library needed, sufficient for localStorage-based state |
| **Routing** | Docusaurus Router | N/A (built-in) | Client-side navigation | File-system based, automatic, SEO-optimized |
| **Code Highlighting** | Prism.js | Latest (via Docusaurus) | Syntax highlighting for code blocks | Docusaurus default, supports Python, C++, ROS2 languages (FR8) |
| **Search** | Algolia DocSearch | 3.x | Site-wide search functionality | Free for open source, instant results, crawls automatically (FR22) |
| **Analytics** | Plausible Analytics | N/A (script tag) | Privacy-friendly usage tracking | LGPD/GDPR compliant, no cookies, custom events (NFR26-NFR28) |
| **Icons** | Lucide React | Latest | Icon system | Tree-shakeable, consistent style, accessible labels |
| **Animations** | Framer Motion | 11.x | Micro-interactions, celebrations | Declarative, performance-optimized, badge award animations |
| **Form Handling** | N/A | N/A | Not required for MVP | No forms in MVP scope (search is Algolia, no auth) |
| **Testing - Unit** | Jest + React Testing Library | Latest (via Docusaurus) | Component unit tests | Docusaurus included, best practices for React testing |
| **Testing - E2E** | Playwright | Latest | Critical user flow testing | Fast, reliable, multi-browser, Lighthouse CI integration |
| **Testing - Accessibility** | axe-core + Lighthouse CI | Latest | Automated accessibility audits | WCAG AA validation (NFR7-NFR10) |
| **Linting** | ESLint + Prettier | Latest | Code quality, formatting | Docusaurus defaults + custom rules, pre-commit hooks |
| **Git Hooks** | Husky + lint-staged | Latest | Pre-commit quality checks | Enforce linting, formatting, tests before commit |
| **CI/CD** | GitHub Actions | N/A | Automated build, test, deploy | Free for public repos, deploy to GitHub Pages (NFR17) |
| **Deployment** | GitHub Pages | N/A | Static site hosting | Free, reliable, HTTPS default, 99% uptime (NFR16, NFR19, NFR21) |
| **Image Optimization** | @docusaurus/plugin-ideal-image | Latest | Responsive images, lazy loading | WebP format, lazy load, meets NFR5 |
| **Dev Tools** | React DevTools, TypeScript Language Server | Latest | Development and debugging | Essential for React/TS development |

---

## Project Structure

```plaintext
academia-humanoides/
├── .github/
│   └── workflows/
│       ├── deploy.yml                    # GitHub Actions: build + deploy to gh-pages
│       └── lighthouse-ci.yml             # Lighthouse CI: performance + accessibility audits
│
├── docs/                                  # Educational content (MDX files)
│   ├── tier1/                            # Tier 1: Foundation modules
│   │   ├── 01-introducao.mdx
│   │   ├── 02-historia.mdx
│   │   ├── 03-modelos.mdx
│   │   ├── 04-sensores.mdx
│   │   ├── 05-atuadores.mdx
│   │   ├── 06-computacao.mdx
│   │   ├── 07-energia.mdx
│   │   ├── 08-software.mdx
│   │   ├── 09-aplicacoes.mdx
│   │   └── 10-futuro.mdx
│   ├── tier2/                            # Tier 2: Operation modules
│   │   ├── 01-interfaces.mdx
│   │   ├── 02-seguranca.mdx
│   │   ├── 03-calibracao.mdx
│   │   ├── 04-manutencao.mdx
│   │   └── 05-simuladores.mdx
│   ├── tier3/                            # Tier 3: Programming roadmap (placeholder content)
│   │   └── roadmap.mdx
│   ├── glossary.mdx                      # Glossary page (FR6)
│   ├── resources.mdx                     # External resources page (FR25)
│   └── _category_.json                   # Docusaurus sidebar config per directory
│
├── src/
│   ├── components/                       # Custom React components
│   │   ├── Badge/
│   │   │   ├── Badge.tsx                # Badge visual component
│   │   │   ├── Badge.module.css         # Badge styles (CSS Modules)
│   │   │   └── index.ts                 # Barrel export
│   │   ├── ProgressBar/
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── ProgressBar.module.css
│   │   │   └── index.ts
│   │   ├── ModuleCard/
│   │   │   ├── ModuleCard.tsx           # Module card for tier overview
│   │   │   ├── ModuleCard.module.css
│   │   │   └── index.ts
│   │   ├── TierNavigation/
│   │   │   ├── TierNavigation.tsx       # Tier switcher component
│   │   │   ├── TierNavigation.module.css
│   │   │   └── index.ts
│   │   ├── RoadmapViz/
│   │   │   ├── RoadmapViz.tsx           # Visual roadmap component
│   │   │   ├── RoadmapViz.module.css
│   │   │   └── index.ts
│   │   ├── CelebrationModal/
│   │   │   ├── CelebrationModal.tsx     # Badge award celebration
│   │   │   ├── CelebrationModal.module.css
│   │   │   └── index.ts
│   │   └── MarkComplete/
│   │       ├── MarkCompleteButton.tsx   # Mark module complete button
│   │       ├── MarkCompleteButton.module.css
│   │       └── index.ts
│   │
│   ├── context/                          # React Context for global state
│   │   ├── ProgressContext.tsx          # Progress tracking state
│   │   └── ThemeContext.tsx             # Dark mode preference (optional enhancement)
│   │
│   ├── hooks/                            # Custom React hooks
│   │   ├── useProgress.ts               # Hook for progress operations
│   │   ├── useLocalStorage.ts           # localStorage abstraction
│   │   └── useBadges.ts                 # Badge award logic
│   │
│   ├── utils/                            # Utility functions
│   │   ├── progress.ts                  # Progress calculation utilities
│   │   ├── localStorage.ts              # localStorage helpers with TypeScript
│   │   └── analytics.ts                 # Plausible analytics event helpers
│   │
│   ├── types/                            # TypeScript type definitions
│   │   ├── progress.ts                  # Progress data types
│   │   ├── module.ts                    # Module metadata types
│   │   └── badge.ts                     # Badge types
│   │
│   ├── css/                              # Global styles
│   │   ├── custom.css                   # Docusaurus theme customization
│   │   └── tailwind.css                 # Tailwind imports
│   │
│   ├── pages/                            # Custom React pages (not MDX docs)
│   │   ├── index.tsx                    # Homepage (hero, tier overview, stats)
│   │   ├── badges.tsx                   # Badges collection page
│   │   └── roadmap.tsx                  # Visual roadmap page
│   │
│   └── theme/                            # Docusaurus theme swizzled components
│       ├── DocItem/                     # Customized doc page wrapper (add MarkComplete button)
│       ├── Navbar/                      # Customized navbar (tier navigation dropdown)
│       └── Footer/                      # Customized footer (community links)
│
├── static/                               # Static assets
│   ├── img/                             # Images, logos, diagrams
│   │   ├── logo.svg                     # Site logo
│   │   ├── hero-bg.webp                 # Hero background image
│   │   ├── badges/                      # Badge images (T1, T2, T3)
│   │   └── diagrams/                    # Educational diagrams
│   ├── code-examples/                   # Downloadable code samples (FR26)
│   │   ├── python/
│   │   ├── cpp/
│   │   └── ros2/
│   └── CNAME                            # Custom domain (optional, future)
│
├── .husky/                               # Git hooks
│   └── pre-commit                       # Run linting + formatting before commit
│
├── docusaurus.config.ts                  # Main Docusaurus configuration
├── sidebars.ts                           # Sidebar navigation structure
├── tsconfig.json                         # TypeScript configuration
├── tailwind.config.js                    # Tailwind CSS configuration
├── .eslintrc.js                          # ESLint rules
├── .prettierrc                           # Prettier formatting rules
├── package.json                          # Dependencies and scripts
├── pnpm-lock.yaml                        # pnpm lockfile
├── README.md                             # Project documentation
├── CONTRIBUTING.md                       # Contribution guidelines (FR32)
├── LICENSE                               # MIT license (NFR31)
└── .gitignore                            # Git ignore patterns
```

**Key Directory Explanations:**

- **`docs/`**: All educational MDX content organized by tier. Each tier is a folder with numbered modules.
- **`src/components/`**: Custom React components following atomic design principles (atoms: Badge, molecules: ModuleCard, organisms: RoadmapViz).
- **`src/context/`**: React Context providers for global state (progress, theme) - no Redux needed.
- **`src/hooks/`**: Reusable custom hooks encapsulating logic (useProgress, useLocalStorage, useBadges).
- **`src/pages/`**: Custom pages (homepage, badges, roadmap) that are React components, not MDX docs.
- **`src/theme/`**: Swizzled Docusaurus theme components for customization (wrap default components to add features like MarkComplete button).
- **`static/`**: Public assets served as-is (images, downloadable files, CNAME for custom domain).

---

## Component Standards

### Component Template

**Location:** `src/components/{ComponentName}/{ComponentName}.tsx`

```typescript
import React from 'react';
import styles from './{ComponentName}.module.css';
import clsx from 'clsx';

/**
 * Props for {ComponentName} component
 */
export interface {ComponentName}Props {
  /**
   * Description of prop
   */
  someProp: string;

  /**
   * Optional prop with default
   */
  optionalProp?: boolean;

  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * {ComponentName} - Brief description of component purpose
 *
 * @example
 * <{ComponentName} someProp="value">
 *   Content
 * </{ComponentName}>
 */
export const {ComponentName}: React.FC<{ComponentName}Props> = ({
  someProp,
  optionalProp = false,
  children,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <p className={styles.text}>{someProp}</p>
      {optionalProp && <span>Optional content</span>}
      {children}
    </div>
  );
};

// Default export for easier imports
export default {ComponentName};
```

**Barrel Export (`index.ts`):**
```typescript
export { {ComponentName}, type {ComponentName}Props } from './{ComponentName}';
export { default } from './{ComponentName}';
```

### Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `Badge.tsx`, `ProgressBar.tsx`)
- Styles: `PascalCase.module.css` (CSS Modules scoped to component)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useProgress.ts`)
- Utils: `camelCase.ts` (e.g., `progress.ts`, `analytics.ts`)
- Types: `camelCase.ts` matching domain (e.g., `progress.ts`, `badge.ts`)
- Pages: `kebab-case.tsx` for URL mapping (e.g., `index.tsx`, `badges.tsx`)
- MDX Docs: `kebab-case.mdx` with numeric prefix (e.g., `01-introducao.mdx`)

**Directories:**
- Components: `PascalCase/` (e.g., `Badge/`, `ModuleCard/`)
- Other: `camelCase/` (e.g., `hooks/`, `utils/`, `types/`)

**Variables & Functions:**
- Variables: `camelCase` (e.g., `progressData`, `moduleCount`)
- Functions: `camelCase` (e.g., `calculateProgress`, `awardBadge`)
- Components: `PascalCase` (e.g., `Badge`, `ProgressBar`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_TIER_NUMBER`, `STORAGE_KEY`)
- Types/Interfaces: `PascalCase` with descriptive suffix (e.g., `ProgressData`, `ModuleMetadata`, `BadgeType`)

**CSS Classes (Tailwind + Modules):**
- Tailwind: Use utility classes directly in JSX
- CSS Modules: `camelCase` for class names (e.g., `.container`, `.moduleCard`)
- Global: `kebab-case` in custom.css (e.g., `.hero-section`, `.tier-nav`)

**MDX Frontmatter:**
```yaml
---
title: Module Title
description: Brief description for SEO and cards
tier: 1
module_number: 1
estimated_time: 10
prerequisites: []
---
```

---

## State Management

### Store Structure

**No Redux/Zustand Required** - React Context + Hooks sufficient for MVP scope.

```plaintext
src/context/
├── ProgressContext.tsx       # Progress tracking provider
└── ThemeContext.tsx          # Dark mode preference (optional)

src/hooks/
├── useProgress.ts            # Access progress state and actions
├── useLocalStorage.ts        # localStorage abstraction
└── useBadges.ts              # Badge award logic
```

### State Management Template

**Progress Context (`src/context/ProgressContext.tsx`):**

```typescript
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProgressData, TierProgress } from '@site/src/types/progress';
import { loadProgress, saveProgress } from '@site/src/utils/localStorage';

interface ProgressContextType {
  progress: ProgressData;
  markModuleComplete: (tier: number, moduleNumber: number) => void;
  isModuleComplete: (tier: number, moduleNumber: number) => boolean;
  getTierProgress: (tier: number) => TierProgress;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const INITIAL_PROGRESS: ProgressData = {
  tier1: [],
  tier2: [],
  tier3: [],
};

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressData>(INITIAL_PROGRESS);

  // Load progress from localStorage on mount
  useEffect(() => {
    const loadedProgress = loadProgress();
    if (loadedProgress) {
      setProgress(loadedProgress);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markModuleComplete = (tier: number, moduleNumber: number) => {
    setProgress((prev) => {
      const tierKey = `tier${tier}` as keyof ProgressData;
      const tierModules = prev[tierKey];

      if (!tierModules.includes(moduleNumber)) {
        return {
          ...prev,
          [tierKey]: [...tierModules, moduleNumber].sort((a, b) => a - b),
        };
      }

      return prev; // Already complete, no change
    });
  };

  const isModuleComplete = (tier: number, moduleNumber: number): boolean => {
    const tierKey = `tier${tier}` as keyof ProgressData;
    return progress[tierKey].includes(moduleNumber);
  };

  const getTierProgress = (tier: number): TierProgress => {
    const tierKey = `tier${tier}` as keyof ProgressData;
    const completedModules = progress[tierKey].length;

    // Total modules per tier (from PRD)
    const totalModules = tier === 1 ? 10 : tier === 2 ? 5 : 0; // T3 has no content in MVP

    return {
      tier,
      completedModules,
      totalModules,
      percentage: totalModules > 0 ? (completedModules / totalModules) * 100 : 0,
      isComplete: completedModules === totalModules && totalModules > 0,
    };
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markModuleComplete,
        isModuleComplete,
        getTierProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

// Custom hook for accessing progress context
export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};
```

**TypeScript Types (`src/types/progress.ts`):**

```typescript
export interface ProgressData {
  tier1: number[];  // Array of completed module numbers
  tier2: number[];
  tier3: number[];
}

export interface TierProgress {
  tier: number;
  completedModules: number;
  totalModules: number;
  percentage: number;
  isComplete: boolean;
}

export type TierKey = 'tier1' | 'tier2' | 'tier3';
```

**localStorage Utilities (`src/utils/localStorage.ts`):**

```typescript
import { ProgressData } from '@site/src/types/progress';

const PROGRESS_STORAGE_KEY = 'academia-humanoides-progress';

export const loadProgress = (): ProgressData | null => {
  try {
    const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as ProgressData;
    }
  } catch (error) {
    console.error('Failed to load progress from localStorage:', error);
  }
  return null;
};

export const saveProgress = (progress: ProgressData): void => {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress to localStorage:', error);
  }
};

export const clearProgress = (): void => {
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear progress from localStorage:', error);
  }
};
```

---

## API Integration

**Not Applicable for MVP** - Academia de Humanoides is a fully static site with no backend API.

**Future Considerations (Post-MVP):**
- If user authentication is added, integrate with Auth0 or Firebase Auth
- If analytics backend is needed, use serverless functions (Vercel Functions, Cloudflare Workers)
- If community features expand, consider Supabase for backend-as-a-service

**External Integrations (MVP):**
- **Algolia DocSearch**: Search indexing (automated crawler, no API calls from frontend)
- **Plausible Analytics**: Event tracking via script tag (no SDK needed)
- **YouTube Embeds**: iframe embeds for educational videos (no API)

---

## Routing

### Route Configuration

**Docusaurus File-System Based Routing** - No manual route configuration needed.

**Route Structure:**

```plaintext
/                           → Homepage (src/pages/index.tsx)
/tier1                      → Tier 1 overview (auto-generated sidebar)
/tier1/introducao           → Module 1 (docs/tier1/01-introducao.mdx)
/tier1/historia             → Module 2 (docs/tier1/02-historia.mdx)
...
/tier2                      → Tier 2 overview
/tier2/interfaces           → Module 1 (docs/tier2/01-interfaces.mdx)
...
/tier3                      → Tier 3 roadmap
/glossary                   → Glossary page (docs/glossary.mdx)
/resources                  → Resources page (docs/resources.mdx)
/badges                     → Badges collection (src/pages/badges.tsx)
/roadmap                    → Visual roadmap (src/pages/roadmap.tsx)
```

**Sidebar Configuration (`sidebars.ts`):**

```typescript
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Tier 1 sidebar
  tier1: [
    {
      type: 'category',
      label: 'Tier 1: Conhecendo Humanoides',
      items: [
        'tier1/01-introducao',
        'tier1/02-historia',
        'tier1/03-modelos',
        'tier1/04-sensores',
        'tier1/05-atuadores',
        'tier1/06-computacao',
        'tier1/07-energia',
        'tier1/08-software',
        'tier1/09-aplicacoes',
        'tier1/10-futuro',
      ],
    },
  ],

  // Tier 2 sidebar
  tier2: [
    {
      type: 'category',
      label: 'Tier 2: Operando Humanoides',
      items: [
        'tier2/01-interfaces',
        'tier2/02-seguranca',
        'tier2/03-calibracao',
        'tier2/04-manutencao',
        'tier2/05-simuladores',
      ],
    },
  ],

  // Tier 3 sidebar (roadmap only for MVP)
  tier3: [
    {
      type: 'doc',
      id: 'tier3/roadmap',
      label: 'Tier 3: Roadmap de Programação',
    },
  ],
};

export default sidebars;
```

**Navigation Guards:** Not needed (no protected routes in static site, no authentication in MVP).

**Client-Side Navigation:** Handled automatically by Docusaurus router (React Router under the hood).

---

## Styling Guidelines

### Styling Approach

**Hybrid Approach:** Tailwind CSS (utility-first) + CSS Modules (component-scoped) + Infima (Docusaurus base theme)

**When to Use Each:**

1. **Tailwind CSS** (Primary):
   - Layout utilities (flex, grid, spacing)
   - Responsive design (md:, lg:, xl: breakpoints)
   - Quick prototyping
   - One-off styles
   - Example: `className="flex items-center gap-4 px-6 py-3 bg-blue-600 rounded-lg"`

2. **CSS Modules** (Component-specific complex styles):
   - Component-specific animations
   - Complex selectors
   - Pseudo-elements
   - Hover/focus states that need multiple properties
   - Example: Badge glow animation, ProgressBar gradient fill

3. **Infima** (Docusaurus defaults):
   - Base typography
   - Global spacing scale
   - Dark mode variables
   - Navbar/footer defaults (customize via Tailwind in swizzled components)

**Configuration:**

**Tailwind Config (`tailwind.config.js`):**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Respect Docusaurus dark mode
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Primary blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Accent red/orange for CTAs
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        success: {
          500: '#10b981', // Green for completed badges
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
        'confetti': 'confetti 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        confetti: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(1.5) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind reset to avoid conflicts with Infima
  },
};
```

### Global Theme Variables

**Custom CSS Variables (`src/css/custom.css`):**

```css
/**
 * Academia de Humanoides - Custom Theme Variables
 * Extends Docusaurus Infima with project-specific design tokens
 */

:root {
  /* === Color Palette === */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;

  --color-accent: #ef4444;
  --color-accent-dark: #dc2626;

  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;

  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-elevated: #ffffff;

  /* === Spacing Scale (rem based on 16px root) === */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */

  /* === Typography === */
  --font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-mono: 'Fira Code', 'Courier New', monospace;

  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */
  --font-size-4xl: 2.25rem;    /* 36px */

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* === Shadows === */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* === Border Radius === */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-full: 9999px;  /* Circular */

  /* === Z-Index Scale === */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;

  /* === Transitions === */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}

/* === Dark Mode Overrides === */
[data-theme='dark'] {
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-text-muted: #9ca3af;

  --color-bg-primary: #111827;
  --color-bg-secondary: #1f2937;
  --color-bg-elevated: #374151;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
}

/* === Utility Classes === */
.container-narrow {
  max-width: 65ch; /* Comfortable reading width */
  margin-left: auto;
  margin-right: auto;
}

.text-balance {
  text-wrap: balance; /* Better heading line breaks */
}

/* === Accessibility === */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Skip to main content link (WCAG AA requirement) */
.skip-to-main {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-md);
  text-decoration: none;
  z-index: var(--z-tooltip);
}

.skip-to-main:focus {
  top: 0;
}

/* === Focus Styles (WCAG AA requirement) === */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* === Reduced Motion (WCAG AA requirement) === */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Testing Requirements

### Component Test Template

**Example: Badge Component Test (`src/components/Badge/__tests__/Badge.test.tsx`):**

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '../Badge';

describe('Badge Component', () => {
  it('renders badge with tier label', () => {
    render(<Badge tier={1} unlocked={true} />);

    const badge = screen.getByRole('img', { name: /tier 1 complete/i });
    expect(badge).toBeInTheDocument();
  });

  it('displays locked state for unearned badges', () => {
    render(<Badge tier={2} unlocked={false} />);

    const badge = screen.getByRole('img', { name: /tier 2 locked/i });
    expect(badge).toHaveClass('badge-locked');
  });

  it('shows unlock date for earned badges', () => {
    const unlockDate = new Date('2025-11-22');
    render(<Badge tier={1} unlocked={true} unlockedAt={unlockDate} />);

    expect(screen.getByText(/desbloqueado em 22\/11\/2025/i)).toBeInTheDocument();
  });

  it('is keyboard accessible', () => {
    const { container } = render(<Badge tier={1} unlocked={true} />);

    const badge = container.querySelector('[tabindex="0"]');
    expect(badge).toBeInTheDocument();
  });

  it('has proper ARIA attributes', () => {
    render(<Badge tier={3} unlocked={false} />);

    const badge = screen.getByRole('img');
    expect(badge).toHaveAttribute('aria-label');
  });
});
```

**Test Utilities (`src/utils/__tests__/progress.test.ts`):**

```typescript
import { calculateTierProgress, hasBadge } from '../progress';
import { ProgressData } from '@site/src/types/progress';

describe('Progress Utilities', () => {
  const mockProgress: ProgressData = {
    tier1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    tier2: [1, 2],
    tier3: [],
  };

  it('calculates tier 1 progress correctly', () => {
    const progress = calculateTierProgress(1, mockProgress);

    expect(progress.completedModules).toBe(10);
    expect(progress.totalModules).toBe(10);
    expect(progress.percentage).toBe(100);
    expect(progress.isComplete).toBe(true);
  });

  it('calculates partial tier 2 progress', () => {
    const progress = calculateTierProgress(2, mockProgress);

    expect(progress.completedModules).toBe(2);
    expect(progress.totalModules).toBe(5);
    expect(progress.percentage).toBe(40);
    expect(progress.isComplete).toBe(false);
  });

  it('detects badge eligibility', () => {
    expect(hasBadge(1, mockProgress)).toBe(true);  // T1 complete
    expect(hasBadge(2, mockProgress)).toBe(false); // T2 incomplete
    expect(hasBadge(3, mockProgress)).toBe(false); // T3 no content
  });
});
```

### Testing Best Practices

1. **Unit Tests:** Test individual components in isolation
   - All custom components in `src/components/` should have tests
   - Test rendering, props, user interactions (click, keyboard)
   - Mock external dependencies (context, localStorage)

2. **Integration Tests:** Test component interactions
   - Test ProgressContext integration with MarkCompleteButton
   - Test navigation flows (clicking module card → navigates to module)

3. **E2E Tests:** Test critical user flows (using Playwright)
   - Homepage → Select Tier → Complete Module → Earn Badge
   - Search functionality → Navigate to result
   - Progress persistence (complete module, refresh, verify still complete)

4. **Coverage Goals:** Aim for 80% code coverage
   - Run `pnpm test:coverage` to generate coverage report
   - Focus on business logic (hooks, utils, context)
   - UI components can have lower coverage (visual regression more important)

5. **Test Structure:** Arrange-Act-Assert pattern
   ```typescript
   it('marks module as complete', () => {
     // Arrange: Setup initial state
     const { getByRole } = render(<MarkCompleteButton tier={1} module={1} />);

     // Act: Perform action
     fireEvent.click(getByRole('button', { name: /marcar como completo/i }));

     // Assert: Verify outcome
     expect(getByRole('button')).toHaveTextContent('Completo ✓');
   });
   ```

6. **Mock External Dependencies:** API calls, routing, state management
   - Mock `useProgress` hook in component tests
   - Mock localStorage in utils tests
   - Mock Docusaurus router for navigation tests

**Accessibility Testing:**
- Run axe-core in component tests: `await axe(container)`
- Manual keyboard navigation testing (Tab, Enter, Escape)
- Manual screen reader testing (NVDA, JAWS, VoiceOver)

**Performance Testing:**
- Lighthouse CI in GitHub Actions (enforces NFR1-NFR6)
- Bundle size checks: `pnpm build && pnpm analyze`

---

## Environment Configuration

**Environment Variables (`.env`):**

```bash
# Algolia DocSearch (free for open source)
# Apply at https://docsearch.algolia.com/apply/
ALGOLIA_APP_ID=your_app_id_here
ALGOLIA_API_KEY=your_search_only_api_key_here
ALGOLIA_INDEX_NAME=academia_humanoides

# Plausible Analytics
# Domain configured in Plausible dashboard
PLAUSIBLE_DOMAIN=academiahumanoides.github.io

# GitHub Pages Configuration
# Custom domain (optional, for future)
CNAME=humanoides.academy
```

**Docusaurus Config Environment Variables (`docusaurus.config.ts`):**

```typescript
import type { Config } from '@docusaurus/types';

const config: Config = {
  // ... other config

  customFields: {
    // Access via useDocusaurusContext().siteConfig.customFields
    plausibleDomain: process.env.PLAUSIBLE_DOMAIN || 'academiahumanoides.github.io',
  },

  themeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: true,
      searchParameters: {},
    },
  },
};
```

**GitHub Actions Secrets:**
- `ALGOLIA_APP_ID`
- `ALGOLIA_API_KEY`
- `ALGOLIA_INDEX_NAME`
- `PLAUSIBLE_DOMAIN` (or hardcode in config)

**Note:** No sensitive data in environment variables (all public site, no backend secrets).

---

## Frontend Developer Standards

### Critical Coding Rules

**Universal Rules (All Projects):**

1. **Never Commit Sensitive Data**
   - No API keys, passwords, or secrets in code
   - Use environment variables for config
   - Check `.env` is in `.gitignore`

2. **TypeScript Strictness**
   - Always define types for props, state, and function returns
   - No `any` type (use `unknown` and type guards if truly dynamic)
   - Enable `strict` mode in `tsconfig.json`

3. **Accessibility First**
   - Every interactive element must be keyboard accessible
   - Use semantic HTML (`<button>` not `<div onClick>`)
   - Provide ARIA labels for icon-only buttons
   - Maintain 4.5:1 color contrast (check with browser DevTools)

4. **Performance**
   - Lazy load images: `loading="lazy"`
   - Code split routes: Dynamic imports for pages
   - Memoize expensive computations: `useMemo`, `useCallback`
   - Avoid re-renders: Check deps arrays in hooks

5. **Error Handling**
   - Always handle errors in async functions (`try/catch`)
   - Provide user-friendly error messages
   - Log errors to console for debugging

**Docusaurus-Specific Rules:**

6. **MDX Best Practices**
   - Frontmatter is required for all docs: `title`, `description`, `tier`, `module_number`
   - Import React components at top of MDX: `import Badge from '@site/src/components/Badge';`
   - Use MDX components sparingly (keep content readable as Markdown)

7. **File Organization**
   - Docs go in `docs/` (MDX files)
   - Custom pages go in `src/pages/` (React TSX files)
   - Components go in `src/components/{ComponentName}/`
   - Never mix docs and pages directories

8. **Swizzling Components**
   - Only swizzle when necessary (customizing Docusaurus theme)
   - Use `pnpm swizzle @docusaurus/theme-classic ComponentName --wrap`
   - Prefer wrapping over ejecting (maintains upgradability)
   - Document why swizzled in component file comment

9. **State Management**
   - Use `useProgress` hook for progress state (don't access context directly)
   - Don't create multiple context providers for same concern
   - localStorage writes should be batched (save on unmount, not every keystroke)

10. **Styling**
    - Prefer Tailwind utilities over custom CSS when possible
    - Use CSS Modules for component-specific complex styles
    - Never use inline styles (except dynamic values: `style={{ width: `${progress}%` }}`)
    - Follow dark mode: Use CSS variables, test in both themes

11. **Imports**
    - Use `@site/` alias for absolute imports: `import { Badge } from '@site/src/components/Badge';`
    - Group imports: React → 3rd party → Local
    - No default exports for components (use named exports + default at end)

12. **Testing**
    - Test files colocated: `src/components/Badge/__tests__/Badge.test.tsx`
    - Mock Docusaurus modules: `jest.mock('@docusaurus/router');`
    - Run tests before committing: `pnpm test` (enforced by Husky)

### Quick Reference

**Common Commands:**
```bash
# Development
pnpm start              # Start dev server (http://localhost:3000)
pnpm build              # Build for production (outputs to build/)
pnpm serve              # Serve production build locally
pnpm clear              # Clear Docusaurus cache (.docusaurus/)

# Testing
pnpm test               # Run Jest tests
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Generate coverage report

# Linting & Formatting
pnpm lint               # Run ESLint
pnpm lint:fix           # Fix auto-fixable lint issues
pnpm format             # Format code with Prettier
pnpm format:check       # Check if code is formatted

# Deployment
pnpm deploy             # Build and deploy to GitHub Pages

# Swizzling (customizing Docusaurus theme)
pnpm swizzle @docusaurus/theme-classic ComponentName --list  # List swizzleable components
pnpm swizzle @docusaurus/theme-classic ComponentName --wrap  # Wrap component (preferred)
pnpm swizzle @docusaurus/theme-classic ComponentName --eject # Eject component (avoid)
```

**Key Import Patterns:**
```typescript
// React hooks
import { useState, useEffect, useMemo } from 'react';

// Docusaurus utilities
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory, useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

// Custom hooks
import { useProgress } from '@site/src/context/ProgressContext';

// Components (named import + default)
import { Badge } from '@site/src/components/Badge';
import Badge from '@site/src/components/Badge'; // Also works

// Utils
import { calculateProgress } from '@site/src/utils/progress';

// Types
import type { ProgressData } from '@site/src/types/progress';
```

**File Naming Conventions:**
- Components: `Badge.tsx`, `ProgressBar.tsx` (PascalCase)
- Hooks: `useProgress.ts`, `useLocalStorage.ts` (camelCase with `use` prefix)
- Utils: `progress.ts`, `analytics.ts` (camelCase)
- Pages: `index.tsx`, `badges.tsx`, `roadmap.tsx` (kebab-case)
- MDX Docs: `01-introducao.mdx`, `02-historia.mdx` (kebab-case with numeric prefix)

**Project-Specific Patterns:**

**Progress Tracking:**
```typescript
// In any component, access progress state
const { markModuleComplete, isModuleComplete, getTierProgress } = useProgress();

// Mark module complete
markModuleComplete(1, 3); // Tier 1, Module 3

// Check if complete
const completed = isModuleComplete(1, 3);

// Get tier progress
const tier1Progress = getTierProgress(1);
console.log(tier1Progress.percentage); // 30
```

**Analytics Events:**
```typescript
import { trackEvent } from '@site/src/utils/analytics';

// Track custom event
trackEvent('module_complete', { tier: 1, module: 3 });
trackEvent('badge_earned', { tier: 1 });
trackEvent('search_query', { query: 'ROS2' });
```

**Responsive Breakpoints (Tailwind):**
```tsx
<div className="
  px-4          /* Mobile: 16px padding */
  md:px-8       /* Tablet (768px+): 32px padding */
  lg:px-12      /* Desktop (1024px+): 48px padding */
  xl:px-16      /* Large Desktop (1280px+): 64px padding */
">
  Content
</div>
```

---

**END OF FRONTEND ARCHITECTURE DOCUMENT**

_Document Version: 1.0_
_Author: Architect Winston_
_Status: Ready for Implementation_
_Next: Begin Epic 1 Story 1.1 (Initialize Docusaurus Project)_
