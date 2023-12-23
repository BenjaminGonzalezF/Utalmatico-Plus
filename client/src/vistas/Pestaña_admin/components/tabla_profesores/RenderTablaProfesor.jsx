import React, { useState, useEffect } from 'react';
import TablaProfesor from './TablaProfesor';

export default function RenderTablaProfesores() {
  const [profesores, setprofesores] = useState([]);

  useEffect(() => {
    const solicitarUsuarios = async () => {
      console.log('Solicitando usuarios');
      try {
        const response = await fetch('http://34.28.148.224:3001/getprofesores', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('Solicitud exitosa');
          const data = await response.json();
          console.log('Datos de usuarios:', data.result);
          
          setprofesores(data.result);
        } else {
          console.error('Error al obtener usuarios');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    solicitarUsuarios();
  }, []); // Se ejecuta solo una vez al montar el componente



  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-20">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr className='flex justify-between'>
            <th scope="col" className="px-12 py-4 font-medium text-gray-900">Nombre</th>
            <th scope="col" className="px-4 py-4 font-medium text-gray-900">Estado</th>
            <th scope="col" className="px-8 py-4 font-medium text-gray-900">Carrera</th>
            <th scope="col" className="px-16 py-4 font-medium text-gray-900">Cursando</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {
            profesores.map((profesor, index) => (
              <TablaProfesor
                key={index}
                nombre={profesor.nombre}
                correo={profesor.correo}
                estado={"activo"}
                carrera={profesor.carrera}
                ramo={"Ramo 1"}
              />
            ))
          }
          </tbody>
      </table>
    </div>
  );
}