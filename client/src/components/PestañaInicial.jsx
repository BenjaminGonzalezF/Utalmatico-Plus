import React, { useState } from 'react';
import perfil from '../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';
import GeneracionCartaModulos from './GeneracionCartaModulos';
import Calendario from './Calendario';
import './Pestañainicial.css';
import Mensajes from './Mensajes';
import BotonesPrincipales from './BotonesPrincipales';
import Usuario from './Usuario';

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
    <div class="contenedorInicial bg-indigo-400">
        <div class="Calendario                     "><Calendario/></div>
        <div class="Pendientes                  ">Pendientes</div>
        <div class="Usuario                      "><Usuario/></div>
        <div class="Botones-Principales         "><BotonesPrincipales/></div>
        <div class="Mostrar-Ramis               "><GeneracionCartaModulos/></div>
        <div class="Botones-Filtradores         ">Botones Filtrados </div>
      </div>


    
    </>
  )
};

export default PestañaInicial;
