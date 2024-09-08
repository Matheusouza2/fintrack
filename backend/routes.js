import express from "express";
import * as TransferController from "./controllers/transferenciasController.js"

const routes = express.Router();
routes.use(express.json());


// Rotas para transferencia 

// Listar Transferencias
routes.get("/transferencias", async (req, res) => {

});

// Criar transferencias
routes.post("/transferencias/create", async (req, res) => {

});

// Atualizar Transferencias
routes.put("/transferencias/:id", async (req, res) => {

});

// Apagar Transferencias
routes.delete("/transferencias/:id", async (req, res) => {

});

// Mostrar uma transferencia por id
routes.get("/transferencias/:id", async (req, res) => {

});


export default routes;
