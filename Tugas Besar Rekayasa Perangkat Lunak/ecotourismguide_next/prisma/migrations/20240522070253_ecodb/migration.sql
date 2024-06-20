/*
  Warnings:

  - You are about to drop the column `rating_id` on the `Destinasi` table. All the data in the column will be lost.
  - The primary key for the `Rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `destination_id` on the `Rating` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rating_id]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Destinasi` DROP COLUMN `rating_id`;

-- AlterTable
ALTER TABLE `Rating` DROP PRIMARY KEY,
    DROP COLUMN `destination_id`,
    MODIFY `rating_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Rating_rating_id_key` ON `Rating`(`rating_id`);

-- AddForeignKey
ALTER TABLE `Rating` ADD CONSTRAINT `Rating_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Destinasi`(`destination_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
