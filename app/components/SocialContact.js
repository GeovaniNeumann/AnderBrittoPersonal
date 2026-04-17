'use client';

import Link from 'next/link';

export default function SocialContact() {
  return (
    <section id="social-contact">
      <div className="section-title">
        <h2>Vamos Conversar?</h2>
        <p>Entre em contato diretamente pelo WhatsApp ou Instagram</p>
      </div>

      <div className="social-buttons">
        <Link
          href="https://wa.me/5541999878219"
          target="_blank"
          rel="noopener"
          className="social-button whatsapp-button"
        >
          <i className="fab fa-whatsapp" />
          WhatsApp
        </Link>

        <Link
          href="https://www.instagram.com/andy_personaltrainer/"
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