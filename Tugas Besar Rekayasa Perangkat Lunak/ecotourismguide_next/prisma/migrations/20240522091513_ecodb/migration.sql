/*
  Warnings:

  - You are about to drop the column `dinas_id` on the `StatusReg` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `StatusReg` DROP FOREIGN KEY `StatusReg_dinas_id_fkey`;

-- AlterTable
ALTER TABLE `StatusReg` DROP COLUMN `dinas_id`;

-- CreateTable
CREATE TABLE `_Dinas_pariwisataToStatusReg` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_Dinas_pariwisataToStatusReg_AB_unique`(`A`, `B`),
    INDEX `_Dinas_pariwisataToStatusReg_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DestinasiToDinas_pariwisata` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DestinasiToDinas_pariwisata_AB_unique`(`A`, `B`),
    INDEX `_DestinasiToDinas_pariwisata_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Dinas_pariwisataToStatusReg` ADD CONSTRAINT `_Dinas_pariwisataToStatusReg_A_fkey` FOREIGN KEY (`A`) REFERENCES `Dinas_pariwisata`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Dinas_pariwisataToStatusReg` ADD CONSTRAINT `_Dinas_pariwisataToStatusReg_B_fkey` FOREIGN KEY (`B`) REFERENCES `StatusReg`(`statusreg_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DestinasiToDinas_pariwisata` ADD CONSTRAINT `_DestinasiToDinas_pariwisata_A_fkey` FOREIGN KEY (`A`) REFERENCES `Destinasi`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DestinasiToDinas_pariwisata` ADD CONSTRAINT `_DestinasiToDinas_pariwisata_B_fkey` FOREIGN KEY (`B`) REFERENCES `Dinas_pariwisata`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
