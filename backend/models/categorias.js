import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const CriarCategoria = (data) => {}

export const ListarCategorias = () => {}

export const AlterarCategoria = (Id, alteracoes) => {}

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

