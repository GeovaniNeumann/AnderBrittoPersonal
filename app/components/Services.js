
'use client';

import { useEffect, useRef } from 'react';

const services = [
  { 
    icon: 'fas fa-fire', 
    title: 'Emagrecimento', 
    description: 'Protocolos estratégicos desenhados para acelerar o metabolismo e queimar gordura de forma eficiente, respeitando a fisiologia feminina.' 
  },
  { 
    icon: 'fas fa-dumbbell', 
    title: 'Hipertrofia e Definição', 
    description: 'Treinamento de força focado no ganho de massa muscular e estética, utilizando técnicas avançadas para maximizar seus resultados na academia.' 
  },
  { 
    icon: 'fas fa-laptop', 
    title: 'Consultoria Online', 
    description: 'Acompanhamento premium via app com treinos personalizados para sua rotina, permitindo que você treine onde e quando quiser com suporte direto.' 
  },
  { 
    icon: 'fas fa-chart-line', 
    title: 'Planejamento Estratégico', 
    description: 'Análise constante de progresso e ajustes mensais no seu plano para garantir que você nunca atinja um platô e continue evoluindo.' 
  },
  { 
    icon: 'fas fa-utensils', 
    title: 'Guia Nutricional', 
    description: 'Orientação alimentar prática e sem restrições severas, focada em fornecer energia para o treino e otimizar a composição corporal.' 
  },
  { 
    icon: 'fas fa-user-check', 
    title: 'Personal Presencial', 
    description: 'Atendimento exclusivo e correção técnica em tempo real para quem busca o máximo de segurança e intensidade em cada repetição.' 
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
          
          // Se for o container, anima os cards com delay
          if (entry.target.classList.contains('services-grid')) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('card-animated');
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      const title = sectionRef.current.querySelector('.section-title');
      const grid = sectionRef.current.querySelector('.services-grid');
      
      if (title) observer.observe(title);
      if (grid) observer.observe(grid);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <div className="section-title section-hidden">
        <h2>Meus Serviços</h2>
        <p>Ofereço soluções personalizadas para atender suas necessidades específicas</p>
      </div>

      <div className="services-grid section-hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            <i className={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-card-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}
