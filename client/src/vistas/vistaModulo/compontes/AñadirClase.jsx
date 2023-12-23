import React, { useState, useEffect } from 'react';
import './AñadirClase.css'
import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';


function AñadirClase() {
  const [nombre, setNombre] = useState('');
  const [adicional, setAdicional] = useState('');
  const [unidades2, setModulosget] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  
  const navigate = useNavigate();
    
  const irAVistaModulo = () => {
      GuardarClase();
      navigate('/modulo');
    };

    const irAVistaModulo2 = () => {
        navigate('/modulo');
        };

    //usando fecht obtiene las unidades
    const solicitarModuloss = async () => {
        console.log('Solicitando Modulos');
        try {
          const response = await fetch('http://localhost:3001/getUnidades', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            console.log('Solicitud exitosa');
            const data = await response.json();
            console.log('Datos de usuarios:', data.result);
            
            return data.result;
          } else {
            console.error('Error al obtener usuarios');
          }
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      };

      const GuardarClase = async (event) => {
        
        try {
          const response = await fetch('http://localhost:3001/CrearClase', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Nombre_ramo: userState.nombreModulo,
                Nombre_clase:document.getElementById("grid-first-name-clase").value,
                Desarrollo_clase: document.getElementById("grid-first-name-desarrollo").value,
                Unidad_a_Guadar: selectedValue}),
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



  useEffect(() => {
    const fetchUsuarios = async () => {
      const usuarios = await solicitarModuloss();
      setModulosget(usuarios);
    };

    fetchUsuarios();
  }, []);


  return (
    <>
    <div class="containerClase bg-teal-500">
        <div class="formulario-generico bg-yellow-500 flex items-center justify-center ">
            <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Nombre de la clase
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name-clase" type="text" placeholder="Clase 1 - ejemplo" autoComplete="off"/>
                
                </div>
                
            </div>




            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Desarrollo de la clase
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"id="grid-first-name-desarrollo" type="text" placeholder="En esta clase se va a ver x..." autoComplete="off"/>
                
                </div>
                
            </div>
  

            <div class="flex flex-wrap -mx-3 mb-6">
 
                <div class="w-full px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Unidad a añadir
                </label>
                <div class="relative">
                <select 
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-state"
                    value={selectedValue} 
                    onChange={(e) => setSelectedValue(e.target.value)}
                    >
                    <option>elige unidad</option>
                    {unidades2.map((unidad2, index) => {
                        if (unidad2.Ramo.includes(userState.nombreModulo)) {
                            return <option key={index}>{unidad2.nombre_unidad}</option>;
                        }
                        return null;  // Asegúrate de devolver algo o null si no deseas renderizar un elemento
                    })}
                </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>
                
            </div>


        
            </form>


        </div>


        <div class="aceptar flex  bg-orange-500  ">
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
                marginLeft: '0.5vw',
                }}>
                Confirmar
            </button>
        </div>

        <div class="cancelar bg-green-500">
            <button
                onClick={irAVistaModulo2}
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

export default AñadirClase;
