import { useState } from 'react';
import './Contacto.css';

// ⚠️ Cambia este correo por el tuyo: se usa en la tarjeta y en el envío del formulario
const EMAIL = 'tu-correo@email.com';
const GITHUB_URL = 'https://github.com/thairwazan20-cmd';

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [copiado, setCopiado] = useState(false);

  // Función para manejar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Envío: abre el cliente de correo con el mensaje ya redactado
  const manejarEnvio = (e) => {
    e.preventDefault();
    const asunto = encodeURIComponent(`Contacto desde el portafolio — ${formulario.nombre}`);
    const cuerpo = encodeURIComponent(
      `${formulario.mensaje}\n\n— ${formulario.nombre} (${formulario.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`;

    setEnviado(true);
    setTimeout(() => setEnviado(false), 4500);
    // Limpiamos el formulario después de enviar
    setFormulario({ nombre: '', email: '', mensaje: '' });
  };

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* el navegador no permitió copiar: no pasa nada */
    }
  };

  return (
    <section id="contacto" className="section contacto-section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-eyebrow">05 · Contacto</span>
          <h2 className="section-title">
            Trabajemos <span className="text-gradient">juntos</span>
          </h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente o necesitas ayuda con tu página web? Me encantaría escucharte.
          </p>
        </div>

        <div className="contacto-grid">
          {/* =====================================
              COLUMNA IZQUIERDA: INFORMACIÓN
          ====================================== */}
          <div className="contacto-info reveal">
            <div className="info-terminal">
              <div className="info-terminal-bar">
                <span /><span /><span />
                <em>contacto.sh</em>
              </div>
              <div className="info-terminal-body">
                <p><span className="prompt">$</span> whoami</p>
                <p className="out">Thair Bazan · Software Engineer &amp; AI</p>
                <p><span className="prompt">$</span> status</p>
                <p className="out ok">● Abierto a prácticas, freelance y colaboraciones</p>
                <p><span className="prompt">$</span> <span className="cursor-blink">_</span></p>
              </div>
            </div>

            <div className="info-items">
              {/* Ítem Email */}
              <button type="button" className="glow-card info-item" onClick={copiarEmail}>
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email {copiado ? '· ¡Copiado!' : '· clic para copiar'}</span>
                  <p className="item-text">{EMAIL}</p>
                </div>
              </button>

              {/* Ítem GitHub */}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="glow-card info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">GitHub</span>
                  <p className="item-text">thairwazan20-cmd</p>
                </div>
              </a>

              {/* Ítem Ubicación */}
              <div className="glow-card info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima - Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              COLUMNA DERECHA: FORMULARIO
          ====================================== */}
          <div className="glow-card contacto-form-wrapper reveal" style={{ '--delay': '0.12s' }}>
            <form onSubmit={manejarEnvio} className="contacto-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    placeholder=" "
                    autoComplete="name"
                    required
                  />
                  <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formulario.email}
                    onChange={manejarCambio}
                    placeholder=" "
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder=" "
                  rows="6"
                  maxLength={1000}
                  required
                ></textarea>
                <label htmlFor="mensaje">Cuéntame sobre tu proyecto...</label>
                <span className="char-count">{formulario.mensaje.length}/1000</span>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Enviar Mensaje
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notificación de envío */}
      <div className={`toast ${enviado ? 'show' : ''}`} role="status" aria-live="polite">
        <span className="toast-icon">✓</span>
        ¡Gracias por tu mensaje! Te contactaré pronto.
      </div>
    </section>
  );
};

export default Contacto;
