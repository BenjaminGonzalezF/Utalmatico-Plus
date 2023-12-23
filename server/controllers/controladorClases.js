import { clases } from "../models/clases.js";

async function registrarClases(nuevoClases) {

  const guardarClases = new clases({
    Nombre_ramo: nuevoClases.Nombre_ramo,
    Nombre_clase: nuevoClases.Nombre_clase,
    Desarrollo_clase: nuevoClases.Desarrollo_clase,
    Unidad_a_Guadar: nuevoClases.Unidad_a_Guadar,


  });
  guardarClases.save();
  console.log("cases guardado: " + guardarClases);
}

 async function solicitarClases() {
  try {
    const clases = await Clases.find({});
    console.log(clases); 
    return clases; 
  } catch (error) {
    console.error('Error al obtener clases:', error);
    return false;
  }
}

export { registrarClases, solicitarClases };