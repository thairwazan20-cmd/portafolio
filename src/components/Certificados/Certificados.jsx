import { useCallback, useEffect, useState } from 'react';
import './Certificados.css';
import imgHardware from '../../assets/certificados/cert-hardware.png';
import imgIotCisco from '../../assets/certificados/cert-iot-cisco.png';
import imgIotSenati from '../../assets/certificados/cert-iot-senati.png';
import imgCiberCisco from '../../assets/certificados/cert-ciber-cisco.png';
import imgCiberSenati from '../../assets/certificados/cert-ciber-senati.png';
import imgDatos from '../../assets/certificados/cert-datos.png';
import imgPython from '../../assets/certificados/cert-python.png';
import imgRedes from '../../assets/certificados/cert-redes.png';

const certificadosData = [
  { id: 1, titulo: 'Conceptos Básicos de Hardware de Computadora', emisor: 'Cisco', area: 'Hardware', imagen: imgHardware },
  { id: 2, titulo: 'Introducción al Internet de las Cosas', emisor: 'Cisco', area: 'IoT', imagen: imgIotCisco },
  { id: 3, titulo: 'Introducción al Internet de las Cosas', emisor: 'SENATI', area: 'IoT', imagen: imgIotSenati },
  { id: 4, titulo: 'Introducción a Ciberseguridad', emisor: 'Cisco', area: 'Seguridad', imagen: imgCiberCisco },
  { id: 5, titulo: 'Introducción a Ciberseguridad', emisor: 'SENATI', area: 'Seguridad', imagen: imgCiberSenati },
  { id: 6, titulo: 'Introducción a la Ciencia de Datos', emisor: 'Cisco', area: 'Datos & IA', imagen: imgDatos },
  { id: 7, titulo: 'Fundamentos de Python 1', emisor: 'Cisco', area: 'Programación', imagen: imgPython },
  { id: 8, titulo: 'Conceptos Básicos de Redes', emisor: 'Cisco', area: 'Redes', imagen: imgRedes },
];

const Certificados = () => {
  // Guardamos el índice del certificado abierto (null = visor cerrado)
  const [seleccionado, setSeleccionado] = useState(null);
  const total = certificadosData.length;

  const cerrar = useCallback(() => setSeleccionado(null), []);
  const siguiente = useCallback(() => setSeleccionado((i) => (i + 1) % total), [total]);
  const anterior = useCallback(() => setSeleccionado((i) => (i - 1 + total) % total), [total]);

  // Teclado (Esc, ←, →) y bloqueo de scroll mientras el visor está abierto
  useEffect(() => {
    if (seleccionado === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') cerrar();
      if (e.key === 'ArrowRight') siguiente();
      if (e.key === 'ArrowLeft') anterior();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [seleccionado, cerrar, siguiente, anterior]);

  const actual = seleccionado !== null ? certificadosData[seleccionado] : null;

  return (
    <section id="certificados" className="section certificados-section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-eyebrow">04 · Certificaciones</span>
          <h2 className="section-title">
            Aprendizaje <span className="text-gradient">certificado</span>
          </h2>
          <p className="section-subtitle">
            Cursos de Cisco Networking Academy y SENATI en hardware, redes, IoT,
            ciberseguridad, ciencia de datos y Python.
          </p>
        </div>

        <div className="certificados-grid">
          {certificadosData.map((cert, i) => (
            <button
              key={cert.id}
              type="button"
              className="glow-card certificado-card reveal"
              style={{ '--delay': `${(i % 4) * 0.08}s` }}
              onClick={() => setSeleccionado(i)}
              aria-label={`Ver certificado: ${cert.titulo} (${cert.emisor})`}
            >
              <div className="certificado-thumb">
                <img src={cert.imagen} alt="" loading="lazy" className="certificado-img" />
                <span className="certificado-ver">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                  Ver certificado
                </span>
              </div>
              <div className="certificado-info">
                <div className="certificado-meta">
                  <span className={`emisor emisor--${cert.emisor.toLowerCase()}`}>{cert.emisor}</span>
                  <span className="area">{cert.area}</span>
                </div>
                <h3 className="certificado-titulo">{cert.titulo}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Visor de certificados (lightbox) */}
      {actual && (
        <div className="certificado-modal" onClick={cerrar} role="dialog" aria-modal="true" aria-label={actual.titulo}>
          <button className="modal-btn modal-cerrar" onClick={cerrar} aria-label="Cerrar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <button className="modal-btn modal-prev" onClick={(e) => { e.stopPropagation(); anterior(); }} aria-label="Anterior">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="modal-btn modal-next" onClick={(e) => { e.stopPropagation(); siguiente(); }} aria-label="Siguiente">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          <figure className="modal-figure" onClick={(e) => e.stopPropagation()} key={actual.id}>
            <img src={actual.imagen} alt={`Certificado: ${actual.titulo}`} />
            <figcaption>
              <span>{actual.titulo} · <em>{actual.emisor}</em></span>
              <span className="modal-count">{seleccionado + 1} / {total}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Certificados;
