/* Essa classe serve para adicionar os controller de contas que deve conter os métodos de cadastrar, 
alterar, listar, excluir e mostrar uma única conta com base no id      */

import { CriarConta, ListarContaPorId } from "../models/contas.js";

export async function cadastrarConta(req, res) {
  // armazenar os dados do body nas respectivas variáveis
  const { agencia, conta, banco_id, saldoInicial, valorChequeEspecial } = req.body;

  // validação
  if (
    !agencia ||
    !conta ||
    !banco_id ||
    saldoInicial === undefined ||
    valorChequeEspecial === undefined
  ) {
    return res
      .status(400)
      .json({
        message:
          "Agência, conta, banco, saldo inicial e valor do cheque especial são obrigatórios.",
      });
  }

  try {
    const dadosConta = {
      agencia,
      conta,
      banco_id,
      saldoInicial,
      valorChequeEspecial,
    };
    const novaConta = await CriarConta(dadosConta);
    res.status(201).json(novaConta);
  } catch (error) {
    res.status(500).json({ message: `Erro ao criar conta: ${error.message}` });
  }
}


export function alterarContas(req, res) {}

export function listarContas(req, res) {}

export function excluirContas(req, res) {}

export async function mostrarContas(req, res) {
  const idConta = req.params.id;

  try {
    const conta = await ListarContaPorId(idConta)
    res.status(201).json(conta);
  } catch (error) {
    res.status(500).json({ message: `Erro ao consultar conta${error.message}` })
  }

}

