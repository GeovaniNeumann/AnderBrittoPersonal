
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#social-contact', label: 'Contato' },
  ];

  const socialLinks = [
    { href: 'https://wa.me/SEUNUMERO', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
    { href: 'https://instagram.com/SEUINSTAGRAM', icon: 'fab fa-instagram', label: 'Instagram' },
    { href: 'https://facebook.com/SEUFACEBOOK', icon: 'fab fa-facebook-f', label: 'Facebook' },
    { href: 'https://linkedin.com/in/SEULINKEDIN', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
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
          <p><i className="fas fa-map-marker-alt"></i> Rua Exemplo, 123 - Cidade, Estado</p>
          <p><i className="fas fa-phone"></i> (41) 99987-8219</p>
          <p><i className="fas fa-envelope"></i> contato@andersonbritto.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Anderson Britto - Personal Trainer. Todos os direitos reservados.
        </p>
        <p className="developer-info">
          Desenvolvido por{' '}
          <a
            href="https://portifoliogeovani.netlify.app/"
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
