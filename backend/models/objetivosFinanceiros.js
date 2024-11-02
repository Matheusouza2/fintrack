import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

//novo objetivo financeiro
export const criarObjetivoFinanceiro = async (dadosObjetivo) => {

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
export const deletarObjetivoFinanceiro = async (id) => {
};