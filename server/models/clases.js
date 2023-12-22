import mongoose from "mongoose";
var Clases = new mongoose.Schema(
    {
        Nombre_ramo:{
            type: String,
            required: true,
        },
        Nombre_clase:{
            type: String,
            required: true,
        },
        Desarrollo_clase:{
            type: String,
            required: true,
        },
        Unidad_a_Guadar:{
            type: String,
            required: true,
        },

    },
    {
        collection: 'Clases',
        versionKey: false
    }
)

export const clases = new mongoose.model('Clases', Clases);