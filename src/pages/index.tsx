import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: 'Qual é seu objetivo principal com robótica humanoide?',
      options: [
        { text: 'Entender conceitos gerais de humanoides', tier: 1.0 },
        { text: 'Conhecer especificamente o Unitree G1', tier: 1.1 },
        { text: 'Operar robôs humanoides', tier: 2.0 },
        { text: 'Operar o Unitree G1', tier: 2.1 },
        { text: 'Programar humanoides em geral', tier: 3.0 },
        { text: 'Programar o Unitree G1', tier: 3.1 },
        { text: 'Desenvolver com plataforma MindOn', tier: 4.0 },
      ],
    },
  ];

  const handleAnswer = (tierScore: number) => {
    const newAnswers = [...answers, tierScore];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendedTier = () => {
    return answers[0] || 1.0;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const tierInfo = {
    1.0: {
      title: 'Tier 1.0: Conhecendo Humanoides',
      color: '#3B82F6',
      link: '/docs/tier1/introducao',
      slogan: '"Descubra o futuro da robótica"',
      benefits: [
        'História e evolução dos humanoides',
        'Principais modelos (Unitree, Tesla, Figure)',
        'Sensores, atuadores e computação',
        'Aplicações práticas no mundo real'
      ],
    },
    1.1: {
      title: 'Tier 1.1: Conhecendo Unitree G1',
      color: '#2563EB',
      link: '/docs/tier1.1/introducao-g1',
      slogan: '"Mergulhe no G1"',
      benefits: [
        'Hardware detalhado do G1',
        'Especificações técnicas completas',
        'Anatomia e componentes',
        'G1 vs competidores'
      ],
    },
    2.0: {
      title: 'Tier 2.0: Operando Humanoides',
      color: '#9b59b6',
      link: '/docs/tier2/introducao-operacao',
      slogan: '"Do controle à maestria"',
      benefits: [
        'Interfaces de controle',
        'Segurança e melhores práticas',
        'Calibração e manutenção',
        'Simuladores (Gazebo, Isaac Sim)'
      ],
    },
    2.1: {
      title: 'Tier 2.1: Operando Unitree G1',
      color: '#8B5CF6',
      link: '#',
      slogan: '"Domine o G1 na prática"',
      benefits: [
        'Startup e primeiros passos',
        'Controle remoto e app móvel',
        'Caminhada e manipulação',
        'Troubleshooting específico'
      ],
    },
    4.0: {
      title: 'Tier 4: Plataforma MindOn',
      color: '#F59E0B',
      link: '#',
      slogan: '"IA autônoma de verdade"',
      benefits: [
        'Autonomia completa sem controle',
        'LLM e compreensão de linguagem',
        'Aprendizado contínuo',
        'Integração casa inteligente'
      ],
    },
    3.0: {
      title: 'Tier 3.0: Programando Humanoides',
      color: '#10B981',
      link: '/docs/tier3/introducao-programacao',
      slogan: '"Code o futuro"',
      benefits: [
        'Python e ROS2 avançado',
        'Visão computacional e IA',
        'Navegação autônoma (Nav2)',
        'Manipulação (MoveIt)'
      ],
    },
    3.1: {
      title: 'Tier 3.1: Programando Unitree G1',
      color: '#059669',
      link: '#',
      slogan: '"Desenvolva para o G1"',
      benefits: [
        'SDK e API do G1',
        'Controle de baixo nível',
        'Integração ROS2',
        'Projetos customizados'
      ],
    },
  };

  const getTierKey = (tier: number): string => {
    if (tier === 1.0) return '1.0';
    if (tier === 1.1) return '1.1';
    if (tier === 2.0) return '2.0';
    if (tier === 2.1) return '2.1';
    if (tier === 3.0) return '3.0';
    if (tier === 3.1) return '3.1';
    return '4.0';
  };

  return (
    <Layout
      title="Academia de Humanoides"
      description="Democratizando o conhecimento sobre robôs humanoides"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🤖 Academia de Humanoides
          </h1>
          <p className="text-2xl mb-2 text-white/90">
            Domine Robôs Humanoides do Zero ao Avançado
          </p>
          <p className="text-xl mb-8 text-white/80">
            7 Tiers Progressivos • 70+ Módulos • 100% Gratuito
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#quiz"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Descobrir Meu Tier
            </a>
            <a
              href="#tiers"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Ver Todos os Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-neutral-600 dark:text-neutral-400">Tiers Completos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">70+</div>
              <div className="text-neutral-600 dark:text-neutral-400">Módulos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-neutral-600 dark:text-neutral-400">Gratuito</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">Open</div>
              <div className="text-neutral-600 dark:text-neutral-400">Código Aberto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Qual tier é ideal para você?
          </h2>

          {!showResult ? (
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                {quizQuestions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.tier)}
                    className="w-full text-left px-6 py-4 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4">
                Recomendamos: {tierInfo[getTierKey(getRecommendedTier())].title}
              </h3>
              <p className="text-xl mb-6 text-white/90">
                {tierInfo[getTierKey(getRecommendedTier())].slogan}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  to={tierInfo[getTierKey(getRecommendedTier())].link}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Começar Agora →
                </Link>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Refazer Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tiers Section */}
      <section id="tiers" className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            7 Tiers Progressivos
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            Do conhecimento teórico até IA autônoma com MindOn
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.entries(tierInfo).map(([tier, info]) => (
              <div
                key={tier}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-current transition-all"
                style={{ color: info.color }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-3"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    {tier.startsWith('1') ? '🤖' : tier.startsWith('2') ? '🎮' : tier.startsWith('3') ? '💻' : '🧠'}
                  </div>
                  <div className="text-sm font-bold text-neutral-500 dark:text-neutral-400">
                    Tier {tier}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  {info.title.replace(`Tier ${tier}: `, '')}
                </h3>

                <p className="text-sm italic text-neutral-600 dark:text-neutral-400 mb-4">
                  {info.slogan}
                </p>

                <ul className="space-y-2 mb-6 text-sm">
                  {info.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-0.5" style={{ color: info.color }}>✓</span>
                      <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={info.link}
                  className="block w-full text-center px-4 py-2.5 rounded-lg font-semibold transition-all text-white text-sm"
                  style={{ backgroundColor: info.color }}
                >
                  {info.link === '#' ? 'Em Breve' : 'Começar →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">100% Gratuito</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Todo conteúdo livre e acessível
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Código aberto no GitHub
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Progressivo</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Do básico ao avançado, passo a passo
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Prático</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Aplicações reais e simuladores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            De conceitos básicos até IA autônoma com MindOn. 7 tiers completos esperando por você.
          </p>
          <a
            href="#quiz"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Descobrir Meu Tier →
          </a>
        </div>
      </section>
    </Layout>
  );
}
