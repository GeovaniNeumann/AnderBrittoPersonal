'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: 'Como funciona o início do acompanhamento?',
    answer: 'Tudo começa com uma análise detalhada e uma avaliação de objetivos. Analiso seu histórico, rotina e nível de condicionamento para criar um planejamento estratégico 100% individualizado, focado em resultados reais e seguros.',
  },
  {
    question: 'Como funcionam os pagamentos?',
    answer: 'Trabalho com PIX, transferências e cartão de crédito. Ofereço planos mensais ou pacotes trimestrais e semestrais com condições especiais para quem busca um compromisso sério com a transformação física.',
  },
  {
    question: 'Não treino em academia, posso fazer a consultoria online?',
    answer: 'Com certeza! Os treinos da consultoria são adaptados ao que você tem disponível, seja o peso do próprio corpo, elásticos ou equipamentos básicos de casa. O foco é a técnica e a intensidade correta para gerar evolução constante.',
  },
  {
    question: 'Terei orientações sobre alimentação?',
    answer: 'Sim. O treino e a alimentação andam juntos. Forneço guias nutricionais práticos e sugestões que se adaptam ao seu estilo de vida, focando em fornecer energia para os treinos e acelerar a queima de gordura sem dietas restritivas insustentáveis.',
  },
  {
    question: 'Onde os treinos presenciais são realizados?',
    answer: 'Atendo em academias parceiras na região e também ofereço a modalidade de Personal Home (em domicílio). A disponibilidade depende da agenda atual, por isso recomendo entrar em contato via WhatsApp para verificarmos o melhor horário para você.',
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