//controller de transacoes do usuario cadastrar, alterar, listar, excluir e mostrar(com base nos id)
import { Listartransacoes } from "../models/transacoes"
/**
 * lista todas as transacoes de um usuario.
 */
export async function listarTransacoesPorUsuario(req, res) {
    try {
        const transacao = await Listartransacoes();
        return res.status(200).json(objetivos);  
    } catch (error) {
        console.error('Erro ao listar objetivos financeiros:', error);
       return res.status(500).json({ error: 'Erro ao listar objetivos financeiros' }); 
    }
}


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
export const alterarTransacaoPorUsuario = (req, res) => {}


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