import { PrismaClient } from "@prisma/client";
import { 
  listarObjetivosFinanceiros, 
  atualizarObjetivoFinanceiro as atualizarObjetivoFinanceiroModel
} from "../models/objetivosFinanceiros.js"

const db = new PrismaClient();

// cria um objetivo financeiro
export const criarObjetivoFinanceiro = async (req, res) => {
    try {
      const dadosObjetivo = req.body;
      const novoObjetivo = await db.objetivoFinanceiro.create({
        data: dadosObjetivo,
      });
      res.status(201).json(novoObjetivo);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar objetivo financeiro' });
    }
  };

//listar objetivos financeiros
export async function listarObjetivos(req, res) {
    try {
        const objetivos = await listarObjetivosFinanceiros();
        res.status(200).json(objetivos);  // Envia a resposta com os objetivos
    } catch (error) {
        console.error('Erro ao listar objetivos financeiros:', error);
        res.status(500).json({ error: 'Erro ao listar objetivos financeiros' });  // Envia a resposta de erro
    }
}




// ler um objetivo financeiro
export const lerObjetivoFinanceiro = (req, res) => {}

// atualiza um objetivo financeiro
export const atualizarObjetivoFinanceiro = async (req, res) => {
  try {
    const { id } = req.params
    const { valorObjetivo, nome, valorAtual, dataAlvo, status } = req.body;//são os parâmetros para o usuário

    const updatedObjective = await atualizarObjetivoFinanceiroModel(id, {
      valorObjetivo, 
      nome, 
      valorAtual, 
      dataAlvo, 
      status
    });

    res.status(200).json({ mensagem: 'Objeto financeiro atualizado com sucesso.', updatedObjective });

  } catch (erro) {//isso é para caso der erro
    console.error('Erro ao atualizar objeto financeiro:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
 };
 
// apaga um objetivo financeiro
export const apagarObjetivoFinanceiro = async (req, res) => {
  try {
    const { id } = req.params

    const findExistentObjective = db.objetivoFinanceiro.findFirst(id)

    if (!findExistentObjective) {
      res.status(404).json({ mensagem: 'Objeto financeiro não encontrado.' });
    }

    await de(id);

    res.status(200).json({ mensagem: 'Objeto financeiro deletado com sucesso.' });
  } catch (err) {
    console.error('Erro ao atualizar objeto financeiro:', err);
    res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
}