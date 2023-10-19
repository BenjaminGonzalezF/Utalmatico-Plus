import * as usersMidleware from '../midlewares/users.js';
import * as test from '../midlewares/test.js';
import * as encuesta from '../midlewares/votacion.js';



function initRoutes(app){
  app.post("/login", usersMidleware.ingreso);
  app.get("/", test.test);    
  app.post("/registro", usersMidleware.registrarUsuario);
  app.get("/getusuarios", usersMidleware.obtenerUsuarios);    

 // app.post("/votacion", encuesta.votacion);
  //app.get("/buscarUsuario/", usersMidleware.buscar);
}
export { initRoutes}


