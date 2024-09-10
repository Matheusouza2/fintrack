/*Importa o PrismaClient do pacote @prisma/client
Cria uma nova instância do PrismaClient
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/*Função assíncrona para criar um novo usuário 
 Usa o método create do Prisma para adicionar um novo usuário ao banco de dados
*/
async function criarUsuario(data) {
  return await prisma.user.create({ data });
}

/* 
Função assíncrona para listar todos os usuários
Usa o método findMany do Prisma para obter todos os usuários
*/
async function listaDeUsuarios() {
  return await prisma.user.findMany();
}

/*Função assíncrona para obter um usuário pelo ID 
Usa o método findUnique do Prisma para encontrar um usuário pelo ID
*/
async function obterUsuarioPorId(id) {
  return await prisma.user.findUnique({ where: { id: Number(id) } });
}

/* Função assíncrona para atualizar um usuário pelo ID
Usa o método update do Prisma para atualizar os dados de um usuário específico 
*/ 

async function atualizarUsuario(id, data) {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
}
/*Função assíncrona para deletar um usuário pelo ID
Usa o método delete do Prisma para remover um usuário específico do banco de dados
*/
async function deletarUsuario(id) {
  return await prisma.user.delete({ where: { id: Number(id) } });
}

/*Exporta as funções para serem usadas em outros módulos */
module.exports = { criarUsuario, listaDeUsuarios, obterUsuarioPorId, atualizarUsuario, deletarUsuario };
