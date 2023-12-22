import RenderBotonesUnidades from './renders/RenderBotonesUnidades';
import RenderContenidoUnidades from './renders/RenderContenidoUnidades';

import BotonesModulos from '../../components/BotonesModulos';
import BotonesProfe from './compontes/BotonesProfe';
import BotonesAdmin from '../Pestaña_modulosAdmin/BotonesAdmin';
import './CssPestañaModulo.css';
import userState from '../../components/userState';
import React, { useState } from 'react';
export default function VistaModulo({nombre}) {

  //funciones para manejar los pop-ups
  



  return (
    <>

        {console.log(userState.nombreModulo)}

        <div class="containeruwu">
        {
            userState.tipoUsuario === "profesor" ? (
              <div className="botonesProfe bg-red-500">
                <BotonesProfe />
              </div>
            ) : userState.tipoUsuario === "admin" ? (
              <div className="botonesProfe bg-red-500">
                <BotonesAdmin />
              </div>
            ):<div className="botonesProfe bg-red-500"></div>
          }
          
          <div class="botones     bg-yellow-500          "><BotonesModulos/> </div>
          <div class="filtros         bg-orange-500         "> <RenderBotonesUnidades/> </div>
          <div class="Laterales       bg-green-500         ">  </div>
          <div class="Interior-ramos   overflow-y-auto    bg-teal-500      "> <RenderContenidoUnidades/></div>
          
          

        </div>
    </>
  );
}

