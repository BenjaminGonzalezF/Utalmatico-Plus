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
  const [clases, setClases] = useState([]);



  const asignarUnidades = async (nombre) => {
    userState.guardarUnidad = nombre;
    const usuario3s = await solicitarClasess();
    console.log(usuario3s);
    setClases(usuario3s);
    userState.listaclases = usuario3s;
  };
  

  const solicitarClasess = async () => {
    console.log('Solicitando unidades');
    try {
      const response = await fetch('http://localhost:3001/getClases', {
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
        console.error('Error al obtener clases');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };


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
              <button onClick={asignarUnidades} className = "m-2 mx-2   mt-3 text-lg font-semibold bg-white w-full text-slate-700 rounded-t px-6 py-3 block shadow-xl hover:text-black hover:bg-fondo "  >
                {unidades.nombre_unidad}
                </button>
            );
          }

          return null;  
        })}
        </div> 
        </div>
      </div>
  );
}

export default RenderBotonesUnidades;

