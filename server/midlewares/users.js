import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '../..');

import { guardarUsuario, buscarUsuario, solicitarUsuarios, solicitarAlumnos} from '../controllers/usersController.js';


export async function ingreso(req, res) {
    const { correo, clave } = req.body;
    const user = {
        correo: correo,
        clave: clave
    };

    if (correo == "" || clave == "") {
        console.log("Datos no ingresados")
        return res.status(401).json({
            message: "Datos no ingresados"
        });
    }
    const usuario = await buscarUsuario(user);
    if (usuario != null) {
        return res.status(200).json({
            message: "Usuario encontrado",
            rol: usuario.rol
        });
        //redirigirUsuario(usuario.rol, res);
    } else {
        return res.status(417).json({
            message: "Usuario no encontrado"
        });
    }
}

function redirigirUsuario(rol, res) {

    if (rol === "Administrador") {
        res.redirect('http://localhost:3000/inicio');
    } else if (rol === "Profesor") {
        console.log("Enviando a calendario");
        //res.redirect('http://localhost:3000/calendario');
        const filePath = path.join(root, 'client/src/components', 'VistaModulo.jsx');
        res.sendFile(filePath);
        
    } else if (rol === "Alumno") {
        res.redirect('http://localhost:3000/pestañaInicial');

    } else {
        res.status(404).send('Rol no válido');
    }
}

export async function registrarUsuario(req, res) {
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
export async function obtenerUsuarios(req, res) {
    const result = await solicitarUsuarios();
    if (result) {
        res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al soliciatar los datos"
    });
}

export async function obtenerAlumnos(req, res) {
    const result = await solicitarAlumnos();
    if (result) {
        console.log("Alumnos obtenidos");
        return res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al soliciatar los datos"
    });
}




