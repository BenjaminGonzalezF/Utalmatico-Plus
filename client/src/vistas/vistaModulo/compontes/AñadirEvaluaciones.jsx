import React, { useState } from 'react';
import './AñadirEvaluaciones.css'
import AsignarNombre from '../../Pestaña_evaluaciones/AsignarNombre';
import { useNavigate } from 'react-router-dom';
import GeneracionCartaPregunta from '../../Pestaña_evaluaciones/GeneracionCartaPregunta';
import Tiempo from '../../Pestaña_evaluaciones/Tiempo';
import BotonRegresar from '../../Pestaña_evaluaciones/BotonRegresar';
import BotonGuardar from '../../Pestaña_evaluaciones/BotonGuardar';
import userState from '../../../components/userState';

function AñadirEvaluaciones() {
  const [nombre, setNombre] = useState('');
  const [adicional, setAdicional] = useState('');

  const navigate = useNavigate();
    
  const irAVistaModulo = () => {
      navigate('/modulo');
    };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza alguna acción con los datos del formulario, por ejemplo, enviarlos al servidor
    console.log('Nombre:', nombre);
    console.log('Adicional:', adicional);
  };

  // crear clases y arreglar despues

  return (
    <>  
        <div class="containerevalu bg-teal-500 ">
            
        {
            userState.tipoUsuario === "profesor" ? (
              <div className="nombre bg-yellow-500">
                <AsignarNombre/>
              </div>
            ) : userState.tipoUsuario === "alumno" ? (
              <div className="nombre bg-yellow-500">
                <p className="mt-5 ml-5" style={{ fontSize: '24px' }}>Prueba 1 - ejmplo</p>
              </div>
            ):<div className="nombre bg-yellow-500"></div>
          
        }     

        {
            userState.tipoUsuario === "profesor" ? (
              <div className="tiempo  bg-indigo-500">
                <Tiempo/>
              </div>
            ) : userState.tipoUsuario === "alumno" ? (
              <div className="tiempo  bg-indigo-500">
                <p className="mt-5 ml-5" style={{ fontSize: '24px' }}>Tiempo restante 40:00</p>
              </div>
            ):<div className="tiempo  bg-indigo-500"></div>
          
        }        



            
            
            
            <div class="Preguntas overflow-y-auto bg-orange-500 "> <GeneracionCartaPregunta/></div>
            
            <div class="ir overflow-y-auto bg-green-500  "> </div>
            
            
            
            <div class="Botones bg-red-500 "> <BotonGuardar/> </div>
            
            
            
            <div class="regresar bg-red-500"> <BotonRegresar/>  </div>
                
        
        </div>



  
  

    
    </>
  );
}

export default AñadirEvaluaciones;
