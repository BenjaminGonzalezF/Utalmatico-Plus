import * as usersMidleware from '../midlewares/users.js';
import * as test from '../midlewares/test.js';
import * as encuesta from '../midlewares/votacion.js';
import * as alumnos from '../midlewares/alumno.js';
import * as profesores from '../midlewares/profesor.js';
import * as modulos from '../midlewares/modulos.js';
import * as unidades from '../midlewares/unidades.js';
import * as clases from '../midlewares/clase.js';

function initRoutes(app){
  

  app.post("/login", usersMidleware.ingreso);
  app.get("/", test.test);    
  app.post("/registro", usersMidleware.registrarUsuario);
  app.post("/matricularAlumno", alumnos.matricularAlumno);
  app.post("/matricularProfesor", profesores.matricularProfesor);
  app.get("/getusuarios", usersMidleware.obtenerUsuarios);
  app.get("/getAlumnos", alumnos.obtenerAlumnos);
  app.get("/getProfesores", profesores.obtenerProfesores);
  app.post("/CrearModulo",modulos.CrearModulo);
  app.get("/getModulos", modulos.obtenerrModulos);

  // rutas modulos
  app.post("/CrearUnidad",unidades.crearUnidad);
  app.get("/getUnidades", unidades.obtenerUnidades);

  // rutas clases
  app.post("/CrearClase",clases.crearClase);
  app.get("/getClases", clases.obtenerClases);
  app.post("/agregarEvaluaciones", clases.agregarEvaluaciones);
  app.post("/agregardocumentos", clases.agregardocumentos);

}
export { initRoutes}


