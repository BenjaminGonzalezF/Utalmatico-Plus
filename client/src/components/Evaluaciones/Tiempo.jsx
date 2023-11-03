import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Tiempo = () => {
    
    const navigate = useNavigate();
  
    const irVistaModulo = () => {
      navigate('/modulo');
    };
  
    return (
      <>
       <form class="w-full max-w-lg">
            
            <div class="flex flex-wrap mt-3 mx-3 mb-6">
                <div class="w-full px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Tiempo a asignar
                </label>
                <div class="relative">
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>15 minutos</option>
                    <option>30 minutos</option>
                    <option>1 hora</option>
                    <option>1:30 horas</option>
                    <option>2:00 horas</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>

 
            
            
            </div>
            </form>
      
      </>
    );
  };
  
  export default Tiempo;
  