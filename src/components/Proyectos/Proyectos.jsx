import './Proyectos.css';
import imgTLS from '../../assets/proyecto-tls.png';
import imgPortafolio from '../../assets/proyecto-portafolio.png';
import imgMatricula from '../../assets/proyecto-matricula.png';

// Arreglo de proyectos (Simulando una base de datos o API)
// Reemplaza las imágenes por capturas de pantalla de tus proyectos reales
const proyectosData = [
  {
    id: 1,
    imagen: imgTLS,
    titulo: 'Tienda Online - TLS Regalos Perú',
    categoria: 'Proyecto para cliente · E-commerce',
    descripcion: 'El negocio necesitaba mostrar sus regalos personalizados (photobooks, cuadros y boxes) fuera de redes sociales. Desarrollé una tienda web con catálogo visual, diseño adaptado a celulares y publicación en Vercel.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    linkDemo: 'https://true-love-store-web.vercel.app',
    linkCodigo: 'https://github.com/thairwazan20-cmd/TRUE-LOVE-STORE-_WEB',
    url: 'true-love-store-web.vercel.app',
  },
  {
    id: 2,
    imagen: imgPortafolio,
    titulo: 'Portafolio Web Personal',
    categoria: 'Sitio web profesional · React',
    descripcion: 'Este mismo sitio: presentación de servicios, proyectos y experiencia, con diseño responsive, formulario de contacto conectado a correo y WhatsApp, y publicación en Vercel.',
    tecnologias: ['React', 'Vite', 'CSS3', 'Vercel'],
    linkDemo: 'https://portafolio-one-beige-65.vercel.app',
    linkCodigo: 'https://github.com/thairwazan20-cmd/portafolio',
    url: 'portafolio-one-beige-65.vercel.app',
  },
  {
    id: 3,
    imagen: imgMatricula,
    titulo: 'Sistema de Matrícula',
    categoria: 'Proyecto académico · App web',
    descripcion: 'Directorio de alumnos para gestionar matrículas, con datos que se actualizan al instante gracias a los componentes y el estado de React.',
    tecnologias: ['React', 'Bootstrap', 'JavaScript'],
    linkDemo: '#',
    linkCodigo: '#',
    url: 'matricula.app',
  },
];

const IconoExterno = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const IconoGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Botón de enlace: si todavía no hay URL ('#'), se muestra deshabilitado
const BotonProyecto = ({ href, clase, children }) => {
  if (!href || href === '#') {
    return (
      <span className={`btn-proyecto ${clase} is-disabled`} title="Próximamente">
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-proyecto ${clase}`}>
      {children}
    </a>
  );
};

const Proyectos = () => {
  return (
    <section id="proyectos" className="section proyectos-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Portafolio</span>
          <h2 className="section-title">
            Proyectos <span className="text-gradient">destacados</span>
          </h2>
          <p className="section-subtitle">
            Trabajos para clientes y proyectos propios: cada uno resuelve una necesidad real.
          </p>
        </div>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto, i) => (
            <article
              key={proyecto.id}
              className="glow-card proyecto-card reveal"
              style={{ '--delay': `${i * 0.12}s` }}
            >
              {/* 1. Imagen del Proyecto dentro de un "navegador" */}
              <div className="proyecto-browser">
                <div className="browser-bar">
                  <span className="browser-dots"><i /><i /><i /></span>
                  <span className="browser-url">{proyecto.url}</span>
                </div>
                <div className="proyecto-imagen">
                  <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} loading="lazy" />
                  <span className="proyecto-num">0{proyecto.id}</span>
                </div>
              </div>

              {/* 2. Contenido de la Tarjeta */}
              <div className="proyecto-contenido">
                <span className="proyecto-cat">{proyecto.categoria}</span>
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* 4. Botones de Acción */}
                <div className="proyecto-links">
                  <BotonProyecto href={proyecto.linkDemo} clase="btn-demo">
                    <IconoExterno /> Demo en Vivo
                  </BotonProyecto>
                  <BotonProyecto href={proyecto.linkCodigo} clase="btn-codigo">
                    <IconoGithub /> Ver Código
                  </BotonProyecto>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="proyectos-mas reveal">
          <a href="https://github.com/thairwazan20-cmd" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Ver más en GitHub
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
