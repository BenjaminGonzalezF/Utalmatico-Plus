import userState from "../../../components/userState";
import ElementoClases from "../compontes/ElementoClases";
import { useEffect,useState } from 'react';

export default function RenderContenidoUnidades({ clases = [], setClases }) {


  useEffect(() => {
    const fetchUsuarios = async () => {
      console.log(userState.listaclases);
    };

    fetchUsuarios();
  }, []);



  return (
    <div className="">
        <div className='flex '>
        <div className="flex m-3 flex-col">
          {clases.map((clase, index) => {
            // Si el nombre de la clase coincide con el filtro, muestra el elemento
            console.log(userState.guardarUnidad)
            
            if (clase.Nombre_ramo === userState.nombreModulo && userState.guardarUnidad === clase.Unidad_a_Guadar) {
              return (
                <ElementoClases
                  key={index}
                  nombreClase={clase.Nombre_clase}
                  setClases={setClases}
                />
              );
            }
            // Si no coincide, puedes retornar null o simplemente omitirlo
            return null;
          })}
        </div> 
        </div>
      </div>
  );
}


