import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import * as usuarioModel from "../model/usuario.js";



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
        response.status(500).json({ mensagem: "Erro ao buscar o usuário", erro: error.message });
      }
};


/***************************************************
 Lista todos os usuários.
 **************************************************/
export function listarUsuarios(request, response) {

}


/***************************************************
 Cadastra um novo usuário.
 **************************************************/
export function cadastrarUsuario(request, response) {

}


/***************************************************
 Atualiza os dados de um determinado usuário.
 **************************************************/
 export async function atualizarUsuario(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { nomeCompleto, email, cpf, senha } = request.body;
  
      const usuarioAtualizado = await db.usuario.update({
        where: { id: Number(id) },
        data: {
          nomeCompleto,
          email,
          cpf,
          senha,
        },
      });
  
      return response.status(200).json(usuarioAtualizado);
    } catch (error) {
      
        return response.status(409).json({ message: "Email ou CPF já existe" });
      }
      return response.status(500).json({ message: "Erro ao atualizar usuário", error });
    }
  }
  


/***************************************************
 Exclui um usuário específico.
 **************************************************/
export function excluirUsuario(request, response) {
    
}