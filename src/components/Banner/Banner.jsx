import './Banner.css';
import miFoto from '../../assets/miFoto.png';
import { LogoGitHub, LogoLinkedIn, LogoWhatsApp, devicon } from '../Iconos/Iconos';
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from '../../data/contacto';

const redes = [
  { nombre: 'LinkedIn', url: LINKEDIN_URL, Logo: LogoLinkedIn },
  { nombre: 'GitHub', url: GITHUB_URL, Logo: LogoGitHub },
  { nombre: 'WhatsApp', url: WHATSAPP_URL, Logo: LogoWhatsApp },
];

// Tecnologías que se muestran en la franja de confianza
const stack = [
  { nombre: 'React', icono: devicon('react') },
  { nombre: 'JavaScript', icono: devicon('javascript') },
  { nombre: 'HTML5', icono: devicon('html5') },
  { nombre: 'CSS3', icono: devicon('css3') },
  { nombre: 'Git', icono: devicon('git') },
];

const cifras = [
  { valor: '3', texto: 'Proyectos desarrollados' },
  { valor: '8', texto: 'Certificaciones' },
  { valor: '100%', texto: 'Diseño responsive' },
];

const Banner = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        {/* ===== Columna de texto ===== */}
        <div className="hero-text">
          <span className="hero-badge hero-anim" style={{ '--i': 0 }}>
            <span className="hero-badge-dot" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="hero-title hero-anim" style={{ '--i': 1 }}>
            Páginas web profesionales que hacen <span className="text-gradient">crecer tu negocio</span>
          </h1>

          <p className="hero-lead hero-anim" style={{ '--i': 2 }}>
            Soy <strong>Thair Bazan</strong>, desarrollador web en Lima. Diseño y desarrollo
            sitios web, tiendas online y landing pages para empresas y emprendimientos:
            rápidos, adaptados a celulares y pensados para atraer clientes.
          </p>

          <div className="hero-actions hero-anim" style={{ '--i': 3 }}>
            <a href="#contacto" className="btn btn-primary">
              Solicitar cotización
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="#proyectos" className="btn btn-ghost">Ver proyectos</a>
          </div>

          <div className="hero-stack hero-anim" style={{ '--i': 4 }}>
            <span className="hero-stack-label">Trabajo con</span>
            <ul>
              {stack.map((t) => (
                <li key={t.nombre} title={t.nombre}>
                  <img src={t.icono} alt={t.nombre} width="22" height="22" />
                </li>
              ))}
            </ul>
            <span className="hero-stack-sep" aria-hidden="true" />
            <div className="hero-redes">
              {redes.map(({ nombre, url, Logo }) => (
                <a key={nombre} href={url} target="_blank" rel="noopener noreferrer" aria-label={nombre} title={nombre}>
                  <Logo size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Columna visual ===== */}
        <div className="hero-visual hero-anim" style={{ '--i': 2 }}>
          <div className="hero-photo">
            <img src={miFoto} alt="Thair Bazan Becerra, desarrollador web" />
          </div>

          <div className="hero-card hero-card--proyecto">
            <span className="hero-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <div>
              <strong>TLS Regalos Perú</strong>
              <span>Tienda online publicada</span>
            </div>
          </div>

          <div className="hero-card hero-card--ubicacion">
            <span className="hero-card-icon hero-card-icon--blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
            </span>
            <div>
              <strong>Celular, tablet y PC</strong>
              <span>Webs 100% adaptables</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cifras */}
      <div className="container">
        <ul className="hero-cifras hero-anim" style={{ '--i': 5 }}>
          {cifras.map((c) => (
            <li key={c.texto}>
              <strong>{c.valor}</strong>
              <span>{c.texto}</span>
            </li>
          ))}
          <li>
            <strong>Lima</strong>
            <span>Perú · Atención remota</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
