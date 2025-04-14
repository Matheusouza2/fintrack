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
export const atualizarObjetivoFinanceiroModel = async (id, atualizacoes) => {
    try {

        if (!id) {
            throw new Error('ID do objetivo financeiro não informado.');
        }

        const objetivoAtualizado = await db.objetivoFinanceiro.update({
            where: { id: id },
            data: atualizacoes,
        });

        return objetivoAtualizado;

    } catch (erro) {
        console.error('Erro ao atualizar objetivo financeiro:', erro);
        throw new Error('Erro ao atualizar objetivo financeiro');
    }
};


// deletar um objetivo financeiro
export const deletarObjetivoFinanceiro = async (id) => {
};