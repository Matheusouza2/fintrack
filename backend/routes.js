import express from "express";
import * as TransferController from "./controllers/transferenciasController.js"

const routes = express.Router();
routes.use(express.json());


routes.get("/transferencias", async (req, res) => {

});
routes.post("/transferencias/create", async (req, res) => {

});
routes.put("/transferencias/:id", async (req, res) => {

});
routes.delete("/transferencias/:id", async (req, res) => {

});
routes.get("/transferencias/:id", async (req, res) => {

});


export default routes;
