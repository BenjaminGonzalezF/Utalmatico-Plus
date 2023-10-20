import React, { useState } from 'react';
import perfil from '../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';
import GeneracionCartaModulos from './GeneracionCartaModulos';
import Calendario from './Calendario';
import './Pestañainicial.css';
import Mensajes from './Mensajes';
import BotonesPrincipales from './BotonesPrincipales';

const PestañaInicial = () => {
    const navigate = useNavigate();
    const [showChat, setShowChat] = useState(false);


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
    <div class="contenedorInicial">
        <div class="Calendario          bg-red-500           "><Calendario/></div>
        <div class="Pendientes          bg-orange-500        ">Pendientes</div>
        <div class="Usuario             bg-green-500         ">Usuario</div>
        <div class="Botones-Principales bg-yellow-500        "><BotonesPrincipales/></div>
        <div class="Mostrar-Ramis       bg-teal-500        "><GeneracionCartaModulos/></div>
        <div class="Botones-Filtradores bg-indigo-500        ">Botones Filtrados </div>
      </div>


    <div>
        
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
        {showChat && <Mensajes onClose={() => setShowChat(false)} />}
    </div>
    </>
  )
};

export default PestañaInicial;
