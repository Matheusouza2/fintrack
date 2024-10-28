import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

/***************************************************
 Cria uma nova categoria no banco de dados.
 **************************************************/
export const CriarCategoria = async (data) => {
  try {
    const novaCategoria = await db.categoria.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        tipo: data.tipo,
        cor: data.cor,
        icone: data.icone,
      },
    });
    return novaCategoria;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw new Error('Não foi possível criar a categoria.');
  }
};


export const ListarCategorias = () => {}

export const AlterarCategoria = (Id, alteracoes) => {}

export const ExcluirCategoria = (Id) => {}

export const BuscarCategoria = (Id) => {}

