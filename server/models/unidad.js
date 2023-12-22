import mongoose from "mongoose";
var Unidad = new mongoose.Schema(
    {
        Ramo:{
            type: String,
            required: true,
        },
        nombre_unidad: {
            type: String,
            required: true,
        },

    },
    {
        collection: 'Unidades',
        versionKey: false
    }
)

export const unidad = new mongoose.model('Unidad', Unidad);