import React from 'react';
import "../../css/contact.css";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // librería de iconos

function Contact() {
  const whatsappNumber = '573012249460'; // tu número de WhatsApp
  const email = 'ac.analytics.es@gmail.com';

  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>¿Tienes un proyecto de análisis de datos? ¡Hablemos!</p>

      <div className="contact-buttons">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp-btn"
        >
          <FaWhatsapp className="icon" />
          WhatsApp
        </a>

        {/* Correo */}
        <a
          href={`mailto:${email}`}
          className="contact-btn email-btn"
        >
          <FaEnvelope className="icon" />
          Correo
        </a>
      </div>
    </section>
  );
}

export default Contact;
