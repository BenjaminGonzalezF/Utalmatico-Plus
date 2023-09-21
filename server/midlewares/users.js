import { guardarUsuario, mostrarUsuarios, verificarCorreo, buscarUsuario  } from '../controllers/usersController.js'

export async function ingreso(req, res) {
    const {email,password} = req.body;
    console.log("Intenta ingresar un user");

    if(email == null || password == null){
        return res.status(401).json({
            massage: "Datos no ingresados"
        });
    }

    
}

