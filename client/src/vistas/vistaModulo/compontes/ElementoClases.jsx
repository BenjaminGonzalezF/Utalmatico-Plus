import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function ElementoClases({ nombreClase }) {

    const navigate = useNavigate();
 
    const irAEvaluacion = () => {
      navigate('/añadirEvaluaciones');
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

      useEffect(() => {
        const fetchUsuarios = async () => {
          const usuarios = await solicitarClasess();
          
        };
    
        fetchUsuarios();
      }, []);

    // Lista de evaluaciones (ejemplo)
    const evaluaciones = [
        { id: 1, nombre: 'Evaluación 1' },
        { id: 2, nombre: 'Evaluación 2' },
        // ... puedes agregar más evaluaciones aquí
      ];
  
      // Lista de presentaciones (ejemplo)
      const presentaciones = [
        { id: 1, nombre: 'Presentación 1' },
        { id: 2, nombre: 'Presentación 2' },
        // ... puedes agregar más presentaciones aquí
      ];

      return (
        <div>
            {console.log(nombreClase)}
            <span className="m-2 mx-2 mt-3 text-lg font-semibold bg-slate-100 w-full min-w-[50vw]  text-slate-700 px-2 py-2 block hover:text-slate-800 hover:bg-slate-200">{nombreClase.Nombre_clase}</span>
            <p>
            {true && (
                <p className="text-gray-700 ml-6">
                    {nombreClase.Desarrollo_clase}
                </p>
            )}
                <p className="mt-2 text-sm text-gray-600">


                    <div>
                    
                    </div>


                    
                    {/* Generando elementos de forma dinámica con .map() */}
                    <div className="mt-4 ml-6">
                    {nombreClase.Evaluaciones.length > 0 && nombreClase.Evaluaciones.map(evaluacion => (
                      <button
                          className="mt-3 ml-6 bg-blue-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                          key={evaluacion} // Asegúrate de agregar una clave única para cada elemento en el mapeo
                      >
                          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                          {evaluacion[0]}
                      </button>
                  ))}
                    </div>


                   

                   
                    <div className="mt-2 ml-6">
                    {nombreClase.documentos.length > 0 && nombreClase.documentos.map(documentos => (
                      <button
                          className="mt-3 ml-6 bg-cyan-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                          key={documentos} // Asegúrate de agregar una clave única para cada elemento en el mapeo
                          onClick={() => window.open(documentos[1], '_blank')}
                      >
                          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                          {documentos[0]}
                      </button>
                  ))}
                    </div>

                </p>

            </p>

         </div>
    );

}