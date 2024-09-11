import express from "express";
const routes = express.Router();
routes.use(express.json());
import * as transacoesController from "./controllers/transacoesController.js";

//rotas dos controlers e trasacoes dos usuarios
routes.get("/transacoes", transacoesController.listarTransacoesPorUsuario);
routes.get("/transacoes/:id", transacoesController.mostrarTransacaoPorUsuario);
routes.post("/transacoes", transacoesController.cadastrarTransacaoPorUsuario);
routes.put("/transacoes/:id", transacoesController.alterarTransacaoPorUsuario);
routes.delete("/transacoes/:id", transacoesController.excluirTransacaoPorUsuario);

export default routes;