import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Número do WhatsApp e mensagem padrão
  const whatsappNumber = '5541999878219';
  const whatsappMessage = 'Olá Ander vim através do site e gostaria de mais informações';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#social-contact', label: 'Contato' },
  ];

  const socialLinks = [
    { href: whatsappLink, icon: 'fab fa-whatsapp', label: 'WhatsApp' },
    { href: 'https://www.instagram.com/anderbritto_personaltrainer/', icon: 'fab fa-instagram', label: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-info">
          <Link href="#home" className="footer-logo">
            Anderson <span>Britto</span>
          </Link>
          <p className="footer-description">
            Transformando vidas através do treinamento personalizado. Alcance seus objetivos com um acompanhamento profissional e dedicado.
          </p>
          <div className="footer-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-icon"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column footer-links-nav">
          <h3 className="footer-heading">Navegação</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Contato</h3>
          <p>
            <i className="fab fa-whatsapp"></i>{' '}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              (41) 99987-8219
            </a>
          </p>
          <p style={{ marginTop: '10px' }}>
            <i className="fab fa-instagram"></i>{' '}
            <a href="https://www.instagram.com/anderbritto_personaltrainer/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              @anderbritto_personaltrainer
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Anderson Britto - Personal Trainer. Todos os direitos reservados.
        </p>
        <p className="developer-info">
          Desenvolvido por{' '}
          <a
            href="https://portifolio-geovani.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Geovani Neumann
          </a>
        </p>
      </div>
    </footer>
  );
}