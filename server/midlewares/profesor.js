import {registrarProfesor, solicitarProfesores} from '../controllers/controladorProfesores.js';

async function matricularProfesor(req, res) {
    const { correo, clave, nombre, rut, carrera } = req.body;
   if (correo == null || clave == null || nombre == null || rut == null || carrera == null) {
        return res.status(401).json({
            massage: "Datos faltantes"
        });
    }

    const profesor = {
        correo: correo,
        clave: clave,
        nombre: nombre,
        rut: rut,
        carrera: carrera
    };
    const result = await registrarProfesor(profesor);
    res.status(200).json({
        massage: "Profesor guardado en la BD"
    });
}

async function obtenerProfesores(req, res) {
    const result = await solicitarProfesores();
    if (result) {
        console.log("Profesores obtenidos");
        return res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al solicitar los datos"
    });
}

export { matricularProfesor, obtenerProfesores }; 