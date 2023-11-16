import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CartaPreguntaDesarrollo = ({ nombre, descripcion, alternativa1,alternativa2,alternativa3,alternativa4 }) => {
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
            <p className="ml-2 mb-2 text-base leading-7 text-dark-grey-300"><span>{descripcion}</span></p>
            
            <div class="ml-3 flex-col">
                <div class="mb-3">
                    <input type="radio" id="option1" name="radio-group" class="form-radio text-indigo-600"/>
                    <label for="option1" class="text-gray-700">{alternativa1}</label>
                </div>

                <div class="mb-3">
                    <input type="radio" id="option2" name="radio-group" class="form-radio text-indigo-600"/>
                    <label for="option2" class="text-gray-700">{alternativa2}</label>
                </div>

                <div class="mb-3">
                    <input type="radio" id="option3" name="radio-group" class="form-radio text-indigo-600"/>
                    <label for="option3" class="text-gray-700">{alternativa3}</label>
                </div>

                <div class="mb-4">
                    <input type="radio" id="option3" name="radio-group" class="form-radio text-indigo-600"/>
                    <label for="option3" class=" text-gray-700">{alternativa4}</label>
                </div>
            </div>

          </div>
        </form>
      </div>
    );
  };
  
  export default CartaPreguntaDesarrollo;
  