import * as usersMidleware from '../midlewares/users.js';
import * as test from '../midlewares/test.js';


function initRoutes(app){
  app.post("/login", usersMidleware.ingreso);
  app.get("/", test.test);    
  app.post("/registro", usersMidleware.registrarUsuario);
  //app.get("/buscarUsuario/", usersMidleware.buscar);
}
export { initRoutes}


