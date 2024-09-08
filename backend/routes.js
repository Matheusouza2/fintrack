import express from "express";
const routes = express.Router();



// *********************************************
// Endpoint para consultar os dados de um usuá- 
// rio em particular.
// *********************************************
routes.get("/users/:id", (req, res) => {
    // res.send("(GET) Endpoint 'api/users/:id' OK");
});


// *********************************************
// Endpoint para listar todos os usuários cadas- 
// trados.
// *********************************************
routes.get("/users", (req, res) => {
    // res.send("(GET) Endpoint 'api/users' OK");
});


// *********************************************
// Endpoint para cadastrar usuários.
// *********************************************
routes.post("/users", (req, res) => {
    // res.send("(POST) Endpoint 'api/users' OK");
});


// *********************************************
// Endpoint para atualizar os dados de um deter-
// minado usuário.
// *********************************************
routes.put("/users/:id", (req, res) => {
    // res.send("(PUT) Endpoint 'api/users/:id' OK");
});


// *********************************************
// Endpoint para excluir a conta de um usuário
// específico.
// *********************************************
routes.delete("/users/:id", (req, res) => {
    // res.send("(DELETE) Endpoint 'api/users/:id' OK");
});


export default routes;