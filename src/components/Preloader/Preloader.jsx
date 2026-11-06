import { useEffect, useState } from 'react';
import './Preloader.css';

// Líneas que se "imprimen" como si fuera la consola arrancando el sistema
const lineas = [
  '> inicializando thair.dev ...',
  '> cargando modelos de IA ........ OK',
  '> compilando componentes React .. OK',
  '> listo. bienvenido_',
];

const Preloader = ({ onFinish }) => {
  const [visibles, setVisibles] = useState(0);
  const [saliendo, setSaliendo] = useState(false);

  useEffect(() => {
    const timers = lineas.map((_, i) =>
      setTimeout(() => setVisibles(i + 1), 250 + i * 320)
    );
    const total = 250 + lineas.length * 320 + 250;
    timers.push(setTimeout(() => setSaliendo(true), total));
    timers.push(setTimeout(() => onFinish(), total + 600));
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  const progreso = Math.round((visibles / lineas.length) * 100);

  return (
    <div className={`preloader ${saliendo ? 'preloader--out' : ''}`} aria-hidden="true">
      <div className="preloader-box">
        <div className="preloader-logo">
          <span className="text-gradient">&lt;Thair /&gt;</span>
        </div>
        <div className="preloader-terminal">
          {lineas.slice(0, visibles).map((linea) => (
            <p key={linea}>{linea}</p>
          ))}
        </div>
        <div className="preloader-bar">
          <span style={{ width: `${progreso}%` }} />
        </div>
        <span className="preloader-pct">{progreso}%</span>
      </div>
    </div>
  );
};

export default Preloader;
