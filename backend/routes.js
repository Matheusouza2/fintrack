import express from "express";
import * as usuarioController from "./controllers/controladorUsuarios.js";
import * as contasController from "./controllers/contasController.js";
import * as subcategoriaController from "../controllers/subcategoriaController.js";
import * as categoriasController from "./controllers/categoriasController.js";


const routes = express.Router();

/* Em routes criei as rotas nas quais as funções irão pecorrer   */

routes.post("/contas", contasController.cadastrarConta);

routes.put("/contas", contasController.alterarContas);

routes.get("/contas", contasController.listarContas);

routes.delete("/contas/:id", contasController.excluirContas);

routes.get("/contas/:id", contasController.mostrarContas);

// criação de rotas das subcategorias

routes.post("/subcategoria", subcategoriaController.criarSubcategoria);

routes.get("/subcategoria/:id", subcategoriaController.verSubcategoria);

routes.post("/subcategoria", subcategoriaController.atualizarSubcategoria);

routes.delete("/subcategoria/:id", subcategoriaController.apagarSubcategoria);

export default routes;