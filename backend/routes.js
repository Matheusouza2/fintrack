import express from "express";
import *as usuarioController from "./controller_usuario";
import * as contasController from "./controllers/contasController.js"

const routes = express.Router();

/* Em routes criei as rotas nas quais as funções irão pecorrer   */

routes.post("/contas", contasController.cadastrarConta);

routes.put('/contas', usuarioController.alterar_contas);

routes.get('/contas', usuarioController.listar_contas);

routes.delete('/contas/:id',usuarioController.excluir_contas);

routes.get('/contas/:id', usuarioController.mostrar_contas);


export default routes;

