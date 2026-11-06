import './Footer.css';

const Footer = () => {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <span className="text-dim">&lt;</span>Thair<span className="text-cyan">.dev</span><span className="text-dim">/&gt;</span>
          </a>
          <p>Software Engineer &amp; AI · Lima, Perú</p>
        </div>

        <p className="footer-copy">
          © {anio} Thair Bazan Becerra. Diseñado y desarrollado con <span className="text-gradient">React + Vite</span>.
        </p>

        <a href="#inicio" className="footer-top" aria-label="Volver arriba">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
