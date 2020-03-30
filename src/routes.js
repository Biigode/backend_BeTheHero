const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const routes = express.Router();
const ongsController = require("../src/controllers/ongs");
const incidentsController = require("../src/controllers/incidents");
const profileController = require("../src/controllers/profile");
const sessionController = require("../src/controllers/session");

routes.get("/api", (req, res) => {
  return res.status(200).json("back end de pe");
});

/* rotas de ongs*/
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(12 ),
      city: Joi.string().required(),
      uf: Joi.string().required()
    })
  }),
  ongsController.store
);
routes.get("/ongs", ongsController.recover);

/* rotas de incidents*/
routes.post("/incidents", incidentsController.store);
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  incidentsController.recover
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  incidentsController.delete
);

/* rota de profile de incidents especificos*/
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  profileController.recoverEspecifict
);

/* rota de login */
routes.post("/session", sessionController.store);

module.exports = routes;
