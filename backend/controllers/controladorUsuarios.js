import { PrismaClient } from '@prisma/client';
import { response } from 'express';
import { request } from 'http';

const prisma = new PrismaClient();


/***************************************************
 Obtém um usuário em particular com base no seu ID
 **************************************************/
export function obterUsuarioPorId(request, response) {

}


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
        return res.status(500).json({ message: "Erro ao atualizar usuário", error });
    } finally {
        await prisma.$disconnect();
 
    }
}
  
  


/***************************************************
 Exclui um usuário específico.
 **************************************************/
export function excluirUsuario(request, response) {
    
}