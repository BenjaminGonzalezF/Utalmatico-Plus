import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import horarioA from '../assets/imagenes/horarioA.jpg'
const Horario = () => {
    const navigate = useNavigate();


  const handleHorario = () => {
    navigate('/horario');
  };

  const irAPestañaInicial = () => {
    navigate('/pestañaInicial');
  };

  return (
    <>
        <div>
            <button
                className="mt-3 text-lg font-semibold
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick = {irAPestañaInicial}
                style = {{ 
                    fontSize: '15px', 
                    width: '120px',   // Cambia el ancho del botón
                    height: '60px',    // Cambia la altura del botón
                    position: 'absolute', // Cambia la posición a absoluta
                    top: '25px',      // Cambia la distancia desde la parte superior
                    left: '50px'       // Cambia la distancia desde la izquierda
                    }}>
            Regresar
            </button>
            <img
                src={horarioA}
                alt="Descripción de la imagen"
                style={{
                position: 'absolute',
                top: '100px',    // Cambia la distancia desde la parte superior
                left: '150px'     // Cambia la distancia desde la izquierda
                }}
            />
        </div>
    </>
  )
};

export default Horario;
