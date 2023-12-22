import RenderBotonesUnidades from './renders/RenderBotonesUnidades';
import RenderContenidoUnidades from './renders/RenderContenidoUnidades';

import BotonesModulos from './compontes/BotonesModulos';
import BotonesProfe from './compontes/BotonesProfe';
import BotonesAdmin from './componentes_modulos_admin/BotonesAdmin';
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
              <div className="botonesProfe bg-cabecera">
                <BotonesProfe />
              </div>
            ) : userState.tipoUsuario === "admin" ? (
              <div className="botonesProfe bg-cabecera">
                <BotonesAdmin />
              </div>
            ):<div className="botonesProfe bg-cabecera"></div>
          }
          
          <div class="botones bg-cabecera flex-col    "><BotonesModulos/> </div>
          <div class="filtros         bg-fondo-modulo         "> <RenderBotonesUnidades/> </div>
          <div class="Laterales       bg-fondo         ">  </div>
          <div class="Interior-ramos   overflow-y-auto   bg-fondo-modulo"> <RenderContenidoUnidades/></div>
          
          

        </div>
    </>
  );
}

