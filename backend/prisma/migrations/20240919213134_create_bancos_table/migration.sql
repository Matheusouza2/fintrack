-- CreateTable
CREATE TABLE `Bancos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nome_curto` VARCHAR(191) NOT NULL,
    `icone` VARCHAR(191) NOT NULL,
    `primary_color` VARCHAR(191) NOT NULL,
    `secondary_color` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Bancos_codigo_key`(`codigo`),
    UNIQUE INDEX `Bancos_cnpj_key`(`cnpj`),
    UNIQUE INDEX `Bancos_nome_key`(`nome`),
    UNIQUE INDEX `Bancos_nome_curto_key`(`nome_curto`),
    UNIQUE INDEX `Bancos_icone_key`(`icone`),
    UNIQUE INDEX `Bancos_primary_color_key`(`primary_color`),
    UNIQUE INDEX `Bancos_secondary_color_key`(`secondary_color`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agencia` VARCHAR(191) NOT NULL,
    `conta` VARCHAR(191) NOT NULL,
    `banco_id` INTEGER NOT NULL,
    `saldoInicial` DOUBLE NOT NULL,
    `valorChequeEspecial` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_banco_id_fkey` FOREIGN KEY (`banco_id`) REFERENCES `Bancos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
