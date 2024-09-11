import express from "express";
import * as transacoesController from "./controllers/transacoesController.js";
import * as TransferenciasController from "./controllers/transferenciasController.js"

const routes = express.Router();
routes.use(express.json());

//rotas dos controlers e trasacoes dos usuarios
routes.get("/transacoes", transacoesController.listarTransacoesPorUsuario);
routes.get("/transacoes/:id", transacoesController.mostrarTransacaoPorUsuario);
routes.post("/transacoes", transacoesController.cadastrarTransacaoPorUsuario);
routes.put("/transacoes/:id", transacoesController.alterarTransacaoPorUsuario);
routes.delete("/transacoes/:id", transacoesController.excluirTransacaoPorUsuario);

/*
 Rotas para transferencia
*/ 

/* 
Endpoint para Listar Transferencias
*/
routes.get("/transferencias", async (req, res) => {

});

/* 
Endpoint para Criar Transferencias
*/
routes.post("/transferencias/create", async (req, res) => {

});

/* 
Endpoint para Atualizar Transferencias
*/
routes.put("/transferencias/:id", async (req, res) => {

});

/* 
Endpoint para Apagar Transferencias
*/
routes.delete("/transferencias/:id", async (req, res) => {

});

/* 
Endpoint para Mostrar uma transferencia por id
*/
routes.get("/transferencias/:id", async (req, res) => {

});


export default routes;

