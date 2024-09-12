import express from "express";
import *as usuarioController from "./controller_usuario";

const routes = express.Router();

/* Em routes criei as rotas nas quais as funções irão pecorrer   */

routes.post('/contas', usuarioController.cadastrar_contas);

routes.put('/contas', usuarioController.alterar_contas);

routes.get('/contas', usuarioController.listar_contas);

routes.delete('/contas/:id',usuarioController.excluir_contas);

routes.get('/contas/:id', usuarioController.mostrar_contas);


export default routes;
