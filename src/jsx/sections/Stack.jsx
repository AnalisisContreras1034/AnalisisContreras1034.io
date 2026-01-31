import React from 'react';

// Lista de tecnologías
const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "SQL",
  "NoSQL",
  "Power BI"
];

const Stack = () => (
  <section id="stack" className="stack">
    <div className="container">
      <h2 className="stack-title">Stack</h2>
      <ul className="stack-grid">
        {techStack.map((tech, index) => (
          <li key={index} className={`stack-item stack-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Stack;
