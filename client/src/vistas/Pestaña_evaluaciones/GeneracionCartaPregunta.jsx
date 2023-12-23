
import CartaPreguntaAlternativa from './CartaPreguntaAlternativa';
import CartaPreguntaDesarrollo from './CartaPreguntaDesarrollo';
import CartaPreguntaCreaPregunta from './CartaPreguntaCreaPregunta';
import userState from '../../components/userState';
function GeneracionCartaPregunta() {

  const Preguntasalternativa = [
    { nombre: 'Pregunta 1', descripcion: 'Pregunta de alternativa ejemplo 1, esto puede contener texto', alternativa1: 'Respuesta ejemplo 1', alternativa2: 'Respuesta ejemplo 2', alternativa3: 'Respuesta ejemplo 3', alternativa4: 'Respuesta ejemplo 4' },
    { nombre: 'Pregunta 2', descripcion: 'Pregunta de alternativa ejemplo 2, esto puede contener texto', alternativa1: 'Respuesta ejemplo 1', alternativa2: 'Respuesta ejemplo 2', alternativa3: 'Respuesta ffejemplo 3', alternativa4: 'Respuesta ejemplo 4' },
    { nombre: 'Pregunta 3', descripcion: 'Pregunta de alternativa ejemplo juasjuas, esto puede contener texto', alternativa1: 'Respuesta elkdajfjemplo 1', alternativa2: 'Respuesta ejemplo 2', alternativa3: 'Respuesta ejemplo 3', alternativa4: 'Reqwewqspuesta ejemplo 4' },
    { nombre: 'Pregunta 4', descripcion: 'Pregunta de alternativa ejemplo 4, esto puede contener texto', alternativa1: 'Respuesta ejemplo 1', alternativa2: 'Respuesta ejemplo 2', alternativa3: 'Respuesta ejemplo 3', alternativa4: 'Respuesta ejemplo 4' },
    { nombre: 'Pregunta 5', descripcion: 'Pregunta de alternativa ejemplo 55, esto puede contener texto', alternativa1: 'Respuesta ejemplo 234', alternativa2: 'Respuestasss ejemplo 2', alternativa3: 'Respuesta ejemplo 3', alternativa4: 'Respuesta ejuwuemplo 4' },
    { nombre: 'Pregunta 6', descripcion: 'Pregunta de alternativa ejemplo 666, esto puede contener texto', alternativa1: 'Respuesta ejemplo 1', alternativa2: 'Respuesta ejemplo 2', alternativa3: 'Respujjesta ejemplo 3', alternativa4: 'Respuesta ejemplo 4' },
    { nombre: 'Pregunta 7', descripcion: 'Pregunta de alternativa ejemplo 7777, esto puede contener texto', alternativa1: 'Respuesta ejemplo 1', alternativa2: 'Respuesta ejemplo 2', alternativa3: 'Respuesta ejemplo 3', alternativa4: 'Respuesta ejemplo 4' },
  ];


  return (
    <div className="">
        
        <div className='flex-wrap'> 
        
        {Preguntasalternativa.map((pregunta, index) => (
          <CartaPreguntaAlternativa
            key={index}
            nombre={pregunta.nombre}
            descripcion={pregunta.descripcion}
            alternativa1={pregunta.alternativa1}
            alternativa2={pregunta.alternativa2}
            alternativa3={pregunta.alternativa3}
            alternativa4={pregunta.alternativa4}
          />
        ))
        }


        {
            userState.tipoUsuario === "profesor" ? (
              <>
                <CartaPreguntaCreaPregunta nombre="crear pregunta" descripcion={"aqui va tu pregunta"} />
              </>
            ) : userState.tipoUsuario === "alumno" ? (
              <>
              
              </>
            ):<>
            </>
          
        }     
        



        



        </div>
        


    </div>
  );
}

export default GeneracionCartaPregunta;

