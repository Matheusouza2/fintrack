/*
  Warnings:

  - You are about to drop the column `cor` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `banco_id` on the `contas` table. All the data in the column will be lost.
  - Added the required column `bancoId` to the `Contas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contas` DROP FOREIGN KEY `Contas_banco_id_fkey`;

-- AlterTable
ALTER TABLE `categoria` DROP COLUMN `cor`,
    DROP COLUMN `nome`,
    DROP COLUMN `tipo`;

-- AlterTable
ALTER TABLE `contas` DROP COLUMN `banco_id`,
    ADD COLUMN `bancoId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    UNIQUE INDEX `Usuario_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` DOUBLE NOT NULL,
    `tipo` ENUM('CREDITO', 'DEBITO') NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_bancoId_fkey` FOREIGN KEY (`bancoId`) REFERENCES `Bancos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
