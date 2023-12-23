import React, { useState,useEffect } from 'react';
import './AñadirDescargable.css'
import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';

function AñadirDescargable() {
  const [nombre, setNombre] = useState('');
  const [adicional, setAdicional] = useState('');
  const [clases, setModulosget] = useState([]);

  
  const [nombreEvaluacion, setNombreEvaluacion] = useState('');
  const [nombreClase, setNombreClase] = useState('');
  const [link, setlink] = useState('');


  const navigate = useNavigate();
    
  const irAVistaModulo = () => {
      navigate('/modulo');
    };


    
    const GuardarEvaluacion = async (event) => {
        event.preventDefault();
        try {
            console.log(nombre);
            console.log(nombreEvaluacion);
            console.log(link);
          const response = await fetch('http://localhost:3001/agregardocumentos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
           

            body: JSON.stringify({ 
                Nombre_clase: nombre, 
                datosAñadir: [nombreEvaluacion, link]
              }),
          });
    
          console.log(response);
          if (response.ok) {
            console.log('PRUEBAAAAAAAAAAAAAAA JAAAAJAJA');
      
          } else {
            console.error('Error ');
            setError('Error al matricular un alumno'); // Establece el mensaje de error
          }
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
    
        navigate('/modulo');
      };
  



    const solicitarClasess = async () => {
        console.log('Solicitando Modulos');
        try {
          const response = await fetch('http://localhost:3001/getClases', {
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
    

      useEffect(() => {
        const fetchUsuarios = async () => {
          const usuarios = await solicitarClasess();
          setModulosget(usuarios);
        };
    
        fetchUsuarios();
      }, []);



  return (
    <>
    <div class="containerdescargable bg-teal-500">
        <div class="formulario-generico bg-yellow-500 flex items-center justify-center ">

            <form class="w-full max-w-lg">

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Nombre elemento a añadir
                </label>
                <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    type="text" 
                    value={nombreEvaluacion} 
                    onChange={(e) => setNombreEvaluacion(e.target.value)}
                    placeholder="Descargable - ejemplo" 
                    autoComplete="off"
                />
                </div>
                
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sñlfkdsñldk">
                    Link de elemento
                </label>
                <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    type="text" 
                    value={link} 
                    onChange={(e) => setlink(e.target.value)}
                    placeholder="Link del elemento - google drive" 
                    autoComplete="off"
                />
                </div>
                
            </div>

   

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Clase a añadir
                </label>
                <div class="relative">
                <select 
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-state"
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                >
                    <option value="">Seleccione una clase</option>
                    {clases.map((clase, index) => {
                        if (clase.Nombre_ramo === userState.nombreModulo ) {
                            return (
                                <option key={index} value={clase.Nombre_clase}>
                                    {clase.Nombre_clase}
                                </option>
                            );
                        } 
                        return null; // Devuelve null si no cumple la condición para evitar errores
                    })}
                </select>
                                </div>
                </div>

 
            
            
            </div>
            </form>


        </div>


        <div class="aceptar flex  bg-orange-500  ">
            <button
                onClick={GuardarEvaluacion}
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

export default AñadirDescargable;
