/* Essa classe serve para adicionar os controller de contas que deve conter os métodos de cadastrar, 
alterar, listar, excluir e mostrar uma única conta com base no id      */

import { encontrarBanco } from "../models/bancos.js";
import { BuscarCategoria } from "../models/categorias.js";
import { CriarConta, ListarContaPorId, AtualizarConta, DeletarContas, listarContasPorUsuarioId as ListarContasPorUsuarioId } from "../models/contas.js";

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
    const banco = await encontrarBanco(conta_banco)

    if (!banco) {
      res.status(401).json({ message: 'Banco não encontrado' });
    }
    
    const Categoria = await BuscarCategoria(conta_banco)

    if (!Categoria) {
      res.status(401).json({ message: 'Categoria não encontrada' });
    }

    const dadosConta = {
      agencia,
      conta,
      saldoInicial,
      agencia,
      categoria,
      conta,
      conta_banco: {
        connect: { id: Number(conta_banco) } // Conectar à entidade existente com ID 1
      },
      valorChequeEspecial: Number(valorChequeEspecial),
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

const listarContasPorUsuarioId = async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const contas = await ListarContasPorUsuarioId(usuarioId);
    return res.status(200).json(contas);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

function retorno(res, status, message){
  res
      .status(status)
      .json({
        message: message
      });
}
