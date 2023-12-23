


function buscarUsuario(nuevoUsuario) {
    let correo = nuevoUsuario.email; 
    let contrasena = nuevoUsuario.contrasena; 
    let user = usuario.findOne({ Email: correo, Contrasena: contrasena }); 
    if (user) {
        console.log("Usuario encontrado"); 
        return true;
    }
    return false;
    

}