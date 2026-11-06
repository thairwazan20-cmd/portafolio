import { useEffect, useRef } from 'react';

// Fondo animado tipo "red neuronal": nodos que flotan y se conectan
// con líneas cuando están cerca. El mouse atrae conexiones.
const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999 };
    const DIST = 140;
    let nodos = [];
    let ancho = 0;
    let alto = 0;
    let frame;
    let visible = true;

    const redimensionar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = canvas.offsetWidth;
      alto = canvas.offsetHeight;
      canvas.width = ancho * dpr;
      canvas.height = alto * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cantidad = Math.min(110, Math.floor((ancho * alto) / 14000));
      nodos = Array.from({ length: cantidad }, () => ({
        x: Math.random() * ancho,
        y: Math.random() * alto,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const dibujar = () => {
      ctx.clearRect(0, 0, ancho, alto);

      for (const n of nodos) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > ancho) n.vx *= -1;
        if (n.y < 0 || n.y > alto) n.vy *= -1;
      }

      for (let i = 0; i < nodos.length; i++) {
        const a = nodos[i];
        for (let j = i + 1; j < nodos.length; j++) {
          const b = nodos[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < DIST) {
            ctx.strokeStyle = `rgba(103, 232, 249, ${(1 - d / DIST) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Conexiones con el mouse
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < DIST * 1.4) {
          ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - dm / (DIST * 1.4)) * 0.55})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = dm < DIST * 1.4 ? 'rgba(196, 181, 253, 0.95)' : 'rgba(103, 232, 249, 0.7)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (visible) dibujar();
      frame = requestAnimationFrame(loop);
    };

    const moverMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const salirMouse = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Pausa la animación cuando el hero no está en pantalla (ahorra batería)
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    redimensionar();
    if (reducirMovimiento) {
      dibujar();
    } else {
      frame = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', redimensionar);
    window.addEventListener('pointermove', moverMouse, { passive: true });
    document.documentElement.addEventListener('pointerleave', salirMouse);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', redimensionar);
      window.removeEventListener('pointermove', moverMouse);
      document.documentElement.removeEventListener('pointerleave', salirMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
};

export default NeuralCanvas;
