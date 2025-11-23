import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: 'Qual é seu nível de conhecimento sobre robôs humanoides?',
      options: [
        { text: 'Nunca vi um robô humanóide', tier: 1 },
        { text: 'Já ouvi falar mas não sei como funcionam', tier: 1 },
        { text: 'Conheço o básico e quero aprender a operar', tier: 2 },
        { text: 'Quero programar e desenvolver para humanoides', tier: 3 },
      ],
    },
    {
      question: 'O que você quer fazer com robôs humanoides?',
      options: [
        { text: 'Entender o que são e como funcionam', tier: 1 },
        { text: 'Operar e controlar robôs', tier: 2 },
        { text: 'Programar e criar aplicações', tier: 3 },
        { text: 'Ainda não sei, quero explorar', tier: 1 },
      ],
    },
    {
      question: 'Você tem experiência com programação?',
      options: [
        { text: 'Nenhuma experiência', tier: 1 },
        { text: 'Básico (já fiz algum curso)', tier: 2 },
        { text: 'Intermediário (já programo regularmente)', tier: 3 },
        { text: 'Avançado (trabalho com desenvolvimento)', tier: 3 },
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
    const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
    if (avg <= 1.5) return 1;
    if (avg <= 2.5) return 2;
    return 3;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const tierInfo = {
    1: {
      title: 'Tier 1: Conhecendo Humanoides',
      color: '#3B82F6',
      link: '/docs/tier1/introducao',
      slogan: '"Descubra o futuro da robótica"',
      benefits: [
        'O que são robôs humanoides',
        'História e evolução',
        'Principais modelos (Unitree, Tesla, Figure)',
        'Aplicações práticas'
      ],
    },
    2: {
      title: 'Tier 2: Operando Humanoides',
      color: '#9b59b6',
      link: '#',
      slogan: '"Do controle à maestria"',
      benefits: [
        'Interfaces de controle',
        'Segurança e melhores práticas',
        'Calibração e manutenção',
        'Simuladores virtuais'
      ],
    },
    3: {
      title: 'Tier 3: Programando Humanoides',
      color: '#10B981',
      link: '#',
      slogan: '"Code o futuro"',
      benefits: [
        'Python para robótica',
        'ROS2 e frameworks',
        'Visão computacional e IA',
        'Navegação autônoma'
      ],
    },
  };

  return (
    <Layout
      title="Academia de Humanoides"
      description="Democratizando o conhecimento sobre robôs humanoides"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🤖 Academia de Humanoides
          </h1>
          <p className="text-2xl mb-8 text-white/90">
            Domine Robôs Humanoides do Zero ao Avançado
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

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
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
                Do básico ao avançado
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

      {/* Quiz Section */}
      <section id="quiz" className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Qual tier é ideal para você?
          </h2>

          {!showResult ? (
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  <span>Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
                  <span>{Math.round(((currentQuestion) / quizQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

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

              {currentQuestion > 0 && (
                <button
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1);
                    setAnswers(answers.slice(0, -1));
                  }}
                  className="mt-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  ← Voltar
                </button>
              )}
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4">
                Recomendamos: {tierInfo[getRecommendedTier()].title}
              </h3>
              <p className="text-xl mb-6 text-white/90">
                {tierInfo[getRecommendedTier()].slogan}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  to={tierInfo[getRecommendedTier()].link}
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Escolha Seu Tier
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(tierInfo).map(([tier, info]) => (
              <div
                key={tier}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-current transition-all"
                style={{ color: info.color }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  {tier === '1' ? '🤖' : tier === '2' ? '🎮' : '💻'}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  {info.title}
                </h3>

                <p className="italic text-neutral-600 dark:text-neutral-400 mb-6">
                  {info.slogan}
                </p>

                <ul className="space-y-3 mb-8">
                  {info.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2" style={{ color: info.color }}>✓</span>
                      <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={info.link}
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all text-white"
                  style={{ backgroundColor: info.color }}
                >
                  Começar Tier {tier} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-neutral-600 dark:text-neutral-400">Módulos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-neutral-600 dark:text-neutral-400">Gratuito</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">Open</div>
              <div className="text-neutral-600 dark:text-neutral-400">Código Aberto</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
