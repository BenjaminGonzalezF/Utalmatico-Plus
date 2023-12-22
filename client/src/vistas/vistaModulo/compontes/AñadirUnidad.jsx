import React, { useState } from 'react';
import './AñadirUnidad.css'
import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';

function AñadirUnidad() {
  const [nombre, setNombre] = useState('');
  const [adicional, setAdicional] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
    
  const irAVistaModulo = () => {
      navigate('/modulo');
    };

   //guardar unidad en la base de datos usando la ap
   
  const GuardarUnidad = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/CrearUnidad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  Ramo: userState.nombreModulo, nombre_unidad: inputValue}),
      });

      console.log(response);
      if (response.ok) {
        console.log('Unidad matriculado');
  
      } else {
        console.error('Error ');
        setError('Error al matricular un alumno'); // Establece el mensaje de error
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza alguna acción con los datos del formulario, por ejemplo, enviarlos al servidor
    console.log('Nombre:', nombre);
    console.log('Adicional:', adicional);
  };



  return (
    <>
    <div class="containerunidad bg-teal-500">
        <div class="formulario-generico bg-yellow-500 flex items-center justify-center ">
            <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Nombre Unidad
                </label>
                <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Unidad 1 - ejemplo"
                autoComplete="off"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                /> 
                                
                </div>
                
            </div>
          

            </form>
        </div>


        <div class="aceptar flex  bg-orange-500  ">
            <button
                onClick={GuardarUnidad}
                className="mt-3 text-lg font-semibold
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
                style = {{ 
                fontSize: '2vh', 
                width: '10vw',   
                height: '8vh',
                marginRight: '0.5vw',
                marginLeft: '0.5vw',
                }}>
                Confirmar
            </button>
        </div>

        <div class="cancelar bg-green-500">
            <button
                onClick={irAVistaModulo}
                className="mt-3 text-lg font-semibold
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black" 
                style = {{ 
                fontSize: '2vh', 
                width: '10vw',   
                height: '8vh',
                marginRight: '0.5vw',
                marginLeft: '2vw',
                }}>
                Regresar
            </button>

        </div>
    
    </div>

    
    </>
  );
}

export default AñadirUnidad;
