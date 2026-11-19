import './Personalidad.css';

// Cómo soy: rasgos de mi personalidad
const rasgos = [
  { emoji: '😄', titulo: 'Alegre', texto: 'Trabajo con buena energía y contagio entusiasmo en cada proyecto.' },
  { emoji: '🎨', titulo: 'Creativo', texto: 'Busco que cada página sea única, con colores y detalles que sorprendan.' },
  { emoji: '🕊️', titulo: 'Pensamiento libre', texto: 'Me gusta salir de lo común y probar ideas nuevas sin miedo.' },
  { emoji: '💡', titulo: 'Lleno de ideas', texto: 'Siempre tengo algo nuevo en mente para mejorar lo que hago.' },
];

// Lo que me gusta fuera del código
const intereses = [
  { emoji: '🎮', titulo: 'Videojuegos', texto: 'Me inspiran a crear experiencias interactivas y divertidas.', color: 'morado' },
  { emoji: '🎵', titulo: 'Música', texto: 'Me acompaña mientras programo y me da ritmo para crear.', color: 'rosa' },
  { emoji: '🏆', titulo: 'Deporte', texto: 'Me enseña disciplina, constancia y trabajo en equipo.', color: 'naranja' },
  { emoji: '🖌️', titulo: 'Diseño y arte', texto: 'Me motivan a cuidar cada color, forma y detalle.', color: 'amarillo' },
];

// Burbujas de ideas que flotan en el fondo de la sección
const burbujas = ['💡', '✨', '🚀', '🎨', '🎮', '🎵', '⚡', '🌈'];

const Personalidad = () => {
  return (
    <section id="personalidad" className="section personalidad-section">
      <div className="burbujas" aria-hidden="true">
        {burbujas.map((b, i) => (
          <span key={i} style={{ '--i': i }}>{b}</span>
        ))}
      </div>

      <div className="container">
        <div className="section-head center reveal">
          <span className="section-eyebrow">Más allá del código</span>
          <h2 className="section-title">
            Una mente creativa y <span className="text-gradient">llena de ideas</span>
          </h2>
          <p className="section-subtitle">
            Detrás de cada página que hago hay una persona alegre, curiosa y con ganas de
            crear cosas diferentes.
          </p>
        </div>

        {/* Rasgos de personalidad */}
        <div className="rasgos-grid">
          {rasgos.map((r, i) => (
            <article key={r.titulo} className="glow-card rasgo-card reveal" style={{ '--delay': `${i * 0.08}s` }}>
              <span className="rasgo-emoji" aria-hidden="true">{r.emoji}</span>
              <h3>{r.titulo}</h3>
              <p>{r.texto}</p>
            </article>
          ))}
        </div>

        {/* Frase personal */}
        <blockquote className="frase reveal">
          <span className="frase-comillas" aria-hidden="true">“</span>
          <p>
            Si lo puedo <span className="text-gradient">imaginar</span>, lo puedo{' '}
            <span className="text-gradient">programar</span>.
          </p>
          <footer>— Thair Bazan</footer>
        </blockquote>

        {/* Intereses */}
        <h3 className="intereses-titulo reveal">Lo que me inspira</h3>
        <div className="intereses-grid">
          {intereses.map((it, i) => (
            <article
              key={it.titulo}
              className={`interes-card interes--${it.color} reveal`}
              style={{ '--delay': `${i * 0.08}s` }}
            >
              <span className="interes-emoji" aria-hidden="true">{it.emoji}</span>
              <div>
                <h4>{it.titulo}</h4>
                <p>{it.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personalidad;
