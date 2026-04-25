'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Número do WhatsApp e mensagem padrão
  const whatsappNumber = '5541999878219';
  const whatsappMessage = 'Olá Ander vim através do site e gostaria de mais informações';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: 'fas fa-fire', label: 'Especialista em Emagrecimento' },
    { icon: 'fas fa-dumbbell', label: 'Foco em Hipertrofia' },
    { icon: 'fas fa-mobile-alt', label: 'Consultoria Online Global' },
    { icon: 'fas fa-check-circle', label: 'Método de Resultados Rápidos' },
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-bg" />

      <div className="container">
        <div className="section-title">
          <h2>Sobre Mim</h2>
          <p>Conheça minha trajetória e metodologia de trabalho</p>
        </div>

        <div className={`about-wrapper ${isVisible ? 'animate' : ''}`}>
          {/* Lado esquerdo - Imagem com efeito premium */}
          <div className="about-image">
            <div className="about-image-frame">
              <img
                src="https://i.ibb.co/8nZ73G0k/Sem-nome-800-x-800-px.png"
                alt="Anderson Britto - Personal Trainer"
              />
              <div className="image-overlay" />
            </div>
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="about-info">
            <h3>
              Anderson <span>Britto</span>
            </h3>

            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="about-stat-item">
                  <i className={stat.icon} />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-text">
            <p>
              Especialista em <strong>Emagrecimento e Hipertrofia</strong>, meu trabalho é focado em transformar o corpo 
              e a autoestima de quem busca resultados reais. Com mais de 5 anos de experiência, 
              ajudo meus alunos a saírem do sedentarismo e alcançarem sua melhor versão através de uma 
              metodologia baseada em ciência e constância.
            </p>
            
            <p>
              Minha missão vai além de prescrever exercícios; eu entrego um <strong>planejamento estratégico</strong>. 
              Seja no atendimento presencial ou na consultoria online, ajusto cada detalhe do treino para 
              que ele se encaixe na sua rotina, garantindo que o processo seja eficiente, seguro e, 
              acima de tudo, sustentável a longo prazo.
            </p>
            </div>

            <Link
              href={whatsappLink}
              target="_blank"
              className="about-cta"
            >
              <i className="fab fa-whatsapp" />
              AGENDAR TREINO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}