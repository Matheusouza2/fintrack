/* Essa classe serve para adicionar os controller de contas que deve conter os métodos de cadastrar, 
alterar, listar, excluir e mostrar uma única conta com base no id      */

import { CriarConta, ListarContaPorId, DeletarContas } from "../models/contas.js";

export async function cadastrarConta(req, res) {
  // armazenar os dados do body nas respectivas variáveis
  const {
    agencia,
    conta,
    saldoInicial,
    valorChequeEspecial,
    conta_banco,
    categoria
  } = req.body;
  // validação
  if (
    !agencia ||
    !conta ||
    saldoInicial === undefined ||
    valorChequeEspecial === undefined ||
    !conta_banco ||
    !categoria
  ) {
    return res.status(400).json({
      message:
        "Agência, conta, banco, saldo inicial e valor do cheque especial são obrigatórios.",
    });
  }

  try {
    const dadosConta = {
      agencia,
      conta,
      saldoInicial,
      valorChequeEspecial,
      categoria,
      conta_banco
      
    };
    const novaConta = await CriarConta(dadosConta);
    res.status(201).json(novaConta);
  } catch (error) {
    res.status(500).json({ message: `Erro ao criar conta: ${error.message}` });
  }
}

export function alterarContas(req, res) {}

export function listarContas(req, res) {}

export async function excluirContas(req, res) {
  const id = req.params.id;

  if (!id)
    res.status(400).json({ message: "O ID da conta deve ser informado." });

  try {
    const contaRemovida = await DeletarContas(id);
    res.status(200).json(contaRemovida);
  } catch (error) {
    res.status(500).json({ message: `Erro: ${error.message}` });
  }
}

export async function mostrarContas(req, res) {
  const idConta = req.params.id;

  try {
    const conta = await ListarContaPorId(idConta);
    res.status(201).json(conta);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Erro ao consultar conta${error.message}` });
  }
}
