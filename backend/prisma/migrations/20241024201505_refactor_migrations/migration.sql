-- CreateEnum
CREATE TYPE "TipoTransacao" AS ENUM ('CREDITO', 'DEBITO');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'ALCANCADO', 'FALHOU');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacao" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipo" "TipoTransacao" NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bancos" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_curto" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "primary_color" TEXT NOT NULL,
    "secondary_color" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bancos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contas" (
    "id" SERIAL NOT NULL,
    "agencia" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "saldoInicial" DOUBLE PRECISION NOT NULL,
    "valorChequeEspecial" DOUBLE PRECISION NOT NULL,
    "banco" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Contas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartaoDeCredito" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "nomeTitular" TEXT NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "codigoSeguranca" TEXT NOT NULL,
    "limiteCredito" DOUBLE PRECISION NOT NULL,
    "saldoDisponivel" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CartaoDeCredito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transferencias" (
    "id" SERIAL NOT NULL,
    "id_conta_remetente" INTEGER NOT NULL,
    "id_conta_destinatario" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Transferencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "icone" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategoria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Subcategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjetivoFinanceiro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valorObjetivo" DOUBLE PRECISION NOT NULL,
    "valorAtual" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dataAlvo" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "ObjetivoFinanceiro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_codigo_key" ON "Bancos"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_cnpj_key" ON "Bancos"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_nome_key" ON "Bancos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_nome_curto_key" ON "Bancos"("nome_curto");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_icone_key" ON "Bancos"("icone");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_primary_color_key" ON "Bancos"("primary_color");

-- CreateIndex
CREATE UNIQUE INDEX "Bancos_secondary_color_key" ON "Bancos"("secondary_color");

-- CreateIndex
CREATE INDEX "Contas_banco_index" ON "Contas"("banco");

-- CreateIndex
CREATE UNIQUE INDEX "CartaoDeCredito_numero_key" ON "CartaoDeCredito"("numero");

-- CreateIndex
CREATE INDEX "Transferencias_destinatario_idx" ON "Transferencias"("id_conta_destinatario");

-- CreateIndex
CREATE INDEX "Transferencias_remetente_idx" ON "Transferencias"("id_conta_remetente");

-- CreateIndex
CREATE INDEX "Subcategoria_categoria_idx" ON "Subcategoria"("categoriaId");

-- AddForeignKey
ALTER TABLE "Contas" ADD CONSTRAINT "Contas_banco_fkey" FOREIGN KEY ("banco") REFERENCES "Bancos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transferencias" ADD CONSTRAINT "Transferencias_destinatario_fkey" FOREIGN KEY ("id_conta_destinatario") REFERENCES "Contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transferencias" ADD CONSTRAINT "Transferencias_remetente_fkey" FOREIGN KEY ("id_conta_remetente") REFERENCES "Contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategoria" ADD CONSTRAINT "Subcategoria_categoria_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
