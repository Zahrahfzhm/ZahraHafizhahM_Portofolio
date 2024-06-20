/*
  Warnings:

  - The primary key for the `Destinasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `destination_id` on the `Destinasi` table. All the data in the column will be lost.
  - The primary key for the `Dinas_pariwisata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dinas_id` on the `Dinas_pariwisata` table. All the data in the column will be lost.
  - The primary key for the `Pelaku_wisata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `statusreg_id` on the `Pelaku_wisata` table. All the data in the column will be lost.
  - The primary key for the `Transportasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[pelaku_id]` on the table `Pelaku_wisata` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transportasi_id]` on the table `Transportasi` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Destinasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Dinas_pariwisata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Pelaku_wisata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Transportasi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Rating` DROP FOREIGN KEY `Rating_rating_id_fkey`;

-- DropForeignKey
ALTER TABLE `Transportasi` DROP FOREIGN KEY `Transportasi_transportasi_id_fkey`;

-- AlterTable
ALTER TABLE `Destinasi` DROP PRIMARY KEY,
    DROP COLUMN `destination_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Dinas_pariwisata` DROP PRIMARY KEY,
    DROP COLUMN `dinas_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Pelaku_wisata` DROP PRIMARY KEY,
    DROP COLUMN `statusreg_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `pelaku_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Rating` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Transportasi` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `transportasi_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Pelaku_wisata_pelaku_id_key` ON `Pelaku_wisata`(`pelaku_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Transportasi_transportasi_id_key` ON `Transportasi`(`transportasi_id`);

-- AddForeignKey
ALTER TABLE `Rating` ADD CONSTRAINT `Rating_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Destinasi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transportasi` ADD CONSTRAINT `Transportasi_transportasi_id_fkey` FOREIGN KEY (`transportasi_id`) REFERENCES `Destinasi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatusReg` ADD CONSTRAINT `StatusReg_dinas_id_fkey` FOREIGN KEY (`dinas_id`) REFERENCES `Dinas_pariwisata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatusReg` ADD CONSTRAINT `StatusReg_destinasi_id_fkey` FOREIGN KEY (`destinasi_id`) REFERENCES `Destinasi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelaku_wisata` ADD CONSTRAINT `Pelaku_wisata_pelaku_id_fkey` FOREIGN KEY (`pelaku_id`) REFERENCES `StatusReg`(`statusreg_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
