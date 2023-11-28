import React, { useState } from 'react';
import RenderTablaProfesor from './components/tabla_profesores/RenderTablaProfesor'; // Corregir el nombre del archivo
import NavBar from '../../components/NavBar';
import MatricularProfesor from './components/MatricularProfesor';

export default function GestionarProfesor() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-gray-100">
        <MatricularProfesor />
        <RenderTablaProfesor /> 
      </div>
    </>
  );
}
