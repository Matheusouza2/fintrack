/*
  Warnings:

  - You are about to drop the `transacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `transacao`;

-- DropTable
DROP TABLE `usuario`;

-- CreateTable
CREATE TABLE `CartaoDeCredito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(191) NOT NULL,
    `nomeTitular` VARCHAR(191) NOT NULL,
    `dataValidade` DATETIME(3) NOT NULL,
    `codigoSeguranca` VARCHAR(191) NOT NULL,
    `limiteCredito` DOUBLE NOT NULL,
    `saldoDisponivel` DOUBLE NOT NULL,

    UNIQUE INDEX `CartaoDeCredito_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
