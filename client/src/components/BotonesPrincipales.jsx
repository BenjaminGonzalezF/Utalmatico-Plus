import React, { useState } from 'react';
import perfil from '../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';
import GeneracionCartaModulos from './GeneracionCartaModulos';
import Calendario from './Calendario';
import './Pestañainicial.css';
import Mensajes from './Mensajes';

const BotonesPrincipales = () => {
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
            left: '250px'       // Cambia la distancia desde la izquierda
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
            left: '450px'       // Cambia la distancia desde la izquierda
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
            left: '650px'       // Cambia la distancia desde la izquierda
            }}>
            Documentos
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={() => setShowChat(true)}
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '60px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '50px',      // Cambia la distancia desde la parte superior
            left: '850px'       // Cambia la distancia desde la izquierda
            }}>
            Mensajes
        </button>
    
        {showChat && <Mensajes onClose={() => setShowChat(false)} />}
    </div>
    </>
  )
};

export default BotonesPrincipales;
