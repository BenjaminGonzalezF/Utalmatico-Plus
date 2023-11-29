import { registrarModulo, solicitarModulos } from "../controllers/controladorModulos.js";
import {modulos} from "../models/modulos.js";

async function CrearModulo(req, res) {
    const { modulo, carrera, ramo } = req.body;
   
    if (modulo == null || carrera == null || ramo == null) {
        return res.status(401).json({
            massage: "Datos faltantes"
        });
    }

    const modulonuevo = {
        modulo: modulo,
        carrera: carrera,
        ramo: ramo
    };


    const result = await registrarModulo(modulonuevo);
    res.status(200).json({
        massage: "modulo guardado en la BD"
    });
}


async function obtenerrModulos(req, res) {
    const result = await solicitarModulos();
    if (result) {
        console.log("Modulos obtenidos");
        return res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al solicitar los datos"
    });
}



export { CrearModulo, obtenerrModulos }; 