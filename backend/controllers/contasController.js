/* Essa classe serve para adicionar os controller de contas que deve conter os métodos de cadastrar, 
alterar, listar, excluir e mostrar uma única conta com base no id      */

import { CriarConta, ListarContaPorId, AtualizarConta, DeletarContas } from "../models/contas.js";

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

export async function alterarContas(req, res) {
  const { agencia, conta, banco_id, saldoInicial, valorChequeEspecial } = req.body;
  
  let dados = {}

  if(agencia){
      if (!validarEntrada(/^\d+$/, agencia)) return retorno(res,400,"Valor de agencia inválido!")
      dados.agencia =  agencia
  }

  if(conta) {
    if (!validarEntrada(/^\d+$|^\d+-\d+$/, conta)) return retorno(res,400,"Valor de conta inválido!")
    dados.conta =  conta
  }

  if(banco_id){
    if (!validarEntrada(/^\d+$/, agencia)) return retorno(res,400,"Valor de banco inválido!")
    dados.banco =  banco_id
  }

  if(saldoInicial){
    dados.saldoInicial =  saldoInicial
  }
  
  if(valorChequeEspecial){
    dados.valorChequeEspecial =  valorChequeEspecial
  }

  console.log(dados)

  try {
    const novaConta = await AtualizarConta(parseInt(req.params.id), dados);
    res.status(201).json(novaConta);
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
}


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

function validarEntrada(reg, valor){
  return reg.test(valor);
}

function retorno(res, status, message){
  res
      .status(status)
      .json({
        message: message
      });
}