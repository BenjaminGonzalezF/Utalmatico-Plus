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
    const alumnos = []; 
    const usuarios = await usuario.find({});

    usuarios.forEach((user) => {
      if (user.rol === "Alumno") {
        const alumno = {
          nombre: user.nombre,
          apellido: user.apellido,
          correo: user.correo,
          carrera: user.carrera
        };
        alumnos.push(alumno);
      }
    });

    console.log(alumnos); 
    return alumnos; 
  } catch (error) {
    console.error('Error al obtener alumnos:', error);
    return false;
  }
}

export async function solicitarProfesores() {
  try {
    const profesores = []; 
    const usuarios = await usuario.find({});

    usuarios.forEach((user) => {
      if (user.rol === "Profesor") {
        const profesor = {
          nombre: user.nombre,
          apellido: user.apellido,
          correo: user.correo,
          carrera: user.carrera //cambiar a ramo o algo así
        };
        profesores.push(profesor);
      }
    });

    console.log(profesores); 
    return profesores; 
  } catch (error) {
    console.error('Error al obtener profesores:', error);
    return false;
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
