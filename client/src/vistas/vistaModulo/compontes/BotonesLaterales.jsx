import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Pestaña_Inicial/Pestañainicial.css';
import '../../../components/CssNotas.css';
import NotasPopup from '../../../components/NotasPopup';


const BotonesLaterales = () => {
    const navigate = useNavigate();
    const [isNotasPopupOpen, setIsNotasPopupOpen] = useState(false);

    const irAPestañaInicial = () => {
        navigate('/pestañaInicial');
      };

      const irInformacion = () => {
         navigate('/añadirEvaluaciones'); 
      };

    const toggleNotasPopup = () => {
        setIsNotasPopupOpen(!isNotasPopupOpen);
      };


  return (
    <>

    <div>
 
        <button
          className="mt-3 text-lg font-semibold
          bg-gray-800 w-full text-white rounded-lg
          px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
          style={{
            fontSize: '2vh', 
            width: '10vw',   
            height: '10vh',
            marginRight: '1vw',
            marginLeft: '1vw',
                // Cambia la distancia desde la izquierda
            }}>
            Notas
        </button>
        {isNotasPopupOpen && <NotasPopup onClose={toggleNotasPopup} />}
        <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{
                fontSize: '2vh', 
                width: '10vw',   
                height: '10vh',
                marginRight: '1vw',
                marginLeft: '1vw',
                  // Cambia la distancia desde la izquierda
            }}>
            Avisos
        </button>
        <button
         className="mt-3 text-lg font-semibold
         bg-gray-800 w-full text-white rounded-lg
         px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
         style={{
            fontSize: '2vh', 
            width: '10vw',   
            height: '10vh',
            marginRight: '1vw',
            marginLeft: '1vw',
              // Cambia la distancia desde la izquierda
            }}>
            Asistencia
        </button>
        <button
         className="mt-3 text-lg font-semibold
         bg-gray-800 w-full text-white rounded-lg
         px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
         style={{
            fontSize: '2vh', 
            width: '10vw',   
            height: '10vh',
            marginRight: '1vw',
                marginLeft: '1vw',
               // Cambia la distancia desde la izquierda
            }}>
            Comunicación docente
        </button>
        <button
            onClick={irInformacion}
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            style={{

                fontSize: '2vh', 
                width: '10vw',   
                height: '10vh',
                marginRight: '1vw',
                marginLeft: '1vw',
                 // Cambia la distancia desde la izquierda
            }}>
            Información
        </button>
    </div>
    </>
  )
};

export default BotonesLaterales;
