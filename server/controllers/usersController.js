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

async function buscarUsuario(nuevoUsuario) {
    let correo = nuevoUsuario.email; 
    let contrasena = nuevoUsuario.contrasena; 
    let user = await usuario.findOne({ Correo: correo, Clave: contrasena }); 
    if (user) {
        console.log("Usuario encontrado"); 
        return true;
    }
    return false;
}

export { guardarUsuario, mostrarUsuarios, verificarCorreo, buscarUsuario}; 
