import mongoose from "mongoose";
var Modulo = new mongoose.Schema(
    {   
        
        

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
        alumnos: {
            type: Array,
            required: true,
        },
        
        profesorid:{
            type: String,
            required: true,
        },

        informacionid:{
            type: String,
            required: true,
        },

        comunicacionid:{
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