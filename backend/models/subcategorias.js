import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();


export const CriarSubcategoria = async (data) => {
  try {
    const novaSubcategoria = await db.subcategoria.create({
      data: {
        descricao: data.descricao,
        icone: data.icone,
        categoriaId: data.categoriaId, // ID da categoria associada
      },
    });
    return novaSubcategoria;
  } catch (error) {
    console.error('Erro ao criar subcategoria:', error);
    throw new Error('Não foi possível criar a subcategoria.');
  }
};

export const ListarSubcategorias = async (categoriaId = null) => {
  try {
    let subcategorias;

    if (categoriaId) {
      // Lista subcategorias filtradas pela categoria
      subcategorias = await db.subcategoria.findMany({
        where: { categoriaId: Number(categoriaId) },
      });
    } else {
      // Lista todas as subcategorias
      subcategorias = await db.subcategoria.findMany();
    }

    return subcategorias;
  } catch (error) {
    console.error('Erro ao listar subcategorias:', error);
    throw new Error('Não foi possível listar as subcategorias.');
  }
};

export const AlterarSubcategoria = async (Id, alteracoes) => {
  try {
    const subcategoriaAtualizada = await db.subcategoria.update({
      where: { id: Number(Id) },
      data: {
        descricao: alteracoes.descricao,
        icone: alteracoes.icone,
        categoriaId: alteracoes.categoriaId,
      },
    });
    return subcategoriaAtualizada;
  } catch (error) {
    console.error('Erro ao atualizar subcategoria:', error);
    throw new Error('Não foi possível atualizar a subcategoria.');
  }
};

export const ExcluirSubcategoria = async (Id) => {
  try {
    await db.subcategoria.delete({
      where: { id: Number(Id) },
    });
    return { message: 'Subcategoria excluída com sucesso.' };
  } catch (error) {
    console.error('Erro ao excluir subcategoria:', error);
    throw new Error('Não foi possível excluir a subcategoria.');
  }
};

export const BuscarSubcategoria = async (Id) => {
  try {
    const subcategoria = await db.subcategoria.findUnique({
      where: { id: Number(Id) },
    });
    if (!subcategoria) {
      throw new Error('Subcategoria não encontrada.');
    }
    return subcategoria;
  } catch (error) {
    console.error('Erro ao buscar subcategoria:', error);
    throw new Error('Não foi possível buscar a subcategoria.');
  }
};