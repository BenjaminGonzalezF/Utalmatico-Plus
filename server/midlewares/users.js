import { guardarUsuario } from '../controllers/usersController.js';


export async function ingreso(req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    console.log("Intenta ingresar un user");
    
    if (email == null || password == null) {
        return res.status(401).json({
            massage: "Datos no ingresados"
        });
    }

    res.status(200).json({
        massage: "Datos Enviados a la BD"
    });
}

    export async function registrarUsuario(req, res) {
        const { nombre, apellido, email, contrasena } = req.body;
        if (nombre == null || apellido == null || email == null || contrasena == null) {
            return res.status(401).json({
                massage: "Datos no ingresados"
            });
        }

        const user = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: contrasena
        };
        const result = await guardarUsuario(user);
        res.status(200).json({
            massage: "Datos Enviados a la BD"
        });
    }