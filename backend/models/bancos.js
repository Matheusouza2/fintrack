import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const encontrarBanco = (bancoCodigo) => {
    return db.bancos.findUnique({
        where: {
            codigo:  bancoCodigo
        }
    });
};

export const listarBancos = () => {};
