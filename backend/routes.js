import express from "express";
import * as TransferenciasController from "./controllers/transferenciasController.js"
import * as transacoesController from "./controllers/transacoesController.js"
const routes = express.Router();
routes.use(express.json());

/*
    Rotas para transferencias
 */
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




/**********************************************
 Endpoint para consultar os dados de um usuário 
 em particular.
 *********************************************/
routes.get("/usuarios/:id", (req, res) => {
    // res.send("(GET) Endpoint 'api/usuarios/:id' OK");
});


/**********************************************
 Endpoint para listar todos os usuários cadas- 
 trados.
 *********************************************/
routes.get("/usuarios", (req, res) => {
    // res.send("(GET) Endpoint 'api/usuarios' OK");
});


/**********************************************
 Endpoint para cadastrar usuários.
 *********************************************/
routes.post("/usuarios", (req, res) => {
    // res.send("(POST) Endpoint 'api/usuarios' OK");
});


/**********************************************
 Endpoint para atualizar os dados de um deter-
 minado usuário.
 *********************************************/
routes.put("/usuarios/:id", (req, res) => {
    // res.send("(PUT) Endpoint 'api/usuarios/:id' OK");
});


/**********************************************
 Endpoint para excluir um usuário específico.
 *********************************************/
routes.delete("/usuarios/:id", (req, res) => {
    // res.send("(DELETE) Endpoint 'api/usuarios/:id' OK");
});


export default routes;