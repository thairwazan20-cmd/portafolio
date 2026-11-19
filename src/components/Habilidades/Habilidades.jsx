import './Habilidades.css';
import { devicon } from '../Iconos/Iconos';

// Tecnologías agrupadas por área
const grupos = [
  {
    titulo: 'Desarrollo Frontend',
    descripcion: 'Interfaces web modernas, rápidas y adaptadas a cualquier pantalla.',
    items: [
      { nombre: 'HTML5', detalle: 'Maquetación semántica', icono: devicon('html5') },
      { nombre: 'CSS3', detalle: 'Grid, Flexbox y responsive', icono: devicon('css3') },
      { nombre: 'JavaScript', detalle: 'Interactividad y lógica web', icono: devicon('javascript') },
      { nombre: 'React', detalle: 'Componentes y Hooks', icono: devicon('react') },
      { nombre: 'Bootstrap', detalle: 'Maquetación rápida', icono: devicon('bootstrap') },
    ],
  },
  {
    titulo: 'Herramientas y publicación',
    descripcion: 'Flujo de trabajo ordenado, desde el código hasta la web publicada.',
    items: [
      { nombre: 'Git', detalle: 'Control de versiones', icono: devicon('git') },
      { nombre: 'GitHub', detalle: 'Repositorios y colaboración', icono: devicon('github'), invertir: true },
      { nombre: 'Vite', detalle: 'Entorno de desarrollo', icono: devicon('vitejs') },
      { nombre: 'Vercel', detalle: 'Publicación de sitios web', icono: devicon('vercel'), invertir: true },
      { nombre: 'VS Code', detalle: 'Editor de código', icono: devicon('vscode') },
    ],
  },
  {
    titulo: 'Otros conocimientos',
    descripcion: 'Formación complementaria certificada por Cisco y SENATI.',
    items: [
      { nombre: 'Python', detalle: 'Fundamentos de programación', icono: devicon('python') },
      { nombre: 'Ciencia de datos', detalle: 'Introducción · Cisco' },
      { nombre: 'Redes', detalle: 'Conceptos básicos · Cisco' },
      { nombre: 'Ciberseguridad', detalle: 'Introducción · Cisco' },
      { nombre: 'Hardware y soporte', detalle: 'Diagnóstico de equipos' },
    ],
  },
];

const Habilidades = () => {
  return (
    <section id="tech-stack" className="section habilidades-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Habilidades técnicas</span>
          <h2 className="section-title">
            Tecnologías con las que <span className="text-gradient">trabajo</span>
          </h2>
          <p className="section-subtitle">
            Herramientas actuales del desarrollo web para construir sitios rápidos,
            seguros y fáciles de mantener.
          </p>
        </div>

        <div className="stack-grupos">
          {grupos.map((g, i) => (
            <div key={g.titulo} className="glow-card stack-grupo reveal" style={{ '--delay': `${i * 0.1}s` }}>
              <h3>{g.titulo}</h3>
              <p className="stack-grupo-desc">{g.descripcion}</p>
              <ul>
                {g.items.map((item) => (
                  <li key={item.nombre} className="stack-item">
                    <span className="stack-icon">
                      {item.icono ? (
                        <img src={item.icono} alt="" width="24" height="24" loading="lazy" className={item.invertir ? 'invert' : ''} />
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      )}
                    </span>
                    <span className="stack-texto">
                      <strong>{item.nombre}</strong>
                      <span>{item.detalle}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
