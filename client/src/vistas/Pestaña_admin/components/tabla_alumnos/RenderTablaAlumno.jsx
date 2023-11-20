import TablaAlumno from './TablaAlumno';

export default function RenderTablaAlumno() {

  const solicitarUsuarios = async (event) => {

    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/getAlumnos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        console.log('Inicio de sesión exitoso');
/*         redireccionar(response)
 */
      } else {
        console.error('Inicio de sesión fallido');
        setError('Usuario o contraseña incorrectos'); // Establece el mensaje de error
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };


  const nombre = 'Alumno 1';
  const correo = 'alumno@u.cl';
  const estado = 'Activo';
  const carrera = 'Ingeniería en Sistemas';
  const modulos = 'Módulo 1';

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-20">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr className='flex justify-between'>
            <th scope="col" className="px-12 py-4 font-medium text-gray-900">Nombre</th>
            <th scope="col" className="px-4 py-4 font-medium text-gray-900">Estado</th>
            <th scope="col" className="px-8 py-4 font-medium text-gray-900">Carrera</th>
            <th scope="col" className="px-16 py-4 font-medium text-gray-900">Cursando</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <TablaAlumno {...{ nombre, correo, estado, carrera, modulos }} />
        </tbody>
      </table>
    </div>
  );
}