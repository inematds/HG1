import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function TierHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className="badge badge--primary">Tier 1</span>
          <Heading as="h1" className="hero__title">
            🤖 Conhecendo Humanoides
          </Heading>
          <p className="hero__subtitle">
            Fundamentos sobre robôs humanoides: o que são, como funcionam, história e evolução da tecnologia.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tier1/introducao"
            >
              Começar Tier 1 →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function LearningObjectives() {
  const objectives = [
    {
      icon: '📚',
      title: 'Conceitos Fundamentais',
      description: 'Entenda o que são robôs humanoides e por que eles são importantes',
    },
    {
      icon: '⏳',
      title: 'História e Evolução',
      description: 'Descubra como a tecnologia evoluiu desde os primeiros protótipos',
    },
    {
      icon: '🤖',
      title: 'Principais Modelos',
      description: 'Conheça os robôs mais avançados: Unitree G1, Tesla Optimus, Figure 01, Atlas',
    },
    {
      icon: '⚙️',
      title: 'Como Funcionam',
      description: 'Explore hardware (sensores, atuadores) e software (IA, controle)',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          🎯 O Que Você Vai Aprender
        </Heading>
        <div className="row">
          {objectives.map((obj, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <div className={styles.objectiveIcon}>{obj.icon}</div>
                  <Heading as="h3">{obj.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{obj.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesList() {
  const modules = [
    {
      number: 1,
      title: 'Introdução aos Humanoides',
      description: 'O que são robôs humanoides e por que eles importam',
      time: '10 min',
      link: '/docs/tier1/introducao',
      available: true,
    },
    {
      number: 2,
      title: 'História e Evolução',
      description: 'Linha do tempo da robótica humanoide',
      time: '12 min',
      link: '#',
      available: false,
    },
    {
      number: 3,
      title: 'Principais Modelos',
      description: 'Unitree G1, Tesla Optimus, Figure 01, Atlas',
      time: '15 min',
      link: '#',
      available: false,
    },
    {
      number: 4,
      title: 'Sensores',
      description: 'Câmeras, LiDAR, IMU e sensores de força',
      time: '10 min',
      link: '#',
      available: false,
    },
    {
      number: 5,
      title: 'Atuadores e Controle',
      description: 'Motores, juntas e sistemas de controle',
      time: '10 min',
      link: '#',
      available: false,
    },
    {
      number: 6,
      title: 'Computação Embarcada',
      description: 'CPUs, GPUs e edge computing',
      time: '10 min',
      link: '#',
      available: false,
    },
    {
      number: 7,
      title: 'Energia e Bateria',
      description: 'Sistemas de energia e autonomia',
      time: '8 min',
      link: '#',
      available: false,
    },
    {
      number: 8,
      title: 'Software e IA',
      description: 'ROS2, percepção, planejamento e controle',
      time: '12 min',
      link: '#',
      available: false,
    },
    {
      number: 9,
      title: 'Aplicações Práticas',
      description: 'Manufatura, saúde, serviços e pesquisa',
      time: '10 min',
      link: '#',
      available: false,
    },
    {
      number: 10,
      title: 'O Futuro dos Humanoides',
      description: 'Tendências, previsões e considerações éticas',
      time: '12 min',
      link: '#',
      available: false,
    },
  ];

  return (
    <section className={styles.modules}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          📖 Módulos do Tier 1
        </Heading>
        <p className="text--center margin-bottom--xl">
          10 módulos completos · ~2 horas de conteúdo · Nível Iniciante
        </p>
        <div className="row">
          {modules.map((module, idx) => (
            <div key={idx} className="col col--6 margin-bottom--md">
              <div className={clsx('card', styles.moduleCard)}>
                <div className="card__header">
                  <div className={styles.moduleNumber}>
                    {module.available ? '✓' : module.number}
                  </div>
                  <div>
                    <Heading as="h4">{module.title}</Heading>
                    <p className="text--muted">{module.description}</p>
                  </div>
                </div>
                <div className="card__footer">
                  <div className={styles.moduleMeta}>
                    <span className="badge badge--secondary">⏱️ {module.time}</span>
                    {module.available ? (
                      <Link to={module.link} className="button button--primary button--sm">
                        Estudar
                      </Link>
                    ) : (
                      <button className="button button--secondary button--sm" disabled>
                        Em Breve
                      </button>
                    )}
                  </div>
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
    { value: '10', label: 'Módulos', icon: '📚' },
    { value: '~2h', label: 'Duração Total', icon: '⏱️' },
    { value: 'Iniciante', label: 'Nível', icon: '🎯' },
    { value: '100%', label: 'Gratuito', icon: '✨' },
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

export default function Tier1Page(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Tier 1: Conhecendo Humanoides"
      description="Fundamentos sobre robôs humanoides: o que são, como funcionam, história e evolução da tecnologia"
    >
      <TierHero />
      <main>
        <TierStats />
        <LearningObjectives />
        <ModulesList />
      </main>
    </Layout>
  );
}
