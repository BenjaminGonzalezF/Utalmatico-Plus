import React, { useState } from 'react';
import perfil from '../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';

const PestañaInicial = () => {
    const navigate = useNavigate();


  const handlePestañaInicial = () => {
    navigate('/pestañaInicial');
  };

  const irAPestañaHorario = () => {
    navigate('/horario');
  };

  const irAPestañaLogin = () => {
    navigate('/');
  };

  const estiloRecuadro = "p-12 md:p-20 bg-white shadow-md rounded-3xl"; // Estilo original
  const estiloPosicion = "absolute top-10 right-10"; // Cambiamos "left" por "right"
  

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
        <div className={`my-div bg-gray-100 h-screen`}>
          <div 
              className={`${estiloRecuadro} ${estiloPosicion} flex flex-col items-center justify-center`}
              style={{
                  width: '300px', // Cambia el ancho del recuadro
                  height: '200px', // Cambia la altura del recuadro
              }}
            >
            <h6
              className="text-3xl font-bold"
              style={{
                position: 'absolute',
                top: '20px', // Cambia la distancia desde la parte superior
                left: '50px', // Cambia la distancia desde la izquierda
              }}
            >
              Perfil
            </h6>
            <button
              className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"  onClick = {irAPestañaLogin}
              style={{
                fontSize: '12px',
                width: '120px', // Cambia el ancho del botón
                height: '40px', // Cambia la altura del botón
                position: 'absolute',
                top: '80px',  // Cambia la distancia desde la parte superior
                left: '30px', // Cambia la distancia desde la izquierda
                textAlign: 'center', // Cambia la alineación horizontal (puede ser 'left', 'center', o 'right')
                lineHeight: '10px',   // Ajusta el espaciado vertical según el alto del botón
              }}
            >
              Cerrar sesión
            </button>
            <button
              className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
              style={{
                fontSize: '12px',
                width: '120px', // Cambia el ancho del botón
                height: '40px', // Cambia la altura del botón
                position: 'absolute',
                top: '130px',  // Cambia la distancia desde la parte superior
                left: '30px', // Cambia la distancia desde la izquierda
                textAlign: 'center', // Cambia la alineación horizontal (puede ser 'left', 'center', o 'right')
                lineHeight: '10px',   // Ajusta el espaciado vertical según el alto del botón
              }}
            >
              Opciones
            </button>
            <img
              src={perfil}
              alt="Descripción de la imagen"
              style={{
                position: 'absolute',
                top: '50px',      // Cambia la distancia desde la parte superior
                right: '25px',    // Cambia la distancia desde la derecha
                width: '100px',    // Cambia el ancho de la imagen
                height: '100px',   // Cambia la altura de la imagen
              }}
            />
          </div>
        </div>
    </div>
    </>
  )
};

export default PestañaInicial;
