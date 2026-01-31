import React from "react";
import "../../css/hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        {/* TEXTO PRINCIPAL */}
        <div className="hero-text">
          <span className="hero-eyebrow">
             Analítica · Visualización
          </span>

          <h1 className="hero-title">
            Soy <span className="hero-name-highlight">Andres Mendez</span>
            <br />
            convierto datos reales en decisiones claras
          </h1>

          <p className="hero-description">
            Ayudo a empresas a analizar y visualizar sus datos para tomar decisiones basadas en evidencia.
          </p>

          {/* MICRO-PRUEBA DE CREDIBILIDAD */}
          <p className="hero-proof">
            Resultados medibles en proyectos reales.

          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Ver proyectos</a>
            <a href="#contact" className="btn-secondary">Evalua tu negocio en 2 minutos</a>
          </div>
        </div>

        {/* VISUAL / AUTORIDAD */}
        <div className="hero-visual">

          {/* Métrica real */}
          <div className="hero-metric">
            <span className="metric-value">+25 proyectos</span>
            <span className="metric-label">
              Experiencia en màs de 25 analisis y dashboards
            </span>
          </div>

          {/* Cards de servicios claros */}
          <div className="data-card">
            <span className="data-label">Dashboards</span>
            <span className="data-value">Control claro de tus ventas y rendimiento</span>
          </div>

          <div className="data-card">
            <span className="data-label">Automatización</span>
            <span className="data-value">Reportes automaticos</span>
          </div>

          <div className="data-card accent">
            <span className="data-label">ETL / Pipelines</span>
            <span className="data-value">Datos ordenados para tomar desiciones</span>
          </div>

        </div>
      </div>

      {/* DECORACIÓN */}
      <div className="hero-grid-bg" />
    </section>
  );
};

export default Hero;
