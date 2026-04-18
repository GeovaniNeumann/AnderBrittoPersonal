'use client';

import Link from 'next/link';

export default function SocialContact() {
  // Número do WhatsApp e mensagem padrão
  const whatsappNumber = '5541999878219';
  const whatsappMessage = 'Olá Ander vim através do site e gostaria de mais informações';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="social-contact">
      <div className="section-title">
        <h2>Vamos Conversar?</h2>
        <p>Entre em contato diretamente pelo WhatsApp ou Instagram</p>
      </div>

      <div className="social-buttons">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener"
          className="social-button whatsapp-button"
        >
          <i className="fab fa-whatsapp" />
          WhatsApp
        </Link>

        <Link
          href="https://www.instagram.com/anderbritto_personaltrainer/"
          target="_blank"
          rel="noopener"
          className="social-button instagram-button"
        >
          <i className="fab fa-instagram" />
          Instagram
        </Link>
      </div>
    </section>
  );
}