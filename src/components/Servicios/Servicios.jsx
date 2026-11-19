import './Servicios.css';

// Servicios que ofrezco a empresas y emprendimientos
const servicios = [
  {
    titulo: 'Sitios web corporativos',
    texto: 'Una web profesional que presenta tu empresa, tus servicios y genera confianza en tus clientes.',
    puntos: ['Diseño a medida', 'Formulario y WhatsApp', 'Optimizada para Google'],
    icono: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
  {
    titulo: 'Tiendas y catálogos online',
    texto: 'Muestra tus productos con fotos, precios y pedidos directos por WhatsApp para vender más.',
    puntos: ['Catálogo visual', 'Pedidos por WhatsApp', 'Fácil de actualizar'],
    icono: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
    ),
  },
  {
    titulo: 'Landing pages',
    texto: 'Páginas enfocadas en una campaña, producto o servicio, diseñadas para convertir visitas en clientes.',
    puntos: ['Carga rápida', 'Llamados a la acción', 'Ideal para anuncios'],
    icono: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    ),
  },
  {
    titulo: 'Mantenimiento y soporte',
    texto: 'Actualizo contenidos, corrijo errores y mantengo tu web y tus equipos funcionando correctamente.',
    puntos: ['Cambios y mejoras', 'Publicación en internet', 'Soporte técnico'],
    icono: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    ),
  },
];

// Proceso de trabajo con el cliente
const proceso = [
  { paso: '01', titulo: 'Reunión', texto: 'Conversamos sobre tu negocio, tus objetivos y lo que necesitas en tu web.' },
  { paso: '02', titulo: 'Diseño', texto: 'Preparo una propuesta visual con tu marca y la ajustamos hasta que te guste.' },
  { paso: '03', titulo: 'Desarrollo', texto: 'Construyo la web adaptada a celulares, rápida y lista para tus clientes.' },
  { paso: '04', titulo: 'Entrega', texto: 'Publico tu web en internet y te acompaño con soporte y mejoras.' },
];

const Servicios = () => {
  return (
    <section id="servicios" className="section servicios-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">
            Soluciones web para <span className="text-gradient">tu negocio</span>
          </h2>
          <p className="section-subtitle">
            Desarrollo páginas a medida para empresas y emprendimientos que quieren
            tener presencia profesional en internet y conseguir más clientes.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <article key={s.titulo} className="glow-card servicio-card reveal" style={{ '--delay': `${i * 0.08}s` }}>
              <div className="servicio-icon">{s.icono}</div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <ul className="servicio-puntos">
                {s.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Proceso de trabajo */}
        <div className="proceso reveal">
          <div className="proceso-head">
            <h3>¿Cómo trabajamos?</h3>
            <p>Un proceso simple y transparente, de la idea a tu web publicada.</p>
          </div>
          <ol className="proceso-pasos">
            {proceso.map((p) => (
              <li key={p.paso}>
                <span className="proceso-num">{p.paso}</span>
                <h4>{p.titulo}</h4>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
