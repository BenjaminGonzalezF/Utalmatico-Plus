import React, { useState } from 'react';
import MatricularAlumno from './components/MatricularAlumno';
import RenderTablaAlumno from './components/tabla_alumnos/RenderTablaAlumno';
import NavBar from '../../components/NavBar';


export default function GestionarAlumnos() {

  return (
    <>
    <NavBar/>
    <div className="flex justify-center bg-gray-100">
    <MatricularAlumno/>
    <RenderTablaAlumno/>
    </div>
    </>
  );
}