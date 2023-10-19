import mongoose from "mongoose";
var Usuario = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true,
        },
        Apellido: {
            type: String,
            required: true,
        },
        Correo: {
            type: String,
            required: true,
        },
        Clave: {
            type: String,
            required: true,
        },
        Tipo: {
            type: String,
            required: true,
        },
        Voto: {
            type: String,
            required: true,
        },
        ConteoVotos: {
            type: String,
            required: true,
        },
        VotoPorM: {
            type: String,
            required: true,
        },
        VotoPorF: {
            type: String,
            required: true,
        },
        Invitado: {
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