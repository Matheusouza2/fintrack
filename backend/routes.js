import express from "express";
import * as usuarioController from "./controllers/controladorUsuarios.js";
import * as contasController from "./controllers/contasController.js";
import { loginUsuario } from "./controllers/loginController.js";
import * as subcategoriaController from "./controllers/subcategoriaController.js";
import * as categoriasController from "./controllers/categoriasController.js";
import * as transferenciasController from "./controllers/transferenciasController.js"
const routes = express.Router();

routes.get("/ping", (req,res) => { return res.send("Pong!")})
// Endpoints referentes ao controller de contas
routes.post("/contas", contasController.cadastrarConta);

routes.get("/contas/id", contasController.mostrarContas);

routes.put("/contas", contasController.alterarContas);

routes.get("/contas", contasController.listarContas);

routes.delete("/contas/:id", contasController.excluirContas);

routes.get("/contas/:id", contasController.mostrarContas);

routes.post("/login", loginUsuario);

// criação de rotas da subcategoria

routes.post("/subcategoria", subcategoriaController.criarSubcategoria);

// routes.get("/subcategoria/:id", subcategoriaController.verSubcategoria);

routes.post("/subcategoria", subcategoriaController.atualizarSubcategoria);

routes.delete("/subcategoria/:id", subcategoriaController.apagarSubcategoria);

// Endpoints referentes ao controller de categorias
routes.post("/categorias", categoriasController.cadastrarCategoria);

routes.put("/categorias/:id", categoriasController.atualizarCategoria);

routes.delete("/categorias/:id", categoriasController.excluirCategoria);

routes.get("/categorias", categoriasController.listarCategorias);

routes.get("/categorias/:id", categoriasController.obterCategoria);

routes.get("/usuarios/:id", usuarioController.obterUsuarioPorId);

routes.post("/transferencia", transferenciasController.CriarTransferencia)
export default routes;
