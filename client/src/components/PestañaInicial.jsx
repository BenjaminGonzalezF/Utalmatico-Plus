import React, { useState } from 'react';
import perfil from '../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';
import GeneracionCartaModulos from './GeneracionCartaModulos';
import Calendario from './Calendario';
import './Pestañainicial.css';
import Mensajes from './Mensajes';
import BotonesPrincipales from './BotonesPrincipales';
import Usuario from './Usuario';
import BotonesFiltrado from './BotonesFiltrado';
import Pendientes from './Pendientes';

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
        <div class="Pendientes      overflow-y-auto    bg-orange-500        "><Pendientes/></div>
        <div class="Usuario             bg-green-500         "><Usuario/></div>
        <div class="Botones-Principales bg-yellow-500        "><BotonesPrincipales/></div>
        <div  class="Mostrar-Ramis    overflow-y-auto   bg-teal-500     "><GeneracionCartaModulos/></div>
        <div class="Botones-Filtradores bg-indigo-500        "><BotonesFiltrado/> </div>
      </div>


    
    </>
  )
};

export default PestañaInicial;
