
import { registrarUnidades, solicitarunidad } from "../controllers/controladorUnidades.js";

async function crearUnidad(req, res) {
   const { Ramo, nombre_unidad } = req.body;
   
   if (Ramo == null || nombre_unidad == null) {
       return res.status(401).json({
           massage: "Datos faltantes"
       }); 
    }


    const unidad = {
        Ramo: Ramo,
        nombre_unidad: nombre_unidad,
    };

    const result = await registrarUnidades(unidad);
    res.status(200).json({
        massage: "Profesor guardado en la BD"
    });
}



async function obtenerUnidades(req, res) {
    const result = await solicitarunidad();
    if (result) {
        console.log("unidades obtenidos");
        return res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al solicitar los datos"
    });
}

export { crearUnidad, obtenerUnidades };