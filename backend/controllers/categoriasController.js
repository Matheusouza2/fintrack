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
        const categoria = await BuscarCategoria(categoriaId);
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
      // Usar o model Prisma para buscar todas as categorias
      const categorias = await ListarCategorias();
    
      // Verificar se existem categorias
      if (categorias.length === 0) {
        return res.status(404).json({ message: 'Nenhuma categoria encontrada' });
      }
    
      // Responder com sucesso as categorias
      return res.status(200).json({ categorias });
    } catch (error) {
      // Tratar erro e responder adequadamente
      return res.status(500).json({ message: 'Erro ao listar categorias', error });
    }
  }


/***************************************************
 Cria uma categoria no sistema.
 **************************************************/
 export async function cadastrarCategoria(req, res) {
    try {
      const { nome, descricao, tipo, cor, icone } = req.body;
  
      
      if (!nome || !tipo || !cor || !icone) {
        return res.status(400).json({ message: 'Nome, tipo, cor e ícone são obrigatórios.' });
      }
      const novaCategoria = await CriarCategoria({ nome, descricao, tipo, cor, icone });
  
      return res.status(201).json(novaCategoria);
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      return res.status(500).json({ message: 'Erro ao criar categoria.' });
    }
  }
  


/***************************************************
 Atualiza os dados de uma categoria específica.
 **************************************************/
export async function atualizarCategoria(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message : 'O ID da categoria deve ser fornecido.' });


    const { descricao, icone } = req.body;

    if (!icone)
        return res.status(400).json({ message : "Um ícone deve ser fornecido." });


    let alteracoes = {};
    alteracoes.icone = icone;

    if (!descricao)
        alteracoes.descricao = null;
    else
        alteracoes.descricao = descricao;


    try {
        const mudancaCategoria = await AlterarCategoria(parseInt(req.params.id), alteracoes);
        return res.status(201).json(mudancaCategoria);
    } catch (error) {
        return res.status(500).json({ message : `${error.message}` });
    }
}


/***************************************************
 Deleta do sistema uma categoria específica.
 **************************************************/
export async function excluirCategoria(req, res) {

}