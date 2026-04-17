'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    // Observer para detectar seções visíveis
    const sections = ['home', 'about', 'services', 'testimonials', 'faq', 'social-contact'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(el => el);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveLink(id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px 0px 0px'
      }
    );
    
    sectionElements.forEach(section => {
      if (section) observer.observe(section);
    });
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para lidar com o clique no link
  const handleLinkClick = (sectionId) => {
    // Ativar o link imediatamente ao clicar
    setActiveLink(sectionId);
    // Fechar menu mobile
    setIsMenuOpen(false);
    
    // Rolar suavemente para a seção
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura do header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevenir scroll quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Início', id: 'home', icon: 'fas fa-home' },
    { href: '#about', label: 'Sobre', id: 'about', icon: 'fas fa-user' },
    { href: '#services', label: 'Serviços', id: 'services', icon: 'fas fa-dumbbell' },
    { href: '#testimonials', label: 'Depoimentos', id: 'testimonials', icon: 'fas fa-star' },
    { href: '#faq', label: 'FAQ', id: 'faq', icon: 'fas fa-question-circle' },
    { href: '#social-contact', label: 'Contato', id: 'social-contact', icon: 'fas fa-envelope' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-default'}`}>
      <div className={`header-background ${isScrolled ? 'scrolled' : 'default'}`} />
      <div className="header-gradient" />
      <div className="header-glow" />
      
      <div className="header-container">
        <Link 
          href="#home" 
          className="logo" 
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
        >
          <div>
            <span className="logo-main">
              ANDERSON<span className="logo-accent">BRITTO</span>
            </span>
            <span className="logo-sub">PERSONAL TRAINER</span>
          </div>
        </Link>

        <nav className="desktop-only">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredLink(item.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  <i className={item.icon} />
                  {item.label}
                  {(activeLink === item.id || hoveredLink === item.id) && (
                    <span className="nav-link-underline" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="desktop-only">
          <Link
            href="https://wa.me/5541999878219"
            target="_blank"
            className="btn-whatsapp"
          >
            <i className="fab fa-whatsapp" />
            AGENDAR AULA
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="menu-button mobile-only"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button
            onClick={closeMenu}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '10px',
              zIndex: 1002,
            }}
            aria-label="Fechar menu"
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="mobile-logo">
            <span className="mobile-logo-main">
              ANDERSON<span className="logo-accent">BRITTO</span>
            </span>
            <span className="mobile-logo-sub">PERSONAL TRAINER</span>
          </div>
          
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${activeLink === item.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
            >
              <i className={item.icon} />
              {item.label}
            </Link>
          ))}
          
          <Link
            href="https://wa.me/5541999878219"
            target="_blank"
            className="mobile-btn-whatsapp"
            onClick={closeMenu}
          >
            <i className="fab fa-whatsapp" />
            AGENDAR AULA
          </Link>
        </div>
      )}
    </header>
  );
}