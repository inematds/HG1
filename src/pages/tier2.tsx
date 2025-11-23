import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function TierHero() {
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{ backgroundColor: '#10b981' }}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className="badge badge--success">Tier 2</span>
          <Heading as="h1" className="hero__title">
            🎮 Operando Humanoides
          </Heading>
          <p className="hero__subtitle">
            Aprenda a operar e controlar robôs humanoides com segurança, manutenção e simuladores.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#"
            >
              Em Breve →
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
              Para aproveitar ao máximo o <strong>Tier 2</strong>, recomendamos completar primeiro o{' '}
              <Link to="/tier1">Tier 1: Conhecendo Humanoides</Link>.
            </p>
            <p className="margin-bottom--none">
              Você deve entender conceitos básicos como sensores, atuadores, e software de controle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningObjectives() {
  const objectives = [
    {
      icon: '🎛️',
      title: 'Interfaces de Controle',
      description: 'Controle via apps, web, voz e gestos',
    },
    {
      icon: '🛡️',
      title: 'Segurança',
      description: 'Protocolos de segurança e melhores práticas',
    },
    {
      icon: '⚙️',
      title: 'Calibração',
      description: 'Procedimentos de inicialização e calibração',
    },
    {
      icon: '🔧',
      title: 'Manutenção',
      description: 'Cuidados básicos, diagnósticos e atualizações',
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
      title: 'Interfaces de Controle',
      description: 'Apps, web, voz e controle gestual',
      time: '12 min',
      link: '#',
      available: false,
    },
    {
      number: 2,
      title: 'Segurança e Melhores Práticas',
      description: 'Protocolos de segurança e prevenção de acidentes',
      time: '10 min',
      link: '#',
      available: false,
    },
    {
      number: 3,
      title: 'Calibração e Inicialização',
      description: 'Procedimentos de startup e verificações',
      time: '10 min',
      link: '#',
      available: false,
    },
    {
      number: 4,
      title: 'Manutenção Básica',
      description: 'Limpeza, cuidados com bateria, atualizações',
      time: '12 min',
      link: '#',
      available: false,
    },
    {
      number: 5,
      title: 'Simuladores e Ambientes Virtuais',
      description: 'Gazebo, Webots, Isaac Sim',
      time: '15 min',
      link: '#',
      available: false,
    },
  ];

  return (
    <section className={styles.modules}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          📖 Módulos do Tier 2
        </Heading>
        <p className="text--center margin-bottom--xl">
          5 módulos completos · ~1 hora de conteúdo · Nível Intermediário
        </p>
        <div className="row">
          {modules.map((module, idx) => (
            <div key={idx} className="col col--6 margin-bottom--md">
              <div className={clsx('card', styles.moduleCard)}>
                <div className="card__header">
                  <div className={styles.moduleNumber}>{module.number}</div>
                  <div>
                    <Heading as="h4">{module.title}</Heading>
                    <p className="text--muted">{module.description}</p>
                  </div>
                </div>
                <div className="card__footer">
                  <div className={styles.moduleMeta}>
                    <span className="badge badge--secondary">⏱️ {module.time}</span>
                    <button className="button button--secondary button--sm" disabled>
                      Em Breve
                    </button>
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
    { value: '5', label: 'Módulos', icon: '📚' },
    { value: '~1h', label: 'Duração Total', icon: '⏱️' },
    { value: 'Intermediário', label: 'Nível', icon: '🎯' },
    { value: 'Em Breve', label: 'Status', icon: '🚧' },
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

export default function Tier2Page(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Tier 2: Operando Humanoides"
      description="Aprenda a operar e controlar robôs humanoides com segurança, manutenção e simuladores"
    >
      <TierHero />
      <main>
        <Prerequisites />
        <TierStats />
        <LearningObjectives />
        <ModulesList />
      </main>
    </Layout>
  );
}
