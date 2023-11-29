import mongoose from "mongoose";
var Modulo = new mongoose.Schema(
    {
        // modulo, carrera,ramo
        nombre: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        docente: {
            type: String,
            required: true,
        },

    },

    {
        collection: 'Modulos',
        versionKey: false
    }
)

export const modulos = new mongoose.model('Modulos', Modulo);