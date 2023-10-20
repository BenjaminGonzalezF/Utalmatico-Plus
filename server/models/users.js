import mongoose from "mongoose";
var Usuario = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        clave: {
            type: Number,
            required: true,
        },
        tipo: {
            type: Number,
            required: true,
        },
        voto: {
            type: Number,
            required: true,
        },
        conteoVotos: {
            type: Number,
            required: true,
        },
        votoPorM: {
            type: Number,
            required: true,
        },
        votoPorF: {
            type: Number,
            required: true,
        },
        invitado: {
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