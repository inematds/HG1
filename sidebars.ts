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

  // Tier 2 and Tier 3 sidebars will be added as content is created
};

export default sidebars;
