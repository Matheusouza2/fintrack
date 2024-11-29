import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const Criartransacoes = (dadoTranferencia) => {}

export const Listartransacoes = (userId) => {}

export const Alterartransacoes = async (id, data) => {
  try {
    const updatedTransaction = await db.transacao.update({
      where: { id },
      data,
    });

    return updatedTransaction;
  } catch (error) {
    throw new Error(`Erro ao atualizar transação: ${error.message}`);
  }
}

export const Excluirtransacoes = (tranferenciaId) => {}

export const transacoesPorId = (tranferenciaId) => {}
