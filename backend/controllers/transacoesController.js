//controller de transacoes do usuario cadastrar, alterar, listar, excluir e mostrar(com base nos id)

import { Excluirtransacoes } from "../models/transacoes";

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
export const alterarTransacaoPorUsuario = (req, res) => {}


/*
 * exclui uma transacao de um usuario com base no id
 */
export const excluirTransacaoPorUsuario = async (req, res) => {
    const{id: tranferenciaId} = req.params;
    const userId = req.user.id;

    try{
        const transacao = await database.transacao.findUnique({
            where: {id: tranferenciaId},
        });

        if(!transacao){
            return res.status(403).json({error: "Essa transção não existe"});
        }

        if(transacao.userId !== userId){
         return res.status(403).json({error: "Você não apagar essa!!!"})
        }

        await Excluirtransacoes(tranferenciaId);

        res.status(200).json({message: "Transação exxcluída!!!"});
    } catch(error){
        res.status(500).json({error: "Deu erro, não foi apagada!!!"});
    }
};

// module.exports = {
//     listarTransacoesPorUsuario,
//     mostrarTransacaoPorUsuario,
//     cadastrarTransacaoPorUsuario,
//     alterarTransacaoPorUsuario,
//     excluirTransacaoPorUsuario,
// };