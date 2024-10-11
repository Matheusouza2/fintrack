import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();


export const CriarConta = async (dadosUsuario) => {
    try {
      //adiciona os dados no banco
    const novaConta = await db.contas.create({
      data: dadosUsuario,
    });
    return novaConta;
  } catch (error) {
    throw new Error(`Erro ao criar conta: ${error.message}`);
  }
};

export const VerConta = (UsuarioId) => {}

export const AtualizarConta = async (ContaId, Alteracoes) => {
  try {
    //adiciona os dados no banco
  const novaConta = await db.contas.update({
    where: { id: ContaId},
    data:  Alteracoes
  });

  return novaConta;
} catch (error) {
  throw new Error(`Erro ao atualizar conta: ${error.message}`);
}
}

export const DeletarContas = (ContaId) => {}

export const ListarContaPorId = async(ContaId) => {
  try {
    const listarConta = await db.Contas.findOne({
      id: ContaId,
  })
  return listarConta;
}catch (error) {
  throw new Error(`Erro ao visualizar conta: ${error.message}`);
}
}
