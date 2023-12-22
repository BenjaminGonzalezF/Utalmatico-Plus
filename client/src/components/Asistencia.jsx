import React, { useState } from 'react';
import './CssAsistencia.css';

const Asistencia = () => {
  // Inicializar todos los círculos en rojo
  const initialAsistenciasState = {};
  for (const nombre of ['Persona 1', 'Persona 2', 'Persona 3']) {
    initialAsistenciasState[nombre] = {};
    for (const fecha of ['23-01-01', '23-01-02', '23-01-03']) {
      initialAsistenciasState[nombre][fecha] = false;
    }
  }
  const [asistencias, setAsistencias] = useState(initialAsistenciasState);
  const [circuloSeleccionado, setCirculoSeleccionado] = useState(false);
  const [popupVisible, setPopupVisible] = useState(true);

  const handleToggleAsistencia = (nombre, fecha) => {
    setAsistencias((prevAsistencias) => ({
      ...prevAsistencias,
      [nombre]: {
        ...prevAsistencias[nombre],
        [fecha]: !prevAsistencias[nombre]?.[fecha],
      },
    }));
  };

  const handleToggleCirculo = () => {
    setCirculoSeleccionado((prevCirculoSeleccionado) => !prevCirculoSeleccionado);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className={`asistencia-popup ${popupVisible ? '' : 'hidden'}`}>
      <div className="cerrar-rectangulo">
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'right',
            marginBottom: '10px',
          }}
          onClick={handleClosePopup}
        >
          <div style={{ color: 'black', fontWeight: 'bold', fontSize: '1.2em' }}>X</div>
        </button>
      </div>

      <div className="titulo-rectangulo">
        <h2 className="titulo-asistencia">Marcar Asistencia</h2>
      </div>
      <table className="tabla-asistencia">
        <thead>
          <tr>
            <th className="empty-cell"></th>
            {['23-01-01', '23-01-02', '23-01-03'].map((fecha, fechaIndex) => (
              <th key={fechaIndex} className="fecha">
                {fecha}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {['Persona 1', 'Persona 2', 'Persona 3'].map((nombre, nombreIndex) => (
            <tr key={nombreIndex}>
            <td className="nombre-persona">{nombre}</td>
            {['23-01-01', '23-01-02', '23-01-03'].map((fecha, fechaIndex) => (
                <td key={fechaIndex} onClick={() => handleToggleAsistencia(nombre, fecha)}>
                    <div
                        className={`circulo-inner ${asistencias[nombre]?.[fecha] ? 'verde' : 'rojo'}`}
                    ></div>
                </td>

            ))}
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Asistencia;
