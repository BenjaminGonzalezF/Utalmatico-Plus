const mongoose = require('mongoose');

// Define the schema for the Modulos model
const ModulosSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Resumen: {
        type: String,
        required: true
    },
    Docente: {
        type: String,
        required: true
    },
    Alumnos: {
        type: List,
        required: false   
    },
    Unidades: {
        type: List,
        required: false
    },
    informacion: {
        type: Interger,
        required: false
    },
    Comunicacion: {
        type: Interger,
        required: false
    },

});

// Create the Modulos model using the schema
const Modulos = mongoose.model('Modulos', ModulosSchema);



// Export the Modulos model
module.exports = Modulos;
