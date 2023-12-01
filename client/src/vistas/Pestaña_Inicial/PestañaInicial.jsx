import React, { useState } from 'react';
import perfil from '../../assets/imagenes/perfil.jpg'
import { useNavigate } from 'react-router-dom';
import GeneracionCartaModulos from '../../components/GeneracionCartaModulos';
import Calendario from '../../components/Calendario';
import './Pestañainicial.css';
import Mensajes from '../../components/Mensajes';
import BotonesPrincipales from '../../components/BotonesPrincipales';
import Usuario from '../../components/Usuario';
import BotonesFiltrado from '../../components/BotonesFiltrado';
import Pendientes from '../../components/Pendientes';

const PestañaInicial = () => {
    const navigate = useNavigate();
    const [showChat, setShowChat] = useState(false);



  return (
    <>
    <div class="contenedorInicial">
        <div class="Calendario          bg-red-500           "><Calendario/></div>
        <div class="Semestre          bg-red-500           "></div>
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
