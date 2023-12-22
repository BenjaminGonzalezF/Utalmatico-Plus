import { unidad } from "../models/unidad.js";


async function registrarUnidades(nuevoUnidad) {

  const guardarUnidad = new unidad({
    Ramo: nuevoUnidad.Ramo,
    nombre_unidad: nuevoUnidad.nombre_unidad,  
  });

  guardarUnidad.save();
  console.log("Unidad guardado: " + guardarUnidad);
}

 async function solicitarunidad() {
  try {
    const Unidades = await unidad.find({});
    console.log(Unidades); 
    return Unidades; 
  } catch (error) {
    console.error('Error al obtener unidades:', error);
    return false;
  }
}

export { registrarUnidades, solicitarunidad };