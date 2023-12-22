import mongoose from "mongoose";
var Usuario = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        clave: {
            type: String,
            required: true,
        },
        rol: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'Usuario',
        versionKey: false
    }
)

export const usuario = new mongoose.model('Usuario', Usuario);