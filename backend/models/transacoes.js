import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const Criartransacoes = (dadoTranferencia) => {}

export const Listartransacoes = (userId) => {}

export const Alterartransacoes = (tranferenciaId, alteracoes) => {}

export const Excluirtransacoes = (tranferenciaId) => {}

export const transacoesPorId = (tranferenciaId) => {}
