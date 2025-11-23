import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Academia de Humanoides',
  tagline: 'Democratizando o conhecimento sobre robôs humanoides',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://inematds.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/HG1/',

  // GitHub pages deployment config.
  organizationName: 'inematds', // Your GitHub org/user name.
  projectName: 'HG1', // Your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/inematds/HG1/tree/main/',
        },
        blog: false, // Disable blog for MVP
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Academia de Humanoides',
      logo: {
        alt: 'Academia de Humanoides Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tier1',
          position: 'left',
          label: 'Tier 1: Fundamentos',
        },
        {
          href: 'https://github.com/inematds/HG1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Aprendizado',
          items: [
            {
              label: 'Tier 1: Fundamentos',
              to: '/docs/tier1/introducao',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/humanoides',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/inematds/HG1',
            },
            {
              label: 'Contribuir',
              href: 'https://github.com/inematds/HG1/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Academia de Humanoides. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'cpp', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
