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


export const AlterarCategoria = async (idCategoria, alteracoes) => {
    try {  

        const categoria = await db.categoria.update({
            where: { id : idCategoria },
            data:  alteracoes
        });

        return categoria;

    } catch (error) {
        throw new Error(`Falha ao modificar categoria: ${error.message}`);
    }
}

export const ExcluirCategoria = (Id) => {}

export const BuscarCategoria = async (Id) => {
  const categoria = await db.bancos.findUnique({
    where: {
      id: Number(Id),
    }
  });

  if (!categoria) return null

  return categoria
}

