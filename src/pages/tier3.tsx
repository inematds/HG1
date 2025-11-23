import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function TierHero() {
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{ backgroundColor: '#8b5cf6' }}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className="badge badge--warning">Tier 3</span>
          <Heading as="h1" className="hero__title">
            💻 Programando Humanoides
          </Heading>
          <p className="hero__subtitle">
            Do básico ao avançado: Python, ROS2, visão computacional, navegação autônoma e Machine Learning.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#roadmap"
            >
              Ver Roadmap →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Prerequisites() {
  return (
    <section className="padding-vert--lg" style={{ backgroundColor: '#fef3c7' }}>
      <div className="container">
        <div className="card">
          <div className="card__header">
            <Heading as="h3">⚠️ Pré-requisitos</Heading>
          </div>
          <div className="card__body">
            <p>
              O <strong>Tier 3</strong> é o nível mais avançado. Recomendamos completar primeiro:
            </p>
            <ul>
              <li>
                <Link to="/tier1">Tier 1: Conhecendo Humanoides</Link> - Fundamentos de robótica
              </li>
              <li>
                <Link to="/tier2">Tier 2: Operando Humanoides</Link> - Controle e manutenção
              </li>
              <li>Conhecimento básico de programação (Python recomendado)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const roadmap = [
    {
      level: 'Básico',
      icon: '🌱',
      color: '#10b981',
      modules: [
        'Introdução ao Python para Robótica',
        'Fundamentos de ROS2',
        'Primeiros Scripts de Controle',
        'Configuração do Ambiente de Desenvolvimento',
      ],
    },
    {
      level: 'Intermediário',
      icon: '🚀',
      color: '#3b82f6',
      modules: [
        'Controle de Movimento',
        'Integração de Sensores',
        'Visão Computacional Básica',
        'Navegação em Ambientes Simples',
      ],
    },
    {
      level: 'Avançado',
      icon: '🔥',
      color: '#ef4444',
      modules: [
        'Machine Learning para Humanoides',
        'Navegação Autônoma Avançada',
        'Manipulação de Objetos',
        'Vision-Language-Action (VLA) Models',
        'Sistemas Multi-Agentes',
      ],
    },
  ];

  return (
    <section className={styles.roadmap} id="roadmap">
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          🗺️ Roadmap de Programação
        </Heading>
        <p className="text--center margin-bottom--xl">
          Jornada completa do iniciante ao especialista em programação de humanoides
        </p>

        {roadmap.map((section, idx) => (
          <div key={idx} className="margin-bottom--xl">
            <div
              className="card"
              style={{ borderLeft: `4px solid ${section.color}` }}
            >
              <div className="card__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>{section.icon}</div>
                  <Heading as="h3">{section.level}</Heading>
                </div>
              </div>
              <div className="card__body">
                <ul>
                  {section.modules.map((module, midx) => (
                    <li key={midx} style={{ marginBottom: '0.5rem' }}>
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechnologiesSection() {
  const technologies = [
    {
      category: 'Linguagens',
      items: ['Python 3.x', 'C++ (opcional)', 'YAML (configurações)'],
    },
    {
      category: 'Frameworks',
      items: ['ROS2 (Robot Operating System)', 'OpenCV', 'PyTorch/TensorFlow'],
    },
    {
      category: 'Ferramentas',
      items: ['Gazebo Simulator', 'Webots', 'Isaac Sim', 'Unitree SDK'],
    },
    {
      category: 'Conceitos',
      items: ['SLAM', 'Path Planning', 'Computer Vision', 'Reinforcement Learning'],
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          🛠️ Tecnologias que Você Vai Dominar
        </Heading>
        <div className="row">
          {technologies.map((tech, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h4">{tech.category}</Heading>
                </div>
                <div className="card__body">
                  <ul style={{ marginBottom: 0 }}>
                    {tech.items.map((item, iidx) => (
                      <li key={iidx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierStats() {
  const stats = [
    { value: '15+', label: 'Módulos Planejados', icon: '📚' },
    { value: '~10h', label: 'Duração Estimada', icon: '⏱️' },
    { value: 'Avançado', label: 'Nível', icon: '🎯' },
    { value: 'Roadmap', label: 'Status', icon: '🗺️' },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col col--3 text--center">
              <div className={styles.statIcon}>{stat.icon}</div>
              <Heading as="h2" className={styles.statValue}>
                {stat.value}
              </Heading>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="padding-vert--xl" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container text--center">
        <Heading as="h2">🚀 Pronto para começar sua jornada?</Heading>
        <p className="margin-bottom--lg">
          Complete o Tier 1 e Tier 2 primeiro para aproveitar ao máximo o conteúdo de programação.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link
            className="button button--primary button--lg"
            to="/tier1"
          >
            Começar pelo Tier 1
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Tier3Page(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Tier 3: Programando Humanoides"
      description="Do básico ao avançado: Python, ROS2, visão computacional, navegação autônoma e Machine Learning"
    >
      <TierHero />
      <main>
        <Prerequisites />
        <TierStats />
        <RoadmapSection />
        <TechnologiesSection />
        <CallToAction />
      </main>
    </Layout>
  );
}
