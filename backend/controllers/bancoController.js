import { encontrarBanco } from "../models/bancos.js";

export async function encontrarBancoCod(req, res) {
    const { bancoCodigo } = req.params;
    const banco = await encontrarBanco(bancoCodigo);
    if (!banco) {
        return res.status(404).json({ mensagem: "Banco não encontrado" });
    }
    return res.json(banco);
}