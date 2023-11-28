import mongoose from "mongoose";
var Profesor = new mongoose.Schema(
    {
        correo:{
            type: String,
            required: true,
        },
        clave: {
            type: String,
            required: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        rut: {
            type: String,
            required: true,
        },
        carrera: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'Profesores',
        versionKey: false
    }
)

export const profesor = new mongoose.model('Profesores', Profesor);