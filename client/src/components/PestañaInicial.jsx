import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PestañaInicial = () => {
    const navigate = useNavigate();


  const handlePestañaInicial = () => {
    navigate('/PestañaInicial');
  };

  const irAPestañaHorario = () => {
    navigate('/horario');
  };

  return (
    <>
    <div>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick = {irAPestañaHorario}
            style = {{ 
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '60px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '50px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Horario
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '60px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '50px',      // Cambia la distancia desde la parte superior
            left: '300px'       // Cambia la distancia desde la izquierda
            }}>
            Avance académico
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '60px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '50px',      // Cambia la distancia desde la parte superior
            left: '510px'       // Cambia la distancia desde la izquierda
            }}>
            Documentos
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '60px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '50px',      // Cambia la distancia desde la parte superior
            left: '720px'       // Cambia la distancia desde la izquierda
            }}>
            Mensajes
        </button>
    </div>
    </>
  )
};

export default PestañaInicial;
