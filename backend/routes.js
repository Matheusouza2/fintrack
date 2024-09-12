import express from "express";
import * as TransferenciasController from "./controllers/transferenciasController.js"
import * as transacoesController from "./controllers/transacoesController.js"
const routes = express.Router();
routes.use(express.json());
//rotas dos controlers e trasacoes dos usuarios

/*
    Rotas para transacoes
*/

/*
Endpoint para Listar Transacoes
*/
routes.get("/transacoes", transacoesController.listarTransacoesPorUsuario);

/*
Endpoint para Mostrar uma transacao por id
*/
routes.get("/transacoes/:id", transacoesController.mostrarTransacaoPorUsuario);

/*
Endpoint para Criar Transacoes
*/
routes.post("/transacoes", transacoesController.cadastrarTransacaoPorUsuario);

/*
Endpoint para Atualizar Transacoes 
*/

routes.put("/transacoes/:id", transacoesController.alterarTransacaoPorUsuario);

/*
Endpoint para Apagar Transacoes 
*/
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