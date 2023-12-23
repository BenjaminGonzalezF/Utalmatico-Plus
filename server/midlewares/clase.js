
import  { registrarClases, solicitarClases } from "../controllers/controladorClases.js";

async function crearClase(req, res) {
    const { Nombre_ramo, Nombre_clase, Desarrollo_clase, Unidad_a_Guadar } = req.body;

    if (Nombre_ramo == null || Nombre_clase == null || Desarrollo_clase == null || Unidad_a_Guadar == null) {
        return res.status(401).json({
            massage: "Datos faltantes"
        });
    }


    const clase = {
        Nombre_ramo: Nombre_ramo,
        Nombre_clase: Nombre_clase,
        Desarrollo_clase: Desarrollo_clase,
        Unidad_a_Guadar: Unidad_a_Guadar,
    };

    const result = await registrarClases(clase);
    res.status(200).json({
        massage: "clase guardado en la BD"
    });
}



async function obtenerClases(req, res) {
    const result = await solicitarClases();
    if (result) {
        console.log("Clases obtenidos");
        return res.status(200).json({
            result
        })
    }
    return res.status(417).json({
        massage: "Error al solicitar los datos"
    });
}

export { crearClase, obtenerClases };