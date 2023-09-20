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
      Email:{
          type: String,
          required: true,
      },
      Contrasena:{
          type: String,
          required: true,

      }
  },
  {
      collection : 'Usuario',
      versionKey: false
  }
)

export const usuario = new mongoose.model('Usuario', Usuario);