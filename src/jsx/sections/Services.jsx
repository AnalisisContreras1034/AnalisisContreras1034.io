import React from 'react';

const servicesData = [
  {
    title: 'Análisis de Datos',
    description: 'Transformo datos en información útil para decisiones estratégicas.',
  },
  {
    title: 'Dashboards Interactivos',
    description: 'Visualizaciones claras y dinámicas de tus métricas clave.',
  },
  {
    title: 'Automatización de Reportes',
    description: 'Generación de reportes automáticos y resúmenes de datos.',
  },
  {
    title: 'Desarrollo Web',
    description: 'Aplicaciones responsivas y escalables con React.',
  },
];

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <h2 className="services-title">Servicios</h2>
      <p className="services-subtitle">
        Especialización en análisis de datos con soporte en desarrollo web.
      </p>

      <ul className="services-grid">
        {servicesData.map((service, index) => (
          <li key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
