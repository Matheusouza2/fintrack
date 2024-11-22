//controller de transacoes do usuario cadastrar, alterar, listar, excluir e mostrar(com base nos id)

import { Alterartransacoes } from "../models/transacoes"

/**
 * lista todas as transacoes de um usuario.
 */
export const listarTransacoesPorUsuario = (req, res) => {}


/**
 * mostra uma transacao especifica de um usuario com base no id
 */
export const mostrarTransacaoPorUsuario = (req, res) => {}


/**
 * cadastra uma nova transacao para um usuario especifico com base no id
 */
export const cadastrarTransacaoPorUsuario = (req, res) => {}


/**
 * faz alteracoes nas transacoes de um usuario com base no id
 */
export const alterarTransacaoPorUsuario = async (req, res) => {
  const { id } = req.params
  const data = req.body

  if (!id) return res.status(404).json({ message: 'id not found' });

  const updatedTransaction = await Alterartransacoes(id, data)

  if (!updatedTransaction) return res.status(404).json({ message: 'Erro ao atualizar transação'})

  return res.status(200).json(updatedTransaction)
}


/*
 * exclui uma transacao de um usuario com base no id
 */
export const excluirTransacaoPorUsuario = (req, res) => {}

// module.exports = {
//     listarTransacoesPorUsuario,
//     mostrarTransacaoPorUsuario,
//     cadastrarTransacaoPorUsuario,
//     alterarTransacaoPorUsuario,
//     excluirTransacaoPorUsuario,
// };