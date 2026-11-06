import { useRef, useState } from 'react';
import './Contacto.css';
import { LogoGitHub, LogoGmail, LogoLinkedIn, LogoWhatsApp, IconoTelefono, IconoUbicacion } from '../Iconos/Iconos';
import { EMAIL, TELEFONO, WHATSAPP_URL, LINKEDIN_URL, GITHUB_URL, UBICACION } from '../../data/contacto';

// Canales de contacto (se recorren con .map())
const canales = [
  { id: 'email', etiqueta: 'Email', valor: EMAIL, url: `mailto:${EMAIL}`, Icono: LogoGmail, clase: 'is-gmail', copiable: true },
  { id: 'whatsapp', etiqueta: 'WhatsApp', valor: TELEFONO, url: WHATSAPP_URL, Icono: LogoWhatsApp, clase: 'is-whatsapp' },
  { id: 'telefono', etiqueta: 'Teléfono', valor: TELEFONO, url: `tel:${TELEFONO.replace(/\s/g, '')}`, Icono: IconoTelefono, clase: 'is-phone' },
  { id: 'linkedin', etiqueta: 'LinkedIn', valor: 'Thair Bazán Becerra', url: LINKEDIN_URL, Icono: LogoLinkedIn, clase: 'is-linkedin' },
  { id: 'github', etiqueta: 'GitHub', valor: 'thairwazan20-cmd', url: GITHUB_URL, Icono: LogoGitHub, clase: 'is-github' },
  { id: 'ubicacion', etiqueta: 'Ubicación', valor: UBICACION, url: null, Icono: IconoUbicacion, clase: 'is-location' },
];

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [toast, setToast] = useState({ texto: '', visible: false });
  const [copiado, setCopiado] = useState(false);
  const formRef = useRef(null);

  // Función para manejar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const mostrarToast = (texto) => {
    setToast({ texto, visible: true });
    // Sólo ocultamos (mantenemos el texto para que no desaparezca durante la animación de salida)
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4500);
  };

  const limpiar = () => setFormulario({ nombre: '', email: '', mensaje: '' });

  // Opción 1: enviar por correo (abre el cliente de correo con el mensaje redactado)
  const manejarEnvio = (e) => {
    e.preventDefault();
    const asunto = encodeURIComponent(`Contacto desde el portafolio — ${formulario.nombre}`);
    const cuerpo = encodeURIComponent(
      `${formulario.mensaje}\n\n— ${formulario.nombre} (${formulario.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`;
    mostrarToast('¡Gracias por tu mensaje! Te contactaré pronto.');
    limpiar();
  };

  // Opción 2: enviar por WhatsApp (valida el formulario y abre el chat)
  const enviarWhatsApp = () => {
    if (!formRef.current.reportValidity()) return;
    const texto = encodeURIComponent(
      `Hola Thair, soy ${formulario.nombre} (${formulario.email}).\n\n${formulario.mensaje}`
    );
    window.open(`${WHATSAPP_URL}?text=${texto}`, '_blank', 'noopener,noreferrer');
    mostrarToast('Abriendo WhatsApp… ¡gracias por escribirme!');
    limpiar();
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
                <p className="out">Thair Bazan Becerra · Software Engineer &amp; AI</p>
                <p><span className="prompt">$</span> status</p>
                <p className="out ok">● Abierto a prácticas, freelance y colaboraciones</p>
                <p><span className="prompt">$</span> <span className="cursor-blink">_</span></p>
              </div>
            </div>

            <div className="info-items">
              {canales.map(({ id, etiqueta, valor, url, Icono, clase, copiable }) => {
                const contenido = (
                  <>
                    <div className="info-icon"><Icono size={20} /></div>
                    <div className="info-texto">
                      <span className="item-label">{etiqueta}</span>
                      <p className="item-text">{valor}</p>
                    </div>
                    {url && (
                      <svg className="info-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    )}
                  </>
                );

                return (
                  <div key={id} className={`glow-card info-item ${clase}`}>
                    {url ? (
                      <a
                        href={url}
                        className="info-link"
                        target={url.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {contenido}
                      </a>
                    ) : (
                      <div className="info-link">{contenido}</div>
                    )}
                    {copiable && (
                      <button type="button" className="info-copy" onClick={copiarEmail} aria-label="Copiar correo">
                        {copiado ? '✓ Copiado' : 'Copiar'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================
              COLUMNA DERECHA: FORMULARIO
          ====================================== */}
          <div className="glow-card contacto-form-wrapper reveal" style={{ '--delay': '0.12s' }}>
            <h3 className="form-title">Envíame un mensaje</h3>
            <p className="form-desc">Elige si prefieres enviarlo por correo o por WhatsApp.</p>

            <form ref={formRef} onSubmit={manejarEnvio} className="contacto-form">
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

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-submit">
                  <LogoGmail size={18} />
                  Enviar por correo
                </button>
                <button type="button" className="btn btn-whatsapp" onClick={enviarWhatsApp}>
                  <LogoWhatsApp size={18} />
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Notificación de envío */}
      <div className={`toast ${toast.visible ? 'show' : ''}`} role="status" aria-live="polite">
        <span className="toast-icon">✓</span>
        {toast.texto}
      </div>
    </section>
  );
};

export default Contacto;
