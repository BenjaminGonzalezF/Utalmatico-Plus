import * as usersMidleware from '../midlewares/users.js';
import * as test from '../midlewares/test.js';
import * as encuesta from '../midlewares/votacion.js';
import * as alumnos from '../midlewares/alumno.js';



function initRoutes(app){
  app.post("/login", usersMidleware.ingreso);
  app.get("/", test.test);    
  app.post("/registro", usersMidleware.registrarUsuario);
  app.post("/matricularAlumno", alumnos.matricularAlumno);
  app.get("/getusuarios", usersMidleware.obtenerUsuarios);
  app.get("/getAlumnos", alumnos.obtenerAlumnos);
  app.get("/getProfesores", usersMidleware.obtenerProfesores);

    
}
export { initRoutes}


