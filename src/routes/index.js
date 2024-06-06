import { Router } from "express";
import auth from "../middlewares/auth";
import SessionController from "../controllers/SessionController";
import userController from "../controllers/userController";
import RepositoriesControllers from "../controllers/RepositoriesControllers";

const routes = new Router();

routes.post("/sessions", SessionController.create);

routes.use(auth);

routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.post("/users", userController.create);
routes.put("/users/:id", userController.update);
routes.delete("/users/:id", userController.destroy);

routes.get("/users/:user_id/repositories", RepositoriesControllers.index);
routes.post("/users/:user_id/repositories", RepositoriesControllers.create);
routes.delete(
  "/users/:user_id/repositories/:id",
  RepositoriesControllers.destroy
);

export default routes;
