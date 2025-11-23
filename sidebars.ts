import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Tier 1: Conhecendo Humanoides (Foundation)
  tier1: [
    {
      type: 'category',
      label: 'Tier 1: Conhecendo Humanoides',
      items: [
        'tier1/introducao',
        'tier1/historia',
        'tier1/modelos',
        'tier1/sensores',
        'tier1/atuadores',
        'tier1/computacao',
        'tier1/energia',
        'tier1/software',
        'tier1/aplicacoes',
        'tier1/futuro',
      ],
    },
  ],

  // Tier 2: Operando Humanoides (Operator)
  tier2: [
    {
      type: 'category',
      label: 'Tier 2: Operando Humanoides',
      items: [
        'tier2/interfaces',
        'tier2/seguranca',
        'tier2/calibracao',
        'tier2/manutencao',
        'tier2/simuladores',
      ],
    },
  ],

  // Tier 3: Programando Humanoides (Developer) - Roadmap only for MVP
  tier3: [
    {
      type: 'doc',
      id: 'tier3/roadmap',
      label: 'Tier 3: Roadmap de Programação',
    },
  ],
};

export default sidebars;
