import { } from '../controllers/votacionController.js';

export async function registrarVotacion(req, res) {
    const { nombre, apellido, email, contrasena } = req.body;
    if (nombre == null || apellido == null || email == null || contrasena == null) {
        return res.status(401).json({
            massage: "Datos faltantes"
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
