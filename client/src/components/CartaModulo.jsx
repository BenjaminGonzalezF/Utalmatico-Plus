import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userState from './userState';

const CartaModulo = ({ nombre, descripcion, correo }) => {

  const fondo = " bg-gray-100 ;";
  const formatoLabel = "px-1 text-sm text-gray-700";
  const formatoInput= "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none";
  const navigate = useNavigate(); 


  const irVistaModulo = () => {
    //guardar nombre del ramo en userstate
    userState.nombreModulo = nombre;
    navigate('/modulo');
  };
  return (
    <div className={fondo}>
      <form className=" md:p-10 bg-slate-120 shadow-lg rounded-3xl m-4  width: 300px; height: 200px; overflow-y: auto" >
        <div className="flex items-center justify-center flex-col min-w-[15vw]">
        <p class="text-xl font-extrabold text-dark-grey-900">{nombre}</p>
            <p className='text-base leading-7 text-dark-grey-300'><span>{descripcion}</span></p>
            <div className=" p-2">
            <p><span><label className={formatoLabel}>{correo}</label></span></p>
            </div>
            <button
            className="mt-3 text-lg font-semibold
            bg-gray-700 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
            onClick={irVistaModulo}
            >
            Ingresar
        </button>

        <button
            className="mt-3 text-lg font-semibold
            bg-gray-600 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            onClick={irVistaModulo} 
            >
            Resumen
        </button>
        </div>
      </form>
    </div>
  );
};

export default CartaModulo;
