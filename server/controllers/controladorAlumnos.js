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
export { registrarAlumno };