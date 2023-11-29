import React, { useState, useEffect } from 'react';

import RenderTablaAlumno from './tabla_alumnos/RenderTablaAlumno';
import TablaAlumno from './tabla_alumnos/TablaAlumno';



const VisualizarModulos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [modulosget, setModulosget] = useState([]);

  const solicitarModuloss = async () => {
    console.log('Solicitando Modulos');
    try {
      const response = await fetch('http://localhost:3001/getModulos', {
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


  //solicitar modulos con fetch
  
    useEffect(() => {
      const fetchUsuarios = async () => {
        const usuarios = await solicitarModuloss();
        setModulosget(usuarios);
      };
  
      fetchUsuarios();
    }, []);


  const modulos = [
    {
      nombre: 'Módulo 1',
      descripcion: 'Este es el módulo 1',
      docente: 'Juan Pérez'
    },
    {
      nombre: 'Módulo 2',
      descripcion: 'Este es el módulo 2',
      docente: 'Juano Pérez'
    },
    {
      nombre: 'Módulo 3',
      descripcion: 'Este es el módulo 3',
      docente: 'Juan lopez'
    },
    // Agrega más módulos aquí si lo necesitas
  ];

  return (
    <div  className="overflow-hidden rounded-lg  border border-gray-200 shadow-md m-5 mt-20">
      <div className="flex flex-wrap justify-center">
        {modulosget.map((modulo, index) => (
          <div key={index} className="m-4 bg-white rounded shadow-lg w-64 h-60">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{modulo.nombre}</div>
              <p className="text-gray-700 text-base">
                {modulo.descripcion}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {modulo.docente}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisualizarModulos;
