import React, { useState } from 'react';
import './CssNotas.css';

const NotasPopup = ({ onClose }) => {
  const [mostrarTablaUnidad, setMostrarTablaUnidad] = useState(null);
  const [mostrarTodasLasTablas, setMostrarTodasLasTablas] = useState(false);

  const buttonStyles = {
    fontSize: '20px',
    width: '150px',
    height: '50px',
    marginRight: '10px',
    marginLeft: '10px',
    border: 'none',
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  const closeButtonStyles = {
    ...buttonStyles,
    marginTop: '20px',
  };

  const notasUnidades = {
    1: [
      { nombre: 'Trabajo 1', unidad: 'U1', nota1: '' },
      { nombre: 'Prueba 1', unidad: 'U1', nota1: '' },
    ],
    2: [
      { nombre: 'Trabajo 1', unidad: 'U2', nota1: '' },
      { nombre: 'Prueba 1', unidad: 'U2', nota1: '' },
    ],
    3: [
      { nombre: 'Trabajo 1', unidad: 'U3', nota1: '' },
      { nombre: 'Prueba 1', unidad: 'U3', nota1: '' },
    ],
  };

  const renderTablaUnidad = (unidad) => (
    <div key={unidad}>
      <h3>Unidad {unidad}</h3>
      <table className="notas-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Unidad</th>
            <th>Nota 1</th>
          </tr>
        </thead>
        <tbody>
          {notasUnidades[unidad].map((nota) => (
            <tr key={nota.nombre}>
              <td>{nota.nombre}</td>
              <td>{nota.unidad}</td>
              <td>
                <input
                  type="text"
                  className="nota-input"
                  placeholder={`Ingrese nota 1 ${nota.nombre} ${nota.unidad}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Tabla de Notas</h2>
        <div>
          <button
            onClick={() => {
              setMostrarTodasLasTablas(!mostrarTodasLasTablas);
              setMostrarTablaUnidad(null);
            }}
            className="unidad-button"
            style={buttonStyles}
          >
            Notas generales
          </button>
          {[1, 2, 3].map((unidad) => (
            <button
              key={unidad}
              onClick={() => {
                setMostrarTodasLasTablas(false);
                setMostrarTablaUnidad(unidad);
              }}
              className="unidad-button"
              style={buttonStyles}
            >
              Unidad {unidad}
            </button>
          ))}
        </div>

        {mostrarTodasLasTablas && [1, 2, 3].map((unidad) => renderTablaUnidad(unidad))}
        {mostrarTablaUnidad && renderTablaUnidad(mostrarTablaUnidad)}

        <button onClick={onClose} style={closeButtonStyles}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default NotasPopup;
