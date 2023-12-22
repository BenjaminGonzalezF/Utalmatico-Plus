import CartaModulo from './CartaModulo';
import { useState } from 'react';
import { useEffect } from 'react';


function GeneracionCartaModulos() {

  const [modulosget, setModulosget] = useState([]);

  const solicitarModuloss = async () => {
    console.log('Solicitando Modulos');
    try {
      const response = await fetch('http://localhost:3001/getModulos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Solicitud exitosa');
        const data = await response.json();
        console.log('Datos de usuarios:', data.result);
        
        return data.result;
      } else {
        console.error('Error al obtener usuarios');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };


  useEffect(() => {
    const fetchUsuarios = async () => {
      const usuarios = await solicitarModuloss();
      setModulosget(usuarios);
    };

    fetchUsuarios();
  }, []);

  const modulos = modulosget;


 

  return (
    <div className="">
        <div className='flex flex-wrap'> 
        {modulos.map((candidato, index) => (
          <CartaModulo
            key={index}
            nombre={candidato.nombre}
          />
        ))}
        </div>
      </div>
  );
}

export default GeneracionCartaModulos;

