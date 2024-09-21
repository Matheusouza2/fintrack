import express from "express";
import * as usuarioController from "./controllers/controladorUsuarios.js";
import * as contasController from "./controllers/contasController.js";

const routes = express.Router();

/* Em routes criei as rotas nas quais as funções irão pecorrer   */

routes.post("/contas", contasController.cadastrarConta);

routes.put("/contas", contasController.alterarContas);

routes.get("/contas", contasController.listarContas);

routes.delete("/contas/:id", contasController.excluirContas);

routes.get("/contas/:id", contasController.mostrarContas);

export default routes;
