'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    { icon: 'fas fa-graduation-cap', label: 'Formado em Educação Física' },
    { icon: 'fas fa-clock', label: '5+ anos de experiência' },
    { icon: 'fas fa-users', label: '+120 clientes transformados' },
    { icon: 'fas fa-trophy', label: 'Resultados comprovados' },
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
                src="https://i.ibb.co/pBjTbdgD/5SW0a.jpg"
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
                Profissional formado e apaixonado pelo mundo do fitness, já tive 
                a oportunidade de ajudar diversos alunos a darem os primeiros passos 
                em direção aos seus objetivos de saúde e condicionamento físico.
              </p>
              
              <p>
                Minha missão é proporcionar uma transformação completa não apenas 
                no corpo, mas também na mente e no estilo de vida. Combino ciência 
                do exercício, nutrição e psicologia para criar programas 100% 
                personalizados.
              </p>
            </div>

            <Link
              href="https://wa.me/5541999878219"
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