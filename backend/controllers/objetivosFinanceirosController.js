import { listarObjetivosFinanceiros } from "../models/objetivosFinanceiros"

// cria um objetivo financeiro
export const criarObjetivoFinanceiro = (req, res) => {}

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
export const atualizarObjetivoFinanceiro = (req, res) => {}

// apaga um objetivo financeiro
export const apagarObjetivoFinanceiro = (req, res) => {}