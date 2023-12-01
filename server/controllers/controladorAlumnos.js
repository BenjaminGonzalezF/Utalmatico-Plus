import { alumno } from "../models/alumnos.js";

async function registrarAlumno(nuevoAlumno) {

  const guardarAlumno = new alumno({
    correo: nuevoAlumno.correo,
    clave: nuevoAlumno.clave,
    nombre: nuevoAlumno.nombre,
    rut: nuevoAlumno.rut,
    carrera: nuevoAlumno.carrera
  });
  guardarAlumno.save();
  console.log("Alumno guardado: " + guardarAlumno);
}

 async function solicitarAlumnos() {
  try {
    const alumnos = await alumno.find({});
    console.log(alumnos); 
    return alumnos; 
  } catch (error) {
    console.error('Error al obtener alumnos:', error);
    return false;
  }
}

export { registrarAlumno, solicitarAlumnos };