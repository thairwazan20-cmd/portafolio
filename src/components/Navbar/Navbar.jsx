import { useEffect, useState } from 'react';
import './Navbar.css';

const enlaces = [
  { id: 'sobre-mi', texto: 'Perfil', num: '01' },
  { id: 'tech-stack', texto: 'Tech Stack', num: '02' },
  { id: 'proyectos', texto: 'Proyectos', num: '03' },
  { id: 'certificados', texto: 'Certificados', num: '04' },
  { id: 'contacto', texto: 'Contacto', num: '05' },
];

const Navbar = () => {
  // Estado para controlar el menú hamburguesa en móviles
  const [isOpen, setIsOpen] = useState(false);
  // Navbar compacta al hacer scroll + barra de progreso
  const [scrolled, setScrolled] = useState(false);
  const [progreso, setProgreso] = useState(0);
  // Sección visible actualmente (resalta el enlace activo)
  const [activo, setActivo] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 30);
      setProgreso(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivo(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    enlaces.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-progress" style={{ width: `${progreso}%` }} />

      <nav className="navbar-inner">
        {/* Logo */}
        <a href="#inicio" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Thair</span>
          <span className="logo-dot">.dev</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Enlaces de Navegación */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {enlaces.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activo === link.id ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              <span className="link-num">{link.num}.</span>
              {link.texto}
            </a>
          ))}
          <a href="#contacto" className="navbar-cta" onClick={() => setIsOpen(false)}>
            Hablemos
          </a>
        </div>

        {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
