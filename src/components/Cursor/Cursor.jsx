import { useEffect, useRef } from 'react';
import './Cursor.css';

// Cursor personalizado: un punto que sigue al mouse exactamente
// y un anillo que lo persigue con inercia. Crece sobre enlaces/botones.
const Cursor = () => {
  const puntoRef = useRef(null);
  const anilloRef = useRef(null);

  useEffect(() => {
    // Sólo en dispositivos con mouse (no en celulares/tablets)
    const tieneMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!tieneMouse) return;

    document.body.classList.add('has-custom-cursor');

    const punto = puntoRef.current;
    const anillo = anilloRef.current;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...mouse };
    let frame;

    const mover = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      punto.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      punto.classList.add('visible');
      anillo.classList.add('visible');

      const interactivo = e.target.closest?.('a, button, [role="button"], .cursor-hover');
      const texto = e.target.closest?.('input, textarea');
      anillo.classList.toggle('hover', Boolean(interactivo));
      punto.classList.toggle('hover', Boolean(interactivo));
      anillo.classList.toggle('text', Boolean(texto));
    };

    const animar = () => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      anillo.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = requestAnimationFrame(animar);
    };

    const presionar = () => anillo.classList.add('down');
    const soltar = () => anillo.classList.remove('down');
    const salir = () => {
      punto.classList.remove('visible');
      anillo.classList.remove('visible');
    };

    window.addEventListener('pointermove', mover, { passive: true });
    window.addEventListener('pointerdown', presionar);
    window.addEventListener('pointerup', soltar);
    document.documentElement.addEventListener('pointerleave', salir);
    frame = requestAnimationFrame(animar);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', mover);
      window.removeEventListener('pointerdown', presionar);
      window.removeEventListener('pointerup', soltar);
      document.documentElement.removeEventListener('pointerleave', salir);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={anilloRef} className="cursor-ring" aria-hidden="true" />
      <div ref={puntoRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default Cursor;
