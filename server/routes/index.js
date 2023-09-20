import * as usersMidleware from '../midlewares/users.js';
import * as testController from '../midlewares/test.js';


export function initRoutes(app){
  app.post("/login", usersMidleware.ingreso);
  app.get("/", testController.test);

  //app.post("/registro", usersMidleware.registro);
  //app.get("/buscarUsuario/", usersMidleware.buscar);
}
