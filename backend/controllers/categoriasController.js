import { BuscarCategoria, AlterarCategoria, CriarCategoria, ExcluirCategoria, ListarCategorias } from '../models/categorias.js';

/***************************************************
 Mostra uma categoria específica.
 **************************************************/
 export async function obterCategoria(req, res) {
    try {
        const categoriaId = req.params.id;
        if (!categoriaId) {
            return res.status(400).json({ error: 'ID da categoria é obrigatório' });
        }
        const categoria = BuscarCategoria(categoriaId);
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
    try {
        // 1. Buscar todas as categorias no banco de dados
        const categorias = ListarCategorias();
    
        // 2. Verificar se existem categorias
        if (categorias.length === 0) {
          return res.status(404).json({ message: 'Nenhuma categoria encontrada' });
        }
    
        // 3. Responder com sucesso as categorias
        return res.status(200).json({ categorias });
      } catch (error) {
        // 4. Tratar erro e responder adequadamente
        return res.status(500).json({ message: 'Erro ao listar categorias', error });
      }
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