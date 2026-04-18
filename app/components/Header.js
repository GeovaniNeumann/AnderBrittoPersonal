'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Número do WhatsApp e mensagem padrão
  const whatsappNumber = '5541999878219';
  const whatsappMessage = 'Olá Anderson, vim através do site e gostaria de mais informações';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
    setActiveLink(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
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
        {/* Logo */}
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

        {/* Navegação Desktop */}
        <nav className="desktop-only">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  <i className={item.icon} />
                  {item.label}
                  {activeLink === item.id && <span className="nav-link-underline" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão WhatsApp Desktop */}
        <div className="desktop-only">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <i className="fab fa-whatsapp" />
            AGENDAR AULA
          </Link>
        </div>

        {/* Botão Menu Mobile */}
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

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mobile-close-btn"
            aria-label="Fechar menu"
          >
            <i className="fas fa-times" />
          </button>

          <div className="mobile-logo">
            <span className="mobile-logo-main">
              ANDERSON<span className="logo-accent">BRITTO</span>
            </span>
            <span className="mobile-logo-sub">PERSONAL TRAINER</span>
          </div>
          
          <div className="mobile-nav-container">
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
          </div>
          
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-btn-whatsapp"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fab fa-whatsapp" />
            AGENDAR AULA
          </Link>
        </div>
      )}
    </header>
  );
}