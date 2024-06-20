/*
  Warnings:

  - You are about to drop the column `destination_id` on the `Transportasi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Transportasi` DROP COLUMN `destination_id`;

-- AddForeignKey
ALTER TABLE `Transportasi` ADD CONSTRAINT `Transportasi_transportasi_id_fkey` FOREIGN KEY (`transportasi_id`) REFERENCES `Destinasi`(`destination_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
