import React from 'react';
import TablaAlumno from './TablaAlumno';

export default function RenderTablaAlumno() {

    




  const nombre = 'Alumno 1';
  const correo = 'alumno@u.cl';
  const estado = 'Activo';
  const carrera = 'Ingeniería en Sistemas';
  const modulos = 'Módulo 1';

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-20">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <div className=''></div>

        <thead className="bg-gray-50">
          <tr className='flex justify-between'>

            <th scope="col" className="px-12 py-4 font-medium text-gray-900">Nombre</th>
            <th scope="col" className="px-4 py-4 font-medium text-gray-900">Estado</th>
            <th scope="col" className="px-8 py-4 font-medium text-gray-900">Carrera</th>
            <th scope="col" className="px-16 py-4 font-medium text-gray-900">Cursando</th>
          </tr>
        </thead>
            <td>
              <TablaAlumno {...{ nombre, correo, estado, carrera, modulos }} />
              
            </td>
      </table>
    </div>
  );
}