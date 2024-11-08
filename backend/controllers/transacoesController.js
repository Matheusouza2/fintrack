import { cadastrarTransacao } from '../models/transacaoModel';

/**
 * Lista todas as transações de um usuário.
 */
export const listarTransacoesPorUsuario = (req, res) => {

};

/**
 * Mostra uma transação específica de um usuário com base no ID.
 */
export const mostrarTransacaoPorUsuario = (req, res) => {

};

/**
 * Cadastra uma nova transação para um usuário específico com base no ID.
 */
export const cadastrarTransacaoPorUsuario = async (req, res) => {
  const { id } = req.params; // ID do usuário
  const { tipo, valor, descricao } = req.body;

  // Verificação dos dados obrigatórios
  if (!tipo || !valor) {
    return res.status(400).json({ message: 'Tipo e valor são obrigatórios.' });
  }

  try {
    const novaTransacao = await cadastrarTransacao(id, { tipo, valor, descricao });
    res.status(201).json(novaTransacao);
  } catch (error) {
    console.error('Erro ao cadastrar transação:', error);
    res.status(500).json({ message: 'Erro ao cadastrar transação.' });
  }
};

/**
 * Faz alterações nas transações de um usuário com base no ID.
 */
export const alterarTransacaoPorUsuario = (req, res) => {

};

/**
 * Exclui uma transação de um usuário com base no ID.
 */
export const excluirTransacaoPorUsuario = (req, res) => {

};

export default {
  listarTransacoesPorUsuario,
  mostrarTransacaoPorUsuario,
  cadastrarTransacaoPorUsuario,
  alterarTransacaoPorUsuario,
  excluirTransacaoPorUsuario,
};
