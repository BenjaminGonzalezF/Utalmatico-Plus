import mongoose from "mongoose";
var Alumno = new mongoose.Schema(
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
        collection: 'Alumnos',
        versionKey: false
    }
)

export const alumno = new mongoose.model('Alumnos', Alumno);