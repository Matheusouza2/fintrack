import express from "express";
import * as contasController from "./controllers/contasController.js"

const routes = express.Router();

/* Em routes criei as rotas nas quais as funções irão pecorrer   */

routes.post("/contas", contasController.cadastrarConta);

routes.get('/contas/id', contasController.mostrarContas);


export default routes;

