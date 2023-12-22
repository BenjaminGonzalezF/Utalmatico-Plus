import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pestaña_Inicial/Pestañainicial.css';
import '../../../components/CssNotas.css';
import NotasPopup from '../../../components/NotasPopup';


const BotonesModulos = () => {
    const navigate = useNavigate();
    const [isNotasPopupOpen, setIsNotasPopupOpen] = useState(false);

    const irAPestañaInicial = () => {
        navigate('/pestañaInicial');
      };

      const irInformacion = () => {
        /* navigate('/añadirEvaluaciones'); */
      };

    const toggleNotasPopup = () => {
        setIsNotasPopupOpen(!isNotasPopupOpen);
      };


  return (
    <>

    <div>
        <button
            className=" font-semibold bg-green-500 w-full text-white rounded-full  shadow-xl hover:text-black hover:bg-green-400
            
            " onClick = {irAPestañaInicial}
            style = {{ 
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '30px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Regresar
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={toggleNotasPopup}
            style = {{ 
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '200px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Notas
        </button>
        {isNotasPopupOpen && <NotasPopup onClose={toggleNotasPopup} />}
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '300px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Avisos
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '400px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Asistencia
        </button>
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '500px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Comunicación docente
        </button>
        <button
            onClick={irInformacion}
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
            fontSize: '15px', 
            width: '180px',   // Cambia el ancho del botón
            height: '70px',    // Cambia la altura del botón
            position: 'absolute', // Cambia la posición a absoluta
            top: '600px',      // Cambia la distancia desde la parte superior
            left: '90px'       // Cambia la distancia desde la izquierda
            }}>
            Información
        </button>
    </div>
    </>
  )
};

export default BotonesModulos;
