import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();


export const CriarCategoria = (data) => {}

export const ListarCategorias = () => {}

export const alterarCategoria = async (idCategoria, alteracoes) => {
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

export const BuscarCategoria = (Id) => {}

