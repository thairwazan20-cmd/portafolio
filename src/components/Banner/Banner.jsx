import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          {/* Reemplaza src/assets/miFoto.png por tu foto cuadrada (ej. 400x400px) */}
          <img
            src={miFoto}
            alt="Foto de Perfil"
            className="profile-photo"
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Thair <br />
          <span className="text-cyan">Bazan</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Programador | Diseñador Web | Soporte Técnico | Estudiante de Ingeniería de Software con IA
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Desarrollo páginas y aplicaciones web funcionales para resolver
          necesidades reales, cuidando el diseño y la experiencia de usuario.
          También brindo soporte técnico.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;
