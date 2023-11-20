import { usuario } from "../models/users.js";

const guardarUsuario = (nuevoUsuario) => {
  const user = new usuario({
    Nombre: nuevoUsuario.nombre,
    Apellido: nuevoUsuario.apellido,
    Email: nuevoUsuario.email,
    Contrasena: nuevoUsuario.contrasena,
  });
  user.save();
  console.log("Usuario guardado: " + user);
};

async function solicitarUsuarios() {
  try {
    const usuarios = await usuario.find({}); // Consulta todos los documentos en la colección de usuarios
    console.log(usuarios); // Imprime los usuarios en la consola
    return usuarios;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    return false
  }
}
export async function solicitarAlumnos() {
  try {
    const usuarios = await usuario.find({}); 
    console.log(usuarios); 
    return usuarios;
  } catch (error) {
    console.error('Error al obtener alumnos:', error);
    return false
  }
}

async function verificarCorreo(nuevoUsuario) {
  let correo = nuevoUsuario.email;

  let user = await usuario.findOne({ Email: correo });
  if (user) {
    console.log("Correo ya en uso");
    return false;
  }
  return true;
}
async function buscarUsuario(nuevoUsuario) {

  const correo = nuevoUsuario.correo;
  const clave = nuevoUsuario.clave;

  console.log("Buscando a ", correo, clave);

  try {
    const usuarioEncontrado = await usuario.findOne({ correo: correo, clave: clave });

    if (usuarioEncontrado) {
      console.log('Usuario encontrado:', usuarioEncontrado);
      return usuarioEncontrado;
    } else {
      console.log('No se encontró ningún usuario con ese nombre y contraseña');
      return null;
    }
  } catch (error) {
    console.error('Ocurrió un error al buscar el usuario:', error);
    return null;
  }

  
}

export { guardarUsuario, solicitarUsuarios, verificarCorreo, buscarUsuario }; 
