'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: '"O Anderson mudou minha vida! Em 6 meses perdi 15kg e ganhei uma disposição que não tinha há anos. Sua abordagem personalizada fez toda a diferença no meu processo."',
    author: 'Carla M.',
    role: 'Cliente há 1 ano',
  },
  {
    text: '"Depois de uma cirurgia no joelho, pensei que nunca mais iria correr. Com o programa especializado do Anderson, não só voltei a jogar tênis como estou melhor do que antes!"',
    author: 'Ricardo T.',
    role: 'Cliente há 8 meses',
  },
  {
    text: '"O acompanhamento online foi perfeito para minha rotina de viagens. Finalmente encontrei consistência nos treinos e já vejo resultados significativos em apenas 3 meses."',
    author: 'Juliana S.',
    role: 'Cliente há 6 meses',
  },
  {
    text: '"As aulas em grupo são incríveis! A energia do Anderson contagia todos, e os resultados apareceram muito mais rápido do que eu esperava. Super recomendo!"',
    author: 'Marcos A.',
    role: 'Cliente há 1 ano',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials">
      <div className="section-title">
        <h2>Depoimentos</h2>
        <p>O que meus clientes dizem sobre o meu trabalho</p>
      </div>

      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${currentIndex === index ? 'active' : ''}`}
          >
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.author}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}

        <div className="slider-controls">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}