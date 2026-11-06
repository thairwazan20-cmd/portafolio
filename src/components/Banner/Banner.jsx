import { useEffect, useState } from 'react';
import './Banner.css';
import miFoto from '../../assets/miFoto.png';
import NeuralCanvas from './NeuralCanvas';

// Roles que se escriben y borran automáticamente
const roles = [
  'Software Developer',
  'Ingeniero de Software con IA',
  'Frontend Developer · React',
  'Diseñador Web',
  'Soporte Técnico',
];

const GITHUB_URL = 'https://github.com/thairwazan20-cmd';

const Banner = ({ listo }) => {
  const [rolIndex, setRolIndex] = useState(0);
  const [texto, setTexto] = useState('');
  const [borrando, setBorrando] = useState(false);

  // Efecto máquina de escribir
  useEffect(() => {
    if (!listo) return;
    const completo = roles[rolIndex];
    let delay = borrando ? 35 : 75;

    if (!borrando && texto === completo) delay = 1800;
    if (borrando && texto === '') delay = 300;

    const t = setTimeout(() => {
      if (!borrando && texto === completo) {
        setBorrando(true);
      } else if (borrando && texto === '') {
        setBorrando(false);
        setRolIndex((i) => (i + 1) % roles.length);
      } else {
        setTexto(completo.slice(0, texto.length + (borrando ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [texto, borrando, rolIndex, listo]);

  return (
    <section id="inicio" className={`hero-section ${listo ? 'hero--ready' : ''}`}>
      <NeuralCanvas />
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />

      <div className="hero-content container">
        {/* ===== Columna de texto ===== */}
        <div className="hero-text">
          {/* 1. Etiqueta de Estado (Badge) */}
          <div className="status-badge hero-anim" style={{ '--i': 0 }}>
            <span className="status-dot"></span>
            Disponible para nuevos proyectos
          </div>

          <p className="hero-hello hero-anim" style={{ '--i': 1 }}>
            <span className="text-cyan">&gt;</span> Hola mundo, soy
          </p>

          {/* 2. Título Principal */}
          <h1 className="hero-title hero-anim" style={{ '--i': 2 }}>
            Thair <span className="text-gradient">Bazan</span>
          </h1>

          {/* 3. Subtítulo (Rol con efecto de escritura) */}
          <h2 className="hero-subtitle hero-anim" style={{ '--i': 3 }}>
            <span className="hero-subtitle-prefix">~/</span>
            <span className="hero-typed">{texto}</span>
            <span className="hero-caret" aria-hidden="true" />
          </h2>

          {/* 4. Descripción */}
          <p className="hero-description hero-anim" style={{ '--i': 4 }}>
            Estudiante de <strong>Ingeniería de Software con Inteligencia Artificial</strong>.
            Desarrollo páginas y aplicaciones web funcionales que resuelven necesidades
            reales, cuidando el diseño, el rendimiento y la experiencia de usuario.
          </p>

          {/* 5. Botones de Acción */}
          <div className="hero-buttons hero-anim" style={{ '--i': 5 }}>
            <a href="#proyectos" className="btn btn-primary">
              Ver Proyectos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="#contacto" className="btn btn-ghost">Contáctame</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54a11.26 11.26 0 0 0 7.68-10.67C23.25 5.48 18.27.5 12 .5Z" /></svg>
            </a>
          </div>

          {/* 6. Mini estadísticas */}
          <ul className="hero-stats hero-anim" style={{ '--i': 6 }}>
            <li><strong>8+</strong><span>Certificaciones</span></li>
            <li><strong>10</strong><span>Tecnologías</span></li>
            <li><strong>3</strong><span>Proyectos</span></li>
          </ul>
        </div>

        {/* ===== Columna visual: foto + elementos flotantes ===== */}
        <div className="hero-visual hero-anim" style={{ '--i': 3 }}>
          <div className="profile-orbit">
            <div className="profile-ring" />
            <div className="profile-photo-container">
              {/* Reemplaza src/assets/miFoto.png por tu foto cuadrada (ej. 600x600px) */}
              <img src={miFoto} alt="Thair Bazan" className="profile-photo" />
            </div>

            <span className="floating-chip chip-1">⚛ React</span>
            <span className="floating-chip chip-2">🤖 IA / ML</span>
            <span className="floating-chip chip-3">🐍 Python</span>
            <span className="floating-chip chip-4">{'{ JS }'}</span>
          </div>

          {/* Tarjeta de código flotante */}
          <div className="code-card">
            <div className="code-card-head">
              <span /><span /><span />
              <em>thair.js</em>
            </div>
            <pre>
              <code>
                <span className="tk-key">const</span> <span className="tk-var">dev</span> = {'{'}{'\n'}
                {'  '}rol: <span className="tk-str">'Software Engineer'</span>,{'\n'}
                {'  '}foco: <span className="tk-str">'IA + Web'</span>,{'\n'}
                {'  '}cafe: <span className="tk-num">Infinity</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* 7. Indicador de Scroll */}
      <a href="#sobre-mi" className="scroll-indicator" aria-label="Bajar a la sección de perfil">
        <span className="scroll-mouse"><span className="scroll-wheel" /></span>
        <span className="scroll-text">scroll</span>
      </a>
    </section>
  );
};

export default Banner;
