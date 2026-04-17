import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`hero-section ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      <div className="hero-background" />
      {/* O hero-overlay agora tem um gradiente mais sutil para a transição */}
      <div className="hero-overlay" /> 

      <div className="hero-content">
        <h1 className="hero-title">Sua Evolução,<span className="hero-accent"> meu compromisso</span></h1>
        <p className="hero-subtitle">Tecnologia, ciência e dedicação em cada treino.</p>
        <a href="#contact" className="hero-cta-button">
          Fale Conosco <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
