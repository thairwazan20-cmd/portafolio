import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Servicios from './components/Servicios/Servicios';
import Proyectos from './components/Proyectos/Proyectos';
import Perfil from './components/Perfil/Perfil';
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

  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Servicios />
        <Proyectos />
        <Perfil />
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
