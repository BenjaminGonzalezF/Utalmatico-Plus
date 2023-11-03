import React, { useState } from 'react';
import './AñadirEvaluaciones.css'

import { useNavigate } from 'react-router-dom';
import GeneracionCartaPregunta from '../Evaluaciones/GeneracionCartaPregunta';

function AñadirEvaluaciones() {
  const [nombre, setNombre] = useState('');
  const [adicional, setAdicional] = useState('');

  const navigate = useNavigate();
    
  const irAVistaModulo = () => {
      navigate('/modulo');
    };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza alguna acción con los datos del formulario, por ejemplo, enviarlos al servidor
    console.log('Nombre:', nombre);
    console.log('Adicional:', adicional);
  };

  // crear clases y arreglar despues

  return (
    <>  
        <div class="containerevalu bg-teal-500 ">
            <div class="nombre bg-yellow-500">
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

            </div>
            
            <div class="tiempo  bg-indigo-500 ">
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

            </div>
            
            <div class="Preguntas overflow-y-auto bg-orange-500 "> <GeneracionCartaPregunta/></div>
            
            <div class="ir overflow-y-auto bg-green-500  "> </div>
            
            <div class="Botones bg-red-500 "> 
                <button
                    onClick={irAVistaModulo}
                    className="mt-3 text-lg font-semibold
                    bg-gray-800 w-full text-white rounded-lg
                    px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                    style={{
                    fontSize: '2vh', 
                    width: '12vw',   
                    height: '10vh',
                    marginRight: '0.5vw',
                    marginLeft: '0.5vw',
                    }}>
                    Guardar Evaluacion
                </button>

            
            </div>
            
            <div class="regresar bg-red-500">
                <button
                onClick={irAVistaModulo}
                className="mt-3 text-lg font-semibold
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                style={{
                fontSize: '2vh', 
                width: '12vw',   
                height: '10vh',
                marginRight: '0.5vw',
                marginLeft: '0.5vw',
                }}>
                Cancelar
                </button>

            </div>
                
        
        </div>



  
  

    
    </>
  );
}

export default AñadirEvaluaciones;
