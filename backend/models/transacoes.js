import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const Criartransacoes = (dadoTranferencia) => {}

export const Listartransacoes = async (userId) => {
    try {
        // Consulta no banco de dados para listar transações do usuário específico
        const transacoes = await db.transacao.findMany({
            where: {
                id: userId, // Filtra transações pelo ID do usuário
            },
            orderBy: {
                createdAt: 'desc', // Ordena pela data de criação, do mais recente ao mais antigo
            },
        });

        return transacoes;
    } catch (error) {
        console.error("Erro ao listar transações:", error.message);
        throw new Error("Erro ao listar transações.");
    }
};


export const Alterartransacoes = (tranferenciaId, alteracoes) => {}

export const Excluirtransacoes = (tranferenciaId) => {}

export const transacoesPorId = (tranferenciaId) => {}
