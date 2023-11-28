import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';
import React, { useState } from 'react';

export default function CrearModulo() {

  const [correo, setCorreo] = useState('');
  const [modulo,setModulo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [carrera, setCarrera] = useState('');

  const handleModuloChange = (event) => {
    setModulo(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
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
              Crear Modulo
            </h6>
          </div>

          <div className="m-2  mb--2">
            <label className={formatoLabel}>Nombre del modulo</label>
            <input type="text" id="Modulo" className={formatoInput} value={modulo} placeholder="Nombre del modulo" onChange={handleModuloChange} />
          </div>

          <div className="m-3 ">
            <label className={formatoLabel}>Docente a Cargo</label>
            <br/>
            <select value={carrera} onChange={handleCarreraChange} className="bg-transparent">
              <option value="Carrera">Juan alfajor uwu</option>
              <option value="Computación">Pepe pudin owo</option>
              <option value="Industrial">juana vainilla chocolate</option>
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