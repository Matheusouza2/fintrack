import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const CriarTransferencias = (dadoTranferencia) => {}

export const ListarTransferencias = async (contaId) => {
    try {
        const transferencias = await db.transferencias.findMany({
            where: {
                OR: [
                    { id_conta_remetente: parseInt(contaId) },
                    { id_conta_destinatario: parseInt(contaId) }
                ]
            },

            include: {
                conta: {
                    select: {
                        agencia: true,
                        conta: true
                    }
                },

                conta_2: {
                    select: {
                        agencia: true,
                        conta: true
                    }
                }
            }
        });
    
        return transferencias;
    } catch (erro) {
        console.error('Erro ao listar transferências:', erro);
        throw new Error('Erro ao listar transferências');
    }
}

export const AlterarTransferencias = (tranferenciaId, alteracoes) => {}

export const ExcluirTransferencia = (tranferenciaId) => {}

export const TransferenciasPorId = (tranferenciaId) => {}
