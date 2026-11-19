import './Perfil.css';
import miFoto from '../../assets/miFoto.png';
import { LogoGitHub, LogoLinkedIn, LogoWhatsApp, LogoGmail } from '../Iconos/Iconos';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL, UBICACION } from '../../data/contacto';

const redesPerfil = [
  { nombre: 'LinkedIn', url: LINKEDIN_URL, Logo: LogoLinkedIn, clase: 'is-linkedin' },
  { nombre: 'GitHub', url: GITHUB_URL, Logo: LogoGitHub, clase: 'is-github' },
  { nombre: 'WhatsApp', url: WHATSAPP_URL, Logo: LogoWhatsApp, clase: 'is-whatsapp' },
  { nombre: 'Gmail', url: `mailto:${EMAIL}`, Logo: LogoGmail, clase: 'is-gmail' },
];

// Formación académica
const educacion = [
  {
    titulo: 'Ingeniería de Software con IA',
    lugar: 'SENATI',
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
  {
    titulo: 'Inglés — Básico 10',
    lugar: 'IPCNA',
    badge: 'Idiomas',
    activo: false,
  },
  {
    titulo: 'Educación Primaria y Secundaria',
    lugar: 'Colegio Johannes Gutenberg',
    badge: 'Concluida 2024',
    activo: false,
  },
];

const Perfil = () => {
  return (
    <section id="sobre-mi" className="section sobre-mi-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Sobre mí</span>
          <h2 className="section-title">
            Compromiso con cada <span className="text-gradient">proyecto</span>
          </h2>
        </div>

        <div className="sobre-mi-grid">
          {/* =====================================
              TARJETA DE PRESENTACIÓN CON FOTO
          ====================================== */}
          <aside className="id-card reveal">
            <div className="id-photo">
              <img src={miFoto} alt="Thair Bazan Becerra" loading="lazy" />
            </div>

            <div className="id-info">
              <h3>Thair Bazan Becerra</h3>
              <p className="id-rol">Desarrollador Web · Ingeniería de Software con IA</p>
              <p className="id-ubicacion">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {UBICACION}
              </p>

              <div className="id-redes">
                {redesPerfil.map(({ nombre, url, Logo, clase }) => (
                  <a
                    key={nombre}
                    href={url}
                    target={url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`id-red ${clase}`}
                    aria-label={nombre}
                    title={nombre}
                  >
                    <Logo size={18} />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="sobre-mi-col">
            {/* =====================================
                PERFIL PROFESIONAL
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
                  Soy <strong>Thair Bazan Becerra</strong>, desarrollador web y estudiante de
                  <strong> Ingeniería de Software con Inteligencia Artificial</strong> en
                  <strong> SENATI</strong>.
                </p>
                <p>
                  Ayudo a negocios a tener una <span className="hl">presencia profesional en internet</span>,
                  como la tienda online que desarrollé para <span className="hl">TLS Regalos Perú</span>.
                  Mi experiencia en <span className="hl">atención al cliente</span> me permite entender
                  lo que cada negocio necesita y comunicarme con claridad.
                </p>
                <p>
                  Trabajo con React, JavaScript, HTML y CSS, y uso Git y GitHub para
                  entregar proyectos ordenados y fáciles de mantener.
                </p>
              </div>

              <ul className="perfil-datos">
                <li><span>Ubicación</span>{UBICACION}</li>
                <li><span>Especialidad</span>Desarrollo web</li>
                <li><span>Idiomas</span>Español · Inglés básico</li>
                <li><span>Estado</span><em className="estado-ok">Disponible</em></li>
              </ul>
            </div>

            {/* =====================================
                EDUCACIÓN (Línea de tiempo)
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
        </div>
      </div>
    </section>
  );
};

export default Perfil;
