import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

/*Função assíncrona para criar um novo usuário 
 Usa o método create do Prisma para adicionar um novo usuário ao banco de dados
*/
export async function criarUsuario(data) {
  return await prisma.usuario.create({
    data,
  });
}

/* 
Função assíncrona para listar todos os usuários
Usa o método findMany do Prisma para obter todos os usuários
*/
export async function listaDeUsuarios() {
  return await prisma.user.findMany();
}

/*Função assíncrona para obter um usuário pelo ID 
Usa o método findUnique do Prisma para encontrar um usuário pelo ID
*/
export async function obterUsuarioPorId(id) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: parseInt(id) }, // Certifique-se de que o ID seja do tipo correto
    });
    return usuario; // Retorna o objeto do usuário ou null se não for encontrado
  } catch (error) {
    throw new Error("Erro ao buscar o usuário");
  }
}

/* Função assíncrona para atualizar um usuário pelo ID
Usa o método update do Prisma para atualizar os dados de um usuário específico 
*/ 

export async function atualizarUsuario(id, data) {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
}

/*Função assíncrona para deletar um usuário pelo ID
Usa o método delete do Prisma para remover um usuário específico do banco de dados
*/
export async function deletarUsuario(id) {
  return await prisma.user.delete({ where: { id: Number(id) } });
}

// Adicionando a rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = await criarUsuario(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Iniciando o servidor
app.listen(9090, () => {
  console.log('Servidor rodando na porta 9090');
});
