import Categoria from '../models/categorias.js';
/***************************************************
 Mostra uma categoria específica.
 **************************************************/
 export async function obterCategoria(req, res) {
    try {
        const categoriaId = req.params.id;
        if (!categoriaId) {
            return res.status(400).json({ error: 'ID da categoria é obrigatório' });
        }
        const categoria = await Categoria.BuscarCategoria(categoriaId);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao obter categoria' });
    }
}

/***************************************************
 Método para listar todas as categorias.
 **************************************************/
export async function listarCategorias(req, res) {

}


/***************************************************
 Cria uma categoria no sistema.
 **************************************************/
export async function cadastrarCategoria(req, res) {

}


/***************************************************
 Atualiza os dados de uma categoria específica.
 **************************************************/
export async function atualizarCategoria(req, res) {

}


/***************************************************
 Deleta do sistema uma categoria específica.
 **************************************************/
export async function excluirCategoria(req, res) {

}