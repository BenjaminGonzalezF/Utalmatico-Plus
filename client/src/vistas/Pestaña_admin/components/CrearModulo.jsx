import { useNavigate } from 'react-router-dom';
import userState from '../../../components/userState';
import React, { useState, useEffect } from 'react';

export default function CrearModulo() {
  
  const [ramo, setRamo] = useState(''); 
  const [correo, setCorreo] = useState('');
  const [modulo,setModulo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [carrera, setCarrera] = useState('');



  const [profesores, setprofesores] = useState([]);

  useEffect(() => {
    const solicitarUsuarios = async () => {
      console.log('Solicitando usuarios');
      try {
        const response = await fetch('http://localhost:3001/getprofesores', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('Solicitud exitosa');
          const data = await response.json();
          console.log('Datos de usuarios:', data.result);
          
          setprofesores(data.result);
        } else {
          console.error('Error al obtener usuarios');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    solicitarUsuarios();
  }, []); // Se ejecuta solo una vez al montar el componente





  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/CrearModulo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modulo, carrera: carrera.split(",")[0] , ramo ,profesorid: carrera.split(",")[1] }),
      });

      console.log(response);
      if (response.ok) {
        console.log('Modulo matriculado');
        notificarEnvioExitoso();
        recargarTabla();
      } else {
        console.error('Error ');
        setError('Error al matricular un alumno'); // Establece el mensaje de error
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

 

  const notificarEnvioExitoso = () => {
    alert('Modulo creado exitosamente');
  };

  const recargarTabla = () => {
    window.location.reload();
  };
 


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

 

  const handleramoChange = (event) => {
    setRamo(event.target.value);
  };
  //añadir un elemento al incio de la lista de docentes
  if (!profesores.some(profesor => profesor._id === "")) {
    profesores.unshift({nombre: "Seleccione un docente", _id: ""});
  }
  const listaDocentes = profesores.map((profesor) => [profesor.nombre,profesor._id]);

  const fondo = "my-div bg-gray-100 flex flex-col justify-center items-center h-screen   ";
  const formatoLabel = "px-1 text-sm text-gray-600";
  const formatoInput = "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none";

  return (
    <div>
      <div className={fondo}>
        <form className="p-12 md:p-20 bg-white shadow-md rounded-3xl ml-10 " onSubmit={handleSubmit} >
          <div className="flex justify-center">
            <h6 className="text-3xl font-bold w-60 ">
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
              {listaDocentes.map((docente) => (
                <option key={docente} value={docente}>
                  {docente[0]}
                </option>
              ))}

              
            </select>
          </div>

          <div className="m-2 ">
          
          {/* crea lo mismo que arriba, pero para preguntar un resumen del ramo */}
            <label className={formatoLabel}>Resumen del modulo</label>
            <textarea type="text" id="Resumen" className={formatoInput} value={ramo} placeholder="Resumen del modulo" onChange={handleramoChange} />
          
          </div>



          <button onClick={() => {
            console.log("modulo: " + modulo);
            console.log("docente: " + carrera);
            console.log("resumen: " + ramo);

            console.log("docente:" + listaDocentes )

            
          }}
          className="mt-6 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
            Crear
          </button>
        
        </form>
      </div>
    </div>
  )
}