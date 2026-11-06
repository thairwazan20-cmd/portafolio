import { useEffect, useState } from 'react';
import './Banner.css';
import miFoto from '../../assets/miFoto.png';
import NeuralCanvas from './NeuralCanvas';
import { LogoGitHub, LogoLinkedIn, LogoWhatsApp, devicon } from '../Iconos/Iconos';
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from '../../data/contacto';

// Roles que se escriben y borran automáticamente
const roles = [
  'Software Developer',
  'Ingeniero de Software con IA',
  'Frontend Developer · React',
  'Diseñador Web',
  'Soporte Técnico',
];

const redes = [
  { nombre: 'GitHub', url: GITHUB_URL, Logo: LogoGitHub, clase: 'is-github' },
  { nombre: 'LinkedIn', url: LINKEDIN_URL, Logo: LogoLinkedIn, clase: 'is-linkedin' },
  { nombre: 'WhatsApp', url: WHATSAPP_URL, Logo: LogoWhatsApp, clase: 'is-whatsapp' },
];

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
            <div className="hero-socials">
              {redes.map(({ nombre, url, Logo, clase }) => (
                <a key={nombre} href={url} target="_blank" rel="noopener noreferrer" className={`hero-social ${clase}`} aria-label={nombre} title={nombre}>
                  <Logo size={21} />
                </a>
              ))}
            </div>
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
              <img src={miFoto} alt="Foto de Thair Bazan Becerra" className="profile-photo" />
            </div>

            <span className="floating-chip chip-1">
              <img src={devicon('react')} alt="" width="18" height="18" /> React
            </span>
            <span className="floating-chip chip-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#ia-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <defs>
                  <linearGradient id="ia-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#22d3ee" />
                    <stop offset="1" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
              IA / ML
            </span>
            <span className="floating-chip chip-3">
              <img src={devicon('python')} alt="" width="18" height="18" /> Python
            </span>
            <span className="floating-chip chip-4">
              <img src={devicon('javascript')} alt="" width="18" height="18" /> JavaScript
            </span>
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
