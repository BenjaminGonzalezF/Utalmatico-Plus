import RenderBotonesUnidades from '../vistas/vistaModulo/RenderBotonesUnidades';
import BotonesModulos from './BotonesModulos';
import BotonesProfe from './Pestaña_modulos/BotonesProfe';
import BotonesAdmin from './Pestaña_modulosAdmin/BotonesAdmin';
import './CssPestañaModulo.css';
import userState from './userState';
import React, { useState } from 'react';
export default function VistaModulo({nombre}) {

  //funciones para manejar los pop-ups
  



  return (
    <>
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
          <div class="Laterales       bg-green-500         ">  Botones lateriales </div>
          <div class="Interior-ramos     bg-teal-500      ">  Interior ramos</div>
          
          

        </div>
    </>
  );
}

