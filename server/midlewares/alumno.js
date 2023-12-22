import {registrarAlumno, solicitarAlumnos} from '../controllers/controladorAlumnos.js';

async function matricularAlumno(req, res) {
    const { correo, clave, nombre, rut, carrera } = req.body;
   if (correo == null || clave == null || nombre == null || rut == null || carrera == null) {
        return res.status(401).json({
            massage: "Datos faltantes"
        });
    }

    const alumno = {
        correo: correo,
        clave: clave,
        nombre: nombre,
        rut: rut,
        carrera: carrera
    };
    const result = await registrarAlumno(alumno);
    res.status(200).json({
        massage: "Alumno guardado en la BD"
    });
}

async function obtenerAlumnos(req, res) {
    const result = await solicitarAlumnos();
    if (result) {
        console.log("Alumnos obtenidos");
        return res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al solicitar los datos"
    });
}

export { matricularAlumno, obtenerAlumnos }; 