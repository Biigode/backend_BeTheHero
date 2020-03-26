const express = require("express");

const routes = express.Router();
const ongsController = require("../src/controllers/ongs");
const incidentsController = require("../src/controllers/incidents");
const profileController = require("../src/controllers/profile");
const sessionController = require("../src/controllers/session");

routes.get("/api", (req, res) => {
  return res.status(200).json("back end de pe");
});

/* rotas de ongs*/
routes.post("/ongs", ongsController.store);
routes.get("/ongs", ongsController.recover);

/* rotas de incidents*/
routes.post("/incidents", incidentsController.store);
routes.get("/incidents", incidentsController.recover);
routes.delete("/incidents/:id", incidentsController.delete);

/* rota de profile de incidents especificos*/
routes.get("/profile", profileController.recoverEspecifict);

/* rota de login */
routes.post("/session", sessionController.store);

module.exports = routes;
