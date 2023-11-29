import { registrarModulo } from "../controllers/controladorModulos.js";

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


export { CrearModulo }; 