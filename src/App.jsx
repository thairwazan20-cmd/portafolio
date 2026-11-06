import { useCallback, useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './index.css';
import './App.css';

function App() {
  const [cargando, setCargando] = useState(true);
  const terminarCarga = useCallback(() => setCargando(false), []);

  // 1. Animaciones al hacer scroll: añade .is-visible a cada elemento .reveal
  useEffect(() => {
    if (cargando) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [cargando]);

  // 2. Brillo que sigue al mouse en todas las tarjetas .glow-card
  useEffect(() => {
    const moverBrillo = (e) => {
      const card = e.target.closest?.('.glow-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', moverBrillo, { passive: true });
    return () => window.removeEventListener('pointermove', moverBrillo);
  }, []);

  return (
    <>
      {cargando && <Preloader onFinish={terminarCarga} />}
      <Cursor />
      <Navbar />
      <main>
        <Banner listo={!cargando} />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Certificados />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
