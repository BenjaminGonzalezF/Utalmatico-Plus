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

async function mostrarUsuarios() {
    try {
      const usuarios = await usuario.find({}); // Consulta todos los documentos en la colección de usuarios
      console.log(usuarios); // Imprime los usuarios en la consola
      return usuarios;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
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
async function  buscarUsuario(nuevoUsuario) {

    const correo = nuevoUsuario.correo;
    const clave = nuevoUsuario.clave;
  
    console.log("Buscando a " , correo, clave);
  
    try {
      const usuarioEncontrado = await usuario.findOne({ correo: correo, clave: clave });

      if (usuarioEncontrado) {
        if(usuarioEncontrado.voto == 0){
            console.log('Usuario encontrado:', usuarioEncontrado);
            return true;
            }
        console.log('Usuario ya voto:', usuarioEncontrado);
        return false
      } else {
        console.log('No se encontró ningún usuario con ese nombre y contraseña');
        return false;
      }
    } catch (error) {
      console.error('Ocurrió un error al buscar el usuario:', error);
      return false;
    }
}  

export { guardarUsuario, mostrarUsuarios, verificarCorreo, buscarUsuario}; 
