-- CreateTable
CREATE TABLE `Transferencias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_conta_remetente` INTEGER NOT NULL,
    `id_conta_destinatario` INTEGER NOT NULL,
    `valor` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transferencias` ADD CONSTRAINT `Transferencias_id_conta_remetente_fkey` FOREIGN KEY (`id_conta_remetente`) REFERENCES `Contas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transferencias` ADD CONSTRAINT `Transferencias_id_conta_destinatario_fkey` FOREIGN KEY (`id_conta_destinatario`) REFERENCES `Contas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
