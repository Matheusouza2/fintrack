import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const Criartransacoes = (dadoTranferencia) => {}

export const Listartransacoes = (userId) => {}

export const Alterartransacoes = (tranferenciaId, alteracoes) => {}

export const Excluirtransacoes = async (tranferenciaId) => {
     const transacao = await database.transacao.findUnique({
        where: {id, tranferenciaId}, //olha se a função existe
     });

     if(!transacao){//Ver se tipo o usuário pode apagar essa transação
        throw new Error("Você não apagar essa transação!!!");
     }

     await database.transacao.delete({//apaga a transferência
        where: {id: transacoesPorId},
     });
};

export const transacoesPorId = (tranferenciaId) => {}
