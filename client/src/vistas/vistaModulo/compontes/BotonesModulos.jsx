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
            style={{
                fontSize: '2vh', 
                width: '10vw',   
                height: '10vh',
                marginTop: '1vw',
                marginRight: '1vw',
                marginLeft: '1vw',
            }}>
            Regresar
        </button>

    </div>
    </>
  )
};

export default BotonesModulos;
