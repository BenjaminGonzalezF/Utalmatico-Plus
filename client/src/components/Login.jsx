import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error
  const navigate = useNavigate(); 


  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, clave }),
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        handleLogin();
      } else {
        console.error('Inicio de sesión fallido');
        setError('Usuario o contraseña incorrectos'); // Establece el mensaje de error
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  const irAPestañaInicial = () => {
    navigate('/pestañaInicial');
  };

  const handleLogin = () => {
    navigate('/inicio');
  };

  const fondo = "my-div bg-gray-100 flex flex-col justify-center items-center h-screen ";
  const formatoLabel = "px-1 text-sm text-gray-600";
  const formatoInput= "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none";

  return (
    <div className={fondo}>
      <form className="p-12 md:p-20 bg-white shadow-md rounded-3xl" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <h6 className="text-3xl font-bold">
            Bienvenido
          </h6>
        </div>
        <div className="m-2 p-1">
          <label className={formatoLabel}>Ingrese su correo</label>
          <input type="text" id="correo" className={formatoInput} value={correo} onChange={handleCorreoChange} placeholder="Usuario" />
        </div>
        <div className="flex flex-col m-2 p-1">
          <label className={formatoLabel}>Contraseña</label>
          <input type="password" id="clave" className={formatoInput} value={clave} onChange={handleClaveChange} placeholder="Contraseña" />
          <p className="text-red-500">{error}</p> {/* Muestra el mensaje de error */}
          <div className="flex justify-end my-4">
          <button className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={irAPestañaInicial}>
            Iniciar Sesión
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
