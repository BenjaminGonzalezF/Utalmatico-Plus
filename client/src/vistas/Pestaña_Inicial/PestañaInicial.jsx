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
        <div class="Calendario "><Calendario/></div>
        <div class="Semestre          bg-cabecera"></div>
        <div class="Pendientes      overflow-y-auto    bg-fondo       "><Pendientes/></div>
        <div class="Usuario             bg-fondo         "><Usuario/></div>
        <div class="Botones-Principales bg-cabecera       "><BotonesPrincipales/></div>
        <div  class="Mostrar-Ramis    overflow-y-auto   bg-fondo-ramos     "><GeneracionCartaModulos/></div>
        <div class="Botones-Filtradores bg-fondo        "><BotonesFiltrado/> </div>
      </div>


    
    </>
  )
};

export default PestañaInicial;
