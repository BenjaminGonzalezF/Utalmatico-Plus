import BotonUnidad from "../compontes/BotonUnidad";
import { useEffect,useState } from 'react';
import userState from "../../../components/userState";
function RenderBotonesUnidades() {

  const unidades = [
    { nombre: 'Unidad 1'},
    { nombre: 'Unidad 2'},
    { nombre: 'Unidad 3'},
    { nombre: 'Unidad 4'},
    { nombre: 'Unidad 5'},
  ];

  const [unidades2, setModulosget] = useState([]);

  

  const solicitarModuloss = async () => {
    console.log('Solicitando Modulos');
    try {
      const response = await fetch('http://localhost:3001/getUnidades', {
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



  return (
    <div className="">
        <div className='flex'>
            <div className="flex m-3">
            {unidades2.map((unidades, index) => {
          if (unidades.Ramo === userState.nombreModulo) {
            return (
              <BotonUnidad
                key={index}  // Asegúrate de proporcionar una clave única para cada elemento en el mapeo
                nombreUnidad={unidades.nombre_unidad}
              />
            );
          }
          // Si no se cumple la condición, puedes devolver `null` o un componente vacío.
          // Aquí, simplemente estamos devolviendo `null` para omitir el elemento.
          return null;  
        })}
        </div> 
        </div>
      </div>
  );
}

export default RenderBotonesUnidades;

