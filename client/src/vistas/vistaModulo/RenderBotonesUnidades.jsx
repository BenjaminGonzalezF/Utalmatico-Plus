import BotonUnidad from "./compontes/BotonUnidad";

function RenderBotonesUnidades() {

  const unidades = [
    { nombre: 'Unidad 1'},
    { nombre: 'Unidad 2'},
    { nombre: 'Unidad 3'},
    { nombre: 'Unidad 4'},
    { nombre: 'Unidad 5'},
  ];

  return (
    <div className="">
        <div className='flex'>
            <div className="flex m-3">
                {unidades.map((unidades, index) => (
                <BotonUnidad
                    nombreUnidad={unidades.nombre}
                />
                ))}
        </div> 
        </div>
      </div>
  );
}

export default RenderBotonesUnidades;

