import {registrarAlumno, solicitarAlumnos} from '../controllers/controladorAlumnos.js';
import {guardarUsuario} from '../controllers/usersController.js';

async function matricularAlumno(req, res) {
    const { correo, clave, nombre, rut, carrera } = req.body;
   if (correo == null || clave == null || nombre == null || rut == null || carrera == null ) {
        return res.status(402).json({
            massage: "Datos faltantes"
        });
    }
    if (correo == "" || clave == "" || nombre == "" || rut == "" || carrera == "" ) {
        return res.status(403).json({
            massage: "Datos faltantes"
        });
    }

    const alumno = {
        correo: correo,
        clave: clave,
        nombre: nombre,
        rut: rut,
        carrera: carrera,
        rol: "Alumno"
    };
    const resultTablaAlumno = await registrarAlumno(alumno);
    const resultTablaUsuarios = await guardarUsuario(alumno);
    if(resultTablaAlumno == false || resultTablaUsuarios == false){
        console.log("Error al guardar los datos");
        return res.status(417).json({
            massage: "Error al guardar los datos"
        });
    }
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