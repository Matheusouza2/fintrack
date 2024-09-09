import express from "express";
const routes = express.Router();
import {listarTransacoesPorUsuario,
    mostrarTransacaoPorUsuario,
    cadastrarTransacaoPorUsuario,
    alterarTransacaoPorUsuario,
    excluirTransacaoPorUsuario} from "../backend/controllers/controler_transacoes.js";

//rotas dos controlers e trasacoes dos usuarios
routes.get("/transacoes", listarTransacoesPorUsuario);
routes.get("/transacoes/:id", mostrarTransacaoPorUsuario);
routes.post("/transacoes", cadastrarTransacaoPorUsuario);
routes.put("/transacoes/:id", alterarTransacaoPorUsuario);
routes.delete("/transacoes/:id", excluirTransacaoPorUsuario);



export default routes;
