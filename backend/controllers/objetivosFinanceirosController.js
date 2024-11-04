import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

// cria um objetivo financeiro
export const criarObjetivoFinanceiro = async (req, res) => {
    try {
      const dadosObjetivo = req.body;
      const novoObjetivo = await db.objetivoFinanceiro.create({
        data: dadosObjetivo,
      });
      res.status(201).json(novoObjetivo);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar objetivo financeiro' });
    }
  };

// ler um objetivo financeiro
export const lerObjetivoFinanceiro = (req, res) => {}

// atualiza um objetivo financeiro
export const atualizarObjetivoFinanceiro = (req, res) => {}

// apaga um objetivo financeiro
export const apagarObjetivoFinanceiro = (req, res) => {}