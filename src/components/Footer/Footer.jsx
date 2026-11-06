import './Footer.css';
import { LogoGitHub, LogoGmail, LogoLinkedIn, LogoWhatsApp } from '../Iconos/Iconos';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL, NOMBRE_COMPLETO } from '../../data/contacto';

const redes = [
  { nombre: 'LinkedIn', url: LINKEDIN_URL, Logo: LogoLinkedIn, clase: 'is-linkedin' },
  { nombre: 'GitHub', url: GITHUB_URL, Logo: LogoGitHub, clase: 'is-github' },
  { nombre: 'WhatsApp', url: WHATSAPP_URL, Logo: LogoWhatsApp, clase: 'is-whatsapp' },
  { nombre: 'Gmail', url: `mailto:${EMAIL}`, Logo: LogoGmail, clase: 'is-gmail' },
];

const Footer = () => {
  const anio = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-line" />
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              <span className="text-dim">&lt;</span>Thair<span className="text-cyan">.dev</span><span className="text-dim">/&gt;</span>
            </a>
            <p>Software Engineer &amp; AI · Lima, Perú</p>
          </div>

          <div className="footer-center">
            <div className="footer-redes">
              {redes.map(({ nombre, url, Logo, clase }) => (
                <a
                  key={nombre}
                  href={url}
                  target={url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`footer-red ${clase}`}
                  aria-label={nombre}
                  title={nombre}
                >
                  <Logo size={18} />
                </a>
              ))}
            </div>
            <p className="footer-copy">
              © {anio} {NOMBRE_COMPLETO}. Hecho con <span className="text-gradient">React + Vite</span>.
            </p>
          </div>

          <a href="#inicio" className="footer-top" aria-label="Volver arriba">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
          </a>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Escríbeme por WhatsApp"
      >
        <LogoWhatsApp size={28} />
        <span className="whatsapp-float-tip">¿Hablamos?</span>
      </a>
    </>
  );
};

export default Footer;
