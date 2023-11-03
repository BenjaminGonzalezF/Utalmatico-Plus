import React, { useState } from 'react';
import './CssNotas.css';

const NotasPopup = ({ onClose }) => {
  const [mostrarTablaUnidad, setMostrarTablaUnidad] = useState(null);

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

  // Estado para mostrar u ocultar la información de todas las tablas
  const [mostrarTodasLasTablas, setMostrarTodasLasTablas] = useState(false);

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
          <button
            onClick={() => {
                setMostrarTodasLasTablas(false); 
                setMostrarTablaUnidad(1); 
              }}
            className="unidad-button"
            style={buttonStyles}
          >
            Unidad 1
          </button>
          <button
            onClick={() => {
                setMostrarTodasLasTablas(false); 
                setMostrarTablaUnidad(2);            
              }}
            className="unidad-button"
            style={buttonStyles}
          >
            Unidad 2
          </button>
          <button
            onClick={() => {
                setMostrarTodasLasTablas(false); 
                setMostrarTablaUnidad(3); 
              }}
            className="unidad-button"
            style={buttonStyles}
          >
            Unidad 3
          </button>
        </div>
        {mostrarTodasLasTablas ? (
          <div>
            <h3>Unidad 1</h3>
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Unidad</th>
                  <th>Nota 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trabajo 1 U1</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
                {/* Agrega más filas según sea necesario */}
              </tbody>
            </table>

            <h3>Unidad 2</h3>
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Unidad</th>
                  <th>Nota 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trabajo 1 U2</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
                {/* Agrega más filas según sea necesario */}
              </tbody>
            </table>

            <h3>Unidad 3</h3>
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Unidad</th>
                  <th>Nota 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trabajo 1 U3</td>
                  <td>
  <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
</td>

                </tr>
                <tr>
                  <td>Prueba 1 U3</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {mostrarTablaUnidad === 1 ? (
          <div>
            <h3>Unidad 1</h3>
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Unidad</th>
                  <th>Nota 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trabajo 1 U1</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
                <tr>
                  <td>Prueba 1 U3</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {mostrarTablaUnidad === 2 ? (
          <div>
            <h3>Unidad 2</h3>
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Unidad</th>
                  <th>Nota 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trabajo 1 U2</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
                <tr>
                  <td>Prueba 1 U3</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {mostrarTablaUnidad === 3 ? (
          <div>
            <h3>Unidad 3</h3>
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Unidad</th>
                  <th>Nota 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trabajo 1 U3</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
                <tr>
                  <td>Prueba 1 U3</td>
                  <td>
                    <input type="text" className="nota-input" placeholder="Ingrese nota 1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        <button onClick={onClose} style={closeButtonStyles}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default NotasPopup;
