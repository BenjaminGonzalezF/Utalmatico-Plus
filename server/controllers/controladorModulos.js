import { modulos } from '../models/modulos.js';

async function registrarModulo(nuevomodulo) {

  const guardarModulo = new modulos({
    nombre: nuevomodulo.modulo,
    descripcion: nuevomodulo.ramo,
    docente: nuevomodulo.carrera,
  });
  
  guardarModulo.save();
  console.log("modulo guardado: " + guardarModulo);
}

 async function solicitarProfesores() {
  try {
    const profesores = await profesor.find({});
    console.log(profesores); 
    return profesores; 
  } catch (error) {
    console.error('Error al obtener profesores:', error);
    return false;
  }
}

export { registrarModulo , solicitarProfesores };