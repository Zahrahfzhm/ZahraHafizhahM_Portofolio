/*
  Warnings:

  - You are about to drop the column `pelaku_id` on the `Pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `rating_id` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `transportasi_id` on the `Transportasi` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rating_id]` on the table `Destinasi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transportasi_id]` on the table `Destinasi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_pelaku]` on the table `Destinasi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[destinasi_id]` on the table `StatusReg` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pelaku_id]` on the table `StatusReg` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_pelaku` to the `Destinasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating_id` to the `Destinasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportasi_id` to the `Destinasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pelaku_id` to the `StatusReg` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Pelaku_wisata` DROP FOREIGN KEY `Pelaku_wisata_pelaku_id_fkey`;

-- DropForeignKey
ALTER TABLE `Rating` DROP FOREIGN KEY `Rating_rating_id_fkey`;

-- DropForeignKey
ALTER TABLE `Transportasi` DROP FOREIGN KEY `Transportasi_transportasi_id_fkey`;

-- AlterTable
ALTER TABLE `Destinasi` ADD COLUMN `id_pelaku` INTEGER NOT NULL,
    ADD COLUMN `rating_id` INTEGER NOT NULL,
    ADD COLUMN `transportasi_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Pelaku_wisata` DROP COLUMN `pelaku_id`;

-- AlterTable
ALTER TABLE `Rating` DROP COLUMN `rating_id`;

-- AlterTable
ALTER TABLE `StatusReg` ADD COLUMN `pelaku_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Transportasi` DROP COLUMN `transportasi_id`;

-- CreateIndex
CREATE UNIQUE INDEX `Destinasi_rating_id_key` ON `Destinasi`(`rating_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Destinasi_transportasi_id_key` ON `Destinasi`(`transportasi_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Destinasi_id_pelaku_key` ON `Destinasi`(`id_pelaku`);

-- CreateIndex
CREATE UNIQUE INDEX `StatusReg_destinasi_id_key` ON `StatusReg`(`destinasi_id`);

-- CreateIndex
CREATE UNIQUE INDEX `StatusReg_pelaku_id_key` ON `StatusReg`(`pelaku_id`);

-- AddForeignKey
ALTER TABLE `Destinasi` ADD CONSTRAINT `Destinasi_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Rating`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Destinasi` ADD CONSTRAINT `Destinasi_transportasi_id_fkey` FOREIGN KEY (`transportasi_id`) REFERENCES `Transportasi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Destinasi` ADD CONSTRAINT `Destinasi_id_pelaku_fkey` FOREIGN KEY (`id_pelaku`) REFERENCES `Pelaku_wisata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatusReg` ADD CONSTRAINT `StatusReg_pelaku_id_fkey` FOREIGN KEY (`pelaku_id`) REFERENCES `Pelaku_wisata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
