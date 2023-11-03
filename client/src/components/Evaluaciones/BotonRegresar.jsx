import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const BotonRegresar = () => {
    
    const navigate = useNavigate();
  
    
    const irAVistaModulo = () => {
        navigate('/modulo');
      };
  
    return (
      <>
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
      
      </>
    );
  };
  
  export default BotonRegresar;
  