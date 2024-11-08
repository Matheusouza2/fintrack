import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const CriarTransferencias = (dadoTranferencia) => {}

export const ListarTransferencias = (userId) => {}

export const AlterarTransferencias = (tranferenciaId, alteracoes) => {}

// excluir uma transferência
export const ExcluirTransferencia = async (transferenciaId) => {
    try {
        const transferenciaExcluida = await db.transferencia.delete({
            where: { id: transferenciaId }
        });
        return transferenciaExcluida; // Retorna a transferência excluída
    } catch (error) {
        console.error("Erro ao excluir transferência:", error);
        throw new Error("Não foi possível excluir a transferência.");
    }
};

export const TransferenciasPorId = (tranferenciaId) => {}
