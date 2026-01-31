import React from 'react';
import "../../css/projects.css";


const Testimonials = () => (
  <section id="testimonios" className="testimonials">
    <div className="container">
      <h2>Testimonios</h2>

      <div className="grid">
        <article className="card">
          <p>
            “Analizó nuestros datos de ventas y detectó patrones que no estábamos
            viendo. Gracias a eso ajustamos precios y aumentamos la conversión
            en el primer mes.”
          </p>
          <h4>— Juan M., Ecommerce</h4>
        </article>

        <article className="card">
          <p>
            “Nos ayudó a limpiar y estructurar más de 50 mil registros. El
            dashboard que entregó nos permitió tomar decisiones diarias sin
            depender de reportes manuales.”
          </p>
          <h4>— María G., Operaciones</h4>
        </article>

        <article className="card">
          <p>
            “Implementó métricas claras y visualizaciones simples. Ahora sabemos
            exactamente qué campañas funcionan y dónde estamos perdiendo dinero.”
          </p>
          <h4>— Carlos R., Marketing Digital</h4>
        </article>
      </div>

      <p className="testimonial-cta">
        ¿Trabajaste con nosotros en análisis de datos? <strong>Escríbenos</strong> y agrega tu testimonio.
      </p>
    </div>
  </section>
);

export default Testimonials;
