/*
  Warnings:

  - You are about to drop the column `cor` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the column `banco_id` on the `Contas` table. All the data in the column will be lost.
  - You are about to drop the column `cor` on the `Subcategoria` table. All the data in the column will be lost.
  - Added the required column `banco` to the `Contas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Contas` DROP FOREIGN KEY `Contas_banco_id_fkey`;
DELETE FROM Contas
WHERE banco_id NOT IN (SELECT id FROM Bancos);



-- AlterTable
ALTER TABLE `Categoria` DROP COLUMN `cor`,
    DROP COLUMN `nome`,
    DROP COLUMN `tipo`;

-- AlterTable
ALTER TABLE `Contas` DROP COLUMN `banco_id`,
    ADD COLUMN `banco` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Subcategoria` DROP COLUMN `cor`;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_banco_fkey` FOREIGN KEY (`banco`) REFERENCES `Bancos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
