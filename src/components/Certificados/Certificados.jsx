import { useState } from 'react';
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
  { id: 1, titulo: "Conceptos Básicos de Hardware de Computadora", imagen: imgHardware },
  { id: 2, titulo: "Introducción al Internet de las Cosas (Cisco)", imagen: imgIotCisco },
  { id: 3, titulo: "Introducción al Internet de las Cosas (SENATI)", imagen: imgIotSenati },
  { id: 4, titulo: "Introducción a Ciberseguridad (Cisco)", imagen: imgCiberCisco },
  { id: 5, titulo: "Introducción a Ciberseguridad (SENATI)", imagen: imgCiberSenati },
  { id: 6, titulo: "Introducción a la Ciencia de Datos", imagen: imgDatos },
  { id: 7, titulo: "Fundamentos de Python 1", imagen: imgPython },
  { id: 8, titulo: "Conceptos Básicos de Redes", imagen: imgRedes }
];

const Certificados = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <h2 className="section-title">Certificados Cisco</h2>

        <div className="certificados-grid">
          {certificadosData.map((cert) => (
            <article
              key={cert.id}
              className="certificado-card"
              onClick={() => setSeleccionado(cert)}
            >
              <img src={cert.imagen} alt={`Certificado: ${cert.titulo}`} className="certificado-img" />
              <h3 className="certificado-titulo">{cert.titulo}</h3>
            </article>
          ))}
        </div>
      </div>

      {seleccionado && (
        <div className="certificado-modal" onClick={() => setSeleccionado(null)}>
          <img src={seleccionado.imagen} alt={`Certificado: ${seleccionado.titulo}`} />
        </div>
      )}
    </section>
  );
};

export default Certificados;
