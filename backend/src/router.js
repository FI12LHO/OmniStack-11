const express = require("express"); // Requerindo modulo express
const ongController = require("./controller/ongsController");
const incidentsController = require("./controller/incidentsController");
const profileController = require("./controller/profileController");
const sessionController = require("./controller/sessionController");

const router = express.Router();

// Cadastro de ongs
router.post("/ongs", ongController.create);
// Cadastro de casos
router.post("/incidents", incidentsController.create);

// Listagem de ongs
router.get("/ongs", ongController.index);
// Listagem de casos
router.get("/incidents", incidentsController.index);
// Listagem de casos especificos
router.get("/profile", profileController.index);

// Deletar casos
router.delete("/incidents/:id", incidentsController.delete);

// Login de ongs
router.post("/session", sessionController.create);

module.exports = router;