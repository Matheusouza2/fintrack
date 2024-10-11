import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();


export const CriarConta = async (dadosUsuario) => {
    try {
      // Adiciona os dados no banco
    const novaConta = await db.contas.create({
      data: dadosUsuario,
    });
    return novaConta;
  } catch (error) {
    throw new Error(`Erro ao criar conta: ${error.message}`);
  }
};

export const VerConta = (UsuarioId) => {}

export const AtualizarConta = (ContaId, Alteracoes) => {}

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
};

export const listarContasPorUsuarioId = async (usuarioId) => {
  if (!usuarioId) {
    throw new Error("O ID do usuário deve ser fornecido.");
  }

  try {
    const contas = await Conta.findAll({
      where: { usuarioId },
      attributes: [
        'saldo_inicial', 
        'receitas', 
        'despesas', 
        'transf_creditadas', 
        'transf_debitadas', 
        'saldo_atual', 
        'saldo_previsto'
      ],
    });

    if (contas.length === 0) {
      return { mensagem: "Nenhuma conta encontrada para este usuário." };
    }

    return contas; // Retorna todas as contas do usuário
  } catch (error) {
    console.error(`Erro ao listar contas do usuário: ${error.message}`);
    throw new Error("Erro interno ao buscar contas. Tente novamente mais tarde.");
  }
};
