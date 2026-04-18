'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`hero-section ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      {/* Imagem de fundo */}
      <div className="hero-background" />
      
      {/* Overlay suave - apenas para contraste mínimo */}
      <div className="hero-overlay" />

      {/* Título centralizado */}
      <div className="hero-mobile-title">
        <h2 className="hero-mobile-name">ANDERSON BRITTO</h2>
        <p className="hero-mobile-role">PERSONAL TRAINER</p>
      </div>

      {/* Localização discreta */}
      <div className="hero-location-mobile">
        <i className="fas fa-map-marker-alt"></i>
        <span>Colombo - PR</span>
      </div>

      {/* Indicador de scroll */}
      <div className="hero-scroll-mobile">
        <div className="scroll-line"></div>
        <span className="scroll-text-mobile">Explore</span>
      </div>

      {/* Efeito de gradiente sutil na parte inferior */}
      <div className="hero-gradient-bottom"></div>

      <style jsx>{`
        /* ==================== TÍTULO ==================== */
        .hero-mobile-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 5;
          width: 90%;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }
        
        .hero-mobile-name {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 3px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          margin-bottom: 12px;
        }
        
        .hero-mobile-role {
          font-size: 0.9rem;
          letter-spacing: 4px;
          color: var(--accent);
          font-weight: 500;
          text-transform: uppercase;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }
        
        /* ==================== LOCALIZAÇÃO ==================== */
        .hero-location-mobile {
          position: absolute;
          bottom: 30px;
          right: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          z-index: 5;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.7s forwards;
        }
        
        .hero-location-mobile i {
          font-size: 0.75rem;
          color: var(--accent);
        }
        
        /* ==================== INDICADOR DE SCROLL ==================== */
        .hero-scroll-mobile {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 5;
          opacity: 0;
          animation: fadeInUpScroll 0.8s ease-out 0.5s forwards;
        }
        
        .scroll-line {
          width: 2px;
          height: 60px;
          background: linear-gradient(180deg, rgba(255, 77, 77, 0.6), rgba(255, 77, 77, 0));
          animation: scrollLine 2s ease-in-out infinite;
        }
        
        .scroll-text-mobile {
          font-size: 0.7rem;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }
        
        /* Gradiente inferior sutil */
        .hero-gradient-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
          z-index: 3;
          pointer-events: none;
        }
        
        /* Animações */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        
        @keyframes fadeInUpScroll {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes scrollLine {
          0% {
            height: 60px;
            opacity: 0.5;
          }
          50% {
            height: 90px;
            opacity: 1;
          }
          100% {
            height: 60px;
            opacity: 0.5;
          }
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
          .hero-mobile-name {
            font-size: 1.6rem;
            letter-spacing: 2px;
            margin-bottom: 8px;
          }
          
          .hero-mobile-role {
            font-size: 0.7rem;
            letter-spacing: 3px;
          }
          
          .hero-location-mobile {
            bottom: 20px;
            right: 15px;
            padding: 5px 12px;
            font-size: 0.7rem;
          }
          
          .hero-location-mobile i {
            font-size: 0.65rem;
          }
          
          .scroll-line {
            height: 50px;
          }
          
          .scroll-text-mobile {
            font-size: 0.65rem;
          }
          
          .hero-gradient-bottom {
            height: 80px;
          }
          
          @keyframes scrollLine {
            0% { height: 50px; opacity: 0.5; }
            50% { height: 75px; opacity: 1; }
            100% { height: 50px; opacity: 0.5; }
          }
        }
        
        @media (max-width: 480px) {
          .hero-mobile-name {
            font-size: 1.2rem;
            letter-spacing: 1px;
            margin-bottom: 6px;
          }
          
          .hero-mobile-role {
            font-size: 0.55rem;
            letter-spacing: 2px;
          }
          
          .hero-location-mobile {
            bottom: 15px;
            right: 10px;
            padding: 4px 10px;
            font-size: 0.6rem;
          }
          
          .hero-location-mobile i {
            font-size: 0.6rem;
          }
          
          .scroll-text-mobile {
            font-size: 0.55rem;
          }
          
          .scroll-line {
            height: 40px;
          }
          
          .hero-gradient-bottom {
            height: 60px;
          }
          
          @keyframes scrollLine {
            0% { height: 40px; opacity: 0.5; }
            50% { height: 60px; opacity: 1; }
            100% { height: 40px; opacity: 0.5; }
          }
        }
      `}</style>
    </section>
  );
}