import React, { useState, useEffect } from 'react';
import './AñadirDescargable.css'
import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';
function AsignarEvaluacion() {
  
  const [nombre, setNombre] = useState( ''); // Establecer el primer valor de clases como valor inicial
  const [adicional, setAdicional] = useState('');
  const [clases, setModulosget] = useState([]);
  const navigate = useNavigate();
    

  const [nombreEvaluacion, setNombreEvaluacion] = useState('');
  const [nombreClase, setNombreClase] = useState('');
  const [nombreEvaluacionAAñadir, setNombreEvaluacionAAñadir] = useState('');

  const irAVistaModulo = () => {
      navigate('/modulo');
    };

    const irAVistaModulo2 = () => {
        GuardarEvaluacion();
        navigate('/modulo');
      };


    const GuardarEvaluacion = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:3001/agregarEvaluaciones', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                Nombre_clase: nombreClase, 
                datosAñadir: [nombreEvaluacion, nombreEvaluacionAAñadir]
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
                    Nombre de evaluacion
                </label>
                <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    type="text" 
                    value={nombreEvaluacion} 
                    onChange={(e) => setNombreEvaluacion(e.target.value)}
                    placeholder="Prueba 2 - ejemplo" 
                    autoComplete="off"
                />
                </div>
                
            </div>



            <div class="flex flex-wrap -mx-3 mb-6">
 
    
                
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
                    value={nombreClase} 
                    onChange={(e) => setNombreClase(e.target.value)}
                >
                    <option value="">Seleccione una opción</option>
                    {clases.map((clase, index) => {
                        if (clase.Nombre_ramo === userState.nombreModulo) {
                            return (
                                <option key={index} value={clase.Nombre_clase}>
                                    {clase.Nombre_clase}
                                </option>
                            );
                        } 
                        return null;  // Si no se cumple la condición, no se renderiza ninguna opción
                    })}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>

            
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Evaluacion a añadir
                </label>
                <div class="relative">
                <select 
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        value={nombreEvaluacionAAñadir} 
                        onChange={(e) => setNombreEvaluacionAAñadir(e.target.value)}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Prueba 1 - ejemplo">Prueba 1 - ejemplo</option>
                        <option value="Prueba 2 - ejemplo">Prueba 2 - ejemplo</option>
                        <option value="Prueba 3 - ejemplo">Prueba 3 - ejemplo</option>
                        <option value="Prueba 4 - ejemplo">Prueba 4 - ejemplo</option>
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

export default AsignarEvaluacion;
