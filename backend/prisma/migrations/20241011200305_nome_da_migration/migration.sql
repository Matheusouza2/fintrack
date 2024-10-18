/*
  Warnings:

  - You are about to drop the column `bancoId` on the `contas` table. All the data in the column will be lost.
  - You are about to drop the column `cor` on the `subcategoria` table. All the data in the column will be lost.
  - Added the required column `banco` to the `Contas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contas` DROP FOREIGN KEY `Contas_bancoId_fkey`;

-- AlterTable
ALTER TABLE `contas` DROP COLUMN `bancoId`,
    ADD COLUMN `banco` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `subcategoria` DROP COLUMN `cor`;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_banco_fkey` FOREIGN KEY (`banco`) REFERENCES `Bancos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
