import express from "express";
import * as usuarioController from "./controllers/controladorUsuarios.js";
import * as contasController from "./controllers/contasController.js";
import * as categoriasController from "./controllers/categoriasController.js";


const routes = express.Router();


// Endpoints referentes ao controller de contas
routes.post("/contas", contasController.cadastrarConta);

routes.put("/contas", contasController.alterarContas);

routes.get("/contas", contasController.listarContas);

routes.delete("/contas/:id", contasController.excluirContas);

routes.get("/contas/:id", contasController.mostrarContas);



// Endpoints referentes ao controller de categorias
routes.post("/categorias", categoriasController.cadastrarCategoria);

routes.put("/categorias/:id", categoriasController.atualizarCategoria);

routes.delete("/categorias/:id", categoriasController.excluirCategoria);

routes.get("/categorias", categoriasController.listarCategorias);

routes.get("/categorias/:id", categoriasController.obterCategoria);


export default routes;
