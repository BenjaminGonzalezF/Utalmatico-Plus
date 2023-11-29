import { modulos } from '../models/modulos.js';

async function registrarModulo(nuevomodulo) {

  const guardarModulo = new modulos({
    nombre: nuevomodulo.modulo,
    descripcion: nuevomodulo.ramo,
    docente: nuevomodulo.carrera,
    profesorid: "0",
    informacionid: "0",
    comunicacionid: "0",
    alumnos: []


  });
  
  guardarModulo.save();
  console.log("modulo guardado: " + guardarModulo);
}

async function solicitarModulos() {
  try {
    const modulosobtenidos = await modulos.find({});
    console.log(modulosobtenidos); 
    return modulosobtenidos; 
  } catch (error) {
    console.error('Error al obtener profesores:', error);
    return false;
  }
}


export { registrarModulo , solicitarModulos };