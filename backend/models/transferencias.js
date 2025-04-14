import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const CriarTransferencias = (dadoTranferencia) => {}

export const ListarTransferencias = (userId) => {}

export const AlterarTransferencias = (tranferenciaId, alteracoes) => {}

export const ExcluirTransferencia = (tranferenciaId) => {}

export const TransferenciasPorId = (tranferenciaId) => {}
