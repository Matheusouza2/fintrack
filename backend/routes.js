import express from "express";
import * as TransferenciasController from "./controllers/transferenciasController.js"

const routes = express.Router();
routes.use(express.json());


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
