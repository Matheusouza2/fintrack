import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const encontrarBanco = async (bancoId) => {
  const banco = await db.bancos.findUnique({
    where: {
      id: Number(bancoId),
    }
  });

  if (!banco) return null

  return banco
};

export const listarBancos = () => {};
