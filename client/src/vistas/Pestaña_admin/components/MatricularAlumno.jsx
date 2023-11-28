import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';
import React, { useState } from 'react';

export default function MatricularAlumnos() {

  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [carrera, setCarrera] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/matricularAlumno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, clave, nombre, rut, carrera }),
      });

      console.log(response);
      if (response.ok) {
        console.log('Alumno matriculado');
        notificarEnvioExitoso()
        recargarTabla()

      } else {
        console.error('Error ');
        setError('Error al matricular un alumno'); // Establece el mensaje de error
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

   function notificarEnvioExitoso() {
    alert("Alumno matriculado");
  }
    function recargarTabla(){
     window.location.reload();
    }


  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleRutChange = (event) => {
    setRut(event.target.value);
  };
  const handleCarreraChange = (event) => {
    setCarrera(event.target.value);
  };



  const fondo = "my-div bg-gray-100 flex flex-col justify-center items-center h-screen ";
  const formatoLabel = "px-1 text-sm text-gray-600";
  const formatoInput = "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none";

  return (
    <div>
      <div className={fondo}>
        <form className="p-12 md:p-20 bg-white shadow-md rounded-3xl" onSubmit={handleSubmit} >
          <div className="flex justify-center">
            <h6 className="text-3xl font-bold">
              Matricular alumno
            </h6>
          </div>

          <div className="m-2  mb--2">
            <label className={formatoLabel}>Correo</label>
            <input type="text" id="correo" className={formatoInput} value={correo} placeholder="Correo" onChange={handleCorreoChange} />
          </div>
          <div className="m-2 ">
            <label className={formatoLabel}>Contraseña</label>
            <input type="password" id="clave" className={formatoInput} value={clave} placeholder="Contraseña" onChange={handleClaveChange} />
            <p className="text-red-500">{error}</p> {/*  Muestra el mensaje de error */}
          </div>
          <div className="m-2 ">
            <label className={formatoLabel}>Nombre Completo</label>
            <input type="text" id="nombre" className={formatoInput} value={nombre} placeholder="Jeff Bezos" onChange={handleNombreChange} />
          </div>
          <div className="m-2 ">
            <label className={formatoLabel}>Rut</label>
            <input type="text" id="rut" className={formatoInput} value={rut} placeholder="10.000.000-0" onChange={handleRutChange} />
          </div>
          <div className="m-3">
            <select value={carrera} onChange={handleCarreraChange} className="bg-transparent">
              <option value="Carrera">Carrera</option>
              <option value="Ingenieria Civíl en Computación">Ingenieria Civíl en Computación</option>
              <option value="Ingenieria Civíl Industrial">Ingenieria Civíl Industrial</option>
            </select>
          </div>

          <button className="mt-6 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
            Crear
          </button>
        </form>
      </div>
    </div>
  )
}