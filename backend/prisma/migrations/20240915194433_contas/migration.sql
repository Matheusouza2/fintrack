-- CreateTable
CREATE TABLE `Contas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agencia` VARCHAR(191) NOT NULL,
    `conta` VARCHAR(191) NOT NULL,
    `banco` VARCHAR(191) NOT NULL,
    `saldoInicial` DOUBLE NOT NULL,
    `valorChequeEspecial` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
