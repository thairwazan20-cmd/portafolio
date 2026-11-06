import { useState } from 'react';
import './Habilidades.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

// Arreglo de datos: separamos la información de la interfaz gráfica
const skillsData = [
  {
    id: 1,
    titulo: 'HTML5 y CSS3',
    descripcion: 'Maquetación semántica, estilos modernos y diseño de páginas web.',
    nivel: 'Avanzado',
    botonTexto: 'EN PRÁCTICA',
    estado: 'proceso',
    icono: `${DEVICON}/html5/html5-original.svg`,
  },
  {
    id: 2,
    titulo: 'JavaScript',
    descripcion: 'Lenguaje de programación interpretado, dialecto del estándar ECMAScript.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'EN PRÁCTICA',
    estado: 'proceso',
    icono: `${DEVICON}/javascript/javascript-original.svg`,
  },
  {
    id: 3,
    titulo: 'React',
    descripcion: 'Construcción de interfaces de usuario modernas a partir de componentes.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'EN PRÁCTICA',
    estado: 'proceso',
    icono: `${DEVICON}/react/react-original.svg`,
  },
  {
    id: 4,
    titulo: 'useState (Hooks)',
    descripcion: 'Interactividad y memoria en componentes: estado reactivo en React.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'COMPLETADO',
    estado: 'completado',
    icono: `${DEVICON}/react/react-original.svg`,
  },
  {
    id: 5,
    titulo: 'Bootstrap',
    descripcion: 'Framework CSS para construir interfaces responsivas con rapidez.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'COMPLETADO',
    estado: 'completado',
    icono: `${DEVICON}/bootstrap/bootstrap-original.svg`,
  },
  {
    id: 6,
    titulo: 'Git',
    descripcion: 'Sistema de control de versiones.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'EN PRÁCTICA',
    estado: 'proceso',
    icono: `${DEVICON}/git/git-original.svg`,
  },
  {
    id: 7,
    titulo: 'GitHub',
    descripcion: 'Repositorio en la nube y colaboración en proyectos.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'EN PRÁCTICA',
    estado: 'proceso',
    icono: `${DEVICON}/github/github-original.svg`,
    invertir: true,
  },
  {
    id: 8,
    titulo: 'CSS Grid',
    descripcion: 'Construcción de rejillas responsivas en dos dimensiones.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'COMPLETADO',
    estado: 'completado',
    icono: `${DEVICON}/css3/css3-original.svg`,
  },
  {
    id: 9,
    titulo: 'Flexbox',
    descripcion: 'Diseño unidimensional para compaginar elementos en filas o columnas.',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'COMPLETADO',
    estado: 'completado',
    icono: `${DEVICON}/css3/css3-original.svg`,
  },
  {
    id: 10,
    titulo: 'Python',
    descripcion: 'Base para ciencia de datos e Inteligencia Artificial (Fundamentos de Python 1).',
    nivel: 'Aprendizaje Activo',
    botonTexto: 'EN PRÁCTICA',
    estado: 'proceso',
    icono: `${DEVICON}/python/python-original.svg`,
  },
];

// Porcentaje visual según el nivel declarado
const porcentajeNivel = {
  Avanzado: 85,
  Intermedio: 70,
  'Aprendizaje Activo': 55,
};

const filtros = [
  { valor: 'todos', texto: 'Todos' },
  { valor: 'completado', texto: 'Completado' },
  { valor: 'proceso', texto: 'En práctica' },
];

const cinta = ['React', 'JavaScript', 'Python', 'Inteligencia Artificial', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Vite', 'Bootstrap', 'Ciencia de Datos', 'Redes', 'IoT', 'Ciberseguridad'];

// Efecto 3D: inclina la tarjeta según la posición del mouse
const inclinar = (e) => {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
};
const resetear = (e) => {
  e.currentTarget.style.transform = '';
};

const Habilidades = () => {
  const [filtro, setFiltro] = useState('todos');

  const visibles = skillsData.filter((s) => filtro === 'todos' || s.estado === filtro);

  return (
    <section id="tech-stack" className="section habilidades-section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-eyebrow">02 · Tech Stack</span>
          <h2 className="section-title">
            Herramientas con las que <span className="text-gradient">construyo</span>
          </h2>
          <p className="section-subtitle">
            Tecnologías que domino y practico a diario para crear productos digitales.
          </p>
        </div>

        {/* Filtros (estado con useState) */}
        <div className="skills-filtros reveal" role="tablist">
          {filtros.map((f) => (
            <button
              key={f.valor}
              role="tab"
              aria-selected={filtro === f.valor}
              className={`filtro-btn ${filtro === f.valor ? 'active' : ''}`}
              onClick={() => setFiltro(f.valor)}
            >
              {f.texto}
              <span className="filtro-count">
                {f.valor === 'todos' ? skillsData.length : skillsData.filter((s) => s.estado === f.valor).length}
              </span>
            </button>
          ))}
        </div>

        {/* Iteramos sobre el arreglo de datos usando .map() */}
        <div className="habilidades-grid reveal">
          {visibles.map((skill, i) => (
            <div
              key={`${filtro}-${skill.id}`}
              className="glow-card skill-card"
              style={{ '--delay': `${i * 0.05}s` }}
              onMouseMove={inclinar}
              onMouseLeave={resetear}
            >
              {/* Cabecera de la tarjeta: Ícono y Badge */}
              <div className="skill-header">
                <div className="skill-icon">
                  <img
                    src={skill.icono}
                    alt=""
                    width="34"
                    height="34"
                    loading="lazy"
                    className={skill.invertir ? 'invert' : ''}
                  />
                </div>

                {/* Clases dinámicas: si el estado es 'proceso', aplicamos la variante amarilla */}
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>

              {/* Cuerpo de la tarjeta: Textos */}
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
              </div>

              <div className="skill-level">
                <div className="skill-level-top">
                  <span>{skill.nivel}</span>
                  <span>{porcentajeNivel[skill.nivel]}%</span>
                </div>
                <div className="skill-bar">
                  <span style={{ width: `${porcentajeNivel[skill.nivel]}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinta infinita de tecnologías */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...cinta, ...cinta].map((t, i) => (
            <span key={i} className="marquee-item">
              {t} <em>✦</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
