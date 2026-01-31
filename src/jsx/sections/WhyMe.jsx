import React from "react";
import "../../css/whyme.css";

const WhyMe = () => (
  <section id="whyme" className="whyme">
    <div className="container">
      <h2 className="whyme-title">¿Por qué trabajar conmigo?</h2>
      <p className="whyme-subtitle">
        Trabajo cada proyecto con un enfoque claro en resultados, comunicación
        constante y soluciones prácticas que realmente aportan valor al negocio.
      </p>

      <ul className="whyme-list">
        <li>
          <span className="whyme-icon"></span>
          Soluciones claras enfocadas en objetivos de negocio
        </li>
        <li>
          <span className="whyme-icon"></span>
          Comunicación directa y seguimiento constante
        </li>
        <li>
          <span className="whyme-icon"></span>
          Código limpio, mantenible y bien documentado
        </li>
        <li>
          <span className="whyme-icon"></span>
          Compromiso real con la calidad y los resultados
        </li>
      </ul>
    </div>
  </section>
);

export default WhyMe;
