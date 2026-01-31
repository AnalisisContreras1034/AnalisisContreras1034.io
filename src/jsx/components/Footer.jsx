import React from "react";
import "../../css/footer.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const CONTACT_LINKS = [
  {
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/5730012249460",
  },
  {
    label: "Correo",
    icon: <FaEnvelope />,
    href: "mailto:ac.analytics.es@gmail.com",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/AndresContreras1034",
  },
  {
    label: "Portafolio Ingeniería de Datos",
    icon: <FaExternalLinkAlt />,
    href: "https://andresmendez.tech/",
  },
];

const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>Andres Mendez · Analista de Datos</p>
      <p>Transformo datos en decisiones claras</p>

      <div className="footer-links">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>

      <div className="footer-contact">
        {CONTACT_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon} {label}
          </a>
        ))}
      </div>

      <p>© {new Date().getFullYear()} AndresMendez. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
