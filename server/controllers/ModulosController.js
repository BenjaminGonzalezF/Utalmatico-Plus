import Modulos from '../models/ModulosModel.js';


export async function solicitarModulos() {
    try {
      const modulos = await Modulos.find({}); // Consulta todos los documentos en la colección de usuarios
      console.log(modulos); // Imprime los usuarios en la consola
      return modulos;
    } catch (error) {
      console.error('Error al obtener modulos:', error);
      return false
    }
  }