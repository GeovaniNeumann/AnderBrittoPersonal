'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'A primeira consulta é uma avaliação completa onde conversamos sobre seus objetivos, histórico de saúde, rotina e preferências. Realizo também uma avaliação física para estabelecer parâmetros iniciais e criar um plano personalizado.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceito pagamento via PIX, cartão de crédito (até 3x sem juros), transferência bancária e dinheiro. Ofereço pacotes com descontos progressivos para planos mensais, trimestrais e semestrais.',
  },
  {
    question: 'Preciso de equipamentos para o treino online?',
    answer: 'Não necessariamente. Adapto os treinos aos equipamentos que você tem disponível. Desde treinos com peso corporal até aqueles com equipamentos completos. Posso também sugerir equipamentos básicos e acessíveis para potencializar seus resultados.',
  },
  {
    question: 'Como é o acompanhamento nutricional?',
    answer: 'O acompanhamento nutricional é baseado em suas preferências alimentares, rotina e objetivos. Forneço orientações personalizadas, planos alimentares práticos e sugestões de cardápios. O foco é criar hábitos sustentáveis, não dietas restritivas.',
  },
  {
    question: 'Você atende em algum local específico ou apenas à domicílio?',
    answer: 'Atendo em academia parceira, em domicílio e também online. Para os treinos presenciais, a localização depende da sua região e da disponibilidade na agenda. Entre em contato para verificar a viabilidade para o seu endereço.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq">
      <div className="section-title">
        <h2>Perguntas Frequentes</h2>
        <p>Tire suas dúvidas sobre meus serviços e metodologia</p>
      </div>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span>{item.question}</span>
              <i className="fas fa-chevron-down" />
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}