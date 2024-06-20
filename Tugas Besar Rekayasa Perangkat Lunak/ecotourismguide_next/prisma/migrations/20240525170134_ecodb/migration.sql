/*
  Warnings:

  - A unique constraint covering the columns `[nama_pelaku]` on the table `Pelaku_wisata` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pelaku_wisata_nama_pelaku_key` ON `Pelaku_wisata`(`nama_pelaku`);
