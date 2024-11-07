import { encontrarBanco } from "../models/bancos.js";
import { listarBancos as listarBancosModel, adicionarBanco as adicionarBancoModel, removerBanco as removerBancoModel } from '../models/bancos.js';

export async function encontrarBancoCod(req, res) {
    const { bancoCodigo } = req.params;
    const banco = await encontrarBanco(bancoCodigo);
    if (!banco) {
        return res.status(404).json({ mensagem: "Banco não encontrado" });
    }
    return res.json(banco);
}

export const listarBancos = () => {
    const bancos = listarBancosModel();
    console.log("Lista de Bancos:");
    bancos.forEach(banco => {
        console.log(`${banco.nome} (Código: ${banco.codigo})`);
    });
};

export const adicionarBanco = (codigo, cnpj, nome, nomeCurto, icone, corPrimaria, corSecundaria, contas) => {
    const resultado = adicionarBancoModel({
        codigo,
        cnpj,
        nome,
        nomeCurto,
        icone,
        corPrimaria,
        corSecundaria,
        contas
    });
    console.log(resultado);
};

export const removerBanco = (nome) => {
    const resultado = removerBancoModel(nome);
    console.log(resultado);
};
