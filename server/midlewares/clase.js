
import  { registrarClases, solicitarClases } from "../controllers/controladorClases.js";
import { clases } from "../models/clases.js";

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

async function agregarEvaluaciones(req, res) {
    const { Nombre_clase, datosAñadir } = req.body; 
    if (!Nombre_clase || !datosAñadir) {
        return res.status(400).json({
            message: "Datos faltantes para agregar a la matriz."
        });
    }

    try {
        // Buscar el documento por ID.
        const documento = await clases.findOne({ Nombre_clase: Nombre_clase });
        console.log("LETSS GOOOOOOOOOOOO")
        console.log(documento);
        if (!documento) {
            return res.status(404).json({
                message: "Documento no encontrado."
            });
        }

        // Añadir datos a la matriz.
        documento.Evaluaciones.push(datosAñadir); // Suponiendo que datosAñadir es un array o un valor que deseas añadir a la matriz.

        // Guardar el documento modificado.
        await documento.save();

        return res.status(200).json({
            message: "Datos agregados correctamente."
        });

    } catch (error) {
        console.error("Error al agregar datos a la matriz:", error);
        return res.status(500).json({
            message: "Error interno del servidor."
        });
    }
}


async function agregardocumentos(req, res) {
    const { Nombre_clase, datosAñadir } = req.body; 
    if (!Nombre_clase || !datosAñadir) {
        return res.status(400).json({
            message: "Datos faltantes para agregar a la matriz."
        });
    }

    try {
        // Buscar el documento por ID.
        console.log("LETSS antes GOOOOOOOOOOOO")
        const documento = await clases.findOne({ Nombre_clase: Nombre_clase });
        console.log("LETSS GOOOOOOOOOOOO")
        console.log(documento);
        if (!documento) {
            return res.status(404).json({
                message: "Documento no encontrado."
            });
        }

        // Añadir datos a la matriz.
        documento.documentos.push(datosAñadir); // Suponiendo que datosAñadir es un array o un valor que deseas añadir a la matriz.

        // Guardar el documento modificado.
        await documento.save();

        return res.status(200).json({
            message: "Datos agregados correctamente."
        });

    } catch (error) {
        console.error("Error al agregar datos a la matriz:", error);
        return res.status(500).json({
            message: "Error interno del servidor."
        });
    }
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

export { crearClase, obtenerClases, agregarEvaluaciones, agregardocumentos };