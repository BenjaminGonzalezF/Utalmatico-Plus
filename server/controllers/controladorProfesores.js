import { profesor } from "../models/profesores.js";

async function registrarProfesor(nuevoProfesor) {

  const guardarProfesor = new profesor({
    correo: nuevoProfesor.correo,
    clave: nuevoProfesor.clave,
    nombre: nuevoProfesor.nombre,
    rut: nuevoProfesor.rut,
    carrera: nuevoProfesor.carrera
  });
  guardarProfesor.save();
  console.log("Profesor guardado: " + guardarProfesor);
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

export { registrarProfesor, solicitarProfesores };