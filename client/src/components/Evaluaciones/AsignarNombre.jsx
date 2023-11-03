import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AsignarNombre = () => {
    
    const navigate = useNavigate();
  
    const irVistaModulo = () => {
      navigate('/modulo');
    };
  
    return (
      <>
         <form class="w-full max-w-lg">
            <div class="flex flex-wrap mt-3 mx-3 mb-6">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Nombre de la evaluacion
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Prueba 1 - ejemplo" autoComplete="off"/>
                
                </div>
                
            </div>
          

            </form>
      
      </>
    );
  };
  
  export default AsignarNombre;
  