import React, { useState } from 'react';
import perfil from '../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';
import './Pestañainicial.css';

const BotonesModulos = () => {
    const navigate = useNavigate();




  const estiloRecuadro = "p-12 md:p-20 bg-white shadow-md rounded-3xl"; // Estilo original
  const estiloPosicion = "absolute top-10 right-10"; // Cambiamos "left" por "right"
  

  return (
    <>


    <div>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style = {{ 
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '200px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Notas
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '300px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Avisos
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '400px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Asistencia
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '500px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Comunicación docente
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '600px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Información
        </button>
    </div>
    </>
  )
};

export default BotonesModulos;
