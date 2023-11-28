import React, { useState } from 'react';
import CrearModulo from './components/CrearModulo';
import RenderTablaAlumno from './components/tabla_alumnos/RenderTablaAlumno';
import NavBar from '../../components/NavBar';


export default function GestionarModulos() {

  return (
    <>
    <NavBar/>
    <div className="flex justify-center bg-gray-100">
    <CrearModulo/>
    <RenderTablaAlumno/>
    </div>
    </>
  );
}