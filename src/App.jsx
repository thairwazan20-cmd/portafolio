import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Servicios from './components/Servicios/Servicios';
import Proyectos from './components/Proyectos/Proyectos';
import Perfil from './components/Perfil/Perfil';
import Personalidad from './components/Personalidad/Personalidad';
import Experiencia from './components/Experiencia/Experiencia';
import Habilidades from './components/Habilidades/Habilidades';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './index.css';
import './App.css';

function App() {
  // 1. Animaciones al hacer scroll: añade .is-visible a cada elemento .reveal
  useEffect(() => {
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
  }, []);

  // 2. Brillo suave que sigue al mouse en las tarjetas .glow-card
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

  // 3. Luz de colores que sigue al mouse por toda la página
  useEffect(() => {
    let frame = 0;
    const moverLuz = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cx', `${e.clientX}px`);
        document.documentElement.style.setProperty('--cy', `${e.clientY}px`);
      });
    };
    window.addEventListener('pointermove', moverLuz, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', moverLuz);
    };
  }, []);

  return (
    <>
      {/* Fondo de luces de colores */}
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
      <div className="luz-cursor" aria-hidden="true" />

      <Navbar />
      <main>
        <Banner />
        <Servicios />
        <Proyectos />
        <Perfil />
        <Personalidad />
        <Experiencia />
        <Habilidades />
        <Certificados />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
