import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CartaCreaPregunta = ({ nombre, descripcion, alternativa1,alternativa2,alternativa3,alternativa4 }) => {
    const fondo = " bg-gray-100";
    const formatoLabel = "px-1 text-sm text-gray-700";
    const formatoInput = "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none";
    const navigate = useNavigate();
  
    const irVistaModulo = () => {
      navigate('/modulo');
    };
  
    return (
      <div className={fondo}>
        <form className=" bg-slate-120 shadow-lg   w-100 h-70 ">
          <div className="w-full lg:max-w-full  ">
            <p className="ml-2 mb-2 text-2xl font-extrabold text-dark-grey-900">{nombre}</p>
            

            <div class="flex flex-wrap mx-3 mb-2">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Pregunta
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Aqui va tu pregunta, ejemplo 1?" autoComplete="off"/>
                </div>
                
            </div>

            <div class="flex flex-wrap mx-3 mb-">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Alternativa 1
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Respuesta 1" autoComplete="off"/>
                </div>
                
            </div>

            <div class="flex flex-wrap mx-3 mb-">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Alternativa 2
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Respuesta 2" autoComplete="off"/>
                </div>
                
            </div>

            <div class="flex flex-wrap mx-3 mb-">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Alternativa 3
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Respuesta 3" autoComplete="off"/>
                </div>
                
            </div>
        

            <div class="flex flex-wrap mx-3 mb-">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Alternativa 4
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Respuesta 4" autoComplete="off"/>
                </div>
                
            </div>

            <div class="flex flex-wrap mx-3 mb-4">
                <button
                    className="mt-3 mb-3 text-lg font-semibold
                    bg-gray-800 w-full text-white rounded-lg
                    px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
                    style={{
                    fontSize: '2vh', 
                    width: '10vw',   
                    height: '7vh',
                    marginRight: '0.5vw',
                    marginLeft: '0.5vw',
                    }}>
                    Crear Pregunta
                </button>
                
            </div>
           

          </div>
        </form>


      </div>
    );
  };
  
  export default CartaCreaPregunta;
  