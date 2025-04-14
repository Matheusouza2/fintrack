import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const encontrarBanco = (bancoCodigo) => {
    return db.bancos.findUnique({
        where: {
            codigo:  bancoCodigo
        }
    });
};

const bancos = [
    { nome: "Banco do Brasil", codigo: "001" },
    { nome: "Nubank", codigo: "260" },
    { nome: "Inter", codigo: "077" }
];

export const listarBancos = () => {
    return bancos;
};

export const adicionarBanco = (banco) => {
    const bancoExistente = bancos.find(b => b.codigo === banco.codigo);
    if (bancoExistente) {
        return `Banco com código ${banco.codigo} já existe.`;
    } else {
        bancos.push(banco);
        return `Banco ${banco.nome} adicionado com sucesso!`;
    }
};

export const removerBanco = (nome) => {
    const index = bancos.findIndex(b => b.nome === nome);
    if (index !== -1) {
        bancos.splice(index, 1);
        return `Banco ${nome} removido com sucesso!`;
    } else {
        return `Banco ${nome} não encontrado.`;
    }
};





