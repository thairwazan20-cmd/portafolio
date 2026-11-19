import './Experiencia.css';

// Experiencia laboral (de la más reciente a la más antigua)
const experiencia = [
  {
    cargo: 'Multifuncional Part Time',
    empresa: 'Mass',
    duracion: '~3 meses',
    funciones: [
      'Atención al cliente en tienda y en caja.',
      'Reposición, orden y exhibición de productos.',
      'Apoyo en distintas áreas de la tienda según la necesidad del día.',
    ],
  },
  {
    cargo: 'Ventas y Atención al Cliente',
    empresa: 'Sip',
    duracion: '1 mes y medio',
    funciones: [
      'Atención y asesoría a clientes para encontrar el producto adecuado.',
      'Venta de productos y seguimiento de las consultas de los clientes.',
    ],
  },
];

// Habilidades blandas
const blandas = [
  { nombre: 'Trabajo en equipo', icono: '🤝' },
  { nombre: 'Atención al cliente', icono: '💬' },
  { nombre: 'Responsabilidad y puntualidad', icono: '⏱️' },
  { nombre: 'Adaptabilidad', icono: '🔄' },
  { nombre: 'Comunicación', icono: '🗣️' },
  { nombre: 'Autoaprendizaje', icono: '📚' },
];

// Idiomas
const idiomas = [
  { idioma: 'Español', nivel: 'Nativo', detalle: 'Lengua materna', porcentaje: 100 },
  { idioma: 'Inglés', nivel: 'Básico', detalle: 'Básico 10 · IPCNA', porcentaje: 35 },
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="section experiencia-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">02 · Experiencia</span>
          <h2 className="section-title">
            Experiencia y <span className="text-gradient">habilidades</span>
          </h2>
          <p className="section-subtitle">
            Mi experiencia laboral me ha enseñado a trabajar en equipo, atender a las personas
            y adaptarme rápido a nuevos entornos.
          </p>
        </div>

        <div className="experiencia-grid">
          {/* =====================================
              EXPERIENCIA LABORAL
          ====================================== */}
          <div className="glow-card perfil-card reveal">
            <div className="card-header">
              <div className="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Experiencia laboral</h3>
            </div>

            <div className="timeline">
              {experiencia.map((trabajo) => (
                <div key={trabajo.empresa} className="timeline-item">
                  <div className="timeline-header">
                    <h4>{trabajo.cargo}</h4>
                    <span className="badge">{trabajo.duracion}</span>
                  </div>
                  <span className="timeline-date">{trabajo.empresa}</span>
                  <ul className="exp-funciones">
                    {trabajo.funciones.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="experiencia-col">
            {/* =====================================
                HABILIDADES BLANDAS
            ====================================== */}
            <div className="glow-card perfil-card reveal" style={{ '--delay': '0.12s' }}>
              <div className="card-header">
                <div className="icon-box icon-box--violet">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Habilidades blandas</h3>
              </div>

              <ul className="blandas-lista">
                {blandas.map((b) => (
                  <li key={b.nombre} className="blanda-chip">
                    <span aria-hidden="true">{b.icono}</span>
                    {b.nombre}
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================
                IDIOMAS
            ====================================== */}
            <div className="glow-card perfil-card reveal" style={{ '--delay': '0.2s' }}>
              <div className="card-header">
                <div className="icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Idiomas</h3>
              </div>

              <div className="idiomas-lista">
                {idiomas.map((i) => (
                  <div key={i.idioma} className="idioma">
                    <div className="idioma-top">
                      <strong>{i.idioma}</strong>
                      <span className="badge">{i.nivel}</span>
                    </div>
                    <span className="timeline-date">{i.detalle}</span>
                    <div className="skill-bar">
                      <span style={{ width: `${i.porcentaje}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
