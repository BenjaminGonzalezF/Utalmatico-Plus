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

const mostrarUsuarios = () => { 
    usuario.find({}, (err, Usuarios) => { 
        if (err) {
            console.log('Error al mostrar los usuarios'); 
        } else {
            console.log(Usuarios); 
        }
    });
};

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
    let user = await usuario.findOne({ Email: correo, Contrasena: contrasena }); 
    if (user) {
        console.log("Usuario encontrado"); 
        return true;
    }
    return false;
}

export { guardarUsuario, mostrarUsuarios, verificarCorreo, buscarUsuario }; 
