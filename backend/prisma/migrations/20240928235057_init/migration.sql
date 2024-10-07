-- CreateTable
CREATE TABLE `ObjetivoFinanceiro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `valorObjetivo` DOUBLE NOT NULL,
    `valorAtual` DOUBLE NOT NULL DEFAULT 0,
    `dataAlvo` DATETIME(3) NOT NULL,
    `status` ENUM('PENDENTE', 'ALCANCADO', 'FALHOU') NOT NULL DEFAULT 'PENDENTE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
