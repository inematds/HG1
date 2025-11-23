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
  // Tier 1.0: Conhecendo Humanoides (Foundation)
  tier1: [
    {
      type: 'category',
      label: 'Tier 1.0: Conhecendo Humanoides',
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

  // Tier 1.1: Conhecendo Unitree G1
  tier1_1: [
    {
      type: 'category',
      label: 'Tier 1.1: Conhecendo Unitree G1',
      items: [
        'tier1.1/introducao-g1',
        'tier1.1/hardware-anatomia',
        'tier1.1/energia-bateria',
        'tier1.1/sistema-computacional',
        'tier1.1/comunicacao-conectividade',
        'tier1.1/modos-operacao',
        'tier1.1/specs-comparacao',
        'tier1.1/aquisicao-setup',
        'tier1.1/casos-uso-aplicacoes',
        'tier1.1/futuro-roadmap',
      ],
    },
  ],

  // Tier 2.0: Operando Humanoides (Operation)
  tier2: [
    {
      type: 'category',
      label: 'Tier 2.0: Operando Humanoides',
      items: [
        'tier2/introducao-operacao',
        'tier2/seguranca',
        'tier2/interface-controle',
        'tier2/telemetria',
        'tier2/calibracao',
        'tier2/manutencao',
        'tier2/simuladores',
        'tier2/gazebo',
        'tier2/isaac-sim',
        'tier2/operacao-pratica',
      ],
    },
  ],

  // Tier 2.1: Operando Unitree G1
  tier2_1: [
    {
      type: 'category',
      label: 'Tier 2.1: Operando Unitree G1',
      items: [
        'tier2.1/startup-primeiros-passos',
        'tier2.1/controle-remoto',
        'tier2.1/app-movel',
        'tier2.1/caminhada-navegacao',
        'tier2.1/manipulacao-bracos',
        'tier2.1/sensores-percepcao',
        'tier2.1/seguranca-praticas',
        'tier2.1/manutencao-basica',
        'tier2.1/troubleshooting',
        'tier2.1/exercicios-praticos',
      ],
    },
  ],

  // Tier 3: Programando Humanoides (Programming)
  tier3: [
    {
      type: 'category',
      label: 'Tier 3: Programando Humanoides',
      items: [
        'tier3/introducao-programacao',
        'tier3/python-robotica',
        'tier3/ros2-fundamentos',
        'tier3/ros2-avancado',
        'tier3/visao-computacional',
        'tier3/navegacao-autonoma',
        'tier3/manipulacao',
        'tier3/ia-aprendizado',
        'tier3/integracao-sistemas',
        'tier3/projeto-final',
      ],
    },
  ],
};

export default sidebars;
