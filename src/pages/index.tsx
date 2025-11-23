import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tier1/introducao"
          >
            Começar Aprendizado →
          </Link>
        </div>
      </div>
    </header>
  );
}

function TierOverview() {
  const tiers = [
    {
      title: 'Tier 1: Conhecendo Humanoides',
      description:
        'Fundamentos sobre robôs humanoides: o que são, como funcionam, história e evolução da tecnologia.',
      link: '/docs/tier1/introducao',
      modules: 10,
      icon: '🤖',
    },
    {
      title: 'Tier 2: Operando Humanoides',
      description:
        'Aprenda a operar e controlar robôs humanoides com segurança, manutenção e simuladores.',
      link: '/docs/tier2/interfaces',
      modules: 5,
      icon: '🎮',
    },
    {
      title: 'Tier 3: Programando Humanoides',
      description:
        'Do básico ao avançado: Python, ROS2, visão computacional, navegação autônoma e Machine Learning.',
      link: '/docs/tier3/roadmap',
      modules: 'Roadmap',
      icon: '💻',
    },
  ];

  return (
    <section className={styles.tiers}>
      <div className="container">
        <div className="row">
          {tiers.map((tier, idx) => (
            <div key={idx} className="col col--4">
              <div className={clsx('card', styles.tierCard)}>
                <div className="card__header">
                  <div className={styles.tierIcon}>{tier.icon}</div>
                  <Heading as="h3">{tier.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{tier.description}</p>
                </div>
                <div className="card__footer">
                  <div className={styles.tierMeta}>
                    <span>
                      {typeof tier.modules === 'number'
                        ? `${tier.modules} módulos`
                        : tier.modules}
                    </span>
                    <Link to={tier.link} className="button button--primary button--sm">
                      Explorar
                    </Link>
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

function Stats() {
  const stats = [
    { value: '15+', label: 'Módulos' },
    { value: '100%', label: 'Gratuito' },
    { value: 'Open Source', label: 'Código Aberto' },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col col--4 text--center">
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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Início`}
      description="Democratizando o conhecimento sobre robôs humanoides"
    >
      <HomepageHeader />
      <main>
        <TierOverview />
        <Stats />
      </main>
    </Layout>
  );
}
