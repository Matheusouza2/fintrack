/***************************************************
 Mostra uma categoria específica.
 **************************************************/
export async function obterCategoria(req, res) {

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

}


/***************************************************
 Deleta do sistema uma categoria específica.
 **************************************************/
export async function excluirCategoria(req, res) {

}