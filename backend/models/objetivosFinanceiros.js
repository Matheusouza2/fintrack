import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

//novo objetivo financeiro
export const criarObjetivoFinanceiro = async (dadosObjetivo) => {
    return await db.objetivoFinanceiro.create({
      data: dadosObjetivo,
    });
  };

// listar todos os objetivos financeiros
export const listarObjetivosFinanceiros = async () => {
    try {
        const objetivos = await db.objetivoFinanceiro.findMany();
        return objetivos;  // Retorna os objetivos
    } catch (erro) {
        throw new Error('Erro ao listar objetivos');  // Lança o erro para ser tratado no controlador
    }
}

// atualizar um objetivo financeiro
export const atualizarObjetivoFinanceiro = async (id, atualizacoes) => {

};

// deletar um objetivo financeiro
export const DeletarObjetivoFinanceiro = async (id) => {
  try {
    const objetivo = await db.objetivoFinanceiro.delete({
      where: { id: parseInt(id) }
    });
    return objetivo;
  } catch (error) {
    throw new Error(`Falha na exclusão do objetivo - ${error.message}`);
  }
};