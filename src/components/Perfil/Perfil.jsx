import './Perfil.css';

// Áreas en las que trabajo
const servicios = [
  {
    titulo: 'Desarrollo Web',
    texto: 'Sitios y aplicaciones con React, JavaScript y CSS moderno, rápidos y responsivos.',
    icono: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
  },
  {
    titulo: 'IA Aplicada',
    texto: 'Formación en Ingeniería de Software con IA: datos, Python y automatización inteligente.',
    icono: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>
    ),
  },
  {
    titulo: 'Diseño UI / UX',
    texto: 'Interfaces limpias y atractivas, pensadas en la experiencia de la persona usuaria.',
    icono: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
    ),
  },
  {
    titulo: 'Soporte Técnico',
    texto: 'Diagnóstico de hardware, redes y software para mantener los equipos funcionando.',
    icono: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    ),
  },
];

// Formación académica
const educacion = [
  {
    titulo: 'Ingeniería de Software con IA',
    lugar: 'Estudios universitarios',
    badge: 'En curso',
    activo: true,
  },
  {
    titulo: 'Fullstack Developer Software',
    lugar: 'SENATI',
    badge: 'Seminario',
    activo: false,
  },
  {
    titulo: 'Certificaciones Cisco Networking Academy',
    lugar: 'Cisco · SENATI',
    badge: '8 cursos',
    activo: false,
  },
];

const Perfil = () => {
  return (
    <section id="sobre-mi" className="section sobre-mi-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">01 · Sobre mí</span>
          <h2 className="section-title">
            Construyo software con <span className="text-gradient">propósito</span>
          </h2>
        </div>

        <div className="sobre-mi-grid">
          {/* =====================================
              TARJETA 1: PERFIL PROFESIONAL
          ====================================== */}
          <div className="glow-card perfil-card reveal">
            <div className="card-header">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>

            <div className="card-text">
              <p>
                Soy <strong>Thair Bazan Becerra</strong>, estudiante de
                <strong> Ingeniería de Software con Inteligencia Artificial</strong>.
              </p>
              <p>
                En mi trabajo me desempeño como <span className="hl">programador</span> y
                <span className="hl"> diseñador de páginas web</span>, y también brindo
                <span className="hl"> soporte técnico</span>.
              </p>
              <p>
                Actualmente estoy fortaleciendo mi perfil <strong>Fullstack</strong> con React,
                JavaScript, CSS moderno (Grid y Flexbox) y control de versiones con Git y GitHub.
              </p>
            </div>

            <ul className="perfil-datos">
              <li><span>Ubicación</span>Lima, Perú</li>
              <li><span>Enfoque</span>Frontend + IA</li>
              <li><span>Idioma</span>Español</li>
              <li><span>Estado</span><em className="estado-ok">Disponible</em></li>
            </ul>
          </div>

          {/* =====================================
              TARJETA 2: EDUCACIÓN (Línea de tiempo)
          ====================================== */}
          <div className="glow-card perfil-card reveal" style={{ '--delay': '0.12s' }}>
            <div className="card-header">
              <div className="icon-box icon-box--violet">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              {educacion.map((item) => (
                <div key={item.titulo} className={`timeline-item ${item.activo ? 'is-active' : ''}`}>
                  <div className="timeline-header">
                    <h4>{item.titulo}</h4>
                    <span className="badge">{item.badge}</span>
                  </div>
                  <span className="timeline-date">{item.lugar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================
            QUÉ HAGO
        ====================================== */}
        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <article key={s.titulo} className="glow-card servicio-card reveal" style={{ '--delay': `${i * 0.08}s` }}>
              <div className="servicio-icon">{s.icono}</div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perfil;
