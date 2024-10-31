import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const CriarCategoria = (data) => {}

export const ListarCategorias = async () => {
  try {
    // Busca todas as categorias do banco de dados
    const categorias = await db.categoria.findMany();
    return categorias;
  } catch (error) {
    console.error("Erro ao listar categorias:", error);
    throw error;  // Retorna o erro para o controlador lidar com ele
  }
};


export const AlterarCategoria = (Id, alteracoes) => {}

export const ExcluirCategoria = (Id) => {}

export const BuscarCategoria = (Id) => {}

