import CartaModulo from './CartaModulo';


function GeneracionCartaModulos() {

  const candidatos = [
    { nombre: 'Modulo 1', descripcion: 'Este modulo va de 1', correo: 'correo1@example.com' },
    { nombre: 'Modulo 2', descripcion: 'Este modulo va de 2', correo: 'correo2@example.com' },
    { nombre: 'Modulo 3', descripcion: 'Este modulo va de 3', correo: 'correo3@example.com' },
    { nombre: 'Modulo 1', descripcion: 'Este modulo va de 1', correo: 'correo1@example.com' },
    { nombre: 'Modulo 2', descripcion: 'Este modulo va de 2', correo: 'correo2@example.com' },
    { nombre: 'Modulo 3', descripcion: 'Este modulo va de 3', correo: 'correo3@example.com' },
    { nombre: 'Modulo 1', descripcion: 'Este modulo va de 1', correo: 'correo1@example.com' },
    { nombre: 'Modulo 2', descripcion: 'Este modulo va de 2', correo: 'correo2@example.com' },
    { nombre: 'Modulo 3', descripcion: 'Este modulo va de 3', correo: 'correo3@example.com' },
  ];

  return (
    <div className="">
        <div className='flex flex-wrap justify-content"'> 
        {candidatos.map((candidato, index) => (
          <CartaModulo
            key={index}
            nombre={candidato.nombre}
            descripcion={candidato.descripcion}
            correo={candidato.correo}
          />
        ))}
        </div>
      </div>
  );
}

export default GeneracionCartaModulos;

