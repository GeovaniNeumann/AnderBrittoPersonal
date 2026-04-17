
'use client';

import { useEffect, useRef } from 'react';

const services = [
  { icon: 'fas fa-dumbbell', title: 'Treinamento Personalizado', description: 'Sessões individuais com acompanhamento completo, focadas em seus objetivos específicos, seja emagrecimento, ganho de massa muscular ou condicionamento físico.' },
  { icon: 'fas fa-laptop', title: 'Acompanhamento Online', description: 'Planos de treino e nutrição com acompanhamento remoto para quem precisa de flexibilidade. Ideal para quem viaja ou tem rotina agitada.' },
  { icon: 'fas fa-heartbeat', title: 'Pré e Pós-Operatório', description: 'Programas especializados para recuperação de cirurgias e lesões com segurança. Auxílio na reabilitação e retorno às atividades físicas.' },
  { icon: 'fas fa-users', title: 'Treino em Grupo', description: 'Sessões dinâmicas em pequenos grupos para quem prefere treinar com motivação coletiva. Ambiente descontraído e resultados eficientes.' },
  { icon: 'fas fa-utensils', title: 'Consultoria Nutricional', description: 'Orientação alimentar personalizada para potencializar seus resultados. Planos alimentares adaptados à sua rotina e objetivos.' },
  { icon: 'fas fa-home', title: 'Personal Home', description: 'Treinamento personalizado no conforto da sua casa. Equipamentos portáteis e adaptáveis para qualquer espaço.' },
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
