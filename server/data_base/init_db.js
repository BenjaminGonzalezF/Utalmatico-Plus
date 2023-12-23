import mongoose from "mongoose";
import dotenv from "dotenv";

//Esta configuracion indica que el archivo .env se encuentra en una capeta superior.
import { fileURLToPath } from "url";
import { dirname, join } from "path"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../.env") });
const DB_URI = process.env.MONGODB_URI;


const init_db = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos exitosa!');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

export default init_db;
