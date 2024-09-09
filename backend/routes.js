import express from "express";
const routes = express.Router();



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
 Endpoint para excluir a conta de um usuário
 específico.
 *********************************************/
routes.delete("/usuarios/:id", (req, res) => {
    // res.send("(DELETE) Endpoint 'api/usuarios/:id' OK");
});


export default routes;