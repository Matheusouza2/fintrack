import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const CriarConta = (DadosUsuario) => {}

export const VerConta = (UsuarioId) => {}

export const AtualizarConta = (ContaId, Alteracoes) => {}

export const DeletarContas = (ContaId) => {}

export const ListarContaPorId = (ContaId) => {}
