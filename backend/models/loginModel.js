import { PrismaClient } from "@prisma/client"
import crypto from "crypto"
const prisma = new PrismaClient();

export function hashSenha(senha) {
    return crypto.createHash('sha256').update(senha).digest('hex');
}

export async function validarCredenciais(cpf, senha) {
    const usuario = await prisma.usuario.findUnique({
        where: { cpf: cpf },
    });

    if (usuario && usuario.senha === hashSenha(senha)) {
        return usuario;
    } else {
        return null;
    }
}
