/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Pelaku_wisata` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pelaku_wisata_id_key` ON `Pelaku_wisata`(`id`);
