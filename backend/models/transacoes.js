import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

/**
 
 * @param {number} userId - ID do usuário.
 * @param {object} dadosTransacao 
 * @returns {object} 
 */
export const Criartransacoes = async (userId, dadosTransacao) => {
  try {
    const novaTransacao = await db.transacao.create({
      data: {
        tipo: dadosTransacao.tipo,
        valor: dadosTransacao.valor,
        descricao: dadosTransacao.descricao,
        usuarioId: userId,
      },
    });
    return novaTransacao;
  } catch (error) {
    console.error('Erro ao cadastrar transação:', error);
    throw new Error('Erro ao cadastrar transação.');
  }
};


export const Listartransacoes = (userId) => {
  
};

export const Alterartransacoes = (tranferenciaId, alteracoes) => {
  
};

export const Excluirtransacoes = (tranferenciaId) => {
  
};

export const transacoesPorId = (tranferenciaId) => {
  
};

