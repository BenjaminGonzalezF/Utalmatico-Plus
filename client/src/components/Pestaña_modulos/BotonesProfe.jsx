
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function BotonesProfe() {
    const navigate = useNavigate();
    
    const irAAñadirUnidad = () => {
        navigate('/añadirunidad');
      };

    const irAAñadirclase = () => {
      navigate('/añadirclase');
    };
    
    const irAAñadirdescargable = () => {
      navigate('/añadirdescargable');
    };
    
    
  
    return (
    <>
        
        <div class = "flex">
        <button
            onClick={irAAñadirUnidad}
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
            style = {{ 
            fontSize: '2vh', 
            width: '10vw',   
            height: '10vh',
            marginRight: '0.5vw',
            marginLeft: '0.5vw',
            }}>
            Añadir unidad
        </button>
        <button
            onClick={irAAñadirclase}
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
              fontSize: '2vh', 
              width: '10vw',   
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}>
            Añadir clase
        </button>
        <button
            onClick={irAAñadirdescargable}
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
              fontSize: '2vh', 
              width: '10vw',   
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}>
            Añadir descargable
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={() => setShowChat(true)}
            style={{
              fontSize: '2vh', 
              width: '10vw',   
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}>
            Añadir evaluacion
        </button>
        
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={() => setShowChat(true)}
            style={{
              fontSize: '2vh', 
              width: '10vw',   
              height: '10vh',
              marginRight: '0.5vw',
              marginLeft: '0.5vw',
            }}>
            Editar unidad
        </button>
    
        
    </div>
    
    </>
  );
}

