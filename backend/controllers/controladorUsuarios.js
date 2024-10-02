import { PrismaClient } from "@prisma/client";
import * as usuarioModel from "../model/usuario.js";

const prisma = new PrismaClient();

/***************************************************
 Obtém um usuário em particular com base no seu ID
 **************************************************/
export async function obterUsuarioPorId(request, response) {
  try {
    const { id } = request.params; // Pega o ID dos parâmetros da URL
    const usuario = await usuarioModel.obterUsuarioPorId(id); // Chama o model

    if (usuario) {
      response.status(200).json(usuario);
      // Usuário encontrado, retorna o objeto JSON
    } else {
      response.status(404).json({ mensagem: "Usuário não encontrado" });
      // Se não for encontrado
    }
  } catch (error) {
    response
      .status(500)
      .json({ mensagem: "Erro ao buscar o usuário", erro: error.message });
  }
}

/***************************************************
 Lista todos os usuários.
 **************************************************/
export function listarUsuarios(request, response) {}

/***************************************************
 Cadastra um novo usuário.
 **************************************************/
export function cadastrarUsuario(request, response) {}

/***************************************************
 Atualiza os dados de um determinado usuário.
 **************************************************/
export async function atualizarUsuario(req, res) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        nome,
        email,
        senha,
      },
    });

    return res.status(200).json(usuario);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao atualizar usuário", error });
  } finally {
    await prisma.$disconnect();
  }
}

/***************************************************
 Exclui um usuário específico.
 **************************************************/
export function excluirUsuario(request, response) {}
