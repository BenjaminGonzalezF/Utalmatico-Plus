import ElementoClases from "./compontes/ElementoClases";

export default function RenderContenidoUnidades() {
  const clases = [
    { nombre: 'Clase 1'},
    { nombre: 'Clase 2'},
    { nombre: 'Clase 3'},
    { nombre: 'Clase 4'},
    { nombre: 'Clase 5'},
  ];

  return (
    <div className="">
        <div className='flex '>
            <div className="flex m-3 flex-col">
                {clases.map((clases, index) => (
                <ElementoClases
                  nombreClase={clases.nombre}
                />
                ))}
        </div> 
        </div>
      </div>
  );
}


